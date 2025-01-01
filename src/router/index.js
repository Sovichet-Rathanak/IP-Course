import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/views/PageView.vue';
import Section from '@/views/SectionView.vue'
const routes = [
  {
    path: '/:pageNumber',
    component: Page,
    children:[
      {
        path: 'section/:id',
        component: Section
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(), // Use browser history
  routes,
});

export default router;
