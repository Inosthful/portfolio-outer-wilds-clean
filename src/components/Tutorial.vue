<template>
  <div v-if="isActive" class="fixed inset-0 z-50">
    <!-- Overlay avec trou pour la zone active -->
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500"
      :style="overlayStyle"
      @click="handleOverlayClick"
    ></div>

    <!-- Contenu du tutoriel -->
    <div
      class="absolute p-6 bg-space-dark/95 border border-space-accent/30 rounded-xl shadow-2xl max-w-sm transition-all duration-500"
      :style="tooltipStyle"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex-shrink-0 w-8 h-8 rounded-full bg-space-accent/20 flex items-center justify-center"
        >
          <span class="text-space-accent text-lg font-bold">{{
            currentStep + 1
          }}</span>
        </div>
        <div class="flex-grow">
          <h3 class="text-space-accent font-space text-lg mb-2">
            {{ steps[currentStep].title }}
          </h3>
          <p class="text-space-light/80 text-sm leading-relaxed">
            {{ steps[currentStep].description }}
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-6">
        <div class="flex gap-2">
          <button
            v-for="(step, index) in steps"
            :key="index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="
              index === currentStep ? 'bg-space-accent' : 'bg-space-accent/30'
            "
            @click="goToStep(index)"
          ></button>
        </div>
        <div class="flex gap-3">
          <button
            v-if="currentStep > 0"
            @click="previousStep"
            class="px-4 py-2 text-sm text-space-light/60 hover:text-space-light transition-colors"
          >
            Précédent
          </button>
          <button
            @click="nextStep"
            class="px-4 py-2 text-sm bg-space-accent/20 text-space-accent rounded-lg hover:bg-space-accent/30 transition-colors"
          >
            {{ isLastStep ? "Terminer" : "Suivant" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  isActive: { type: Boolean, default: true },
  targetElement: { type: String, default: "" },
});

const emit = defineEmits(["complete"]);

const currentStep = ref(0);

const steps = [
  {
    title: "Bienvenue dans le Système Solaire",
    description:
      "Explorez les 8 planètes de notre système solaire en 3D. Tailles, distances et vitesses orbitales sont représentatives des données réelles.",
    position: "center",
  },
  {
    title: "Navigation",
    description:
      "Cliquez et faites glisser pour faire pivoter la vue. Utilisez la molette pour zoomer. Cliquez sur une planète pour en savoir plus.",
    position: "center",
  },
  {
    title: "Données astronomiques",
    description:
      "Chaque planète affiche ses données réelles : diamètre, masse, distance au Soleil, période orbitale, température et composition atmosphérique.",
    position: "center",
  },
  {
    title: "Échelle de représentation",
    description:
      "Les distances sont compressées (échelle racine carrée) pour rester visibles. Les vitesses orbitales respectent la loi de Kepler — Mercure est la plus rapide.",
    position: "center",
  },
  {
    title: "Prêt à Explorer ?",
    description:
      "Cliquez sur n'importe quelle planète pour découvrir ses caractéristiques. Bonne exploration !",
    position: "center",
  },
];

const isLastStep = computed(() => currentStep.value === steps.length - 1);

const overlayStyle = computed(() => {
  if (props.targetElement && document.querySelector(props.targetElement)) {
    const target = document.querySelector(props.targetElement);
    const rect = target?.getBoundingClientRect();
    if (rect) {
      return {
        clipPath: `path('M 0 0 L 0 ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} 0 Z M ${rect.left} ${rect.top} L ${rect.right} ${rect.top} L ${rect.right} ${rect.bottom} L ${rect.left} ${rect.bottom} Z')`,
      };
    }
  }
  return {};
});

const tooltipStyle = computed(() => {
  const step = steps[currentStep.value];
  const position = step.position;
  // @ts-ignore
  const baseStyle = step.customStyle || {};

  switch (position) {
    default:
      return {
        ...baseStyle,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
  }
});

const nextStep = () => {
  if (isLastStep.value) {
    emit("complete");
  } else {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const goToStep = (index: number) => {
  currentStep.value = index;
};

const handleOverlayClick = (event: MouseEvent) => {
  // Vérifie si le clic est sur l'overlay et non sur le contenu du tutoriel
  if (event.target === event.currentTarget) {
    emit("complete");
  }
};
</script>

<style scoped>
.pointer-events-none > * {
  pointer-events: auto;
}
</style>
