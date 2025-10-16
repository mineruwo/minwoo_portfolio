<template>
  <div class="splash-screen">
    <div class="splash-content">
      <h1>Minwoo's Portfolio</h1>
    </div>
  </div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splash-content {
  text-align: center;
  animation: fadeInOut 2.5s ease-in-out forwards;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
