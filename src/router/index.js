import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Artists from '@/components/Artists'
import Exhibition from '@/components/Exhibition'
import Fairs from '@/components/Fairs'
import News from '@/components/News'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import GalleryItem from '@/components/GalleryItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/exibition',
      name: 'Exhibition',
      component: Exhibition
    },
    {
      path: '/fairs',
      name: 'Fairs',
      component: Fairs
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/galleryitem',
      name: 'GalleryItem',
      component: GalleryItem
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
