import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


const state = {
  crumbs: [
    {name:'首页',remove:false}
  ]
}


export default new Vuex.Store({
  state,
  actions,
  mutations
})
