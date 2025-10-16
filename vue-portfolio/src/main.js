import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSun, FaMoon, FaBars } from "oh-vue-icons/icons/fa";

addIcons(FaSun, FaMoon, FaBars);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount('#app')
