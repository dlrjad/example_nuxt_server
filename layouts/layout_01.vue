<template>
  <div>
    <div class="LangSwitcher">
      <LangSwitcher  />
    </div>
    <nuxt />
    <footer>
      VUE - NUXT - Layout01
      <span>
        <font-awesome-icon :icon="['fab', 'facebook']"/>
        <font-awesome-icon :icon="['fab', 'instagram']"/>
        <font-awesome-icon :icon="['fab', 'twitter']"/>
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
        dlrjad 2019</span>
    </footer>
  </div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'
export default {
  components: {
    LangSwitcher
  }
}
</script>

<style>
.LangSwitcher {
  margin: 2.3% 20px;
}
footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: right;
}
footer span {
  margin-right: 1vw;
  margin-left: 39vw;
}
</style>
