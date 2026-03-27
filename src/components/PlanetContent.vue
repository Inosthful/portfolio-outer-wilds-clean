<template>
  <transition name="slide-up">
    <main
      v-if="activePlanet"
      class="fixed bottom-0 left-0 w-full max-h-[85vh] overflow-y-auto bg-space-dark/90 backdrop-blur-xl p-6 sm:p-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] rounded-t-[40px] z-[101] border-t shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"
      :style="{ borderTopColor: planetColor + '55' }"
    >
      <button
        @click="$emit('close')"
        aria-label="Fermer"
        class="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 bg-space-accent/10 border border-space-accent/20 rounded-full text-space-light text-2xl leading-none cursor-pointer transition-all duration-300 z-[85] flex items-center justify-center hover:bg-space-accent/20 hover:scale-110 hover:border-space-accent/40"
      >
        ×
      </button>

      <section :key="activePlanet" class="max-w-5xl mx-auto">
        <!-- En-tête -->
        <div class="flex items-center gap-5 mb-6">
          <MiniPlanet
            :modelName="planet.modelName"
            :sphereColor="planet.sphereColor"
            :containerSize="85"
            class="shrink-0"
          />
          <div class="flex-1">
            <h1 class="text-3xl sm:text-4xl font-space" :style="{ color: planetColor }">{{ planet.name }}</h1>
            <span class="text-xs text-space-light/50 font-space uppercase tracking-widest">{{ planet.info.type }}</span>
          </div>
          <div class="w-2 h-2 rounded-full animate-pulse shrink-0 self-start mt-2" :style="{ backgroundColor: planetColor }"></div>
        </div>

        <!-- Grille de données -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          <DataCard label="Diamètre" :value="planet.info.diametre" icon="⬤" />
          <DataCard label="Masse" :value="planet.info.masseRelative" icon="⚖" />
          <DataCard label="Distance au Soleil" :value="planet.info.distanceSoleil" icon="☀" />
          <DataCard label="Période orbitale" :value="planet.info.periodeOrbitale" icon="↻" />
          <DataCard label="Rotation" :value="planet.info.periodeRotation" icon="⟳" />
          <DataCard label="Température" :value="planet.info.temperatureMoyenne" icon="🌡" />
          <DataCard label="Lunes" :value="planet.info.nombreLunes.toString()" icon="◑" />
          <DataCard label="Atmosphère" :value="planet.info.atmosphere" icon="~" />
        </div>

        <!-- Fait marquant -->
        <div class="rounded-2xl p-5 border" :style="{ backgroundColor: planetColor + '0d', borderColor: planetColor + '30' }">
          <p class="text-xs font-space uppercase tracking-widest mb-2" :style="{ color: planetColor + 'aa' }">Fait marquant</p>
          <p class="text-space-light/90 leading-relaxed text-sm sm:text-base">{{ planet.info.faitMarquant }}</p>
        </div>
      </section>
    </main>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import DataCard from "./DataCard.vue";
import MiniPlanet from "./MiniPlanet.vue";
import { type PlanetData } from "../data/PlanetsData.js";

const props = defineProps<{
  activePlanet: string;
  planets: PlanetData[];
}>();

defineEmits<{ (e: "close"): void }>();

const planetColor = computed(() => {
  const p = props.planets.find((p) => p.id === props.activePlanet);
  if (!p) return "#FFE66D";
  return "#" + p.atmosphereColor.toString(16).padStart(6, "0");
});

const planet = computed(
  () =>
    props.planets.find((p) => p.id === props.activePlanet) ?? {
      id: "",
      name: "",
      modelName: null,
      size: 0,
      orbitRadius: 0,
      orbitSpeed: 0,
      rotationSpeed: 0,
      atmosphereColor: 0,
      initialAngle: 0,
      info: {
        type: "",
        diametre: "",
        masseRelative: "",
        distanceSoleil: "",
        periodeOrbitale: "",
        periodeRotation: "",
        temperatureMoyenne: "",
        nombreLunes: 0,
        atmosphere: "",
        faitMarquant: "",
      },
    } as PlanetData
);
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

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.04); border-radius: 3px; }
::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.18); }

@supports (padding: max(0px)) {
  main { padding-bottom: max(2rem, env(safe-area-inset-bottom) + 2rem); }
}
</style>
