<template>
  <div v-if="projects && projects.length" class="mt-8">
    <h2
      class="text-3xl mb-5 text-space-secondary font-space"
      v-if="planetName === 'Jupiter'"
    >
      Projets associés
    </h2>
    <h2 class="text-3xl mb-5 text-space-secondary font-space" v-else>
      Compétences associées
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const props = defineProps({
  projects: { type: Array, required: true },
  planetName: { type: String, required: true },
});
</script>

<style scoped>
/* Styles spécifiques à la grille de projets si nécessaire */
</style>
