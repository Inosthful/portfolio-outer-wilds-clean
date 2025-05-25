<template>
  <div>
    <!-- Modal de détails du projet -->
    <Modal
      :isOpen="isProjectDetailsOpen"
      title="Détails du projet"
      size="lg"
      @close="closeProjectDetails"
    >
      <div v-if="selectedProject" class="space-y-6">
        <div
          class="aspect-video relative rounded-lg overflow-hidden bg-space-dark/50"
        >
          <img
            :src="getProjectImage(selectedProject.image)"
            :alt="selectedProject.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="space-y-4">
          <h2 class="text-3xl font-space text-space-accent">
            {{ selectedProject.title }}
          </h2>

          <p class="text-space-light text-lg leading-relaxed">
            {{ selectedProject.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in selectedProject.technologies"
              :key="tech"
              class="px-3 py-1 bg-space-accent/10 text-space-accent rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>

          <div v-if="selectedProject.features" class="space-y-2">
            <h3 class="text-xl font-space text-space-secondary">
              Fonctionnalités
            </h3>
            <ul class="list-disc list-inside space-y-1 text-space-light">
              <li v-for="feature in selectedProject.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex gap-4">
          <a
            v-if="selectedProject?.demo"
            :href="selectedProject.demo"
            target="_blank"
            class="px-6 py-2 bg-space-accent text-white rounded-lg hover:bg-space-accent/90 transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              class="w-5 h-5"
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
            Voir la démo
          </a>
          <a
            v-if="selectedProject?.github"
            :href="selectedProject.github"
            target="_blank"
            class="px-6 py-2 bg-space-secondary text-white rounded-lg hover:bg-space-secondary/90 transition-colors duration-200 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            Voir le code
          </a>
        </div>
      </template>
    </Modal>

    <!-- Modal de compétence -->
    <Modal
      :isOpen="isSkillDetailsOpen"
      title="Détails de la compétence"
      size="md"
      @close="closeSkillDetails"
    >
      <div v-if="selectedSkill" class="space-y-6">
        <div class="flex items-center gap-4">
          <div
            class="w-16 h-16 rounded-lg bg-space-accent/10 flex items-center justify-center"
          >
            <i
              :class="selectedSkill.icon"
              class="text-3xl text-space-accent"
            ></i>
          </div>
          <div>
            <h2 class="text-2xl font-space text-space-accent">
              {{ selectedSkill.title }}
            </h2>
            <p class="text-space-light/80">{{ selectedSkill.level }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <p class="text-space-light leading-relaxed">
            {{ selectedSkill.description }}
          </p>

          <div v-if="selectedSkill.experience" class="space-y-2">
            <h3 class="text-xl font-space text-space-secondary">Expérience</h3>
            <p class="text-space-light">{{ selectedSkill.experience }}</p>
          </div>

          <div v-if="selectedSkill.projects" class="space-y-2">
            <h3 class="text-xl font-space text-space-secondary">
              Projets associés
            </h3>
            <ul class="list-disc list-inside space-y-1 text-space-light">
              <li v-for="project in selectedSkill.projects" :key="project">
                {{ project }}
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in selectedSkill.technologies"
              :key="tech"
              class="px-3 py-1 bg-space-accent/10 text-space-accent rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";

const props = defineProps({
  isProjectDetailsOpen: { type: Boolean, required: true },
  isSkillDetailsOpen: { type: Boolean, required: true },
  selectedProject: { type: Object, default: null },
  selectedSkill: { type: Object, default: null },
});

const emit = defineEmits(["close-project-details", "close-skill-details"]);

const closeProjectDetails = () => {
  emit("close-project-details");
};

const closeSkillDetails = () => {
  emit("close-skill-details");
};

const getProjectImage = (image: string) => {
  return (
    import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + image.replace(/^\//, "")
  );
};
</script>
