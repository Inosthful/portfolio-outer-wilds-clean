<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[1000] overflow-y-auto"
      @click.self="onBackdropClick"
    >
      <!-- Overlay avec effet de flou -->
      <div class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>

      <!-- Conteneur du modal -->
      <div class="relative min-h-screen flex items-center justify-center p-4">
        <div
          class="relative bg-space-dark/95 border border-space-accent/20 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          :class="[
            size === 'sm'
              ? 'max-w-md'
              : size === 'lg'
              ? 'max-w-4xl'
              : 'max-w-2xl',
          ]"
        >
          <!-- En-tête du modal -->
          <div
            class="flex items-center justify-between p-6 border-b border-space-accent/10"
          >
            <h3
              class="text-2xl font-space text-space-accent"
              :class="{ 'text-center w-full': !showCloseButton }"
            >
              {{ title }}
            </h3>
            <button
              v-if="showCloseButton"
              @click="onClose"
              class="text-space-light hover:text-space-accent transition-colors duration-200 focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Contenu du modal -->
          <div class="p-6">
            <slot></slot>
          </div>

          <!-- Pied du modal -->
          <div
            v-if="$slots.footer"
            class="flex items-center justify-end gap-4 p-6 border-t border-space-accent/10"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: { type: Boolean, required: true },
  title: { type: String, required: true },
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg"].includes(value),
  },
  showCloseButton: { type: Boolean, default: true },
  closeOnBackdrop: { type: Boolean, default: true },
});

const emit = defineEmits(["close"]);

const onClose = () => {
  emit("close");
};

const onBackdropClick = () => {
  if (props.closeOnBackdrop) {
    onClose();
  }
};
</script>

<style scoped>
/* Styles spécifiques au modal si nécessaire */
</style>
