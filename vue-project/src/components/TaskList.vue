<template>
  <div>
    <h1 class="text-center bg-red-300 text-3xl mb-4 text-red-950">Liste des Tâches</h1>
    <table class="w-full text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">ID</th>
          <th class="p-2">Nom de la Tâche</th>
          <th class="p-2">Date</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in store.tasks" :key="task.id" class="border-b">
          <td class="p-2">{{ task.id }}</td>
          <td class="p-2">{{ task.name }}</td>
          <td class="p-2">{{ task.date }}</td>
          <td class="p-2 space-x-2">
            <button @click="viewTask(task)" class="bg-blue-500 text-white px-2 py-1 rounded">Voir Détail</button>
            <router-link :to="{ name: 'EditTask', params: { id: task.id } }" class="bg-yellow-500 text-white px-2 py-1 rounded">Modifier</router-link>
            <button @click="deleteTask(task.id)" class="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';
import { useRouter } from 'vue-router';

const store = useTasksStore();
const router = useRouter();

const deleteTask = (taskId) => {
  store.remove(taskId);
};

const viewTask = (task) => {
  // Ajoutez ici la logique pour afficher les détails de la tâche
};

</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
