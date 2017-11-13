/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navigation: [],
  index: '',
  mainNavigation: [
    {
      title: 'Главная',
      src: '/' 
    },
    {
      title: 'Программа курса',
      src: '/nav'
    }]
}

const getters = {
  getNav: state => state.navigation,
  getIndex: state => state.index,
  getMainNav: state => state.mainNavigation
}

const actions = {
  addNav: function ({commit}, navigation) {
    commit('ADD_NAV', navigation)
  },
  setIndex: function ({commit}, index) {
    commit('SET_INDEX', index)
  }
}

const mutations = {
  ADD_NAV: function (state, navigation) {
    console.log(navigation)
    state.navigation = navigation
  },
  SET_INDEX: function (state, index) {
    state.index = index
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
