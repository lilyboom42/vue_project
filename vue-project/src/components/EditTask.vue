<template>
  <div v-if="show">
    <h2>Modifier la tâche {{ task.id }}</h2>
    <form @submit.prevent="updateTask">
      <input v-model="task.name" placeholder="Nom de la tâche" required />
      <textarea v-model="task.description" placeholder="Description"></textarea>
      <input v-model="task.date" type="date" required />
      <button type="submit">Sauvegarder</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import { useTasksStore } from '@/stores/tasks';
import { useRouter } from 'vue-router';

const store = useTasksStore();
const router = useRouter();

const props = defineProps({
  newTask: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update-task']);

const show = ref(true);
const task = ref({ id: null, name: '', description: '', date: '' });

watch(
  () => props.newTask,
  (newTask) => {
    if (newTask) {
      show.value = true;
      task.value = { ...newTask };
    }
  },
  { deep: true, immediate: true }
);

const updateTask = () => {
  if (task.value.name && task.value.date) {
    emit('update-task', task.value);
    show.value = false;
  } else {
    alert('Veuillez remplir tous les champs obligatoires.');
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
