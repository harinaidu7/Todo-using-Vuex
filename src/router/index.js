import AddTodo from '@/components/AddTodo.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Todo from '../components/Todo.vue'
const routes = [
 
 {
  path:'/todo',
  name:'Todo',
  component: Todo
 },
 {
  path:'/addtodo',
  name:'AddTodo',
  component: AddTodo
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
