<template>
  <div
    class="relative h-screen w-screen overflow-hidden"
    :class="{ 'nav-open': isNavOpen }"
    style="perspective: 1000px"
  >
    <!-- StarField Component -->
    <div class="fixed inset-0 -z-10 overflow-hidden bg-space-bg">
      <div class="absolute inset-0 stars"></div>
      <div class="absolute inset-0 stars2"></div>
      <div class="absolute inset-0 stars3"></div>
    </div>

    <!-- Three.js Solar System Container -->
    <div class="fixed inset-0 z-10" ref="solarSystemContainer"></div>

    <!-- Navigation Component -->
    <button
      @click="toggleNav"
      class="fixed top-5 right-5 w-10 h-10 bg-transparent border-none cursor-pointer z-[100] flex flex-col justify-center items-center"
    >
      <span
        class="block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300"
        :class="isNavOpen ? 'transform translate-y-[9px] rotate-45' : ''"
      ></span>
      <span
        class="block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300"
        :class="isNavOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300"
        :class="isNavOpen ? 'transform -translate-y-[9px] -rotate-45' : ''"
      ></span>
    </button>

    <nav
      class="fixed top-0 h-screen w-[300px] bg-space-dark/90 backdrop-blur-lg z-[90] transition-all duration-300 pt-20 px-5 pb-5"
      :class="isNavOpen ? 'right-0' : '-right-[300px]'"
    >
      <ul class="list-none">
        <li v-for="planet in planets" :key="planet.id" class="mb-5">
          <a
            @click.prevent="navigateTo(planet.id)"
            class="text-space-light hover:cursor-pointer no-underline text-lg transition-colors duration-300 block p-2.5 rounded-md hover:text-space-accent hover:bg-white/10"
            :class="{
              'text-space-accent bg-white/10': activePlanet === planet.id,
            }"
          >
            {{ planet.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- PlanetContent Component -->
    <transition name="fade">
      <main
        v-if="activePlanet"
        class="fixed bottom-0 overflow-y-auto left-0 w-full max-h-[60vh] bg-space-dark/80 backdrop-blur-lg p-8 pb-10 rounded-t-[30px] z-20"
      >
        <button
          @click="closeContent"
          class="absolute top-5 right-5 w-10 h-10 bg-white/10 border-none rounded-full text-space-light text-2xl leading-none cursor-pointer transition-all duration-300 z-[85] flex items-center justify-center hover:bg-white/20 hover:scale-110"
        >
          ×
        </button>
        <section :key="activePlanet" class="max-w-6xl mx-auto">
          <h1 class="text-4xl mb-5 text-space-accent font-space">
            {{ getCurrentPlanet.name }}
          </h1>
          <div>
            <p class="text-lg leading-relaxed mb-5 text-space-light">
              {{ getCurrentPlanet.description }}
            </p>

            <!-- ProjectGrid Component -->
            <div
              v-if="
                getCurrentPlanet.projects && getCurrentPlanet.projects.length
              "
              class="mt-8"
            >
              <h2
                class="text-3xl mb-5 text-space-secondary font-space"
                v-if="getCurrentPlanet.name == Jupiter"
              >
                Projets associés
              </h2>
              <h2 class="text-3xl mb-5 text-space-secondary font-space" v-else>
                Compétences associées
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <!-- ProjectCard Component -->
                <div
                  v-for="(project, index) in getCurrentPlanet.projects"
                  :key="index"
                  class="bg-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
                >
                  <img
                    class="max-w-[100%] md:h-[220px] bg-cover bg-center"
                    :src="project.image"
                    
                  ></img>
                  <div class="p-5">
                    <h3 class="text-xl mb-2.5 text-space-primary font-space">
                      {{ project.title }}
                    </h3>
                    <p class="text-space-light mb-4">
                      {{ project.description }}
                    </p>
                    <div class="flex flex-wrap gap-2 my-4">
                      <span
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="bg-white/10 px-2.5 py-1 rounded-full text-xs text-space-light"
                      >
                        {{ tech }}
                      </span>
                    </div>
                    <div class="flex gap-4 mt-4">
                      <a
                        v-if="project.demo"
                        :href="project.demo"
                        target="_blank"
                        class="inline-block px-4 py-2 bg-space-primary text-white no-underline rounded text-sm transition-colors duration-300 hover:bg-space-secondary"
                      >
                        Démo
                      </a>
                      <a
                        v-if="project.github"
                        :href="project.github"
                        target="_blank"
                        class="inline-block px-4 py-2 bg-space-primary text-white no-underline rounded text-sm transition-colors duration-300 hover:bg-space-secondary"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </transition>

    <!-- Loading indicator for Three.js -->
    <div
      v-if="isLoading3D"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[100] text-space-light"
    >
      <div
        class="w-12 h-12 border-3 border-white/30 border-t-space-accent rounded-full animate-spin mx-auto mb-5"
      ></div>
      <p class="font-space">Initialisation du système solaire...</p>
    </div>

    <!-- Performance Monitor (desktop only) -->
    <div
      v-if="showPerformanceMonitor"
      class="fixed top-5 left-5 bg-black/90 text-green-400 p-4 rounded-lg text-sm font-mono z-[100] border border-green-500/30 backdrop-blur-sm"
    >
      <div class="text-green-300 font-bold mb-2">⚡ Performance Monitor</div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-gray-400">FPS:</div>
          <div
            class="text-xl font-bold"
            :class="
              performanceStats.fps >= 60
                ? 'text-green-400'
                : performanceStats.fps >= 30
                ? 'text-yellow-400'
                : 'text-red-400'
            "
          >
            {{ performanceStats.fps }}
          </div>
        </div>
        <div>
          <div class="text-gray-400">Frame Time:</div>
          <div class="text-lg">{{ performanceStats.frameTime }}ms</div>
        </div>
        <div>
          <div class="text-gray-400">Triangles:</div>
          <div class="text-lg">
            {{ performanceStats.triangles.toLocaleString() }}
          </div>
        </div>
        <div>
          <div class="text-gray-400">Draw Calls:</div>
          <div class="text-lg">{{ performanceStats.drawCalls }}</div>
        </div>
        <div>
          <div class="text-gray-400">Memory:</div>
          <div class="text-lg">{{ performanceStats.memory }}MB</div>
        </div>
        <div>
          <div class="text-gray-400">Device:</div>
          <div class="text-xs">{{ isMobile ? "Mobile" : "Desktop" }}</div>
        </div>
      </div>
      <div class="mt-3 border-t border-gray-700 pt-2">
        <div class="text-gray-400 mb-1">Qualité:</div>
        <div class="flex gap-2">
          <button
            @click="setQualityLevel('medium')"
            class="px-2 py-1 text-xs rounded"
            :class="
              qualityLevel === 'medium'
                ? 'bg-green-800 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
          >
            Moyenne
          </button>
          <button
            @click="setQualityLevel('high')"
            class="px-2 py-1 text-xs rounded"
            :class="
              qualityLevel === 'high'
                ? 'bg-green-800 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
          >
            Haute
          </button>
        </div>
      </div>
      <button
        @click="showPerformanceMonitor = false"
        class="mt-2 text-xs text-gray-500 hover:text-gray-300"
      >
        [Fermer]
      </button>
    </div>

    <!-- Toggle Performance Monitor Button -->
    <button
      v-if="!showPerformanceMonitor"
      @click="showPerformanceMonitor = true"
      class="fixed bottom-5 left-5 bg-green-500/20 hover:bg-green-500/30 text-green-400 p-2 rounded-lg text-xs font-mono z-[100] border border-green-500/30 backdrop-blur-sm transition-all duration-300"
    >
      📊 FPS
    </button>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  nextTick,
  watch,
} from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import planetsData from "./data/Planets.js"; // Importer les données des planètes
import { emissive, log } from "three/tsl";

// ===== STATE SECTION =====
const isNavOpen = ref(false);
const activePlanet = ref(null);
const solarSystemContainer = ref(null);
const isLoading3D = ref(true);
const showPerformanceMonitor = ref(false);
const qualityLevel = ref("medium"); // Niveau de qualité par défaut

// Performance monitoring amélioré
const performanceStats = reactive({
  fps: 0,
  frameTime: 0,
  triangles: 0,
  drawCalls: 0,
  memory: 0,
});

// État pour le mouvement de caméra
const mouse = reactive({
  x: 0,
  y: 0,
});

// Données des planètes
const planets = ref(planetsData);

// Variables Three.js
let scene, camera, renderer, controls;
let composer, bloomPass;
let sun,
  planetMeshes = [],
  planetGroups = [];
let animationId;
let raycaster, mouseVector;
let isUserInteracting = false;
let isMobile = false;
let gltfLoader;

// Variables pour les effets de survol
let hoveredPlanet = null;
let planetLabels = [];
let originalScales = [];

// Performance monitoring
let lastTime = 0;
let frameCount = 0;

// ===== COMPUTED SECTION =====
const getCurrentPlanet = computed(() => {
  return planets.value.find((planet) => planet.id === activePlanet.value) || {};
});

// ===== MOBILE DETECTION =====
const detectMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};


// ===== QUALITY SETTINGS =====
const qualitySettings = {
  medium: {
    segments: 24,
    particleCount: 1000,
    bloomStrength: 0.6,
    bloomRadius: 0.4,
    bloomThreshold: 0.75,
    shadowMapSize: 1024,
    toneMappingExposure: 1.5,
    enablePostProcessing: true,
  },
  high: {
    segments: 32,
    particleCount: 2000,
    bloomStrength: 0.7,
    bloomRadius: 0.4,
    bloomThreshold: 0.7,
    shadowMapSize: 2048,
    toneMappingExposure: 1.6,
    enablePostProcessing: true,
  },
};

// Fonction pour changer le niveau de qualité
const setQualityLevel = (level) => {
  if (level === qualityLevel.value) return;

  qualityLevel.value = level;

  // Appliquer les nouveaux paramètres
  if (renderer) {
    renderer.toneMappingExposure = qualitySettings[level].toneMappingExposure;
    renderer.shadowMap.enabled = true;
  }

  if (bloomPass) {
    bloomPass.strength = qualitySettings[level].bloomStrength;
    bloomPass.radius = qualitySettings[level].bloomRadius;
    bloomPass.threshold = qualitySettings[level].bloomThreshold;
  }

  // Activer/désactiver le post-processing
  if (composer && !qualitySettings[level].enablePostProcessing) {
    // Si on désactive le post-processing, on utilise le renderer standard
    console.log("Post-processing désactivé pour améliorer les performances");
  }
};

// Détection automatique de la qualité en fonction des performances
const autoDetectQuality = () => {
  if (performanceStats.fps < 70) {
    setQualityLevel("medium");
  } else {
    setQualityLevel("high");
  }
};

// // ===== TEXTURE CREATION FUNCTIONS if modelUrl is not found =====

const createSunTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Fond de base
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1024, 1024);

  // Gradient principal du soleil
  const gradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 450);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(0.1, "#fffde7");
  gradient.addColorStop(0.2, "#fff59d");
  gradient.addColorStop(0.4, "#ffeb3b");
  gradient.addColorStop(0.6, "#ffa000");
  gradient.addColorStop(0.8, "#ff6f00");
  gradient.addColorStop(0.9, "#e65100");
  gradient.addColorStop(1, "#bf360c");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);

  // Ajouter des cellules de convection
  for (let i = 0; i < 2000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const distanceFromCenter = Math.sqrt(
      Math.pow(x - 512, 2) + Math.pow(y - 512, 2)
    );

    if (distanceFromCenter < 450) {
      const size = Math.random() * 8 + 2;
      const brightness = Math.random() * 0.3 + 0.7;

      ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.3})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Ajouter des taches solaires
  for (let i = 0; i < 12; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 50;
    const x = 512 + Math.cos(angle) * distance;
    const y = 512 + Math.sin(angle) * distance;
    const size = Math.random() * 30 + 10;

    const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
    spotGradient.addColorStop(0, "rgba(50, 50, 50, 0.8)");
    spotGradient.addColorStop(0.5, "rgba(80, 50, 20, 0.6)");
    spotGradient.addColorStop(1, "rgba(255, 140, 0, 0)");

    ctx.fillStyle = spotGradient;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ajouter des éruptions solaires
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const x = 512 + Math.cos(angle) * 450;
    const y = 512 + Math.sin(angle) * 450;

    const length = Math.random() * 100 + 50;
    const width = Math.random() * 20 + 10;

    const endX = 512 + Math.cos(angle) * (450 + length);
    const endY = 512 + Math.sin(angle) * (450 + length);

    const ctrlX =
      512 + Math.cos(angle + Math.random() * 0.4 - 0.2) * (450 + length * 0.7);
    const ctrlY =
      512 + Math.sin(angle + Math.random() * 0.4 - 0.2) * (450 + length * 0.7);

    const eruptionGradient = ctx.createLinearGradient(x, y, endX, endY);
    eruptionGradient.addColorStop(0, "rgba(255, 255, 0, 0.8)");
    eruptionGradient.addColorStop(0.5, "rgba(255, 165, 0, 0.5)");
    eruptionGradient.addColorStop(1, "rgba(255, 69, 0, 0)");

    ctx.strokeStyle = eruptionGradient;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
};

// ===== 3D MODEL LOADING =====
const loadPlanetModel = async (planetData) => {
  if (!planetData.modelUrl) {
    console.log(
      `${planetData.name}: Pas de modèle URL, création d'une sphère par défaut`
    );
    const defaultPlanet = createDefaultPlanet(planetData);
    // IMPORTANT: Stocker les données de la planète dans userData
    defaultPlanet.userData = {
      planetId: planetData.id,
      planetData: planetData,
    };
    return defaultPlanet;
  }
  console.log("fooooooot" + planetData.modelName);
  const modelUrl = planetsData.modelUrl || (import.meta.env.BASE_URL + planetData.modelName);

  console.log(`🚀 Début du chargement du modèle pour ${planetData.name}`);
  console.log(`📁 URL du modèle: ${planetData.modelUrl}`);

  return new Promise((resolve) => {


    gltfLoader.load(
      modelUrl,
      (gltf) => {
        console.log(
          `✅ Modèle chargé avec succès pour ${planetData.name}:`,
          gltf
        );

        const model = gltf.scene;

        // IMPORTANT: Stocker les données de la planète dans userData dès le début
        model.userData = {
          planetId: planetData.id,
          planetData: planetData,
        };

        // Vérifier si le modèle a du contenu
        if (model.children.length === 0) {
          console.warn(
            `⚠️ Le modèle ${planetData.name} semble vide, utilisation de la sphère par défaut`
          );
          const fallbackPlanet = createDefaultPlanet(planetData);
          fallbackPlanet.userData = {
            planetId: planetData.id,
            planetData: planetData,
          };
          resolve(fallbackPlanet);
          return;
        }

        // Calculer la boîte englobante AVANT toute modification
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        console.log(`📏 Taille originale du modèle:`, size);
        console.log(`🎯 Centre du modèle:`, center);

        // Calculer l'échelle
        const maxSize = Math.max(size.x, size.y, size.z);
        const targetSize = planetData.size * 2;
        const scale = targetSize / maxSize;

        console.log(
          `🔍 Taille max: ${maxSize}, Taille cible: ${targetSize}, Échelle: ${scale}`
        );

        // Appliquer l'échelle
        model.scale.setScalar(scale);
        console.log(`📐 Échelle appliquée:`, model.scale);

        // Centrer le modèle
        model.position.sub(center.multiplyScalar(scale));
        console.log(`📍 Position finale:`, model.position);

        // Rendre le modèle visible et bien éclairé
        model.traverse((child) => {
          if (child.isMesh) {
            console.log(
              `🔧 Configuration du mesh: ${child.name || "sans nom"}`
            );

            child.castShadow = true;
            child.receiveShadow = true;

            // S'assurer que chaque mesh enfant a aussi les userData
            child.userData = {
              planetId: planetData.id,
              planetData: planetData,
            };

            if (child.material) {
              // Forcer la visibilité
              child.material.transparent = false;
              child.material.opacity = 1.0;
              child.material.visible = true;

              // Améliorer l'éclairage
              if (child.material.emissive) {
                child.material.emissive.setHex(0x111111);
                child.material.emissiveIntensity = 0.1;
              }

              // Ajuster les propriétés pour un meilleur rendu
              child.material.roughness = 0.7;
              child.material.metalness = 0.1;

              child.material.needsUpdate = true;
              console.log(`✨ Matériau configuré:`, child.material);
            }
          }
        });

        // Ajouter une aide visuelle temporaire pour le débogage

        console.log(
          `🎉 Modèle ${planetData.name} prêt à être ajouté à la scène`
        );
        console.log(`🔍 UserData du modèle:`, model.userData);
        resolve(model);
      },
      (xhr) => {
        const percent = Math.floor((xhr.loaded / xhr.total) * 100);
        console.log(
          `📊 Chargement ${planetData.name}: ${percent}% (${xhr.loaded}/${xhr.total} bytes)`
        );
      },
      (error) => {
        console.error(
          `❌ ERREUR lors du chargement du modèle ${planetData.name}:`,
          error
        );
        console.error(`🔗 URL tentée: ${planetData.modelUrl}`);
        console.error(`📝 Message d'erreur: ${error.message}`);
        console.error(`🔍 Type d'erreur: ${error.type || "inconnu"}`);

        // Fallback vers la sphère par défaut avec userData
        console.log(
          `🔄 Utilisation de la sphère par défaut pour ${planetData.name}`
        );
        const fallbackPlanet = createDefaultPlanet(planetData);
        fallbackPlanet.userData = {
          planetId: planetData.id,
          planetData: planetData,
        };
        resolve(fallbackPlanet);
      }
    );
  });
};

const createDefaultPlanet = (planetData) => {
  console.log(`🟦 Création d'une planète par défaut pour ${planetData.name}`);

  // Créer un cube au lieu d'une sphère pour le débogage
  const geometry = new THREE.SphereGeometry(
    planetData.size, // Rayon
    64, // Segments horizontaux (plus = plus rond)
    64
  );
  const material = new THREE.MeshStandardMaterial({
    color: planetData.color,
    roughness: 0.7,
    metalness: 0.1,
    emissive: planetData.texture.emissive || 0x000000,
    emissiveIntensity: 0.2,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  console.log(`✅ Cube créé pour ${planetData.name}:`, mesh);

  return mesh;
};

// ===== THREE.JS METHODS =====
const initThreeJS = async () => {
  try {
    isMobile = detectMobile();

    // Ajuster la qualité en fonction de l'appareil
    if (isMobile) {
      setQualityLevel("medium");
    }

    // Créer la scène
    scene = new THREE.Scene();

    // Configurer la caméra
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 25);

    // Configurer le renderer avec luminosité ajustée
    renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Désactiver l'antialiasing sur mobile
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
    );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure =
      qualitySettings[qualityLevel.value].toneMappingExposure;

    solarSystemContainer.value.appendChild(renderer.domElement);

    // Configurer les contrôles
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.enablePan = false;

    // Initialiser le loader GLTF
    gltfLoader = new GLTFLoader();

    // Post-processing
    if (qualitySettings[qualityLevel.value].enablePostProcessing) {
      setupPostProcessing();
    }

    // Raycaster pour la détection de clics
    raycaster = new THREE.Raycaster();
    mouseVector = new THREE.Vector2();

    // Créer le système solaire
    await createSolarSystem();

    // Ajouter l'éclairage ajusté
    addLighting();

    // Ajouter les effets de particules
    addParticleEffects();

    // Démarrer l'animation
    animate();

    // Gestion des événements
    setupEventListeners();

    isLoading3D.value = false;

    // Vérifier les performances après 5 secondes
    setTimeout(() => {
      if (!isMobile) {
        autoDetectQuality();
      }
    }, 5000);
  } catch (error) {
    console.error("Erreur lors de l'initialisation de Three.js:", error);
    isLoading3D.value = false;
  }
};

const setupPostProcessing = () => {
  composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Bloom ajusté pour un niveau intermédiaire
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    qualitySettings[qualityLevel.value].bloomStrength,
    qualitySettings[qualityLevel.value].bloomRadius,
    qualitySettings[qualityLevel.value].bloomThreshold
  );
  composer.addPass(bloomPass);

  const atmosphereShader = {
    uniforms: {
      tDiffuse: { value: null },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float time;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(tDiffuse, vUv);

        // Luminosité ajustée
        color.rgb *= 1.05;

        // Ajouter un léger effet de scintillement
        float flicker = sin(time * 2.0 + vUv.x * 10.0) * 0.015;
        color.rgb += flicker;

        gl_FragColor = color;
      }
    `,
  };

  const atmospherePass = new ShaderPass(atmosphereShader);
  composer.addPass(atmospherePass);
};

const createSolarSystem = async () => {
  // Créer le soleil avec modelUrl

  const sunData = {
    id: "sun",
    name: "Soleil",
    modelName: "sun.glb",
    size: 2,
  }
  sunData.modelUrl = import.meta.env.BASE_URL + sunData.modelName;

  try {
    sun = await loadPlanetModel(sunData);

    // Ajuster les propriétés spécifiques au soleil
    sun.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.emissive = new THREE.Color(0xffeb3b);
        child.material.emissiveIntensity = 1.0;
        child.material.needsUpdate = true;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    sun.castShadow = false;
    sun.receiveShadow = false;
    scene.add(sun);
  } catch (error) {
    console.error(
      "Erreur lors du chargement du soleil GLB, utilisation de la texture par défaut:",
      error
    );
    // Fallback vers l'ancienne méthode si le GLB échoue
    const sunGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sunTexture = createSunTexture();
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
      emissive: 0xffeb3b,
      emissiveIntensity: 1.0,
    });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.castShadow = false;
    sun.receiveShadow = false;
    scene.add(sun);
  }

  // Halo du soleil ajusté
  const sunHaloGeometry = new THREE.SphereGeometry(2.4, 64, 64);
  const sunHaloMaterial = new THREE.MeshBasicMaterial({
    color: 0xff4500,
    transparent: true,
    opacity: 0.1,
    side: THREE.BackSide,
  });

  const sunHalo = new THREE.Mesh(sunHaloGeometry, sunHaloMaterial);
  scene.add(sunHalo);
  //// REPRENDRE LECTURE ICI
  // Créer les planètes avec modèles 3D ou sphères par défaut
  for (let i = 0; i < planets.value.length; i++) {
    const planetData = planets.value[i];
    const planetGroup = new THREE.Group();

    // Charger le modèle 3D ou créer une sphère
    planetData.modelUrl = import.meta.env.BASE_URL + planetData.modelName;

    const planetMesh = await loadPlanetModel(planetData);
    planetMesh.userData = { planetId: planetData.id, planetData: planetData };

    // Position initiale
    const angle = planetData.initialAngle;
    planetMesh.position.set(
      Math.cos(angle) * planetData.orbitRadius,
      0,
      Math.sin(angle) * planetData.orbitRadius
    );

    planetGroup.add(planetMesh);

    // Atmosphère ajustée
    const atmosphereGeometry = new THREE.SphereGeometry(
      planetData.size * 1.15,
      24,
      24
    );
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: planetData.atmosphereColor,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.position.copy(planetMesh.position);
    planetGroup.add(atmosphere);

    // Orbite plus visible
    const orbitGeometry = new THREE.RingGeometry(
      planetData.orbitRadius - 0.01,
      planetData.orbitRadius + 0.01,
      128
    );
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });

    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    planetGroup.add(orbit);

    scene.add(planetGroup);
    planetMeshes.push(planetMesh);
    planetGroups.push(planetGroup);
  }
};

const addLighting = () => {
  // Lumière ambiante beaucoup plus forte pour un éclairage global
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Augmenté de 10 à 2.5 pour plus de réalisme
  scene.add(ambientLight);

  // Lumière directionnelle principale plus forte et mieux positionnée
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Augmenté de 3.0 à 4.0
  directionalLight.position.set(10, 20, 10); // Repositionnée pour un meilleur angle
  directionalLight.castShadow = true;

  // Optimisation des ombres
  directionalLight.shadow.mapSize.width =
    qualitySettings[qualityLevel.value].shadowMapSize;
  directionalLight.shadow.mapSize.height =
    qualitySettings[qualityLevel.value].shadowMapSize;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 100; // Augmenté pour couvrir plus de distance
  directionalLight.shadow.camera.left = -50;
  directionalLight.shadow.camera.right = 50;
  directionalLight.shadow.camera.top = 50;
  directionalLight.shadow.camera.bottom = -50;
  scene.add(directionalLight);

  // Lumière du soleil beaucoup plus puissante
  const sunLight = new THREE.PointLight(0xfff8dc, 1, 50); // Augmenté l'intensité et la portée
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  scene.add(sunLight);

  // Lumières d'appoint pour éliminer les zones sombres
  const fillLight1 = new THREE.DirectionalLight(0xffe4b5, 2.0); // Lumière chaude
  fillLight1.position.set(-20, 10, -20);
  scene.add(fillLight1);

  const fillLight2 = new THREE.DirectionalLight(0xe6f3ff, 1.8); // Lumière froide
  fillLight2.position.set(20, -10, 20);
  scene.add(fillLight2);

  const fillLight3 = new THREE.DirectionalLight(0xfff0e6, 1.5); // Lumière neutre
  fillLight3.position.set(0, -15, 0);
  scene.add(fillLight3);

  // Lumière hémisphérique pour un éclairage naturel du ciel
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5); // Augmenté l'intensité
  scene.add(hemiLight);

  // Lumières secondaires repositionnées et renforcées
  const secondaryLight1 = new THREE.PointLight(0xffe0bd, 4.0, 120); // Augmenté
  secondaryLight1.position.set(0, -30, -30);
  scene.add(secondaryLight1);

  const secondaryLight2 = new THREE.PointLight(0xe0f6ff, 3.5, 120); // Augmenté
  secondaryLight2.position.set(30, 0, 30);
  scene.add(secondaryLight2);

  // Lumière d'éclairage arrière pour éviter les silhouettes trop sombres
  const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
  backLight.position.set(0, 0, -20);
  scene.add(backLight);
};

const addParticleEffects = () => {
  // Particules optimisées
  const particleCount = qualitySettings[qualityLevel.value].particleCount;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 100;
    particlePositions[i + 1] = (Math.random() - 0.5) * 100;
    particlePositions[i + 2] = (Math.random() - 0.5) * 100;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.12, // Ajusté
    transparent: true,
    opacity: 0.7, // Ajusté
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);
};

const updatePerformanceStats = () => {
  if (!showPerformanceMonitor.value) return;

  frameCount++;
  const currentTime = performance.now();

  if (currentTime - lastTime >= 1000) {
    performanceStats.fps = Math.round(
      (frameCount * 1000) / (currentTime - lastTime)
    );
    performanceStats.frameTime =
      Math.round(((currentTime - lastTime) / frameCount) * 100) / 100;
    performanceStats.triangles = renderer.info.render.triangles;
    performanceStats.drawCalls = renderer.info.render.calls;

    if (performance.memory) {
      performanceStats.memory = Math.round(
        performance.memory.usedJSHeapSize / 1024 / 1024
      );
    } else {
      performanceStats.memory = Math.round(
        renderer.info.memory.geometries + renderer.info.memory.textures
      );
    }

    frameCount = 0;
    lastTime = currentTime;
  }
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  controls.update();

  if (sun) {
    sun.rotation.y += 0.005;
  }

  // Animation optimisée des planètes
  const time = Date.now() * 0.001;

  planetMeshes.forEach((planetMesh, index) => {
    const planetData = planets.value[index];

    // Rotation sur elle-même (plus variée)
    planetMesh.rotation.y += planetData.rotationSpeed;

    // Ajout d'une légère inclinaison pour certaines planètes
    if (index % 2 === 0) {
      planetMesh.rotation.x = Math.sin(time * 0.1) * 0.05;
    } else {
      planetMesh.rotation.z = Math.sin(time * 0.15) * 0.03;
    }

    // Orbite autour du soleil (avec vitesses variées)
    const angle = planetData.initialAngle + time * planetData.orbitSpeed;

    // Ajouter une légère variation dans la hauteur de l'orbite
    const yOffset = Math.sin(time * 0.2 + index) * 0.5;

    planetMesh.position.set(
      Math.cos(angle) * planetData.orbitRadius,
      yOffset,
      Math.sin(angle) * planetData.orbitRadius
    );

    // Mettre à jour l'atmosphère
    const atmosphere = planetGroups[index].children.find(
      (child) =>
        child.material &&
        child.material.transparent &&
        child.material.side === THREE.BackSide
    );
    if (atmosphere) {
      atmosphere.position.copy(planetMesh.position);
      atmosphere.rotation.y += planetData.rotationSpeed * 0.5;
    }
  });

  updatePerformanceStats();

  // Rendu optimisé
  if (composer && qualitySettings[qualityLevel.value].enablePostProcessing) {
    if (composer.passes[2] && composer.passes[2].uniforms) {
      composer.passes[2].uniforms.time.value = time;
    }
    composer.render();
  } else {
    renderer.render(scene, camera);
  }

  // Mettre à jour les positions des labels de planètes
  planetMeshes.forEach((planetMesh, index) => {
    if (planetLabels[index]) {
      updateLabelPosition(planetMesh, planetLabels[index]);
    }
  });
};

const setupEventListeners = () => {
  window.addEventListener("resize", onWindowResize);
  renderer.domElement.addEventListener("click", onPlanetClick);
  window.addEventListener("mousemove", onMouseMove);

  controls.addEventListener("start", () => {
    isUserInteracting = true;
  });

  controls.addEventListener("end", () => {
    isUserInteracting = false;
  });
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  if (composer) {
    composer.setSize(window.innerWidth, window.innerHeight);
  }

  // Vérifier si l'appareil est mobile après redimensionnement
  isMobile = detectMobile();
};

const onPlanetClick = (event) => {
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouseVector, camera);

  const intersects = raycaster.intersectObjects(planetMeshes);

  if (intersects.length > 0) {
    const clickedPlanet = intersects[0].object;
    const planetId = clickedPlanet.userData.planetId;

    if (planetId) {
      navigateTo(planetId);
    }
  }
};

// Optimisation de la fonction onMouseMove
const onMouseMove = (event) => {
  // Mettre à jour la position de la souris pour le raycasting
  mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;

  // Ne pas traiter le hover sur mobile
  if (isMobile) return;

  // Calculer la position normalisée pour le raycaster
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Mettre à jour le raycaster
  raycaster.setFromCamera(mouseVector, camera);

  // Vérifier les intersections avec les planètes
  const intersects = raycaster.intersectObjects(planetMeshes);

  // Si on survole une planète
  if (intersects.length > 0) {
    const newHoveredPlanet = intersects[0].object;
    document.body.style.cursor = "pointer";

    // Si on survole une nouvelle planète
    if (hoveredPlanet !== newHoveredPlanet) {
      // Réinitialiser l'ancienne planète survolée
      if (hoveredPlanet) {
        resetPlanetHover(hoveredPlanet);
      }

      // Appliquer l'effet de survol à la nouvelle planète
      applyPlanetHover(newHoveredPlanet);
      hoveredPlanet = newHoveredPlanet;
    }
  } else {
    // Si on ne survole aucune planète
    document.body.style.cursor = "auto";

    // Réinitialiser l'ancienne planète survolée
    if (hoveredPlanet) {
      resetPlanetHover(hoveredPlanet);
      hoveredPlanet = null;
    }
  }
};

// Fonctions d'animation optimisées
const applyPlanetHover = (planet) => {
  const planetId = planet.userData.planetId;
  const planetIndex = planets.value.findIndex((p) => p.id === planetId);
  const planetData = planets.value[planetIndex];

  // Sauvegarder l'échelle originale si ce n'est pas déjà fait
  if (!originalScales[planetIndex]) {
    originalScales[planetIndex] = planet.scale.clone();
  }

  // Animation de grossissement avec Three.js
  const targetScale = originalScales[planetIndex].clone().multiplyScalar(1.15);
  animateScale(planet, targetScale, 300);

  // Augmenter la luminosité de l'atmosphère - avec vérification de sécurité
  if (planetGroups[planetIndex] && planetGroups[planetIndex].children) {
    const atmosphere = planetGroups[planetIndex].children.find(
      (child) =>
        child.material &&
        child.material.transparent &&
        child.material.side === THREE.BackSide
    );

    if (atmosphere) {
      animateOpacity(atmosphere.material, 0.4, 300);
      animateScale(atmosphere, new THREE.Vector3(1.1, 1.1, 1.1), 300);
    }
  }

  // Créer un label flottant avec le nom de la planète
  createPlanetLabel(planet, planetData.name);
};

const resetPlanetHover = (planet) => {
  const planetId = planet.userData.planetId;
  const planetIndex = planets.value.findIndex((p) => p.id === planetId);

  // Restaurer l'échelle originale
  if (originalScales[planetIndex]) {
    animateScale(planet, originalScales[planetIndex], 300);
  }

  // Restaurer l'atmosphère - avec vérification de sécurité
  if (planetGroups[planetIndex] && planetGroups[planetIndex].children) {
    const atmosphere = planetGroups[planetIndex].children.find(
      (child) =>
        child.material &&
        child.material.transparent &&
        child.material.side === THREE.BackSide
    );

    if (atmosphere) {
      animateOpacity(atmosphere.material, 0.2, 300);
      animateScale(atmosphere, new THREE.Vector3(1.0, 1.0, 1.0), 300);
    }
  }

  // Supprimer le label
  removePlanetLabel(planetIndex);
};

// Fonctions d'animation optimisées
const animateScale = (object, targetScale, duration) => {
  const startScale = object.scale.clone();
  const startTime = Date.now();

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    object.scale.lerpVectors(startScale, targetScale, easeProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

const animateOpacity = (material, targetOpacity, duration) => {
  const startOpacity = material.opacity;
  const startTime = Date.now();

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    material.opacity =
      startOpacity + (targetOpacity - startOpacity) * easeProgress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

const createPlanetLabel = (planet, name) => {
  const planetId = planet.userData.planetId;
  const planetIndex = planets.value.findIndex((p) => p.id === planetId);

  // Supprimer l'ancien label s'il existe
  removePlanetLabel(planetIndex);

  // Créer un élément div pour le label
  const labelDiv = document.createElement("div");
  labelDiv.className = "planet-label";
  labelDiv.textContent = name;
  labelDiv.style.position = "absolute";
  labelDiv.style.color = "white";
  labelDiv.style.padding = "5px 10px";
  labelDiv.style.borderRadius = "4px";
  labelDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  labelDiv.style.backdropFilter = "blur(4px)";
  labelDiv.style.fontFamily = "'Space Grotesk', sans-serif";
  labelDiv.style.fontSize = "14px";
  labelDiv.style.fontWeight = "bold";
  labelDiv.style.textShadow = "0 0 5px rgba(255, 255, 255, 0.5)";
  labelDiv.style.transform = "translate(-50%, -50%)";
  labelDiv.style.pointerEvents = "none";
  labelDiv.style.zIndex = "50";
  labelDiv.style.opacity = "0";
  labelDiv.style.transition = "opacity 0.3s ease";

  // Ajouter le label au DOM
  document.body.appendChild(labelDiv);

  // Stocker la référence au label
  planetLabels[planetIndex] = labelDiv;

  // Animer l'apparition du label
  setTimeout(() => {
    labelDiv.style.opacity = "1";
  }, 10);

  // Mettre à jour la position du label dans la boucle d'animation
  updateLabelPosition(planet, labelDiv);
};

const updateLabelPosition = (planet, label) => {
  // Convertir la position 3D en position 2D à l'écran
  const position = new THREE.Vector3();
  position.copy(planet.position);

  // Vérification sécurisée pour obtenir le rayon
  let radius = 2; // valeur par défaut

  if (
    planet.geometry &&
    planet.geometry.parameters &&
    planet.geometry.parameters.radius
  ) {
    radius = planet.geometry.parameters.radius;
  }

  position.y += radius * 2;

  position.project(camera);

  const x = (position.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-(position.y * 0.5) + 0.5) * window.innerHeight;

  // Mettre à jour la position du label
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
};

const removePlanetLabel = (planetIndex) => {
  if (planetLabels[planetIndex]) {
    document.body.removeChild(planetLabels[planetIndex]);
    planetLabels[planetIndex] = null;
  }
};

// ===== NAVIGATION METHODS =====
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const navigateTo = (planetId) => {
  if (!planetId) return;

  activePlanet.value = planetId;
  isNavOpen.value = false;

  const planetIndex = planets.value.findIndex((p) => p.id === planetId);
  if (planetIndex !== -1) {
    const planetMesh = planetMeshes[planetIndex];

    const targetPosition = new THREE.Vector3(
      planetMesh.position.x * 1.5,
      planetMesh.position.y + 3,
      planetMesh.position.z * 1.5
    );

    animateCameraTo(targetPosition, planetMesh.position);
  }
};

const animateCameraTo = (targetPosition, lookAtPosition) => {
  const startPosition = camera.position.clone();
  const startLookAt = controls.target.clone();

  let progress = 0;
  const duration = 2000;
  const startTime = Date.now();

  const animateCamera = () => {
    const elapsed = Date.now() - startTime;
    progress = Math.min(elapsed / duration, 1);

    const easeProgress =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
    controls.target.lerpVectors(startLookAt, lookAtPosition, easeProgress);
    controls.update();

    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    }
  };

  animateCamera();
};

const closeContent = () => {
  activePlanet.value = null;

  const overviewPosition = new THREE.Vector3(0, 5, 25);
  const overviewTarget = new THREE.Vector3(0, 0, 0);

  animateCameraTo(overviewPosition, overviewTarget);
};

const handleGlobalClick = (e) => {
  if (
    e.target.closest('button[class*="fixed top-5 right-5"]') ||
    e.target.closest("nav")
  ) {
    return;
  }

  isNavOpen.value = false;
};

// ===== LIFECYCLE SECTION =====
onMounted(async () => {
  await nextTick();
  await initThreeJS();
  document.addEventListener("click", handleGlobalClick);
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  if (renderer) {
    renderer.dispose();
  }

  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }

  // Nettoyer les labels
  planetLabels.forEach((label) => {
    if (label && label.parentNode) {
      label.parentNode.removeChild(label);
    }
  });

  window.removeEventListener("resize", onWindowResize);
  document.removeEventListener("click", handleGlobalClick);
  document.body.style.overflow = "";
});

// Observer les changements de qualité
watch(qualityLevel, (newLevel) => {
  console.log(`Niveau de qualité changé à: ${newLevel}`);

  // Mettre à jour les paramètres de rendu
  if (renderer) {
    renderer.toneMappingExposure =
      qualitySettings[newLevel].toneMappingExposure;
  }

  // Mettre à jour les paramètres de bloom
  if (bloomPass) {
    bloomPass.strength = qualitySettings[newLevel].bloomStrength;
    bloomPass.radius = qualitySettings[newLevel].bloomRadius;
    bloomPass.threshold = qualitySettings[newLevel].bloomThreshold;
  }
});
</script>

<style>
/* Animations personnalisées */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Styles pour le canvas Three.js */
canvas {
  display: block;
  cursor: grab;
}

canvas:active {
  cursor: grabbing;
}

/* Étoiles de fond */
.stars {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 50s linear infinite;
  opacity: 0.5;
}

.stars2 {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 100s linear infinite;
  opacity: 0.3;
  transform: scale(1.5);
}

.stars3 {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200% repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 150s linear infinite;
  opacity: 0.2;
  transform: scale(2);
}

@keyframes stars {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

.bg-space-bg {
  background-color: #000000;
  background-image: radial-gradient(circle at center, #0f172a 0%, #000000 100%);
}

.text-space-light {
  color: #e2e8f0;
}

.text-space-accent {
  color: #f59e0b;
}

.text-space-primary {
  color: #3b82f6;
}

.text-space-secondary {
  color: #8b5cf6;
}

.bg-space-dark {
  background-color: #0f172a;
}

.font-space {
  font-family: "Space Grotesk", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
