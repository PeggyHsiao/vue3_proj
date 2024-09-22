import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/index.vue';
import Tree from '@/views/tree/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    }
  ]
});

export default router;
