import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: Gallery
    },
  ]
})

export default router
