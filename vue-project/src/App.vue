<template>
  <router-link :to="{ name: 'Task' }" class="text-3xl text-red-400 italic"> Task </router-link>
  <router-link :to="{ name: 'UserList' }" class="m-10 text-3xl text-red-400 italic">
    Users
  </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Ajoute ici des styles supplémentaires si nécessaire */
</style>
