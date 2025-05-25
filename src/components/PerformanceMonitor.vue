<template>
  <div
    v-if="showPerformanceMonitor"
    class="fixed top-5 left-5 bg-black/90 text-green-400 p-4 rounded-lg text-sm font-mono z-[100] border border-green-500/30 backdrop-blur-sm"
  >
    <div class="text-green-300 font-bold mb-2">⚡ Performance Monitor</div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="text-gray-400">FPS:</div>
        <div
          class="text-xl font-bold"
          :class="
            performanceStats.fps >= 60
              ? 'text-green-400'
              : performanceStats.fps >= 30
              ? 'text-yellow-400'
              : 'text-red-400'
          "
        >
          {{ performanceStats.fps }}
        </div>
      </div>
      <div>
        <div class="text-gray-400">Frame Time:</div>
        <div class="text-lg">{{ performanceStats.frameTime }}ms</div>
      </div>
      <div>
        <div class="text-gray-400">Triangles:</div>
        <div class="text-lg">
          {{ performanceStats.triangles.toLocaleString() }}
        </div>
      </div>
      <div>
        <div class="text-gray-400">Draw Calls:</div>
        <div class="text-lg">{{ performanceStats.drawCalls }}</div>
      </div>
      <div>
        <div class="text-gray-400">Memory:</div>
        <div class="text-lg">{{ performanceStats.memory }}MB</div>
      </div>
      <div>
        <div class="text-gray-400">Device:</div>
        <div class="text-xs">{{ isMobile ? "Mobile" : "Desktop" }}</div>
      </div>
    </div>
    <div class="mt-3 border-t border-gray-700 pt-2">
      <div class="text-gray-400 mb-1">Qualité:</div>
      <div class="flex gap-2">
        <button
          @click="setQualityLevel('medium')"
          class="px-2 py-1 text-xs rounded"
          :class="
            qualityLevel === 'medium'
              ? 'bg-green-800 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          "
        >
          Moyenne
        </button>
        <button
          @click="setQualityLevel('high')"
          class="px-2 py-1 text-xs rounded"
          :class="
            qualityLevel === 'high'
              ? 'bg-green-800 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          "
        >
          Haute
        </button>
      </div>
    </div>
    <button
      @click="closeMonitor"
      class="mt-2 text-xs text-gray-500 hover:text-gray-300"
    >
      [Fermer]
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showPerformanceMonitor: { type: Boolean, required: true },
  performanceStats: { type: Object, required: true },
  isMobile: { type: Boolean, required: true },
  qualityLevel: { type: String, required: true },
});

const emit = defineEmits(["setQualityLevel", "close"]);

const setQualityLevel = (level: string) => {
  emit("setQualityLevel", level);
};

const closeMonitor = () => {
  emit("close");
};
</script>

<style scoped>
/* Styles spécifiques au moniteur de performance si nécessaire */
</style>
