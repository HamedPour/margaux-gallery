// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '@/styles/master.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import {store} from './store/index.js'
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBo9UyAdi8o-KBghoyjbjZQ6zEDaA23dks',
      authDomain: 'vuejs-http-5e61e.firebaseapp.com',
      databaseURL: 'https://vuejs-http-5e61e.firebaseio.com',
      projectId: 'vuejs-http-5e61e',
      storageBucket: 'vuejs-http-5e61e.appspot.com'
    })
  }
})
