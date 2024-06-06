<template>
  <div>
    <button @click="showAddTaskForm" class="bg-red-300 text-white font-bold py-2 px-4 rounded w-full mb-4">
      Ajouter une Tâche
    </button>

    <!-- <div v-if="showForm" class="mb-4"> -->
      <hr class="my-4">
      <form @submit.prevent="submitTask">
        <div class="mb-4">
          <label class="block text-gray-700">Titre</label>
          <input type="text" v-model="newTask.name" placeholder="Placeholder" class="mt-1 p-2 border rounded w-full">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Description</label>
          <textarea v-model="newTask.description" placeholder="Placeholder" class="mt-1 p-2 border rounded w-full"></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Date</label>
          <input type="date" v-model="newTask.date" class="mt-1 p-2 border rounded w-full">
        </div>
        <button type="submit" class="bg-red-300 text-white font-bold py-2 px-4 rounded w-full mb-2">Valider</button>
        <button type="button" @click="cancelAddTask" class="bg-gray-500 text-white font-bold py-2 px-4 rounded w-full">Annuler</button>
      </form>
    </div>

</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      newTask: {
        name: '',
        description: '',
        date: ''
      }
    };
  },
  methods: {
    showAddTaskForm() {
      this.showForm = true;
    },
    cancelAddTask() {
      this.showForm = false;
      this.newTask.name = '';
      this.newTask.description = '';
      this.newTask.date = '';
    },
    submitTask() {
      this.$emit('task-added', { ...this.newTask });
      this.cancelAddTask();
    }
    
  }
};
</script>

<style scoped>
</style>
