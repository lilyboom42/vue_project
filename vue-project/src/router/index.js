import { createRouter, createWebHistory } from 'vue-router';
import TaskDetail from '@/components/TaskDetail.vue';
import TaskList from '@/components/TaskList.vue';
import EditTask from '@/components/EditTask.vue';
import AddTask from '@/components/AddTask.vue';
import Task from '@/views/Task.vue';
import UserList from '@/views/User.vue';

const routes = [
  {
    path: '/',
    name: 'Task',
    component: Task,
    children: [
      {
        path: 'liste',
        name: 'TaskList',
        component: TaskList
      },
      {
        path: 'task/:id',
        name: 'TaskDetail',
        component: TaskDetail,
        props: true
      },
      {
        path: 'edit/:id',
        name: 'EditTask',
        component: EditTask,
        props: true
      },
      {
        path: 'add',
        name: 'AddTask',
        component: AddTask
      }
    ]
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList // Assurez-vous que UserList est correctement importé
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
