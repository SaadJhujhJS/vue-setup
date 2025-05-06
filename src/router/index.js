// src/router/index.js
import CreatedBeforeCreated from '@/components/CreatedBeforeCreated.vue'
import Forms from '@/components/Forms.vue'
import Looping from '@/components/Looping.vue'
import MountedUnmounted from '@/components/MountedUnmounted.vue'
import UserDetails from '@/components/UserDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Forms', component: Forms },
  { path: '/Looping', name: 'Looping', component: Looping },
  { path: '/UserDetails/:id', name: 'UserDetails', component: UserDetails },
  { path: '/MountedUnmounted', name: 'mounted-unmounted', component: MountedUnmounted },
  { path: '/CreatedBeforeCreated', name: 'created-beforecreated', component: CreatedBeforeCreated },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
