<template>
  <transition name="slide-up">
    <main
      v-if="activePlanet"
      class="fixed bottom-0 overflow-y-auto left-0 w-full max-h-[85vh] bg-space-dark/90 backdrop-blur-xl p-6 sm:p-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] rounded-t-[40px] z-[101] border-t border-space-accent/20 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"
    >
      <button
        @click="closeContent"
        class="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 bg-space-accent/10 border border-space-accent/20 rounded-full text-space-light text-2xl leading-none cursor-pointer transition-all duration-300 z-[85] flex items-center justify-center hover:bg-space-accent/20 hover:scale-110 hover:border-space-accent/40"
      >
        ×
      </button>
      <section :key="activePlanet" class="max-w-6xl mx-auto">
        <div class="flex items-center gap-4 mb-4 sm:mb-6">
          <div class="w-3 h-3 rounded-full bg-space-accent animate-pulse"></div>
          <h1 class="text-3xl sm:text-4xl text-space-accent font-space">
            {{ getCurrentPlanet.name }}
          </h1>
          <MiniPlanet
            :modelName="getCurrentPlanet.modelName"
            :size="getMiniPlanetSize(getCurrentPlanet.id)"
          />
        </div>
        <div class="space-y-6 sm:space-y-8">
          <p
            class="text-base sm:text-lg leading-relaxed text-space-light/90 max-w-3xl"
          >
            {{ getCurrentPlanet.description }}
          </p>
          <ProjectGrid
            :projects="getCurrentPlanet.projects"
            :planetName="getCurrentPlanet.name"
          />
        </div>
      </section>
    </main>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MiniPlanet from "./MiniPlanet.vue";
import ProjectGrid from "./ProjectGrid.vue";

const props = defineProps({
  activePlanet: { type: String, required: true },
  planets: { type: Array, required: true },
});

// Configuration des tailles pour chaque planète
const planetSizes = {
  about: 3, // Mercure
  skills: 3, // Mars
  projects: 3, // Jupiter (plus petit car plus grand modèle)
  contact: 3, // Earth
  experience: 3, // Neptune
};

const getMiniPlanetSize = (planetId: string): number => {
  return planetSizes[planetId] || 0.5; // Taille par défaut si non spécifiée
};

const getCurrentPlanet = computed(() => {
  return (
    props.planets.find((planet) => planet.id === props.activePlanet) || {
      id: "",
      name: "",
      description: "",
      modelName: "",
      projects: [],
    }
  );
});

const emit = defineEmits<{
  (e: "close");
}>();

const closeContent = () => {
  emit("close");
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Ajustements pour iOS */
@supports (padding: max(0px)) {
  main {
    padding-bottom: max(2rem, env(safe-area-inset-bottom) + 2rem);
  }
}
</style>
