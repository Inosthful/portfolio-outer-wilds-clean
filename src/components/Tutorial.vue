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
    title: "Bienvenue dans mon Portfolio Spatial",
    description:
      "Explorez mon univers de développement à travers ce système solaire interactif. Chaque planète représente une compétence ou un projet.",
    position: "center",
  },
  {
    title: "Navigation",
    description:
      "Utilisez votre souris pour faire pivoter la vue. Faites défiler pour zoomer et dézoomer. Cliquez sur une planète pour en savoir plus.",
    position: "center",
  },
  {
    title: "Découvrez mes Projets",
    description:
      "Chaque planète abrite des projets que j'ai réalisés. Cliquez sur une planète pour voir les détails et les technologies utilisées.",
    position: "center",
  },
  {
    title: "Explorez mes Compétences",
    description:
      "Les planètes sont organisées par domaine de compétence. Plus vous vous rapprochez du soleil, plus les compétences sont fondamentales.",
    position: "center",
  },
  {
    title: "Moniteur de Performance",
    description:
      "En haut à gauche, vous trouverez un moniteur de performance. Il vous permet d'ajuster la qualité visuelle selon votre appareil.",
    position: "top-right",
  },
  {
    title: "Prêt à Explorer ?",
    description:
      "Vous êtes maintenant prêt à explorer mon portfolio ! N'hésitez pas à interagir avec les planètes et à découvrir mes projets.",
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
