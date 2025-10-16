<script setup>
import { ref, onMounted, watch } from 'vue'
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SplashScreen from './components/SplashScreen.vue' // Import SplashScreen
import HeroSection from './components/HeroSection.vue' // Import HeroSection

// Import composables
import { useTheme } from './composables/useTheme'
import { useScrollspy } from './composables/useScrollspy'

// --- Sidebar Logic ---
const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// --- Theme Switcher Logic (from composable) ---
const { theme, toggleTheme } = useTheme()

// --- Scrollspy Logic (from composable) ---
const sectionRefs = ref({})
const projectsComponentRef = ref(null); // Declare ref for ProjectsSection
const aboutSectionRef = ref(null); // Declare ref for AboutSection
const { activeSection, setupObserver } = useScrollspy(sectionRefs)

// --- Splash Screen Logic ---
const isLoading = ref(true)

onMounted(() => {
  // Initialize Theme (moved here from composable for now, will be refactored later)
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme
    theme.value = savedTheme
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light'
    theme.value = prefersDark ? 'dark' : 'light'
  }

  // Hide Splash Screen after animation
  setTimeout(() => {
    isLoading.value = false
    // Explicitly call setupObserver after a short delay to ensure all refs are populated
    setupObserver();
  }, 2300)
})

// Watch for aboutSectionRef to be available and then add it to sectionRefs
watch(aboutSectionRef, (newVal) => {
  if (newVal) {
    sectionRefs.value.about = newVal;
  }
}, { immediate: true });

// Watch for projectsComponentRef to be available and then add its sub-refs
watch(projectsComponentRef, (newVal) => {
  if (newVal) {
    sectionRefs.value.professionalProjects = newVal.professionalProjectsRef;
    sectionRefs.value.studyProjects = newVal.studyProjectsRef;
  }
}, { immediate: true }); // immediate: true to run once on mount if already available
</script>

<template>
  <div class="app-container">
    <transition name="fade">
      <SplashScreen v-if="isLoading" />
    </transition>

    <div v-if="!isLoading">
      <Header @toggle-sidebar="toggleSidebar" />
      <SideBar :is-open="isSidebarOpen" :active-section="activeSection" />

      <div class="theme-toggle-wrapper">
        <button @click="toggleTheme" class="theme-toggle-button">
          <v-icon :name="theme === 'light' ? 'fa-moon' : 'fa-sun'" scale="1.5"/>
        </button>
      </div>

      <main class="main-content" :class="{ 'sidebar-open': isSidebarOpen }">
        <section id="hero" :ref="(el) => sectionRefs.hero = el">
          <HeroSection />
        </section>

        <section id="about" ref="aboutSectionRef">
          <AboutSection />
        </section>

        <section id="experience" :ref="(el) => sectionRefs.experience = el">
          <ExperienceSection />
        </section>

        <section id="projects" :ref="(el) => sectionRefs.projects = el">
          <ProjectsSection ref="projectsComponentRef" />
        </section>

        <section id="contact" :ref="(el) => sectionRefs.contact = el">
          <ContactSection />
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Layout */
.main-content { padding-top: 60px; transition: margin-left 0.3s ease-in-out; padding-left: 2rem; padding-right: 2rem; }
.main-content.sidebar-open { margin-left: 250px; }
section {
  padding: 4rem 2rem;
  min-height: 100vh;
  border-bottom: 1px solid #444;
}
section:last-of-type {
  border-bottom: none;
}

/* Theme Toggle Button */
.theme-toggle-wrapper { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 10000; }
.theme-toggle-button { background-color: var(--color-background); border: 1px solid var(--color-text); color: var(--color-text); cursor: pointer; padding: 0.5rem; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: all 0.2s ease-in-out; }
.theme-toggle-button:hover { transform: scale(1.1); background-color: var(--color-text); color: var(--color-background); }

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

