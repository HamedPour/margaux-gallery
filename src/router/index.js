import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Artists from '@/components/Artists'
import Exhibition from '@/components/Exhibition'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import GalleryItem from '@/components/GalleryItem'
import Submission from '@/components/Submission'
import Admin from '@/components/Admin'

// Router Guards
import AdminGuard from './admin-guard'
// =============

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/margaux-gallery/',
      redirect: '/'
    },
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
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/gallery/:id',
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
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: AdminGuard
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
