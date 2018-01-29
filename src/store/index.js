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
    exhibitions2018: [
      {
        title: 'rise of modernity',
        season: 'Winter',
        months: 'January - February'
      },
      {
        title: 'age of trump',
        season: 'Spring',
        months: 'April - Jun'
      }
    ],
    theNews: [
      {
        uid: 'fuovhloesrhglkjbvz',
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Ed O\'Raiely',
        title: 'The Globe Theator opens display great french works of art of the 19th century',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Gallery_of_Old_European_Painting_NMW.jpg',
        publishedDate: '2018-01-12'
      },
      {
        uid: 'iuizurhg87zyz',
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Jack Bakerstreet',
        title: 'Opening of the great Chateau Library in Paris',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Muzeum_Narodowe_w_Warszawie_Galeria_Sztuki_XIX_wieku.JPG',
        publishedDate: '2018-01-22'
      },
      {
        uid: 'ou7y87ysygdifygfdy',
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Havash Naseem',
        title: 'Rise of the Machines: Trump to make wall to against robots',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Gardiner_Art_Gallery.JPG',
        publishedDate: '2018-01-29'
      }
    ]
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
      state.artistBank.forEach(item => {
        if (item.id === payload) {
          return state.artistBank.splice(item, 1)
        }
      })
    }
  },
  // -------------------------------------------------------------------ACTIONS
  actions: {
    pullArtistBank ({commit}) {
      firebase.database().ref('artistdatabase').once('value')
        .then(data => {
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
      firebase.auth().signInWithEmailAndPassword(playload.email, playload.password)
        .then(
          user => {
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
      firebase.database().ref('submissions').push(newsubmission)
        .then((data) => {
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
        firebase.database().ref('artistdatabase').push(null)
          .then(data => {
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
            return console.log(error)
          })
        return artist
      }
      portImageUpload()

      firebase.database().ref('artistdatabase').push(artist)
        .then(data => {
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
          console.log(error)
        })
    },
    removeArtist ({commit}, payload) {
      firebase.database().ref('artistdatabase').child(payload).remove()
        .then(data => {
          console.log(data)
          commit('artistRemoved', payload)
        })
        .catch(error => {
          console.log(error)
        })
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
    theNews (state) {
      return state.theNews
    },
    theNewsItem (state) {
      return (itemID) => {
        return state.theNews.find((item) => {
          return item.uid === itemID
        })
      }
    }
  }
})
