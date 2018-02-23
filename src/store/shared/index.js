export default {
  state: {
    loading: false,
    error: null
  },
  // -----------------------------------------------------------------MUTATIONS
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  // -------------------------------------------------------------------ACTIONS
  actions: {
    clearError ({commit}) {
      commit('setError', null)
    }
  },
  // -------------------------------------(To Send to Comp)-------------GETTERS
  getters: {
    loading (state) {
      return state.loading
    },
    errorStatus (state) {
      return state.error
    }
  }
}
