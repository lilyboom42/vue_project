<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
  </div>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-center text-xl font-bold mb-4">TODO LIST</h1>
    <!-- Section pour ajouter une tâche -->
    <router-view @task-added="addTask" @update-task="updateTask" @view-task="viewTask" @edit-task="editTask" @delete-task="deleteTask" :tasks="tasks" :selected-task="selectedTask" :task="task"></router-view>

    
    <!-- <add-task @task-added="addTask" />
    <edit-task :newTask="task" @updateTask="updateTask"></edit-task>
    <task-list
      :tasks="tasks"
      @view-task="viewTask"
      @edit-task="editTask($event)"
      @delete-task="deleteTask"
    /> -->
    <!-- Section pour afficher les détails de la tâche -->
    <!-- <div v-if="selectedTask">
      <h2>{{ selectedTask.name }}</h2>
      <p>{{ selectedTask.description }}</p>
      <p>Date: {{ selectedTask.date }}</p>
    </div> -->
  </div>
</template>

<script>

import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'
import EditTask from './components/EditTask.vue'
import TaskDetail from './components/TaskDetail.vue'

export default {
  name: 'App',
  components: {
    AddTask,
    TaskList,
    EditTask,
    TaskDetail
  },
  data() {
    return {
      task: {},
      tasks: [
        { id: 1, name: 'Tâche 1', description: 'Description 1', date: '2023-06-01' },
        { id: 2, name: 'Tâche 2', description: 'Description 2', date: '2023-06-02' },
        { id: 3, name: 'Tâche 3', description: 'Description 3', date: '2023-06-03' }
      ],
      selectedTask: null // Stocke la tâche sélectionnée pour afficher les détails
    }
  },
  methods: {
    addTask(newTask) {
      const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map((task) => task.id)) + 1 : 1
      newTask.id = newId
      this.tasks.push(newTask)
    },
    viewTask(task) {
      // Afficher les détails de la tâche sélectionnée
      this.selectedTask = task
    },
    editTask(event) {
      this.task = { ...event }
    },
    deleteTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id)
      if (index !== -1) {
        this.tasks.splice(index, 1)
        // Effacer les détails si la tâche supprimée est celle actuellement affichée
        if (this.selectedTask && this.selectedTask.id === task.id) {
          this.selectedTask = null
        }
      }
    },
    updateTask(updatedTask) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = { ...updatedTask }
        this.task = {}
      }
    }
  }
}
</script>

<style scoped></style>
