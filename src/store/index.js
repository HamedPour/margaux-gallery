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
      artworkURL: null
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
        month: 'January',
        exhibitionDays: '14 - 18',
        artist: 'Élisabeth vigée le brun',
        artistBio: 'Born in Paris on 16 April 1755, Marie-Louise-Élisabeth Vigée was the daughter of a portraitist and fan painter, Louis Vigée, from whom she received her first instruction. Her mother, Jeanne (née Maissin), was a hairdresser.',
        painting: 'the bather',
        description: 'he general impression created by the Bather portrait is one of great serenity, enriched by a definite air of mystery. The serenity comes from the muted colour scheme, the soothing sfumato tonality, and the harmony created by the sitter\'s pyramid-shaped pose and understated drapery. '
      },
      {
        month: 'February',
        exhibitionDays: '19 - 28',
        artist: 'Berthe Morisot',
        artistBio: 'Morisot was born in Bourges, France, into an affluent bourgeois family. Her father, Edmé Tiburce Morisot, was the prefect (senior administrator) of the department of Cher. He also studied architecture at École des Beaux Arts. Her mother, Marie-Joséphine-Cornélie Thomas, was the great-niece of Jean-Honoré Fragonard, one of the most prolific Rococo painters of the ancien régime.',
        painting: 'the garden at bougival',
        description: 'The portrait shows the subject sitting upright and sideways in a chair, with her face and chest turned slightly towards the viewer: a posture derived from the \'pyramid\' image used to depict a sitting Madonna. Her left arm sits comfortably on the armrest of the chair and is clasped by the hand of her right arm which crosses her front.'
      },
      {
        month: 'March',
        exhibitionDays: '2 - 23',
        artist: 'Nicolas Poussin',
        artistBio: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome. Most of his works were on religious and mythological subjects painted for a small group of Italian and French collectors.',
        painting: 'landscape with diogenes',
        description: 'Whereas the mood of the London Landscape with a Man Killed by a Snake is intentionally severe, the Landscape with Diogenes in the Louvre is much lighter in tone and mood. In it the well-known story of Diogenes, the humble philosopher, is depicted. Rejecting all worldly goods, he even throws away his last remaining possession, his drinking cup, when he sees a man drinking water from a stream by cupping his hands. '
      },
      {
        month: 'April',
        exhibitionDays: '14 - 28',
        artist: 'Eugène Delacroix',
        artistBio: 'Eugène Delacroix was born on 26 April 1798 at Charenton-Saint-Maurice in Île-de-France, near Paris. His mother was named Victoire, daughter of the cabinet-maker Jean-François Oeben. He had three much older siblings.',
        painting: 'liberty leading the people',
        description: 'Delacroix depicted Liberty as both an allegorical goddess-figure and a robust woman of the people. The mound of corpses acts as a kind of pedestal from which Liberty strides, barefoot and bare-breasted, out of the canvas and into the space of the viewer. The Phrygian cap she wears had come to symbolize liberty during the first French Revolution.'
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
      state.submissions = {
        artistName: payload.artistName,
        artworkTitle: payload.artworkTitle,
        artDescription: payload.artDescription,
        artworkURL: payload.artImage
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
      commit('submissions', payload)
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
    },
    submittedData (state) {
      return state.submissions
    }
  }
})
