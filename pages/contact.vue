<template>
  <div class="container">
    <header>
      <h1>{{ $t('contact') }}</h1>
      <nuxt-link
      :to="`/`"
      class="btn btn-primary">{{ $t('home') }}</nuxt-link>
    </header>

    <div class="center">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">{{ $t('contactpage.userEmail') }}</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
          <small id="emailHelp" class="form-text text-muted">{{ $t('contactpage.obligatoryField') }}</small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">{{ $t('contactpage.query') }}</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t('contactpage.send') }}</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactPage'
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
.form-control {
  width: 30vw;
}
</style>
