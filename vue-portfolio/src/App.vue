<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from './components/SplashScreen.vue'
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'

// --- Sidebar Logic ---
const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// --- Theme Switcher Logic ---
const theme = ref('light')
const applyTheme = (newTheme) => {
  document.documentElement.dataset.theme = newTheme
  localStorage.setItem('theme', newTheme)
  theme.value = newTheme
}
const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(newTheme)
}

// --- Splash Screen Logic ---
const isLoading = ref(true)

onMounted(() => {
  // Initialize Theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    applyTheme(savedTheme)
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark ? 'dark' : 'light')
  }

  // Hide Splash Screen after animation
  setTimeout(() => {
    isLoading.value = false
  }, 2300)
})

</script>

<template>
  <div class="app-container">
    <Header @toggle-sidebar="toggleSidebar" v-if="!isLoading" />
    <SideBar :is-open="isSidebarOpen" v-if="!isLoading" />

    <div class="theme-toggle-wrapper">
      <button @click="toggleTheme" class="theme-toggle-button">
        <v-icon :name="theme === 'light' ? 'fa-moon' : 'fa-sun'" scale="1.5"/>
      </button>
    </div>

    <transition name="fade">
      <SplashScreen v-if="isLoading" />
    </transition>

    <main class="main-content" :class="{ 'sidebar-open': isSidebarOpen }" v-if="!isLoading">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  transition: padding-left 0.3s ease-in-out;
}

.main-content {
  padding-top: 60px; /* Header height */
  transition: margin-left 0.3s ease-in-out;
  padding-left: 2rem;
  padding-right: 2rem;
}

.main-content.sidebar-open {
  margin-left: 250px; /* Sidebar width */
}

.theme-toggle-wrapper {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10000;
}

.theme-toggle-button {
  background-color: var(--color-background);
  border: 1px solid var(--color-text);
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

.theme-toggle-button:hover {
  transform: scale(1.1);
  background-color: var(--color-text);
  color: var(--color-background);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
