<template>
  <div class="container">
    <header>
      <h1><font-awesome-icon icon="home"/> {{ $t('home') }}</h1>
    </header>
    <nuxt-link
      :to="`./`+locale+`info`"
      class="btn btn-primary">{{ $t('info') }}</nuxt-link>
    <nuxt-link
      :to="`./`+locale+`contact`"
      class="btn btn-primary">{{ $t('contact') }}</nuxt-link>
    <nuxt-link
      :to="`./`+locale+`todos`"
      class="btn btn-primary">{{ $t('stuff') }}</nuxt-link>
    <nuxt-link
      :to="`./`+locale+`about`"
      class="btn btn-primary">{{ $t('about') }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      locale: '/'
    }
  },
  created() {
    this.locale = this.$i18n._vm.locale + this.locale
    if(this.locale == 'en/') {
      this.locale = ''
    }
  }
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
