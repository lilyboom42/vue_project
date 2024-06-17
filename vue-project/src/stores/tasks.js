import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', () => {
  // Définir une propriété réactive
  const tasks = ref([
    {
      id: 1,
      name: 'Tâche 1',
      description: 'Description 1',
      date: '2023-06-01',
      status: 'waiting'
    },
    {
      id: 2,
      name: 'Tâche 2',
      description: 'Description 2',
      date: '2023-06-02',
      status: 'waiting'
    },
    {
      id: 3,
      name: 'Tâche 3',
      description: 'Description 3',
      date: '2023-06-03',
      status: 'waiting'
    }
  ]);

  // Définir une propriété dérivée/calculée
  const dones = computed(() => {
    return tasks.value.filter(task => task.status === 'waiting').length;
  });

  // Définir les méthodes
  function create(task) {
    tasks.value.push(task);
  }

  function update(updatedTask) {
    const index = tasks.value.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = { ...updatedTask };
    }
  }

  function remove(taskId) {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  }

  return {
    tasks,
    dones,
    create,
    update,
    remove
  };
});
