import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSun, FaMoon, FaBars } from "oh-vue-icons/icons/fa";

addIcons(FaSun, FaMoon, FaBars);

const app = createApp(App);

app.use(router); // Use the router
app.component("v-icon", OhVueIcon);

app.mount('#app')
