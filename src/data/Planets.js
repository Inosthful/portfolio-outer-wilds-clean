// DATA SECTION

import { color } from "three/tsl";

const planetsData = [
  {
    id: "about",
    name: "À propos",
    modelName: "mercure.glb",
    description:
      "Mon nom est Enzo Martinez, j'ai 21 ans et je suis étudiant en tant que Master expert en développement full stack à Ynov Montpellier. Je vous présente mon porfolio inspiré du jeu Outer Wilds. Mon portfolio est une invitation à explorer mes compétences et mes projets dans un environnement ludique et immersif. J'ai essayé de rendre la chose la plus immersive possible et j'ai toujours des idées pour améliorer le concept.",
    size: 0.7,
    orbitRadius: 8,
    orbitSpeed: 0.1,
    rotationSpeed: 0.005,
    color: 0x888888,
    atmosphereColor: 0x888888,
    initialAngle: Math.PI * 0.5,
    texture: {
      diffuse: "#22c55e",
      roughness: 0.6,
      metalness: 0.1,
      emissive: 0x001100,
    },
  },
  {
    id: "skills",
    name: "Compétences",
    modelName: "mars.glb",
    description:
      "Maîtrise des technologies front-end modernes avec une expertise particulière en JavaScript, TypeScript, Vue.js et React. Conception d'interfaces utilisateur intuitives et responsive avec un souci du détail et de l'expérience utilisateur. J'ai aussi participé à des projets académiques et personnels, mettant en avant mes compétences en développement web et backend.",
    size: 0.6,
    orbitRadius: 12,
    orbitSpeed: 0.05,
    rotationSpeed: 0.003,
    atmosphereColor: 0xb22222,
    initialAngle: Math.PI * 1.1,
    projects: [
      {
        title: "Maîtrise Front-end",
        description: "JavaScript, TypeScript, Vue.js, React",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["JavaScript", "TypeScript", "Vue.js", "React"],
      },
      {
        title: "Design & UI/UX",
        description:
          "Interfaces responsive, animations fluides, expérience utilisateur",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["CSS/SASS", "Tailwind", "Animations", "Gsap"],
      },
      {
        title: "Compétences backend",
        description: "Node.js, MongoDB, API REST, gestion de bases de données",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Node.js", "GraphQL", "MongoDB", "API REST"],
      },
    ],
  },
  {
    id: "projects",
    name: "Projets", // Giant's Deep
    modelName: "jupiter.glb",
    description:
      "Découvrez une sélection de mes projets personnels et académiques, reflétant ma passion pour le développement web et ma capacité à créer des applications fonctionnelles et esthétiques.",
    size: 0.9,
    orbitRadius: 16,
    orbitSpeed: 0.08,
    rotationSpeed: 0.004,
    color: 0x1e40af,
    atmosphereColor: 0xd2b48c,
    initialAngle: Math.PI * 1.7,

    projects: [
      {
        title: "React Blog",
        description: "Blog react avec connexion API",
        image: "images/ReactDrapeau.png",
        technologies: ["reactjs", "SASS", "axios", "json-server"],
        github: "https://github.com/Inosthful/ReactDrapeau",
        demo: "https://reactdb.netlify.app/",
      },
      {
        title: "Application React 3d ",
        description:
          "Application 3D avec react-three-fiber et visulisation de données",
        image: "images/ReactThree.png",
        technologies: ["JSX", "React", "Threejs"],
        github: "https://github.com/Inosthful/React3D",
        demo: "https://github.com/Inosthful/React3D",
      },
    ],
  },

  {
    id: "contact",
    name: "Contact",
    modelName: "earth.glb",
    description:
      "Si vous souhaitez me contacter, n'hésitez pas à m'envoyer un message via mon mail : 'enzo.martinez34@ynov.com'. Je suis toujours ouvert à de nouvelles opportunités et collaborations.",
    size: 0.8,
    orbitRadius: 14,
    orbitSpeed: 0.02,
    rotationSpeed: 0.002,

    color: 0x2a5caa,
    atmosphereColor: 0x2a5caa,
    initialAngle: Math.PI * 0.8,
  },
  {
    id: "experience",
    name: "Expérience", // Desert Planet
    modelName: "neptune.glb",
    description:
      "Mon parcours professionnel et académique, incluant mes stages, projets d'études et contributions qui ont façonné mon expertise en développement web.",
    size: 0.8,
    orbitRadius: 20,
    orbitSpeed: 0.09,
    rotationSpeed: 0.002,
    color: 0xdc2626,
    atmosphereColor: 0x2e3a87,
    initialAngle: Math.PI * 0.2,
  },
];

export default planetsData;
