const en = require('../lang/en-US.js')
const fr = require('../lang/fr-FR.js')
const es = require('../lang/es-ES.js')

const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español'
    }
  ],
  defaultLocale: 'en',
  routes: {
    'index': {
      fr: '/page-principal',
      en: '/home',
      es: '/pagina-principal'
    },
    'about': {
      fr: '/a-propos',
      en: '/about-us',
      es: '/acerca-de'
    },
    'todos': {
      fr: '/choses',
      en: '/stuff',
      es: '/cosas'
    },
    'contact': {
      fr: '/contact_fr',
      en: '/contact',
      es: '/contacto'
    },
    'employee': {
      fr: '/information_fr',
      en: '/information',
      es: '/informacion'
    },
    'employee/_id': {
      fr: '/information_fr/:id?',
      en: '/information/:id?',
      es: '/informacion/:id?'
    }
  },
  /*routes: {
    'about': {
      fr: '/a-propos',
      en: '/about-us'
    },
    'posts': {
      fr: '/articles'
    },
    'post/_id': {
      fr: '/article/:id?',
      es: '/articulo/:id?'
    },
    'dynamicNested/_category': {
      fr: 'imbrication-dynamique/:category'
    }
  },*/
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, fr, es }
  }
}

module.exports = {
  I18N
}
