import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('@/views/DynamicView.vue'),
      props: true,
    },
    {
      path: '/watch/:mood',
      name: 'watch',
      component: () => import('@/views/DynamicViewWatch.vue'),
      props: true,
    },
    {
      path: '/cors',
      name: 'cors',
      component: () => import('@/views/CorsView.vue'),
    },
    {
      path: '/ex-cors',
      name: 'ex-cors',
      component: () => import('@/views/CorsExView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
