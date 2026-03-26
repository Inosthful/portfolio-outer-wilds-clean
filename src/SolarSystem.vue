<template>
  <div class="relative w-full h-screen overflow-hidden">
    <LoadingScreen :isLoading="isLoading" :progress="loadingProgress" />
    <StarField />
    <SolarSystem3D
      :planets="planets"
      :activePlanet="activePlanet"
      :quality="qualityLevel"
      @navigate="navigateTo"
      @loading-progress="(p) => (loadingProgress = p)"
      @loading-complete="isLoading = false"
      @update-performance-stats="performanceStats = $event"
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
      @close="activePlanet = ''"
    />
    <PerformanceMonitor
      :showPerformanceMonitor="showPerformanceMonitor"
      :performanceStats="performanceStats"
      :isMobile="isMobile"
      :qualityLevel="qualityLevel"
      @setQualityLevel="qualityLevel = $event"
      @close="showPerformanceMonitor = false"
    />
    <Tutorial :isActive="showTutorial" @complete="completeTutorial" />
    <FloatingButtons
      :showTutorial="showTutorial"
      :showPerformanceMonitor="showPerformanceMonitor"
      @open-tutorial="openTutorial"
      @open-performance-monitor="showPerformanceMonitor = true"
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
import SolarSystem3D from "./components/SolarSystem3D.vue";
import StarField from "./components/StarField.vue";
import Tutorial from "./components/Tutorial.vue";
import planetsData, { type PlanetData } from "./data/PlanetsData.js";

interface PerformanceStats {
  fps: number;
  frameTime: number;
  triangles: number;
  drawCalls: number;
  memory: number;
}

const activePlanet = ref("");
const isNavOpen = ref(false);
const showPerformanceMonitor = ref(false);
const showTutorial = ref(true);
const qualityLevel = ref("high");
const isLoading = ref(true);
const loadingProgress = ref(0);
const isMobile = ref(false);
const planets = ref<PlanetData[]>(planetsData);
const performanceStats = ref<PerformanceStats>({ fps: 0, frameTime: 0, triangles: 0, drawCalls: 0, memory: 0 });

const navigateTo = (planetId: string): void => {
  activePlanet.value = planetId;
  isNavOpen.value = false;
};

const completeTutorial = (): void => {
  showTutorial.value = false;
  localStorage.setItem("tutorialCompleted", "true");
};

const openTutorial = (): void => {
  showTutorial.value = true;
  localStorage.removeItem("tutorialCompleted");
};

const onResize = (): void => {
  isMobile.value =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768;
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  if (localStorage.getItem("tutorialCompleted")) showTutorial.value = false;
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>
