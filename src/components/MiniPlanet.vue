<template>
  <div ref="container" class="mini-planet"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  modelName: string | null;
  sphereColor?: number;
  size?: number;
  containerSize?: number;
}>();

const container = ref<HTMLElement | null>(null);
let animationId: number;
let renderer: THREE.WebGLRenderer;

onMounted(() => {
  const w = props.containerSize ?? 100;
  const targetSize = props.size ?? 2;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  // Distance calibrée pour que la planète remplisse ~70% du canvas quelle que soit sa taille
  camera.position.z = targetSize * 1.8;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(w, w);
  container.value?.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);
  scene.add(new THREE.PointLight(0xffffff, 0.5, 0, 0).clone().then !== undefined
    ? new THREE.PointLight(0xffffff, 0.5)
    : new THREE.PointLight(0xffffff, 0.5));

  const animate = (model: THREE.Object3D): void => {
    animationId = requestAnimationFrame(() => animate(model));
    model.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  if (props.modelName) {
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
    const loader = new GLTFLoader();
    loader.load(
      `${baseUrl}/${props.modelName}`,
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());

        // Les anneaux (Saturn) sont dans le plan XZ et n'influencent pas Y.
        // Y correspond donc toujours au corps de la planète.
        const refDim = size.y;
        const scale = targetSize / refDim;
        model.scale.setScalar(scale);
        // Ne corriger que Y : les anneaux de Saturne décalent le centre X/Z
        const center = box.getCenter(new THREE.Vector3());
        model.position.set(0, -center.y * scale, 0);
        scene.add(model);
        animate(model);
      },
      undefined,
      () => {
        // Fallback sphère en cas d'erreur
        const mesh = createSphere();
        scene.add(mesh);
        animate(mesh);
      }
    );
  } else {
    const mesh = createSphere();
    scene.add(mesh);
    animate(mesh);
  }

  function createSphere(): THREE.Mesh {
    // Rayon = targetSize/2 pour que le diamètre soit identique aux GLBs scalés à targetSize
    return new THREE.Mesh(
      new THREE.SphereGeometry(targetSize / 2, 32, 32),
      new THREE.MeshStandardMaterial({ color: props.sphereColor ?? 0xaaaaaa, roughness: 0.7, metalness: 0.1 })
    );
  }
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  renderer?.dispose();
});
</script>

<style scoped>
.mini-planet {
  display: inline-block;
  margin-left: 10px;
}
</style>
