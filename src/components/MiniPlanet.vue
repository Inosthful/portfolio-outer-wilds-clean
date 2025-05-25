<template>
  <div ref="miniPlanetContainer" class="mini-planet"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, ref } from "vue";

const props = defineProps({
  modelName: { type: String, required: true },
  size: { type: Number, default: 0.5 }, // Nouvelle prop pour la taille
  containerSize: { type: Number, default: 100 }, // Taille du conteneur
});

const miniPlanetContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(props.containerSize, props.containerSize);
  miniPlanetContainer.value?.appendChild(renderer.domElement);

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  const modelUrl = `${baseUrl}/models/${props.modelName}`;

  const loader = new GLTFLoader();
  loader.load(
    modelUrl,
    (gltf) => {
      const model = gltf.scene;

      // Calculer la taille appropriée
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = props.size / maxDim;

      // Appliquer l'échelle uniformément
      model.scale.set(scale, scale, scale);

      // Centrer le modèle
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center.multiplyScalar(scale));

      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      scene.add(model);
      animate();
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% chargé");
    },
    (error) => {
      console.error("Erreur lors du chargement du modèle:", error);
    }
  );

  // Éclairage amélioré
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Lumière d'accentuation
  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(-5, 0, 2);
  scene.add(pointLight);
});
</script>

<style scoped>
.mini-planet {
  display: inline-block;
  margin-left: 10px;
}
</style>
