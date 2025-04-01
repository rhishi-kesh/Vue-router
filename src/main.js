import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/main.css';
import { routes } from './routes';

// Create the router
const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// Create and mount the Vue app
createApp(App)
  .use(router)
  .mount('#app');
