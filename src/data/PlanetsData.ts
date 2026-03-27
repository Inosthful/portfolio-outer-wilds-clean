// =============================================================================
// DONNÉES ASTRONOMIQUES DU SYSTÈME SOLAIRE
// Soleil     : rayon visuel = 2.5 unités Three.js
// Distances  : espacées pour que les planètes soient lisibles (min clearance Sun + 2u)
// Tailles    : échelle log — Soleil 2.5 > Jupiter 1.60 > Saturne 1.35 > glaces ~0.9 > Terre ~0.62 > Mars 0.38 > Mercure 0.28
// Vitesses   : loi de Kepler k / r^1.5, k = 0.5 → Mercury ~2min, Earth ~6min, Neptune ~45min
// =============================================================================

export interface PlanetInfo {
  type: string;
  diametre: string;
  masseRelative: string;
  distanceSoleil: string;
  periodeOrbitale: string;
  periodeRotation: string;
  temperatureMoyenne: string;
  nombreLunes: number;
  atmosphere: string;
  faitMarquant: string;
}

export interface PlanetData {
  id: string;
  name: string;
  modelName: string | null; // null = sphère procédurale
  sphereColor?: number;     // couleur de la sphère procédurale
  size: number;             // rayon visuel en unités Three.js
  orbitRadius: number;      // demi-grand axe en unités Three.js
  orbitSpeed: number;       // rad/s (Kepler sur les distances affichées)
  rotationSpeed: number;    // rad/frame
  atmosphereColor: number;
  atmosphereScale?: number;  // multiplicateur taille atmosphère (défaut 1.0)
  initialAngle: number;
  info: PlanetInfo;
}

const planetsData: PlanetData[] = [
  {
    id: "mercury",
    name: "Mercure",
    modelName: "mercure.glb",
    size: 0.28,
    orbitRadius: 4.5,
    orbitSpeed: 0.0524,   // 0.5 / 4.5^1.5
    rotationSpeed: 0.0001,
    atmosphereColor: 0x8b7355,
    initialAngle: Math.PI * 0.3,
    info: {
      type: "Planète tellurique",
      diametre: "4 879 km",
      masseRelative: "0,055 Terres",
      distanceSoleil: "0,39 UA (57,9 millions km)",
      periodeOrbitale: "88 jours terrestres",
      periodeRotation: "58,6 jours terrestres",
      temperatureMoyenne: "-170°C à +430°C",
      nombreLunes: 0,
      atmosphere: "Quasi-inexistante (oxygène, sodium, hydrogène)",
      faitMarquant:
        "La plus petite planète du système solaire. Malgré sa proximité avec le Soleil, la glace d'eau subsiste dans des cratères perpétuellement à l'ombre.",
    },
  },
  {
    id: "venus",
    name: "Vénus",
    modelName: "venus.glb",
    sphereColor: 0xe8c07f,
    size: 0.58,
    orbitRadius: 7.0,
    orbitSpeed: 0.0270,   // 0.5 / 7.0^1.5
    rotationSpeed: -0.0001, // rétrograde
    atmosphereColor: 0xf5d088,
    atmosphereScale: 0.2,
    initialAngle: Math.PI * 1.1,
    info: {
      type: "Planète tellurique",
      diametre: "12 104 km",
      masseRelative: "0,815 Terres",
      distanceSoleil: "0,72 UA (108 millions km)",
      periodeOrbitale: "225 jours terrestres",
      periodeRotation: "243 jours terrestres (rétrograde)",
      temperatureMoyenne: "+465°C",
      nombreLunes: 0,
      atmosphere: "CO₂ (96,5 %), azote (3,5 %)",
      faitMarquant:
        "La planète la plus chaude du système solaire malgré n'être pas la plus proche du Soleil. Sa rotation est rétrograde : le Soleil y lève à l'ouest.",
    },
  },
  {
    id: "earth",
    name: "Terre",
    modelName: "earth.glb",
    size: 0.62,
    orbitRadius: 9.5,
    orbitSpeed: 0.0171,   // 0.5 / 9.5^1.5
    rotationSpeed: 0.004,
    atmosphereColor: 0x4fc3f7,
    initialAngle: Math.PI * 1.8,
    info: {
      type: "Planète tellurique",
      diametre: "12 742 km",
      masseRelative: "1 Terre (référence)",
      distanceSoleil: "1,00 UA (149,6 millions km)",
      periodeOrbitale: "365,25 jours",
      periodeRotation: "24 heures",
      temperatureMoyenne: "+15°C",
      nombreLunes: 1,
      atmosphere: "Azote (78 %), oxygène (21 %)",
      faitMarquant:
        "La seule planète connue abritant la vie, avec 71 % de sa surface couverte d'eau liquide. Son champ magnétique la protège des vents solaires.",
    },
  },
  {
    id: "mars",
    name: "Mars",
    modelName: "mars.glb",
    size: 0.38,
    orbitRadius: 12.0,
    orbitSpeed: 0.0120,   // 0.5 / 12.0^1.5
    rotationSpeed: 0.0039,
    atmosphereColor: 0xcd5c3a,
    initialAngle: Math.PI * 0.7,
    info: {
      type: "Planète tellurique",
      diametre: "6 779 km",
      masseRelative: "0,107 Terres",
      distanceSoleil: "1,52 UA (228 millions km)",
      periodeOrbitale: "687 jours terrestres",
      periodeRotation: "24h 37min",
      temperatureMoyenne: "-60°C (jusqu'à +20°C l'été)",
      nombreLunes: 2,
      atmosphere: "CO₂ (95 %), azote (2,7 %)",
      faitMarquant:
        "Abrite Olympus Mons, le plus grand volcan du système solaire (21,9 km de hauteur, 3× l'Everest). Cible principale des futures missions habitées.",
    },
  },
  {
    id: "jupiter",
    name: "Jupiter",
    modelName: "jupiter.glb",
    size: 1.60,
    orbitRadius: 18.0,
    orbitSpeed: 0.00655,  // 0.5 / 18.0^1.5
    rotationSpeed: 0.010,
    atmosphereColor: 0xd4a96a,
    initialAngle: Math.PI * 0.2,
    info: {
      type: "Géante gazeuse",
      diametre: "139 820 km",
      masseRelative: "317,8 Terres",
      distanceSoleil: "5,20 UA (778 millions km)",
      periodeOrbitale: "11,86 ans (4 333 jours)",
      periodeRotation: "9h 56min (rotation la plus rapide)",
      temperatureMoyenne: "-110°C (nuages supérieurs)",
      nombreLunes: 95,
      atmosphere: "Hydrogène (90 %), hélium (10 %)",
      faitMarquant:
        "La Grande Tache Rouge est une tempête anticyclonique plus grande que la Terre, active depuis au moins 350 ans. Jupiter protège le système solaire interne en déviant les astéroïdes.",
    },
  },
  {
    id: "saturn",
    name: "Saturne",
    modelName: "saturne.glb",
    size: 1.35,
    orbitRadius: 24.0,
    orbitSpeed: 0.00425,  // 0.5 / 24.0^1.5
    rotationSpeed: 0.009,
    atmosphereColor: 0xe8d5a3,
    initialAngle: Math.PI * 1.4,
    info: {
      type: "Géante gazeuse",
      diametre: "116 460 km",
      masseRelative: "95,2 Terres",
      distanceSoleil: "9,58 UA (1,43 milliard km)",
      periodeOrbitale: "29,46 ans (10 756 jours)",
      periodeRotation: "10h 42min",
      temperatureMoyenne: "-140°C",
      nombreLunes: 146,
      atmosphere: "Hydrogène (96 %), hélium (3 %)",
      faitMarquant:
        "La seule planète moins dense que l'eau — elle flotterait sur un océan suffisamment grand. Ses anneaux s'étendent sur 282 000 km mais n'ont que quelques centaines de mètres d'épaisseur.",
    },
  },
  {
    id: "uranus",
    name: "Uranus",
    modelName: null,
    sphereColor: 0x7af0f0,
    size: 0.90,
    orbitRadius: 30.0,
    orbitSpeed: 0.00304,  // 0.5 / 30.0^1.5
    rotationSpeed: -0.005, // rétrograde
    atmosphereColor: 0x7af0f0,
    initialAngle: Math.PI * 0.9,
    info: {
      type: "Géante de glace",
      diametre: "50 724 km",
      masseRelative: "14,5 Terres",
      distanceSoleil: "19,2 UA (2,87 milliards km)",
      periodeOrbitale: "84 ans (30 589 jours)",
      periodeRotation: "17h 14min (rétrograde)",
      temperatureMoyenne: "-195°C (la plus froide !)",
      nombreLunes: 28,
      atmosphere: "Hydrogène (83 %), hélium (15 %), méthane (2 %)",
      faitMarquant:
        "Uranus tourne « sur le côté » avec une inclinaison axiale de 98° — ses pôles font face au Soleil plutôt que son équateur. Son méthane atmosphérique lui donne sa couleur bleu-vert.",
    },
  },
  {
    id: "neptune",
    name: "Neptune",
    modelName: "neptune.glb",
    size: 0.85,
    orbitRadius: 37.0,
    orbitSpeed: 0.00222,  // 0.5 / 37.0^1.5
    rotationSpeed: 0.006,
    atmosphereColor: 0x4169e1,
    initialAngle: Math.PI * 1.6,
    info: {
      type: "Géante de glace",
      diametre: "49 244 km",
      masseRelative: "17,1 Terres",
      distanceSoleil: "30,1 UA (4,5 milliards km)",
      periodeOrbitale: "164,8 ans (60 190 jours)",
      periodeRotation: "16h 6min",
      temperatureMoyenne: "-200°C",
      nombreLunes: 16,
      atmosphere: "Hydrogène (80 %), hélium (19 %), méthane (1 %)",
      faitMarquant:
        "Les vents de Neptune peuvent atteindre 2 100 km/h, les plus rapides du système solaire. Triton, sa principale lune, orbite dans le sens rétrograde — probablement un objet capturé de la ceinture de Kuiper.",
    },
  },
];

export default planetsData;
