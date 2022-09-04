import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
import About from '@/views/About'
import Work from '@/views/Work'
import Contact from '@/views/Contact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
