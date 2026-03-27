<template>
  <nav
    class="fixed top-0 h-screen w-[300px] bg-space-dark/92 backdrop-blur-lg z-[90] transition-all duration-300 px-5 pb-5 border-l border-white/5 flex flex-col"
    :class="isNavOpen ? 'right-0' : '-right-[300px]'"
  >
    <!-- En-tête -->
    <div class="pt-8 pb-6 border-b border-white/8 mb-4">
      <p class="text-[10px] font-space uppercase tracking-[0.3em] text-space-light/30 mb-1">Explorer</p>
      <h2 class="text-space-accent font-space text-xl tracking-wide">Système Solaire</h2>
    </div>

    <!-- Liste des planètes -->
    <ul class="list-none flex-1 overflow-y-auto">
      <li v-for="planet in planets" :key="planet.id" class="mb-1">
        <a
          @click.prevent="navigateTo(planet.id)"
          class="hover:cursor-pointer no-underline transition-all duration-300 flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/8 group"
          :class="{ 'bg-white/8': activePlanet === planet.id }"
        >
          <span
            class="text-base font-space transition-colors duration-300"
            :class="activePlanet === planet.id ? 'text-space-accent' : 'text-space-light/80 group-hover:text-space-light'"
          >{{ planet.name }}</span>
          <span class="text-[10px] uppercase tracking-wider text-space-light/30 mt-0.5">{{ planet.info.type }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { type PlanetData } from "../data/PlanetsData.js";

const props = defineProps<{
  isNavOpen: boolean;
  planets: PlanetData[];
  activePlanet: string;
}>();

const emit = defineEmits(["navigate"]);

const navigateTo = (planetId: string) => {
  emit("navigate", planetId);
};
</script>

<style scoped>
/* Styles spécifiques au menu de navigation si nécessaire */
</style>
