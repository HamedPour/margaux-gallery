import Vue from 'vue'
import Vuex from 'Vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
    },
    artistBank: [],
    exhibitions2018: {
      'winter': {
        title: 'rise of modernity',
        months: 'January - February',
        exhibitionImg: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/exhibitions%2Fmodernity.jpg?alt=media&token=2623eef5-bd9f-45ce-b05f-5de67eaabde8',
        location: 'paris',
        description: 'Displaying great works of art by prominent French artists of modernity',
        openToPublic: true

      },
      'spring': {
        title: 'age of trump',
        months: 'April - June',
        exhibitionImg: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/exhibitions%2Ftrump.jpg?alt=media&token=06e677fb-9487-4e5a-8df7-06993f0cdcac',
        location: 'new york',
        description: 'Displaying works by contemporary artist on the decline of American politics and society',
        openToPublic: false
      },
      'summer': {
        title: 'renaissance of the mind',
        months: 'July - September',
        exhibitionImg: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/exhibitions%2Fmichel.jpg?alt=media&token=83ac6c20-b90a-4175-b4be-2349bf417fa2',
        location: 'london',
        description: 'Displaying prominent works by artist capturing mathematics in the visual arts.',
        openToPublic: false
      },
      'autumn': {
        title: 'explosion of colours',
        months: 'October - December',
        exhibitionImg: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/exhibitions%2Ffall.jpg?alt=media&token=ed0a9016-b12e-4926-ad49-7133d7ecd3d1',
        location: 'Tokyo',
        description: 'Displaying colourful art pieces by prominent Japans artist in celebration of the Autumn Festival,  Tsukimi.',
        openToPublic: false
      }
    },
    loading: false,
    error: null
  },
  // -----------------------------------------------------------------MUTATIONS
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    submissions (state, payload) {
      state.submissions = payload
    },
    artistBank (state, payload) {
      state.artistBank.push(payload)
    },
    setupArtistBank (state, payload) {
      state.artistBank = payload
    },
    artistRemoved (state, payload) {
      state.artistBank.filter(item => {
        return item.id !== payload
      })
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  // -------------------------------------------------------------------ACTIONS
  actions: {
    pullArtistBank ({commit}) {
      commit('setLoading', true)
      commit('setError', null)
      firebase.database().ref('artistdatabase').once('value')
        .then(data => {
          setTimeout(function () {
            commit('setLoading', false)
          }, 500)
          let artistData = []
          let obj = data.val()
          for (let key in obj) {
            artistData.push({
              id: key,
              artistName: obj[key].artistName,
              artworkTitle: obj[key].artworkTitle,
              artistDetails: obj[key].artistDetails,
              artworkURL: obj[key].artworkURL,
              portraitURL: obj[key].portraitURL
            })
          }
          commit('setupArtistBank', artistData)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
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
    },
    newArtist ({commit}, payload) {
      let artist = {
        artistName: payload.artistName,
        artworkTitle: payload.artworkTitle,
        artistDetails: payload.artistDetails
      }
      let key
      let artworkURL
      let portraitURL

      function portImageUpload () {
        commit('setLoading', true)
        commit('setError', null)
        firebase.database().ref('artistdatabase').push(null)
          .then(data => {
            commit('setLoading', false)
            key = data.key
            return key
          })
          .then(key => {
            const portImgName = payload.artistPortImage.name
            const portExt = portImgName.slice(portImgName.lastIndexOf('.'))
            return firebase.storage().ref('artistdatabase/' + key + '.' + portExt).put(payload.artistPortImage)
          })
          .then(fileData => {
            portraitURL = fileData.metadata.downloadURLs[0]
            return firebase.database().ref('artistdatabase').child(key).update({portraitURL: portraitURL})
          })
          .then(() => {
            artist = {
              ...artist,
              portraitURL: portraitURL
            }
          })
          .catch(error => {
            commit('setLoading', false)
            commit('setError', error)
            return console.log(error)
          })
        return artist
      }
      portImageUpload()
      commit('setLoading', true)
      commit('setError', null)
      firebase.database().ref('artistdatabase').push(artist)
        .then(data => {
          commit('setLoading', false)
          key = data.key
          return key
        })
        .then(key => {
          const artImgName = payload.artImage.name
          const artExt = artImgName.slice(artImgName.lastIndexOf('.'))
          return firebase.storage().ref('artistdatabase/' + key + '.' + artExt).put(payload.artImage)
        })
        .then(fileData => {
          artworkURL = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('artistdatabase').child(key).update({artworkURL: artworkURL})
        })
        .then(() => {
          commit('artistBank', {
            ...artist,
            artworkURL: artworkURL,
            portraitURL: portraitURL,
            id: key
          })
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    removeArtist ({commit}, payload) {
      firebase.database().ref('artistdatabase').child(payload).remove()
        .then(data => {
          console.log(payload)
          commit('artistRemoved', payload)
        })
        .catch(error => {
          console.log(error)
        })
    },
    clearError ({commit}) {
      commit('setError', null)
    }
  },
  // -------------------------------------(To Send to Comp)-------------GETTERS
  getters: {
    user (state) {
      return state.user
    },
    artistBank (state) {
      return state.artistBank.sort((A, B) => {
        return A.artistName > B.artistName
      })
    },
    artistBankItem (state) {
      return (itemID) => {
        return state.artistBank.find((item) => {
          return item.id === itemID
        })
      }
    },
    exhibition2018 (state) {
      return state.exhibitions2018
    },
    loading (state) {
      return state.loading
    },
    errorStatus (state) {
      return state.error
    }
  }
})
