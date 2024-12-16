import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: "index",
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/signin',
    name: "signin",
    component: () => import('@/views/signin/index.vue')
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: '/home',
        name: "home",
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/profile',
        name: "profile",
        component: () => import('@/views/profile/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
