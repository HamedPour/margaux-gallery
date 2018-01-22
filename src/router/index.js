import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Artists from '@/components/Artists'
import Exhibition from '@/components/Exhibition'
import News from '@/components/News'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import GalleryItem from '@/components/GalleryItem'
import Submission from '@/components/Submission'

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
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition
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
      path: '/gallery/:uid',
      props: true,
      name: 'GalleryItem',
      component: GalleryItem
    },
    {
      path: '/submission',
      name: 'Submission',
      component: Submission
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
