import Vue from 'vue'
import Router from 'vue-router'

import find from '@/pages/find'
import friendsShow from '@/pages/friendsShow'
import index from '@/pages/index'
import me from '@/pages/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/friendsShow',
      name: 'fShow',
      component: friendsShow
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ],
  mode: 'history'
})
