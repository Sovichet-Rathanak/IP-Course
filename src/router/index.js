import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/views/PageView.vue';

const routes = [
  {
    path: '/:pageNumber',
    component: Page,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use browser history
  routes,
});

export default router;
