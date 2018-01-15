import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    galleryData: [
      {
        uid: '001',
        artistName: 'Eugène Delacroix',
        artistImage: '/src/assets/images/portraits/eugenePortrait.jpg',
        details: 'Ferdinand Victor Eugène Delacroix was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.',
        imgSrc: '/src/assets/images/parisColors.jpg',
        workOnDisplay: 'Liberty Leading the People'
      },
      {
        uid: '002',
        artistName: 'Nicolas Poussin',
        artistImage: '/src/assets/images/portraits/nicolasPortrait.jpg',
        details: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome.',
        imgSrc: '/src/assets/images/ladyGallery.jpg',
        workOnDisplay: 'Landscape with Diogenes'
      },
      {
        uid: '003',
        artistName: 'Élisabeth Vigée Le Brun',
        artistImage: '/src/assets/images/portraits/elisabethPortrait.jpg',
        details: 'Élisabeth Louise Vigée Le Brun, also known as Madame Lebrun, was a prominent French painter. Her artistic style is generally consuidered part of the aftermath of Rococo, while she often adopted a neoclassical style.',
        imgSrc: '/src/assets/images/winterWalk.jpg',
        workOnDisplay: 'Countess of Châtre'
      },
      {
        uid: '004',
        artistName: 'Berthe Morisot',
        artistImage: '/src/assets/images/portraits/berthePortrait.jpg',
        details: 'Berthe Marie Pauline Morisot was a painter and a member of the circle of painters in Paris who became known as the Impressionists.',
        imgSrc: '/src/assets/images/jungleBridge.jpg',
        workOnDisplay: 'The Garden at Bougival'
      }
    ],
    theNews: [
      {
        source: {
          id: 'global.com777938',
          name: 'Global News Network'
        },
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Ed O\'Raiely',
        title: 'The Globe Theator opens display great french works of art of the 19th century',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Gallery_of_Old_European_Painting_NMW.jpg',
        publishedDate: '2018-01-12'
      },
      {
        source: {
          id: 'CNN-4857367384',
          name: 'CNN'
        },
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Jack Bakerstreet',
        title: 'Opening of the great Chateau Library in Paris',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Muzeum_Narodowe_w_Warszawie_Galeria_Sztuki_XIX_wieku.JPG',
        publishedDate: '2018-01-22'
      },
      {
        source: {
          id: 'BBC-859847593845',
          name: 'BBC'
        },
        imgUrl: '/src/assets/images/winterTrees.jpg',
        author: 'Havash Naseem',
        title: 'Rise of the Machines: Trump to make wall to against robots',
        urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Gardiner_Art_Gallery.JPG',
        publishedDate: '2018-01-29'
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
    },
    theNews (state) {
      return state.theNews
    }
  }
})
