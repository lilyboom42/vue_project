<template>
  <div>
    <h1 class="text-center bg-red-300 text-3xl mb-4">Liste des Tâches</h1>

    <table class="w-full text-left">
      <thead>
        <tr class="bg-gray-200  mx-20">
          <th class="p-2 ">ID</th>
          <th class="p-2">Nom de la Tâche</th>
          <th class="p-2">Date</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id" class="border-b">
          <td class="p-2">{{ task.id }}</td>
          <td class="p-2">{{ task.name }}</td>
          <td class="p-2">{{ task.date }}</td>
          <td class="p-2 space-x-2 gap-x-11 grid-cols-3 mx-5">
            <button @click="$emit('view-task', task)" class="  bg-blue-500 text-white px-2 py-1 rounded">Voir Détail</button>
            <button @click="$emit('edit-task', task)" class="bg-yellow-500 text-white px-2 py-1 rounded">Modifier</button>
            <button @click="$emit('delete-task', task)" class="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
