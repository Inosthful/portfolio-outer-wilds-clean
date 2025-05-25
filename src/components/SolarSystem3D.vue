<template>
  <div class="fixed inset-0 z-10" ref="solarSystemContainer"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { onMounted, onUnmounted, ref, watch } from "vue";
import planetsData from "../data/Planets.js";

const getProjectImage = (image) => {
  return (
    import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + image.replace(/^\//, "")
  );
};
const props = defineProps({
  planets: {
    type: Array,
    required: true,
  },
  activePlanet: {
    type: String,
    default: "",
  },
  quality: {
    type: String,
    default: "high",
  },
});

const solarSystemContainer = ref<HTMLElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let composer: EffectComposer;
let bloomPass: UnrealBloomPass;
let sun: THREE.Mesh;
let planetMeshes: THREE.Mesh[] = [];
let planetGroups: THREE.Group[] = [];
let animationId: number;
let raycaster: THREE.Raycaster;
let mouseVector: THREE.Vector2;
let isUserInteracting = false;
let isMobile = false;
let gltfLoader: GLTFLoader;

const showPerformanceMonitor = ref(false);
const performanceStats = ref({
  fps: 0,
  frameTime: 0,
  triangles: 0,
  drawCalls: 0,
  memory: 0,
});
const qualityLevel = ref("high");

let frameCount = 0;
let lastTime = performance.now();

const emit = defineEmits([
  "navigate",
  "loading-progress",
  "loading-complete",
  "update-performance-stats",
]);

// Fonction pour détecter si l'appareil est mobile
const detectMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};

// Fonction pour initialiser Three.js
const initThreeJS = async () => {
  isMobile = detectMobile();
  emit("loading-progress", 10);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 25);
  emit("loading-progress", 20);

  renderer = new THREE.WebGLRenderer({
    antialias: !isMobile,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  solarSystemContainer.value?.appendChild(renderer.domElement);
  emit("loading-progress", 30);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 5;
  controls.maxDistance = 50;
  controls.enablePan = false;
  gltfLoader = new GLTFLoader();
  emit("loading-progress", 40);

  setupPostProcessing();
  raycaster = new THREE.Raycaster();
  mouseVector = new THREE.Vector2();
  emit("loading-progress", 50);

  // Appliquer le niveau de qualité initial
  setQualityLevel(props.quality);

  await createSolarSystem();
  emit("loading-progress", 70);

  addLighting();
  emit("loading-progress", 80);

  addParticleEffects();
  emit("loading-progress", 90);

  animate();
  setupEventListeners();
  emit("loading-progress", 100);
  emit("loading-complete");
};

// Fonction pour configurer le post-processing
const setupPostProcessing = () => {
  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,
    0.4,
    0.75
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
        color.rgb *= 1.05;
        float flicker = sin(time * 2.0 + vUv.x * 10.0) * 0.015;
        color.rgb += flicker;
        gl_FragColor = color;
      }
    `,
  };
  const atmospherePass = new ShaderPass(atmosphereShader);
  composer.addPass(atmospherePass);
};

// Fonction pour créer le système solaire
const createSolarSystem = async () => {
  const sunData = {
    id: "sun",
    name: "Soleil",
    modelName: "sun.glb",
    size: 2,
  };
  sunData.modelUrl = import.meta.env.BASE_URL + sunData.modelName;

  try {
    sun = await loadPlanetModel(sunData);
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
  const sunHaloGeometry = new THREE.SphereGeometry(2.4, 64, 64);
  const sunHaloMaterial = new THREE.MeshBasicMaterial({
    color: 0xff4500,
    transparent: true,
    opacity: 0.1,
    side: THREE.BackSide,
  });
  const sunHalo = new THREE.Mesh(sunHaloGeometry, sunHaloMaterial);
  scene.add(sunHalo);
  for (let i = 0; i < planetsData.length; i++) {
    const planetData = planetsData[i];
    const planetGroup = new THREE.Group();
    planetData.modelUrl = import.meta.env.BASE_URL + planetData.modelName;
    const planetMesh = await loadPlanetModel(planetData);
    planetMesh.userData = { planetId: planetData.id, planetData: planetData };
    const angle = planetData.initialAngle;
    planetMesh.position.set(
      Math.cos(angle) * planetData.orbitRadius,
      0,
      Math.sin(angle) * planetData.orbitRadius
    );
    planetGroup.add(planetMesh);

    // Ajouter l'atmosphère améliorée
    const atmosphere = createPlanetAtmosphere(planetData, planetMesh);
    atmosphere.position.copy(planetMesh.position);
    planetGroup.add(atmosphere);

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

// Fonction pour ajouter l'éclairage
const addLighting = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(10, 20, 10);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 100;
  directionalLight.shadow.camera.left = -50;
  directionalLight.shadow.camera.right = 50;
  directionalLight.shadow.camera.top = 50;
  directionalLight.shadow.camera.bottom = -50;
  scene.add(directionalLight);
  const sunLight = new THREE.PointLight(0xfff8dc, 1, 50);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  scene.add(sunLight);
  const fillLight1 = new THREE.DirectionalLight(0xffe4b5, 2.0);
  fillLight1.position.set(-20, 10, -20);
  scene.add(fillLight1);
  const fillLight2 = new THREE.DirectionalLight(0xe6f3ff, 1.8);
  fillLight2.position.set(20, -10, 20);
  scene.add(fillLight2);
  const fillLight3 = new THREE.DirectionalLight(0xfff0e6, 1.5);
  fillLight3.position.set(0, -15, 0);
  scene.add(fillLight3);
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
  scene.add(hemiLight);
  const secondaryLight1 = new THREE.PointLight(0xffe0bd, 4.0, 120);
  secondaryLight1.position.set(0, -30, -30);
  scene.add(secondaryLight1);
  const secondaryLight2 = new THREE.PointLight(0xe0f6ff, 3.5, 120);
  secondaryLight2.position.set(30, 0, 30);
  scene.add(secondaryLight2);
  const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
  backLight.position.set(0, 0, -20);
  scene.add(backLight);
};

// Fonction pour ajouter des effets de particules
const addParticleEffects = () => {
  // Particules d'étoiles lointaines
  const starCount = 1000;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);
  const starColors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    // Position aléatoire dans une sphère
    const radius = 100 + Math.random() * 400;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    starPositions[i3 + 2] = radius * Math.cos(phi);

    // Taille variable des étoiles
    starSizes[i] = Math.random() * 1.2;

    // Couleurs des étoiles avec des tons bleutés
    const color = new THREE.Color();
    color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3);
    starColors[i3] = color.r;
    starColors[i3 + 1] = color.g;
    starColors[i3 + 2] = color.b;
  }

  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
  );
  starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
  starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

  const starMaterial = new THREE.PointsMaterial({
    size: 0.7,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // Particules de poussière spatiale bleutée
  const dustCount = 600;
  const dustGeometry = new THREE.BufferGeometry();
  const dustPositions = new Float32Array(dustCount * 3);
  const dustSizes = new Float32Array(dustCount);
  const dustColors = new Float32Array(dustCount * 3);

  for (let i = 0; i < dustCount; i++) {
    const i3 = i * 3;
    // Position plus proche du système solaire
    const radius = 20 + Math.random() * 80;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    dustPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    dustPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    dustPositions[i3 + 2] = radius * Math.cos(phi);

    dustSizes[i] = Math.random() * 0.25;

    // Couleurs de la poussière avec des tons bleutés
    const color = new THREE.Color();
    color.setHSL(0.6 + Math.random() * 0.1, 0.6, 0.7 + Math.random() * 0.3);
    dustColors[i3] = color.r;
    dustColors[i3 + 1] = color.g;
    dustColors[i3 + 2] = color.b;
  }

  dustGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(dustPositions, 3)
  );
  dustGeometry.setAttribute("size", new THREE.BufferAttribute(dustSizes, 1));
  dustGeometry.setAttribute("color", new THREE.BufferAttribute(dustColors, 3));

  const dustMaterial = new THREE.PointsMaterial({
    size: 0.25,
    vertexColors: true,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);

  // Ajout d'une lueur ambiante bleutée
  const ambientGlow = new THREE.Mesh(
    new THREE.SphereGeometry(200, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0x1a237e,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    })
  );
  scene.add(ambientGlow);

  // Ajout d'une deuxième couche de lueur plus proche
  const innerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(100, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0x3949ab,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    })
  );
  scene.add(innerGlow);
};

// Fonction pour créer une atmosphère planétaire
const createPlanetAtmosphere = (planetData: any, planetMesh: THREE.Mesh) => {
  const atmosphereGroup = new THREE.Group();

  // Atmosphère principale
  const atmosphereGeometry = new THREE.SphereGeometry(
    planetData.size * 1.1,
    64,
    64
  );
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: planetData.atmosphereColor || 0xffffff,
    transparent: true,
    opacity: 0.2,
    side: THREE.BackSide,
    shininess: 100,
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  atmosphereGroup.add(atmosphere);

  // Couche de brume
  const hazeGeometry = new THREE.SphereGeometry(planetData.size * 1.15, 64, 64);
  const hazeMaterial = new THREE.MeshPhongMaterial({
    color: planetData.atmosphereColor || 0xffffff,
    transparent: true,
    opacity: 0.1,
    side: THREE.FrontSide,
    shininess: 50,
  });
  const haze = new THREE.Mesh(hazeGeometry, hazeMaterial);
  atmosphereGroup.add(haze);

  // Effet de lueur
  const glowGeometry = new THREE.SphereGeometry(planetData.size * 1.2, 64, 64);
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(planetData.atmosphereColor || 0xffffff) },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        intensity += sin(vPosition.y * 10.0 + time) * 0.1;
        gl_FragColor = vec4(color, intensity * 0.3);
      }
    `,
    transparent: true,
    side: THREE.BackSide,
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);
  atmosphereGroup.add(glow);

  return atmosphereGroup;
};

// Fonction pour animer la scène
const animate = () => {
  animationId = requestAnimationFrame(animate);

  // Calcul des statistiques de performance
  frameCount++;
  const currentTime = performance.now();
  if (currentTime - lastTime >= 1000) {
    performanceStats.value.fps = Math.round(
      (frameCount * 1000) / (currentTime - lastTime)
    );
    performanceStats.value.frameTime = Math.round(
      1000 / performanceStats.value.fps
    );
    frameCount = 0;
    lastTime = currentTime;
  }

  // Mise à jour des statistiques de rendu
  if (renderer) {
    const info = renderer.info;
    performanceStats.value.triangles = info.render.triangles;
    performanceStats.value.drawCalls = info.render.calls;
    performanceStats.value.memory = Math.round(info.memory.geometries / 1000);

    // Émission des statistiques mises à jour
    emit("update-performance-stats", performanceStats.value);
  }

  controls.update();
  if (sun) {
    sun.rotation.y += 0.005;
  }
  const time = Date.now() * 0.001;
  planetMeshes.forEach((planetMesh, index) => {
    const planetData = planetsData[index];
    planetMesh.rotation.y += planetData.rotationSpeed;
    if (index % 2 === 0) {
      planetMesh.rotation.x = Math.sin(time * 0.1) * 0.05;
    } else {
      planetMesh.rotation.z = Math.sin(time * 0.15) * 0.03;
    }
    const angle = planetData.initialAngle + time * planetData.orbitSpeed;
    const yOffset = Math.sin(time * 0.2 + index) * 0.5;
    planetMesh.position.set(
      Math.cos(angle) * planetData.orbitRadius,
      yOffset,
      Math.sin(angle) * planetData.orbitRadius
    );

    // Mettre à jour l'atmosphère
    const atmosphere = planetGroups[index].children.find(
      (child) => child instanceof THREE.Group && child.children.length > 1
    );
    if (atmosphere) {
      atmosphere.position.copy(planetMesh.position);
      atmosphere.rotation.y += planetData.rotationSpeed * 0.5;

      // Mettre à jour le shader de l'atmosphère
      const glow = atmosphere.children[2];
      if (glow.material.uniforms) {
        glow.material.uniforms.time.value = time;
      }
    }
  });
  if (composer) {
    if (composer.passes[2] && composer.passes[2].uniforms) {
      composer.passes[2].uniforms.time.value = time;
    }
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
};

// Fonction pour configurer les événements
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

// Fonction pour gérer le redimensionnement de la fenêtre
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (composer) {
    composer.setSize(window.innerWidth, window.innerHeight);
  }
  isMobile = detectMobile();
};

// Fonction pour gérer le clic sur une planète
const onPlanetClick = (event: MouseEvent) => {
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouseVector, camera);

  // Filtrer les planètes pour exclure le soleil
  const validPlanets = planetMeshes.filter((mesh) => {
    const planetId = mesh.userData?.planetId;
    return planetId && planetId !== "sun";
  });

  // Vérifier les intersections uniquement avec les planètes valides
  const intersects = raycaster.intersectObjects(validPlanets);

  if (intersects.length > 0) {
    const clickedPlanet = intersects[0].object;
    handlePlanetClick(clickedPlanet.userData);
  }
};

// Fonction pour gérer le mouvement de la souris
const onMouseMove = (event: MouseEvent) => {
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouseVector, camera);

  // Filtrer les planètes pour exclure le soleil
  const validPlanets = planetMeshes.filter((mesh) => {
    const planetId = mesh.userData?.planetId;
    return planetId && planetId !== "sun";
  });

  const intersects = raycaster.intersectObjects(validPlanets);
  if (intersects.length > 0) {
    document.body.style.cursor = "pointer";
  } else {
    document.body.style.cursor = "auto";
  }
};

// Fonction pour calculer un point intermédiaire qui évite le soleil
const calculateIntermediatePoint = (
  startPos: THREE.Vector3,
  targetPos: THREE.Vector3
): THREE.Vector3 => {
  const sunPosition = new THREE.Vector3(0, 0, 0);
  const sunRadius = 2; // Rayon du soleil
  const safetyMargin = 3; // Marge de sécurité pour éviter le soleil

  // Calculer le vecteur de direction
  const direction = targetPos.clone().sub(startPos).normalize();

  // Calculer la distance au soleil
  const toSun = sunPosition.clone().sub(startPos);
  const distanceToSun = toSun.length();

  // Si nous sommes déjà assez loin du soleil, pas besoin de point intermédiaire
  if (distanceToSun > sunRadius + safetyMargin) {
    return startPos.clone().add(direction.multiplyScalar(distanceToSun * 0.5));
  }

  // Calculer un point intermédiaire qui évite le soleil
  const perpendicular = new THREE.Vector3(
    -direction.z,
    0,
    direction.x
  ).normalize();
  const height = Math.max(5, distanceToSun * 0.5); // Hauteur minimale de 5 unités

  return new THREE.Vector3(
    startPos.x + direction.x * distanceToSun * 0.3 + perpendicular.x * height,
    height,
    startPos.z + direction.z * distanceToSun * 0.3 + perpendicular.z * height
  );
};

// Fonction pour calculer la distance optimale de la caméra
const calculateOptimalDistance = (
  planetMesh: THREE.Mesh,
  planetData: any
): number => {
  // Distance de base en fonction de la taille de la planète
  const baseDistance = planetMesh.scale.x * 4;

  // Ajustement en fonction de l'orbite
  const orbitFactor = Math.min(planetData.orbitRadius / 10, 2);

  // Distance minimale pour les planètes éloignées
  const minDistance = 8;

  // Calcul de la distance finale
  return Math.max(baseDistance * orbitFactor, minDistance);
};

// Fonction pour créer l'animation de zoom direct vers une planète
const createDirectZoomAnimation = (planetMesh: THREE.Mesh) => {
  // Vérifier que ce n'est pas le soleil
  if (planetMesh.userData.planetId === "sun") return;

  // Animation de la caméra
  const startPosition = camera.position.clone();
  const targetPosition = planetMesh.position
    .clone()
    .add(new THREE.Vector3(0, 2, 10)); // Ajustement de la position cible
  const startTime = Date.now();
  const duration = 2000;

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    // Déplacement direct vers la planète
    camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
    camera.lookAt(planetMesh.position);

    // Log pour déboguer les positions à des intervalles clés
    if (progress === 0 || progress === 0.5 || progress === 1) {
      console.log("Progress:", progress);
      console.log("Camera Position:", camera.position);
      console.log("Target Position:", targetPosition);
      console.log("Planet Position:", planetMesh.position);
      console.log(
        "Delta Position:",
        camera.position.clone().sub(planetMesh.position)
      );
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

// Fonction pour naviguer vers une planète
const handlePlanetClick = (planet) => {
  // Trouver le mesh de la planète
  const planetMesh = planetMeshes.find(
    (mesh) => mesh.userData.planetId === planet.planetId
  );
  if (planetMesh) {
    createDirectZoomAnimation(planetMesh);
  }
  emit("navigate", planet.planetId);
};

// Fonction pour créer une texture de soleil par défaut
const createSunTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1024, 1024);
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

// Fonction pour charger un modèle de planète
const loadPlanetModel = async (planetData: any) => {
  if (!planetData.modelUrl) {
    console.log(
      `${planetData.name}: Pas de modèle URL, création d'une sphère par défaut`
    );
    return createDefaultPlanet(planetData);
  }
  const modelUrl =
    planetsData.modelUrl || import.meta.env.BASE_URL + planetData.modelName;
  console.log(`🚀 Début du chargement du modèle pour ${planetData.name}`);
  console.log(`📁 URL du modèle: ${modelUrl}`);
  return new Promise<THREE.Mesh>((resolve) => {
    gltfLoader.load(
      modelUrl,
      (gltf) => {
        console.log(
          `✅ Modèle chargé avec succès pour ${planetData.name}:`,
          gltf
        );
        const model = gltf.scene;
        model.userData = {
          planetId: planetData.id,
          planetData: planetData,
        };
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
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        console.log(`📏 Taille originale du modèle:`, size);
        console.log(`🎯 Centre du modèle:`, center);
        const maxSize = Math.max(size.x, size.y, size.z);
        const targetSize = planetData.size * 2;
        const scale = targetSize / maxSize;
        console.log(
          `🔍 Taille max: ${maxSize}, Taille cible: ${targetSize}, Échelle: ${scale}`
        );
        model.scale.setScalar(scale);
        console.log(`📐 Échelle appliquée:`, model.scale);
        model.position.sub(center.multiplyScalar(scale));
        console.log(`📍 Position finale:`, model.position);
        model.traverse((child) => {
          if (child.isMesh) {
            console.log(
              `🔧 Configuration du mesh: ${child.name || "sans nom"}`
            );
            child.castShadow = true;
            child.receiveShadow = true;
            child.userData = {
              planetId: planetData.id,
              planetData: planetData,
            };
            if (child.material) {
              child.material.transparent = false;
              child.material.opacity = 1.0;
              child.material.visible = true;
              if (child.material.emissive) {
                child.material.emissive.setHex(0x111111);
                child.material.emissiveIntensity = 0.1;
              }
              child.material.roughness = 0.7;
              child.material.metalness = 0.1;
              child.material.needsUpdate = true;
              console.log(`✨ Matériau configuré:`, child.material);
            }
          }
        });
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

// Fonction pour créer une planète par défaut
const createDefaultPlanet = (planetData: any) => {
  console.log(`🟦 Création d'une planète par défaut pour ${planetData.name}`);
  const geometry = new THREE.SphereGeometry(planetData.size, 64, 64);
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

const setQualityLevel = (level: string) => {
  qualityLevel.value = level;

  // Ajuster le pixel ratio en fonction de la qualité
  if (renderer) {
    const newPixelRatio = Math.min(
      window.devicePixelRatio,
      level === "high" ? 2 : 0.8
    );
    renderer.setPixelRatio(newPixelRatio);
  }

  // Ajuster les paramètres de bloom
  if (composer && bloomPass) {
    // Retour aux valeurs d'origine pour haute qualité
    bloomPass.strength = level === "high" ? 0.6 : 0.4;
    bloomPass.radius = level === "high" ? 0.75 : 0.5;
    bloomPass.threshold = level === "high" ? 0.4 : 0.5;
  }

  // Ajuster la qualité des ombres
  if (renderer) {
    renderer.shadowMap.enabled = level === "high";
    renderer.shadowMap.type =
      level === "high" ? THREE.PCFSoftShadowMap : THREE.BasicShadowMap;
  }

  // Ajuster la qualité des particules
  scene.traverse((object) => {
    if (object instanceof THREE.Points) {
      const material = object.material as THREE.PointsMaterial;

      if (level === "high") {
        material.size = material.userData.originalSize || 0.7;
        material.opacity = material.userData.originalOpacity || 0.7;
        material.blending = THREE.NormalBlending;
      } else {
        if (!material.userData.originalSize) {
          material.userData.originalSize = material.size;
          material.userData.originalOpacity = material.opacity;
        }
        // Amélioration des particules en qualité moyenne uniquement
        material.size *= 0.75;
        material.opacity *= 0.75;
        material.blending = THREE.AdditiveBlending;
      }
      material.needsUpdate = true;
    }
  });

  // Ajuster la qualité des atmosphères planétaires
  planetGroups.forEach((group) => {
    group.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material) {
        const material = object.material as THREE.MeshBasicMaterial;
        if (material.transparent) {
          if (level === "high") {
            material.opacity = material.userData.originalOpacity || 0.2;
          } else {
            if (!material.userData.originalOpacity) {
              material.userData.originalOpacity = material.opacity;
            }
            material.opacity *= 0.75;
          }
          material.needsUpdate = true;
        }
      }
    });
  });

  // Forcer une mise à jour du rendu
  if (composer) {
    composer.render();
  } else if (renderer) {
    renderer.render(scene, camera);
  }
};

// Surveiller les changements de qualité
watch(
  () => props.quality,
  (newQuality) => {
    setQualityLevel(newQuality);
  }
);

// Fonction pour animer le retour de la caméra
const animateCameraReturn = () => {
  const startPosition = camera.position.clone();
  const targetPosition = new THREE.Vector3(0, 5, 25); // Position initiale de la caméra
  const startTime = Date.now();
  const duration = 1500; // 1.5 secondes

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Fonction d'easing
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Réinitialiser les contrôles de la caméra
      controls.target.set(0, 0, 0);
      controls.update();
    }
  };

  animate();
};

// Ajouter un watcher pour détecter la fermeture de la modal
watch(
  () => props.activePlanet,
  (newValue, oldValue) => {
    if (!newValue && oldValue) {
      animateCameraReturn();
    }
  }
);

onMounted(() => {
  initThreeJS();
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
  window.removeEventListener("resize", onWindowResize);
  renderer.domElement.removeEventListener("click", onPlanetClick);
  window.removeEventListener("mousemove", onMouseMove);
});
</script>

<style scoped>
canvas {
  display: block;
  cursor: grab;
}
canvas:active {
  cursor: grabbing;
}
</style>
