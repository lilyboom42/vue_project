<template>
  <div v-if="show">
    <h2>Modifier la Tâche</h2>
    <form @submit.prevent="updateTask">
      <input v-model="task.name" placeholder="Nom de la tâche" required />
      <textarea v-model="task.description" placeholder="Description"></textarea>
      <input v-model="task.date" type="date" required />
      <button type="submit">Sauvegarder</button>
    </form>
  </div>
</template>

<script>


import { ref, watch } from 'vue';

// import { store } from '../store';
export default {
  setup(props) {
    const count = ref(0)
    console.log(props.task);
    // expose la variable count dans le template
    // et dans tous les autres hooks de l'Options API
    return {
      count
    }
  },
  props: ['newTask'],
  data() {
    return {
      show: false,
      task: {
        id: null,
        name: '',
        description: '',
        date: ''
      }
    }
  },
  created() {
    // console.log(this.task)
  },
  watch: {
    newTask: {
      deep: true,
      handler() {
        this.show = true
        this.task = this.newTask
        // console.log(this.newTask);
      }
    }
  },
  methods: {
    updateTask() {
      console.log(this.task);
      this.$emit('updateTask', this.task);
      this.show = false;
    }
}}
</script>
