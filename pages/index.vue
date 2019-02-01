<template>
  <div class="container">
    <header>
      <h1>{{ $t('home') }}</h1>
    </header>
    <nuxt-link
      :to="`./info`"
      class="btn btn-primary">{{ $t('info') }}</nuxt-link>
    <nuxt-link
      :to="`./contact`"
      class="btn btn-primary">{{ $t('contact') }}</nuxt-link>
    <nuxt-link
      :to="`./todos`"
      class="btn btn-primary">{{ $t('stuff') }}</nuxt-link>
    <nuxt-link
      :to="`./about`"
      class="btn btn-primary">{{ $t('about') }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
