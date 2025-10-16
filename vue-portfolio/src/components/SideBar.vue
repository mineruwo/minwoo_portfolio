<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <nav>
      <ul>
        <li><router-link to="/">소개</router-link></li>
        <li><router-link to="/experience">경력</router-link></li>
        <li><router-link to="/projects">프로젝트</router-link></li>
        <li><router-link to="/contact">컨텍트</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 60px; /* Height of the header */
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-text);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 800;
  padding: 1rem;
}

.sidebar.is-open {
  transform: translateX(0);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 1rem;
}

a, .router-link-exact-active {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: normal;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
