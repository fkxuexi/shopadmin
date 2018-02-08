import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)


const state = {
  crumbs: [
    {name:'首页',url:'/admin/list'}
  ]
}


export default new Vuex.Store({
  state,
  actions,
  mutations
})
