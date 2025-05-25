<template>
  <div class="fixed bottom-4 right-4 flex flex-col gap-2 z-40">
    <button
      v-if="!showTutorial"
      @click="$emit('open-tutorial')"
      class="group relative bg-space-dark/80 hover:bg-space-dark border border-space-accent/30 hover:border-space-accent rounded-full p-3 transition-all duration-300"
      title="Réouvrir le tutoriel"
    >
      <div
        class="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-space-accent/50 group-hover:bg-space-accent transition-colors"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-space-accent/70 group-hover:text-space-accent transition-colors"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <button
      v-if="!showPerformanceMonitor"
      @click="$emit('open-performance-monitor')"
      class="group relative bg-space-dark/80 hover:bg-space-dark border border-space-accent/30 hover:border-space-accent rounded-full p-3 transition-all duration-300"
      title="Réouvrir le moniteur de performance"
    >
      <div
        class="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-space-accent/50 group-hover:bg-space-accent transition-colors"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-space-accent/70 group-hover:text-space-accent transition-colors"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  showTutorial: { type: Boolean, default: false },
  showPerformanceMonitor: { type: Boolean, default: false },
});

defineEmits(["open-tutorial", "open-performance-monitor"]);
</script>

<style scoped>
button {
  pointer-events: auto;
}
</style>
