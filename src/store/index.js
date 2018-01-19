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
        imgSrc: '/src/assets/images/liberty.jpg',
        workOnDisplay: 'Liberty Leading the People'
      },
      {
        uid: '002',
        artistName: 'Nicolas Poussin',
        artistImage: '/src/assets/images/portraits/nicolasPortrait.jpg',
        details: 'Nicolas Poussin was the leading painter of the classical French Baroque style, although he spent most of his working life in Rome.',
        imgSrc: '/src/assets/images/diogenes.jpg',
        workOnDisplay: 'Landscape with Diogenes'
      },
      {
        uid: '003',
        artistName: 'Élisabeth Vigée Le Brun',
        artistImage: '/src/assets/images/portraits/elisabethPortrait.jpg',
        details: 'Élisabeth Louise Vigée Le Brun, also known as Madame Lebrun, was a prominent French painter.',
        imgSrc: '/src/assets/images/bather.jpg',
        workOnDisplay: 'the bather'
      },
      {
        uid: '004',
        artistName: 'Berthe Morisot',
        artistImage: '/src/assets/images/portraits/berthePortrait.jpg',
        details: 'Berthe Marie Pauline Morisot was a painter and a member of the circle of painters in Paris who became known as the Impressionists.',
        imgSrc: '/src/assets/images/garden.jpg',
        workOnDisplay: 'The Garden at Bougival'
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
      }
    ],
    theNews: [
      {
        source: {
          id: 'global.com777938',
          name: 'Global News Network'
        },
        uid: 'fuovhloesrhglkjbvz',
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
        uid: 'iuizurhg87zyz',
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
