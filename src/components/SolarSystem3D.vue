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
import planetsData, { type PlanetData } from "../data/PlanetsData.js";

// ---------------------------------------------------------------------------
// Props & Emits
// ---------------------------------------------------------------------------
const props = defineProps<{
  planets: PlanetData[];
  activePlanet: string;
  quality: string;
}>();

const emit = defineEmits<{
  (e: "navigate", planetId: string): void;
  (e: "loading-progress", progress: number): void;
  (e: "loading-complete"): void;
  (e: "update-performance-stats", stats: PerformanceStats): void;
}>();

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface PerformanceStats {
  fps: number;
  frameTime: number;
  triangles: number;
  drawCalls: number;
  memory: number;
}

// ---------------------------------------------------------------------------
// Refs & état
// ---------------------------------------------------------------------------
const solarSystemContainer = ref<HTMLElement | null>(null);
const performanceStats = ref<PerformanceStats>({
  fps: 0,
  frameTime: 0,
  triangles: 0,
  drawCalls: 0,
  memory: 0,
});

// ---------------------------------------------------------------------------
// Variables Three.js (hors réactivité Vue)
// ---------------------------------------------------------------------------
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let composer: EffectComposer;
let bloomPass: UnrealBloomPass;
let sun: THREE.Object3D;
let planetMeshes: THREE.Object3D[] = [];
let planetGroups: THREE.Group[] = [];
let atmosphereGroups: THREE.Group[] = [];
let animationId: number;
let raycaster: THREE.Raycaster;
let mouseVector: THREE.Vector2;
let gltfLoader: GLTFLoader;
let isMobile = false;
let mouseDownX = 0;
let mouseDownY = 0;

let frameCount = 0;
let lastTime = performance.now();

// ---------------------------------------------------------------------------
// Utilitaires
// ---------------------------------------------------------------------------
const detectMobile = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;

// ---------------------------------------------------------------------------
// Initialisation Three.js
// ---------------------------------------------------------------------------
const initThreeJS = async (): Promise<void> => {
  isMobile = detectMobile();
  emit("loading-progress", 10);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020a1a);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 600);
  camera.position.set(0, 12, 55);
  emit("loading-progress", 20);

  renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = false;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  solarSystemContainer.value?.appendChild(renderer.domElement);

  emit("loading-progress", 30);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 3;
  controls.maxDistance = 90;
  controls.enablePan = false;

  gltfLoader = new GLTFLoader();
  emit("loading-progress", 40);

  setupPostProcessing();
  raycaster = new THREE.Raycaster();
  mouseVector = new THREE.Vector2();
  emit("loading-progress", 50);

  applyQualityLevel(props.quality);
  await createSolarSystem();
  emit("loading-progress", 70);

  addLighting();
  emit("loading-progress", 80);

  addParticles();
  emit("loading-progress", 90);

  animate();
  setupEventListeners();
  emit("loading-progress", 100);

  // Attendre que les textures GPU soient uploadées (quelques frames de rendu réel)
  // → quand l'écran de chargement disparaît, tout est déjà rendu proprement
  await new Promise<void>((resolve) => {
    let frames = 0;
    const warmup = (): void => { if (++frames >= 10) resolve(); else requestAnimationFrame(warmup); };
    requestAnimationFrame(warmup);
  });

  emit("loading-complete");
};

// ---------------------------------------------------------------------------
// Post-processing
// ---------------------------------------------------------------------------
const setupPostProcessing = (): void => {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, 0.4, 0.95
  );
  composer.addPass(bloomPass);

  const atmosphereShader = {
    uniforms: { tDiffuse: { value: null }, time: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse; uniform float time; varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        color.rgb *= 1.04;
        color.rgb += sin(time * 2.0 + vUv.x * 10.0) * 0.012;
        gl_FragColor = color;
      }
    `,
  };
  composer.addPass(new ShaderPass(atmosphereShader));
};

// ---------------------------------------------------------------------------
// Création du système solaire (chargements en parallèle)
// ---------------------------------------------------------------------------
const createSolarSystem = async (): Promise<void> => {
  // Soleil
  const sunModelUrl = import.meta.env.BASE_URL + "sun.glb";
  try {
    sun = await loadGLTF(sunModelUrl, 2.5);
    sun.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissive = new THREE.Color(0xffcc00);
        mat.emissiveIntensity = 3.0;
        mat.needsUpdate = true;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  } catch {
    sun = createProceduralSun();
  }
  sun.castShadow = false;
  sun.receiveShadow = false;
  scene.add(sun);

  const sunHalo = new THREE.Mesh(
    new THREE.SphereGeometry(2.9, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.13, side: THREE.BackSide })
  );
  scene.add(sunHalo);

  // Planètes — chargement en parallèle
  const planetSetups = await Promise.all(planetsData.map((pd) => loadPlanet(pd)));

  for (const { mesh, atmosphere, orbitLine } of planetSetups) {
    const group = new THREE.Group();
    group.add(mesh);
    group.add(atmosphere);
    group.add(orbitLine);
    scene.add(group);
    planetMeshes.push(mesh);
    planetGroups.push(group);
    atmosphereGroups.push(atmosphere);
  }
};

// ---------------------------------------------------------------------------
// Chargement d'une planète
// ---------------------------------------------------------------------------
const loadPlanet = async (pd: PlanetData): Promise<{
  mesh: THREE.Object3D;
  atmosphere: THREE.Group;
  orbitLine: THREE.Mesh;
}> => {
  const angle = pd.initialAngle;
  const x = Math.cos(angle) * pd.orbitRadius;
  const z = Math.sin(angle) * pd.orbitRadius;

  let mesh: THREE.Object3D;
  if (pd.modelName) {
    const modelUrl = import.meta.env.BASE_URL + pd.modelName;
    try {
      mesh = await loadGLTF(modelUrl, pd.size);
    } catch {
      mesh = createProceduralSphere(pd);
    }
  } else {
    mesh = createProceduralSphere(pd);
  }

  mesh.position.set(x, 0, z);
  mesh.userData = { planetId: pd.id };

  // Atmosphère
  const atmosphere = buildAtmosphere(pd);
  atmosphere.position.set(x, 0, z);

  // Orbite
  const orbitRing = new THREE.Mesh(
    new THREE.RingGeometry(pd.orbitRadius - 0.01, pd.orbitRadius + 0.01, 128),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, side: THREE.DoubleSide })
  );
  orbitRing.rotation.x = Math.PI / 2;

  return { mesh, atmosphere, orbitLine: orbitRing };
};

// ---------------------------------------------------------------------------
// Chargement GLTF
// ---------------------------------------------------------------------------
const loadGLTF = (url: string, targetSize: number): Promise<THREE.Object3D> =>
  new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => {
        const model = gltf.scene;

        // -----------------------------------------------------------------------
        // Nettoyage des meshes secondaires dans les GLBs Sketchfab
        //
        // 1. Désactiver le raycasting sur les meshes PLATS (anneaux, disques)
        //    → évite des zones de clic parasites autour de Saturne
        //
        // 2. Parmi les sphères, cacher :
        //    a) Le background géant : si la plus grande sphère > 3x la 2ème plus grande
        //    b) Les micro-sphères (lunes, détails) : < 20% du corps principal
        //       Ex. Saturn GLB contient Mimas, Enceladus, Dione, Rhea, Tethys
        //       → ces lunes (0.016–0.3) cachaient Saturne body (10.0) sous l'ancienne logique
        // -----------------------------------------------------------------------
        const sphericalMeshes: Array<{ mesh: THREE.Mesh; maxDim: number }> = [];
        model.traverse((child) => {
          if (!(child as THREE.Mesh).isMesh) return;
          const mesh = child as THREE.Mesh;
          const s = new THREE.Box3().setFromObject(mesh).getSize(new THREE.Vector3());
          const maxDim = Math.max(s.x, s.y, s.z);
          const minDim = Math.min(s.x, s.y, s.z);
          if (maxDim > 0) {
            if (minDim / maxDim < 0.1) {
              // Mesh plat (anneaux, disques) → désactiver raycasting pour éviter faux clics
              mesh.raycast = (): void => {};
            } else if (minDim / maxDim > 0.4) {
              // Sphérique → candidat pour détection background/lunes
              sphericalMeshes.push({ mesh, maxDim });
            }
          }
        });

        if (sphericalMeshes.length >= 2) {
          // Trier du plus grand au plus petit
          sphericalMeshes.sort((a, b) => b.maxDim - a.maxDim);
          const largestSize = sphericalMeshes[0].maxDim;
          const secondSize  = sphericalMeshes[1].maxDim;

          // a) Cacher le background géant (la plus grande sphère > 3x la 2ème)
          if (largestSize > secondSize * 3) {
            sphericalMeshes[0].mesh.visible = false;
          }

          // b) Corps effectif = première sphère encore visible
          const bodySize = sphericalMeshes.find((s) => s.mesh.visible !== false)?.maxDim ?? largestSize;

          // c) Cacher les micro-sphères (lunes, détails) < 20% du corps principal
          for (const { mesh, maxDim } of sphericalMeshes) {
            if (mesh.visible !== false && maxDim < bodySize * 0.2) {
              mesh.visible = false;
            }
          }
        }

        // Bounding box uniquement des meshes visibles
        const box = new THREE.Box3();
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && child.visible) box.expandByObject(child);
        });
        if (box.isEmpty()) box.setFromObject(model);

        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Pour Saturne (et tout modèle avec anneaux dans le plan XZ), les anneaux gonflent
        // size.x et size.z mais pas size.y. On utilise size.y (hauteur du modèle = corps planétaire)
        // pour que la planète ait la bonne taille — pas écrasée par les anneaux.
        // Pour les sphères pures, size.y ≈ maxDim, donc pas de différence.
        const refDim = size.y > 0 ? size.y : Math.max(size.x, size.y, size.z);
        const scale = (targetSize * 2) / refDim;

        // Centrer le modèle dans un wrapper — ainsi mesh.position.set() dans loadPlanet
        // déplace le wrapper sans perdre le centrage du modèle.
        const wrapper = new THREE.Group();
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        wrapper.add(model);

        wrapper.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            for (const mat of mats as THREE.MeshStandardMaterial[]) {
              if (!mat) continue;
              // Ne pas forcer transparent : le loader GLTF configure ça correctement.
              // Forcer transparent = true sur des matériaux opaques casse le tri de profondeur
              // et cause des flickerings (ex. Jupiter).
              // Forcer roughness=1 / metalness=0 sur TOUS les matériaux planétaires :
              // les planètes ne sont pas métalliques, et une roughness basse depuis Sketchfab
              // crée des highlights spéculaires qui explosent le bloom (flash blanc sur Saturne).
              mat.roughness = 1.0;
              mat.metalness = 0.0;
              // Légère emissive pour visibilité dans la scène sombre
              if (mat.emissive && !mat.emissiveMap) {
                mat.emissive.setHex(0x0a0a0a);
                mat.emissiveIntensity = 0.08;
              }
              mat.needsUpdate = true;
            }
          }
        });
        resolve(wrapper);
      },
      undefined,
      reject
    );
  });

// ---------------------------------------------------------------------------
// Sphère procédurale (Venus, Uranus, ou fallback)
// ---------------------------------------------------------------------------
const createProceduralSphere = (pd: PlanetData): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(pd.size, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: pd.sphereColor ?? 0xaaaaaa,
    roughness: 0.7,
    metalness: 0.1,
    emissive: new THREE.Color(pd.atmosphereColor),
    emissiveIntensity: 0.05,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
};

// ---------------------------------------------------------------------------
// Soleil procédural (fallback)
// ---------------------------------------------------------------------------
const createProceduralSun = (): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(2.5, 64, 64);
  const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  return new THREE.Mesh(geometry, material);
};

// ---------------------------------------------------------------------------
// Atmosphère planétaire
// ---------------------------------------------------------------------------
const buildAtmosphere = (pd: PlanetData): THREE.Group => {
  const group = new THREE.Group();

  const atmoMesh = new THREE.Mesh(
    new THREE.SphereGeometry(pd.size * 1.1, 48, 48),
    new THREE.MeshPhongMaterial({
      color: pd.atmosphereColor,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
      shininess: 100,
    })
  );
  group.add(atmoMesh);

  const hazeMesh = new THREE.Mesh(
    new THREE.SphereGeometry(pd.size * 1.15, 48, 48),
    new THREE.MeshPhongMaterial({
      color: pd.atmosphereColor,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
      shininess: 50,
    })
  );
  group.add(hazeMesh);

  const glowMesh = new THREE.Mesh(
    new THREE.SphereGeometry(pd.size * 1.2, 48, 48),
    new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(pd.atmosphereColor) },
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
        uniform vec3 color; uniform float time;
        varying vec3 vNormal; varying vec3 vPosition;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          intensity += sin(vPosition.y * 10.0 + time) * 0.08;
          gl_FragColor = vec4(color, intensity * 0.28);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
    })
  );
  group.add(glowMesh);

  return group;
};

// ---------------------------------------------------------------------------
// Éclairage
// ---------------------------------------------------------------------------
const addLighting = (): void => {
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.position.set(10, 20, 10);
  scene.add(dirLight);

  const sunLight = new THREE.PointLight(0xfff8dc, 1.0, 70);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  const fill1 = new THREE.DirectionalLight(0xffe4b5, 1.2);
  fill1.position.set(-20, 10, -20);
  scene.add(fill1);

  const fill2 = new THREE.DirectionalLight(0xe6f3ff, 1.0);
  fill2.position.set(20, -10, 20);
  scene.add(fill2);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.0));
};

// ---------------------------------------------------------------------------
// Texture étoile : fond NOIR + gradient blanc radial
// Avec AdditiveBlending, le noir ajoute 0 à la scène → invisible → pas de carré.
// Seul le centre lumineux s'additionne → aspect étoile glowing même à 3-4px.
// ---------------------------------------------------------------------------
const createStarTexture = (): THREE.Texture => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  // Fond noir (pas transparent) → noir + AdditiveBlending = rien ajouté
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size, size);
  // Gradient blanc au centre → noir au bord
  const c = size / 2;
  const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
  grad.addColorStop(0,    "rgba(255,255,255,1)");
  grad.addColorStop(0.15, "rgba(255,255,255,0.9)");
  grad.addColorStop(0.4,  "rgba(255,255,255,0.3)");
  grad.addColorStop(1,    "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

// ---------------------------------------------------------------------------
// Particules (étoiles)
// ---------------------------------------------------------------------------
const addParticles = (): void => {
  const starTexture = createStarTexture();

  const addStarCloud = (
    count: number,
    radiusMin: number,
    radiusMax: number,
    size: number,
    opacity: number
  ): void => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radiusMin + Math.random() * (radiusMax - radiusMin);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      // Variation naturelle : blanc (50%), bleuté (25%), doré (15%), rougeâtre (10%)
      const roll = Math.random();
      let c: THREE.Color;
      if (roll < 0.50)      c = new THREE.Color().setHSL(0,    0,    0.7 + Math.random() * 0.3);
      else if (roll < 0.75) c = new THREE.Color().setHSL(0.62, 0.5,  0.6 + Math.random() * 0.3);
      else if (roll < 0.90) c = new THREE.Color().setHSL(0.10, 0.55, 0.6 + Math.random() * 0.3);
      else                   c = new THREE.Color().setHSL(0.97, 0.4,  0.7 + Math.random() * 0.2);
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
      map: starTexture,
      size,
      vertexColors: true,
      transparent: true,
      opacity,
      sizeAttenuation: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })));
  };

  // Couche principale — étoiles bien visibles, pas trop serrées
  addStarCloud(1000, 120, 500, 4.0, 0.92);
  // Couche secondaire — densité de fond, plus petites
  addStarCloud(1300, 80,  450, 2.5, 0.78);
  // Couche lointaine — piqués fins, effet profondeur
  addStarCloud(700,  200, 550, 1.8, 0.58);
  // Quelques étoiles brillantes type étoile à l'œil nu
  addStarCloud(60,   100, 450, 6.0, 1.00);

  // Lueur ambiante très subtile
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(200, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x0d1433, transparent: true, opacity: 0.04, side: THREE.BackSide })
  ));
};

// ---------------------------------------------------------------------------
// Boucle d'animation
// ---------------------------------------------------------------------------
const animate = (): void => {
  animationId = requestAnimationFrame(animate);

  // Stats de performance
  frameCount++;
  const now = performance.now();
  if (now - lastTime >= 1000) {
    performanceStats.value.fps = Math.round((frameCount * 1000) / (now - lastTime));
    performanceStats.value.frameTime = Math.round(1000 / performanceStats.value.fps);
    frameCount = 0;
    lastTime = now;
  }
  if (renderer) {
    const info = renderer.info;
    performanceStats.value.triangles = info.render.triangles;
    performanceStats.value.drawCalls = info.render.calls;
    performanceStats.value.memory = Math.round(info.memory.geometries / 1000);
    emit("update-performance-stats", performanceStats.value);
  }

  controls.update();

  if (sun) sun.rotation.y += 0.004;

  const time = Date.now() * 0.001;

  planetMeshes.forEach((mesh, i) => {
    const pd = planetsData[i];

    // Rotation axiale
    mesh.rotation.y += pd.rotationSpeed;

    // Légère oscillation verticale
    const yOffset = Math.sin(time * 0.15 + i) * 0.3;

    // Position orbitale
    const angle = pd.initialAngle + time * pd.orbitSpeed;
    mesh.position.set(
      Math.cos(angle) * pd.orbitRadius,
      yOffset,
      Math.sin(angle) * pd.orbitRadius
    );

    // Atmosphère suit la planète
    const atmo = atmosphereGroups[i];
    if (atmo) {
      atmo.position.copy(mesh.position);
      atmo.rotation.y += pd.rotationSpeed * 0.4;
      const glow = atmo.children[2] as THREE.Mesh;
      const mat = glow?.material as THREE.ShaderMaterial;
      if (mat?.uniforms) mat.uniforms.time.value = time;
    }
  });

  // Rendu
  if (composer) {
    const pass = composer.passes[2] as ShaderPass;
    if (pass?.uniforms) pass.uniforms.time.value = time;
    composer.render();
  } else {
    renderer.render(scene, camera);
  }

};

// ---------------------------------------------------------------------------
// Événements
// ---------------------------------------------------------------------------
const onWindowResize = (): void => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer?.setSize(window.innerWidth, window.innerHeight);
  isMobile = detectMobile();
};

const onMouseDown = (event: MouseEvent): void => {
  mouseDownX = event.clientX;
  mouseDownY = event.clientY;
};

const onMouseUp = (event: MouseEvent): void => {
  // Distinguer un vrai clic d'un glissement (drag pour orbiter la caméra)
  // Si la souris a bougé de plus de 5px entre mousedown et mouseup → drag → ignorer
  const dx = event.clientX - mouseDownX;
  const dy = event.clientY - mouseDownY;
  if (Math.sqrt(dx * dx + dy * dy) > 10) return;

  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouseVector, camera);

  const intersects = raycaster.intersectObjects(planetMeshes, true);
  if (intersects.length > 0) {
    let obj: THREE.Object3D | null = intersects[0].object;
    while (obj) {
      if (obj.userData.planetId) {
        zoomToPlanet(obj);
        emit("navigate", obj.userData.planetId as string);
        break;
      }
      obj = obj.parent;
    }
  }
};

const onMouseMove = (event: MouseEvent): void => {
  mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouseVector, camera);
  const intersects = raycaster.intersectObjects(planetMeshes, true);
  document.body.style.cursor = intersects.length > 0 ? "pointer" : "auto";
};

const setupEventListeners = (): void => {
  window.addEventListener("resize", onWindowResize);
  renderer.domElement.addEventListener("mousedown", onMouseDown);
  renderer.domElement.addEventListener("mouseup", onMouseUp);
  window.addEventListener("mousemove", onMouseMove);
};

// ---------------------------------------------------------------------------
// Animation caméra
// ---------------------------------------------------------------------------
const zoomToPlanet = (mesh: THREE.Object3D): void => {
  const start = camera.position.clone();
  const target = mesh.position.clone().add(new THREE.Vector3(0, mesh.userData.planetId === "jupiter" || mesh.userData.planetId === "saturn" ? 4 : 2, 8));
  const startTime = Date.now();
  const duration = 1800;

  const tick = (): void => {
    const p = Math.min((Date.now() - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    camera.position.lerpVectors(start, target, ease);
    camera.lookAt(mesh.position);
    if (p < 1) requestAnimationFrame(tick);
  };
  tick();
};

const animateCameraReturn = (): void => {
  const start = camera.position.clone();
  const target = new THREE.Vector3(0, 12, 55);
  const startTime = Date.now();
  const duration = 1500;

  const tick = (): void => {
    const p = Math.min((Date.now() - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    camera.position.lerpVectors(start, target, ease);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    if (p < 1) requestAnimationFrame(tick);
    else { controls.target.set(0, 0, 0); controls.update(); }
  };
  tick();
};

// ---------------------------------------------------------------------------
// Qualité
// ---------------------------------------------------------------------------
const applyQualityLevel = (level: string): void => {
  if (!renderer) return;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, level === "high" ? 2 : 0.8));
  if (bloomPass) {
    bloomPass.strength = level === "high" ? 0.5 : 0.3;
    bloomPass.radius = level === "high" ? 0.75 : 0.5;
  }
  renderer.shadowMap.enabled = false;
};

// ---------------------------------------------------------------------------
// Watchers
// ---------------------------------------------------------------------------
watch(() => props.quality, applyQualityLevel);

watch(
  () => props.activePlanet,
  (next, prev) => { if (!next && prev) animateCameraReturn(); }
);

// ---------------------------------------------------------------------------
// Cycle de vie
// ---------------------------------------------------------------------------
onMounted(() => { initThreeJS(); });

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onWindowResize);
  renderer?.domElement.removeEventListener("mousedown", onMouseDown);
  renderer?.domElement.removeEventListener("mouseup", onMouseUp);
  window.removeEventListener("mousemove", onMouseMove);
  scene?.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    mesh.geometry?.dispose();
    if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
    else mesh.material?.dispose();
  });
  renderer?.dispose();
  document.body.style.cursor = "auto";
});
</script>
