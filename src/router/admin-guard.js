import { store } from '../store'

export default (to, from, next) => {
  if (store.getters.user.admin) {
    next()
  } else {
    next('/submission')
  }
}
