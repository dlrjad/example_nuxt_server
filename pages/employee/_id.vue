<template>
  <div class="container">
    <header>
      <h1>Información del empleado</h1>
      <nuxt-link
      :to="`/info`"
      class="btn btn-primary">Volver</nuxt-link>
    </header>
    <div class="center">
      <img :src="url" alt="photo">
    </div>
  </div>
</template>

<script>
import json from '@/data/employees.json'
export default {
  name: 'InfoEmployee',
  data() {
    return {
      employee: {},
      url: null
    }
  },
  created: async function() {
    let infoemployee = json.find(el => el.employeeId == this.$route.params.id)
    this.url = infoemployee.photo
  }
}
</script>

<style scoped>
.center {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
