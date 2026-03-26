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
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

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
      `${baseUrl}/models/${props.modelName}`,
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const scale = (props.size ?? 2) / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        model.position.sub(box.getCenter(new THREE.Vector3()).multiplyScalar(scale));
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
    return new THREE.Mesh(
      new THREE.SphereGeometry(props.size ?? 2, 32, 32),
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
