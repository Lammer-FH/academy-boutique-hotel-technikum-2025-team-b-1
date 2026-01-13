import { createRouter, createWebHistory } from 'vue-router'
import Impressum from "@/pages/Impressum.vue";
import LandingPage from "@/pages/LandingPage.vue";
import About from "@/pages/About.vue";
import RoomOverview from "@/room/pages/RoomOverview.vue";
import RoomDetails from "@/room/pages/RoomDetails.vue";
import BookingScreen from "@/booking/components/BookingScreen.vue";
import LoginPage from "@/auth/pages/LoginPage.vue";

const router = createRouter({
<<<<<<< HEAD
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
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/zimmer',
      name: 'rooms',
      component: RoomOverview,
    },
    {
      path: '/zimmer/:id',
      name: 'room',
      component: RoomDetails,
    },
    {
      path: "/zimmer/:id/buchen",
      name: "booking",
      component: BookingScreen,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    }
  ],
=======
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
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/zimmer',
            name: 'rooms',
            component: RoomOverview,
        },
        {
            path: '/zimmer/:id',
            name: 'room',
            component: RoomDetails,
        },
        {
            path: "/zimmer/:id/buchen",
            name: "booking",
            component: BookingScreen,
        },
    ],
>>>>>>> 3c9ed7c (added the feature click on contact and the page scrolls down)
})

export default router
