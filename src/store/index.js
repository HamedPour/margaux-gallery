import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    galleryData: [
      {
        artistName: 'Eugène Delacroix',
        details: 'Ferdinand Victor Eugène Delacroix was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.',
        artistWorks: [
          'Freedom of Men',
          'Rise of Justice',
          'End of Tyranny'
        ],
        imgSrc: '/src/assets/images/parisColors.jpg'
      },
      {
        artistName: 'Nicolas Poussin',
        details: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome.',
        artistWorks: [
          'Bellow the Sun',
          'Flower',
          'Je Suit'
        ],
        imgSrc: '/src/assets/images/ladyGallery.jpg'
      },
      {
        artistName: 'Élisabeth Vigée Le Brun',
        details: 'Élisabeth Louise Vigée Le Brun, also known as Madame Lebrun, was a prominent French painter. Her artistic style is generally considered part of the aftermath of Rococo, while she often adopted a neoclassical style.',
        artistWorks: [
          'Vector',
          'Vortex',
          'Vivian'
        ],
        imgSrc: '/src/assets/images/winterWalk.jpg'
      },
      {
        artistName: 'Berthe Morisot',
        details: 'Berthe Marie Pauline Morisot was a painter and a member of the circle of painters in Paris who became known as the Impressionists.',
        artistWorks: [
          'Children of Men',
          'Nations of the World',
          'The New World'
        ],
        imgSrc: '/src/assets/images/jungleBridge.jpg'
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
    }
  }
})
