import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '@/views/ToDoList.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"ToDoList",
      component: ToDoList,
    },
    {
      path:"/About",
      name:"About",
      component: About,
    },
  ],
})

export default router
