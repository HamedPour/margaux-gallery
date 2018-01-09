import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    galleryData: [
      {
        uid: '001',
        artistName: 'Eugène Delacroix',
        details: 'Ferdinand Victor Eugène Delacroix was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.',
        imgSrc: '/src/assets/images/parisColors.jpg',
        workOnDisplay: 'Price of Freedom'
      },
      {
        uid: '002',
        artistName: 'Nicolas Poussin',
        details: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome.',
        imgSrc: '/src/assets/images/ladyGallery.jpg',
        workOnDisplay: 'Woman of Art'
      },
      {
        uid: '003',
        artistName: 'Élisabeth Vigée Le Brun',
        details: 'Élisabeth Louise Vigée Le Brun, also known as Madame Lebrun, was a prominent French painter. Her artistic style is generally consuidered part of the aftermath of Rococo, while she often adopted a neoclassical style.',
        imgSrc: '/src/assets/images/winterWalk.jpg',
        workOnDisplay: 'Winter of the Mind'
      },
      {
        uid: '004',
        artistName: 'Berthe Morisot',
        details: 'Berthe Marie Pauline Morisot was a painter and a member of the circle of painters in Paris who became known as the Impressionists.',
        imgSrc: '/src/assets/images/jungleBridge.jpg',
        workOnDisplay: 'The New World'
      }
    ]
  },
  // -----------------------------------------------------------------MUTATIONS
  mutations: {},
  // -------------------------------------------------------------------ACTIONS
  actions: {},
  // -------------------------------------(To Send to Comp)-------------GETTERS
  getters: {
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
    }
  }
})
