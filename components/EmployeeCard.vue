<template lang="html">
  <div
    class="card card-body col-sm-3 m-1">
    <div>
      <h3 class="text ellipsis">{{ employee.title }}</h3>
    </div>
    <h4><strong>ID:</strong> {{ employee.employeeId }}</h4>
    <nuxt-link
      :to="`/employee/${employee.employeeId}`"
      class="btn btn-primary">{{ $t('infopage.seeEmployee')}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    employee: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.text.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
h4 {
  min-height: 2em;
}
</style>
