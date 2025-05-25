<template>
  <nav
    class="fixed top-0 h-screen w-[300px] bg-space-dark/90 backdrop-blur-lg z-[90] transition-all duration-300 pt-20 px-5 pb-5"
    :class="isNavOpen ? 'right-0' : '-right-[300px]'"
  >
    <ul class="list-none">
      <li v-for="planet in planets" :key="planet.id" class="mb-5">
        <a
          @click.prevent="navigateTo(planet.id)"
          class="text-space-light hover:cursor-pointer no-underline text-lg transition-colors duration-300 block p-2.5 rounded-md hover:text-space-accent hover:bg-white/10"
          :class="{
            'text-space-accent bg-white/10': activePlanet === planet.id,
          }"
        >
          {{ planet.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  isNavOpen: { type: Boolean, required: true },
  planets: { type: Array, required: true },
  activePlanet: { type: String, required: true },
});

const emit = defineEmits(["navigate"]);

const navigateTo = (planetId: string) => {
  emit("navigate", planetId);
};
</script>

<style scoped>
/* Styles spécifiques au menu de navigation si nécessaire */
</style>
