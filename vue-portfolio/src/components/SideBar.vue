<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <nav>
      <ul>
        <li><a href="#hero" :class="{ active: activeSection === 'hero' }">첫 화면</a></li>
        <li><a href="#about" :class="{ active: activeSection === 'about' }">소개</a></li>
        <li><a href="#experience" :class="{ active: activeSection === 'experience' }">경력</a></li>
        <li>
          <a href="#projects" :class="{ active: activeSection === 'projects' }">프로젝트</a>
          <ul class="sub-menu">
            <li><a href="#professional-projects" :class="{ active: activeSection === 'professional-projects' }">실무 프로젝트</a></li>
            <li><a href="#study-projects" :class="{ active: activeSection === 'study-projects' }">학습 프로젝트</a></li>
          </ul>
        </li>
        <li><a href="#contact" :class="{ active: activeSection === 'contact' }">컨텍트</a></li>
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
  activeSection: {
    type: String,
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

a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  padding: 5px;
  display: block;
}

.sub-menu {
  padding-left: 1.5rem; /* Indent sub-menu items */
  margin-top: 0.5rem;
}

.sub-menu li {
  margin-bottom: 0.5rem;
}

.sub-menu a {
  font-size: 1rem; /* Smaller font size for sub-menu items */
  padding: 3px;
}

a.active {
  font-weight: bold;
  transform: scale(1.1);
  color: #42b883; /* Vue Green for highlight */
}
</style>
