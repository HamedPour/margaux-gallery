/*
  Only import modules in. Helps keep the state organised.
 */
import Vue from 'vue'
import Vuex from 'Vuex'

import user from './user'
import artists from './artists'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    shared: shared,
    user: user,
    artists: artists
  }
})
