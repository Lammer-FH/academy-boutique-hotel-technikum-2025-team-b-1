import { createRouter, createWebHistory } from 'vue-router'
import Impressum from "@/pages/Impressum.vue";
import LandingPage from "@/pages/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
  ],
})

export default router
