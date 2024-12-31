import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/landing/Landing.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes,
  });
  
  export default router;