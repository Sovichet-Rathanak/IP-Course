import HomeView from '@/view/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:"/catgories/:categoryId",
      name:"category",
      component: () => import("../view/ProductView.vue")
    }
  ]
})

export default router
