/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Nav'
import Main from '@/components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: Navigation
    },
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
