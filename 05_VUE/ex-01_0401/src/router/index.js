import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('@/views/Members.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/views/Videos.vue'),
    },
  ],
});

export default router;
