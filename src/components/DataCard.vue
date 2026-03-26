<template>
  <div class="bg-white/4 border border-white/8 rounded-xl p-3 sm:p-4 flex flex-col gap-1 hover:border-space-accent/20 transition-colors duration-300">
    <span class="text-[10px] font-space uppercase tracking-widest text-space-light/40">{{ label }}</span>
    <span class="text-space-light/90 text-sm sm:text-base font-medium leading-snug">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string; icon?: string }>();
</script>
