<template>
  <div>
    <h2>Détails de la Tâche</h2>
    <p>Nom: {{ task.name }}</p>
    <p>Description: {{ task.description }}</p>
    <p>Date: {{ task.date }}</p>
    <button @click="editTask">Modifier</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTask() {
      // Émettre un événement pour informer le composant parent de la demande de modification
      this.$emit('edit-task', this.task);
    }
  }
};
</script>

<style scoped>
</style>
