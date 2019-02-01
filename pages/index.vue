<template>
  <div class="container">
    <header>
      <h1>Home</h1>
    </header>
    <nuxt-link
      :to="`./info`"
      class="btn btn-primary">Info</nuxt-link>
    <nuxt-link
      :to="`./contact`"
      class="btn btn-primary">Contact</nuxt-link>
    <nuxt-link
      :to="`./todos`"
      class="btn btn-primary">Stuff</nuxt-link>
    <nuxt-link
      :to="`./about`"
      class="btn btn-primary">About</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.btn.btn-primary {
  display: flex;
  flex-direction: column;
  width: 10em;
  margin: 5px 0;
}
</style>
