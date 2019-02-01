<template>
  <div class="container">
    <header>
      <h1>{{ $t('about') }}</h1>
      <nuxt-link
        :to="`/`"
        class="btn btn-primary">{{ $t('home') }}</nuxt-link>
    </header>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
p {
  font-family: 'arial';
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 100px;
}
</style>
