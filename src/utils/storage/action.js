export default {
  put_crumbs({commit,state},item){
    if(item != null){
      commit('PUT_CRUMBS',item);
    }
  },
  sub_crumbs({commit,state},item){
    if(item != null){
      commit('SUB_CRUMBS',item);
    }
  }

}
