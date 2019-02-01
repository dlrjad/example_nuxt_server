<template>
  <div class="container">
    <header>
      <h1>{{ $t('info') }}</h1>
      <nuxt-link
        :to="`/`"
        class="btn btn-primary">{{ $t('home') }}</nuxt-link>
    </header>
    <div class="center">
      <div class="row justify-content-around">
        <EmployeeCard
          v-for="employee in employees"
          :employee="employee"
          :key="employee.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeCard from '@/components/EmployeeCard'
import json from '@/data/employees.json'
export default {
  name: 'InfoPage',
  components: {
    EmployeeCard
  },
  data() {
    return {
      employees:[]
    }
  },
  created() {
    this.employees = json
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
