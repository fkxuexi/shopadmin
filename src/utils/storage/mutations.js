const PUT_CRUMBS = 'PUT_CRUMBS'
const SUB_CRUMBS = 'SUB_CRUMBS'
const INIT_CRUMBS = 'INIT_CRUMBS'

import util from '../utils'

export default {
  [PUT_CRUMBS](state,item){
    state.crumbs.push(item);
  },
  [SUB_CRUMBS](state,item){
    util.remove(state.crumbs,item);
  }
}
