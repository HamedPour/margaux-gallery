import * as firebase from 'firebase'

export default {
  state: {
    user: {
      id: null,
      admin: false
    },
    submissions: {
      artistName: null,
      artworkTitle: null,
      artDescription: null,
      artworkURL: null,
      id: null
    }
  },
  // -----------------------------------------------------------------MUTATIONS
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    submissions (state, payload) {
      state.submissions = payload
    }
  },
  // -------------------------------------------------------------------ACTIONS
  actions: {
    autoSignIn ({commit}, payload) {
      if (payload.uid === 'YgsX5fITGcSyjwiNhp2tX05ilA02') {
        commit('setUser', {id: payload.uid, admin: true})
      } else {
        commit('setUser', {id: payload.uid, admin: false})
      }
    },
    SignInUser ({commit}, playload) {
      commit('setLoading', true)
      commit('setError', null)
      firebase.auth().signInWithEmailAndPassword(playload.email, playload.password)
        .then(
          user => {
            commit('setLoading', false)
            let newUser = {}
            // is user an Admin
            if (user.uid === 'YgsX5fITGcSyjwiNhp2tX05ilA02') {
              newUser = {id: user.uid, admin: true}
            } else {
              newUser = {id: user.uid}
            }
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    SignOutUser ({commit}) {
      firebase.auth().signOut()
      commit('setUser', {id: null, admin: false})
    },
    newSubmission ({commit}, payload) {
      // send data to firebase
      const newsubmission = {
        artistName: payload.artistName,
        artworkTitle: payload.artworkTitle,
        artDescription: payload.artDescription
      }
      let key
      let imageUrl
      commit('setLoading', true)
      commit('setError', null)
      firebase.database().ref('submissions').push(newsubmission)
        .then((data) => {
          commit('setLoading', false)
          key = data.key
          return key
        })
        .then(key => {
          const imgFileName = payload.artImage.name
          const ext = imgFileName.slice(imgFileName.lastIndexOf('.'))
          return firebase.storage().ref('submissions/' + key + '.' + ext).put(payload.artImage)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('submissions').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('submissions', {
            ...newsubmission,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    }
  },
  // -------------------------------------(To Send to Comp)-------------GETTERS
  getters: {
    user (state) {
      return state.user
    }
  }
}
