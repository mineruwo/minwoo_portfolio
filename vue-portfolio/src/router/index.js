import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ExperienceView,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
