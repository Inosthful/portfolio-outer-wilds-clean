<template>
  <div class="relative w-full h-screen overflow-hidden">
    <LoadingScreen :isLoading="isLoading" :progress="loadingProgress" />
    <StarField />
    <SolarSystem3D
      :planets="planets"
      :activePlanet="activePlanet"
      :quality="qualityLevel"
      @navigate="navigateTo"
      @loading-progress="updateLoadingProgress"
      @loading-complete="loadingComplete"
      @update-performance-stats="updatePerformanceStats"
    />
    <NavMenu
      :isNavOpen="isNavOpen"
      :planets="planets"
      :activePlanet="activePlanet"
      @navigate="navigateTo"
    />
    <PlanetContent
      :activePlanet="activePlanet"
      :planets="planets"
      @close="closeContent"
      @open-project-details="openProjectDetails"
      @open-skill-details="openSkillDetails"
    />
    <PerformanceMonitor
      :showPerformanceMonitor="showPerformanceMonitor"
      :performanceStats="performanceStats"
      :isMobile="isMobile"
      :qualityLevel="qualityLevel"
      @setQualityLevel="setQualityLevel"
      @close="closePerformanceMonitor"
    />
    <ProjectModals
      :isProjectDetailsOpen="isProjectDetailsOpen"
      :isSkillDetailsOpen="isSkillDetailsOpen"
      :selectedProject="selectedProject"
      :selectedSkill="selectedSkill"
      @close-project-details="closeProjectDetails"
      @close-skill-details="closeSkillDetails"
    />
    <Tutorial :isActive="showTutorial" @complete="handleTutorialComplete" />
    <FloatingButtons
      :showTutorial="showTutorial"
      :showPerformanceMonitor="showPerformanceMonitor"
      @open-tutorial="handleOpenTutorial"
      @open-performance-monitor="handleOpenPerformanceMonitor"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FloatingButtons from "./components/FloatingButtons.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import NavMenu from "./components/NavMenu.vue";
import PerformanceMonitor from "./components/PerformanceMonitor.vue";
import PlanetContent from "./components/PlanetContent.vue";
import ProjectModals from "./components/ProjectModals.vue";
import SolarSystem3D from "./components/SolarSystem3D.vue";
import StarField from "./components/StarField.vue";
import Tutorial from "./components/Tutorial.vue";
import planetsData from "./data/Planets.js";

const isNavOpen = ref(false);
const activePlanet = ref("");
const showPerformanceMonitor = ref(false);
const isMobile = ref(false);
const qualityLevel = ref("high");
const isLoading = ref(true);
const loadingProgress = ref(0);

// État des modales
const isProjectDetailsOpen = ref(false);
const isSkillDetailsOpen = ref(false);
const selectedProject = ref(null);
const selectedSkill = ref(null);

const performanceStats = ref({
  fps: 0,
  frameTime: 0,
  triangles: 0,
  drawCalls: 0,
  memory: 0,
});

const planets = ref(planetsData);

const showTutorial = ref(true);

const navigateTo = (planetId: string) => {
  console.log("Navigation vers la planète:", planetId);
  activePlanet.value = planetId;
  isNavOpen.value = false;
};

const closeContent = () => {
  console.log("Fermeture du contenu");
  activePlanet.value = "";
};

const setQualityLevel = (level: string) => {
  qualityLevel.value = level;
};

const closePerformanceMonitor = () => {
  showPerformanceMonitor.value = false;
};

const updateLoadingProgress = (progress: number) => {
  loadingProgress.value = progress;
};

const loadingComplete = () => {
  isLoading.value = false;
};

// Gestion des modales
const openProjectDetails = (project: any) => {
  console.log("Ouverture des détails du projet:", project);
  selectedProject.value = project;
  isProjectDetailsOpen.value = true;
};

const closeProjectDetails = () => {
  console.log("Fermeture des détails du projet");
  isProjectDetailsOpen.value = false;
  selectedProject.value = null;
};

const openSkillDetails = (skill: any) => {
  console.log("Ouverture des détails de la compétence:", skill);
  selectedSkill.value = skill;
  isSkillDetailsOpen.value = true;
};

const closeSkillDetails = () => {
  console.log("Fermeture des détails de la compétence");
  isSkillDetailsOpen.value = false;
  selectedSkill.value = null;
};

const handleTutorialComplete = () => {
  showTutorial.value = false;
  localStorage.setItem("tutorialCompleted", "true");
};

const handleOpenTutorial = () => {
  showTutorial.value = true;
  localStorage.removeItem("tutorialCompleted");
};

const handleOpenPerformanceMonitor = () => {
  showPerformanceMonitor.value = true;
};

const updatePerformanceStats = (stats: any) => {
  performanceStats.value = { ...stats };
};

// Détection du mobile
const detectMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};

onMounted(() => {
  isMobile.value = detectMobile();
  window.addEventListener("resize", () => {
    isMobile.value = detectMobile();
  });

  const tutorialCompleted = localStorage.getItem("tutorialCompleted");
  if (tutorialCompleted) {
    showTutorial.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    isMobile.value = detectMobile();
  });
});
</script>

<style>
/* Styles globaux si nécessaire */
</style>
