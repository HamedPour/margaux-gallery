import Vue from 'vue'
import Vuex from 'Vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: null
    },
    submissions: {
      artistName: null,
      artworkTitle: null,
      artDescription: null,
      artworkURL: null,
      id: null
    },
    galleryData: [
      {
        uid: '001',
        artistName: 'Eugène Delacroix',
        artistImage: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/artistPortraits%2FeugenePortrait.jpg?alt=media&token=247bdb0b-7159-49cd-994b-ea1aa285d125',
        details: 'Ferdinand Victor Eugène Delacroix was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/galleryImages%2Fliberty.jpg?alt=media&token=0ce0b3d8-1763-492e-b10d-5032e8db2d9a',
        workOnDisplay: 'liberty leading the people'
      },
      {
        uid: '002',
        artistName: 'Nicolas Poussin',
        artistImage: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/artistPortraits%2FnicolasPortrait.jpg?alt=media&token=5f5bf82d-a10c-4a3f-837d-e2865b595040',
        details: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/galleryImages%2Fdiogenes.jpg?alt=media&token=a79f5296-6e02-4037-81c9-eecf71a8ffdb',
        workOnDisplay: 'landscape with diogenes'
      },
      {
        uid: '003',
        artistName: 'Élisabeth Vigée Le Brun',
        artistImage: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/artistPortraits%2FelisabethPortrait.jpg?alt=media&token=f80e1be3-9f06-4368-a567-27ecb12302d1',
        details: 'Élisabeth Louise Vigée Le Brun, also known as Madame Lebrun, was a prominent French painter.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/galleryImages%2Fbather.jpg?alt=media&token=9a829301-83f9-4102-b6f1-e6b0b06324cc',
        workOnDisplay: 'the bather'
      },
      {
        uid: '004',
        artistName: 'Berthe Morisot',
        artistImage: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/artistPortraits%2FberthePortrait.jpg?alt=media&token=7dffa774-5e14-41e2-824e-9dbf6c05d195',
        details: 'Berthe Marie Pauline Morisot was a painter and a member of the circle of painters in Paris who became known as the Impressionists.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/vuejs-http-5e61e.appspot.com/o/galleryImages%2Fgarden.jpg?alt=media&token=9e562c6e-b7e9-4408-b7b9-f4b8ae43f61b',
        workOnDisplay: 'the garden at bougival'
      }
    ],
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
      console.log(payload)
      state.submissions = {
        artistName: payload.artistName,
        artworkTitle: payload.artworkTitle,
        artDescription: payload.artDescription,
        artworkURL: payload.artImage,
        id: payload.id
      }
    }
  },
  // -------------------------------------------------------------------ACTIONS
  actions: {
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    SignInUser ({commit}, playload) {
      firebase.auth().signInWithEmailAndPassword(playload.email, playload.password)
        .then(
          user => {
            const newUser = {id: user.uid}
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          console.log(error)
        })
    },
    SignOutUser ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    newSubmission ({commit}, payload) {
      // send data to firebase
      firebase.database().ref('submissions').push(payload)
        .then((data) => {
          const key = data.key
          console.log(data.key)
          commit('submissions', {
            ...payload,
            id: key
          })
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
    galleryData (state) {
      return state.galleryData.sort((A, B) => {
        return A.artistName > B.artistName
      })
    },
    galleryItem (state) {
      return (itemID) => {
        return state.galleryData.find((item) => {
          return item.uid === itemID
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
