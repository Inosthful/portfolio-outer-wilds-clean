<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-space-dark z-[200] flex flex-col items-center justify-center"
  >
    <div class="relative w-64 h-64 mb-8">
      <!-- Soleil -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"
      ></div>

      <!-- Orbite et planète -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full"
      >
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-spin-slow"
        ></div>
      </div>
    </div>

    <div class="text-space-accent text-2xl text-center font-space mb-4">
      Chargement du système solaire...
    </div>

    <div class="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
      <div
        class="h-full bg-space-accent transition-all duration-300 ease-out"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>

    <div class="text-space-light text-sm mt-2">{{ progress }}%</div>

    <div class="text-space-light/60 text-xs mt-8 max-w-md text-center">
      {{ loadingMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  isLoading: { type: Boolean, required: true },
  progress: { type: Number, required: true },
});

const loadingMessage = ref("Initialisation du système solaire...");

const messages = [
  "Chargement des textures planétaires...",
  "Configuration des orbites...",
  "Initialisation des effets de particules...",
  "Préparation des modèles 3D...",
  "Optimisation des performances...",
  "Chargement des données astronomiques...",
  "Configuration des contrôles...",
  "Finalisation du système...",
];

let messageIndex = 0;

onMounted(() => {
  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    loadingMessage.value = messages[messageIndex];
  }, 2000);

  return () => clearInterval(messageInterval);
});
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
