<template>
  <div
    class="group bg-space-dark/50 border border-space-accent/10 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-space-accent/10 hover:border-space-accent/30"
  >
    <div class="relative aspect-video overflow-hidden">
      <img
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        :src="getProjectImage(project.image)"
        :alt="project.title"
        loading="lazy"
        decoding="async"
        :width="800"
        :height="450"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>
    <div class="p-6">
      <h3
        class="text-xl mb-3 text-space-accent font-space group-hover:text-space-accent/90 transition-colors duration-300"
      >
        {{ project.title }}
      </h3>
      <p class="text-space-light/80 mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-3 py-1 bg-space-accent/5 text-space-accent/80 rounded-full text-sm border border-space-accent/10 transition-colors duration-300 group-hover:bg-space-accent/10 group-hover:border-space-accent/20"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex gap-3">
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 bg-space-accent/10 text-space-accent rounded-lg text-sm transition-all duration-300 hover:bg-space-accent/20 hover:scale-105 border border-space-accent/20"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Démo
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 bg-space-accent/10 text-space-accent rounded-lg text-sm transition-all duration-300 hover:bg-space-accent/20 hover:scale-105 border border-space-accent/20"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
});

const imageLoaded = ref(false);

const getProjectImage = (image: string) => {
  return (
    import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + image.replace(/^\//, "")
  );
};

onMounted(() => {
  // Préchargement des images
  const img = new Image();
  img.src = getProjectImage(props.project.image);
  img.onload = () => {
    imageLoaded.value = true;
  };
});
</script>

<style scoped>
/* Optimisation des transitions */
.group {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

img {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
