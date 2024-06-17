<template>
    <div id="app">
      <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-center text-xl font-bold mb-4 text-red-950">TODO LIST</h1>
        <nav class="flex justify-around mb-6">
          <router-link :to="{ name: 'AddTask' }" class="text-3xl text-red-400 italic">
            Add Task
          </router-link>
          <router-link :to="{ name: 'TaskList' }" class="text-3xl text-red-400 italic">
            Task List
          </router-link>
        </nav>
        <!-- Section pour afficher les vues des routes -->
        <router-view 
          @task-added="addTask" 
          @update-task="updateTask" 
          @view-task="viewTask" 
          @edit-task="editTask" 
          @delete-task="deleteTask" 
          :tasks="tasks" 
          :selected-task="selectedTask" 
          :task="task">
        </router-view>
      </div>
    </div>
  </template>
  
  <script>
  import AddTask from './../components/AddTask.vue';
  import TaskList from './../components/TaskList.vue';
  import EditTask from './../components/EditTask.vue';
  import TaskDetail from './../components/TaskDetail.vue';
  import { useTasksStore } from '@/stores/tasks';
  
  export default {
    name: 'App',
    components: {
      AddTask,
      TaskList,
      EditTask,
      TaskDetail,
    },
    data() {
      return {
        task: {},
        tasks: useTasksStore().tasks,

        selectedTask: null, // Stocke la tâche sélectionnée pour afficher les détails
      };
    },
    methods: {
      addTask(newTask) {
        const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
        newTask.id = newId;
        this.tasks.push(newTask);
      },
      viewTask(task) {
        // Afficher les détails de la tâche sélectionnée
        this.selectedTask = task;
      },
      editTask(event) {
        this.task = { ...event };
      },
      
      updateTask(updatedTask) {
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = { ...updatedTask };
          this.task = {};
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  