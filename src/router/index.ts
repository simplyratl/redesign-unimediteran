import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import CourseLayout from '../layouts/CourseLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Početna',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/course/:title',
      name: 'Kurs',
      component: () => import('../views/CourseView.vue'),
      meta: {
        layout: CourseLayout
      }
    }
  ]
})

export default router
