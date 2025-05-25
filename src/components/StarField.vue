<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-space-bg">
    <div class="absolute inset-0 stars"></div>
    <div class="absolute inset-0 stars2"></div>
    <div class="absolute inset-0 stars3"></div>
  </div>
</template>

<script setup lang="ts">
// Aucune logique nécessaire ici, le composant est purement visuel.
</script>

<style scoped>
.stars {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 50s linear infinite;
  opacity: 0.5;
}

.stars2 {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 100s linear infinite;
  opacity: 0.3;
  transform: scale(1.5);
}

.stars3 {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
    repeat;
  position: absolute;
  width: 200%;
  height: 200%;
  animation: stars 150s linear infinite;
  opacity: 0.2;
  transform: scale(2);
}

@keyframes stars {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}
</style>
