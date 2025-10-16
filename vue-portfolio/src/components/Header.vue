<template>
  <header class="app-header">
    <button @click="$emit('toggle-sidebar')" class="hamburger-button">
      <v-icon name="fa-bars" scale="1.5" />
    </button>
  </header>
</template>

<script setup>
defineEmits(['toggle-sidebar']);
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  z-index: 900;
  border-bottom: 1px solid var(--color-text);
}

.hamburger-button {
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
}
</style>
