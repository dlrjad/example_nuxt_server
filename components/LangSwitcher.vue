<template>
  <span class="lang-switcher">
    <font-awesome-icon icon="language"/>
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
  </span>
  <!--<div>
    <b-dropdown id="ddown1" text="Translations" class="m-md-2">
        <b-dropdown-item
          v-for="(locale, i) in showLocales"
          :key="i"
          :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </b-dropdown-item>
    </b-dropdown>
  </div>-->
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      //return this.$i18n.locales
    }
  }
}
</script>
