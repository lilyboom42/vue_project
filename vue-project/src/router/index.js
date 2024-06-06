import { createRouter, createWebHistory } from 'vue-router'
import TaskDetail from '@/components/TaskDetail.vue'
import TaskList from '@/components/TaskList.vue'
import EditTask from '@/components/EditTask.vue'
import AddTask from '@/components/AddTask.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/task/:id',
      name: 'TaskDetail',
      component: TaskDetail
    },
    {
      path: '/edit/:id',
      name: 'EditTask',
      component: EditTask
    },
    {
      path: '/add',
      name: 'AddTask',
      component: AddTask
    }
  ]
})

export default router
