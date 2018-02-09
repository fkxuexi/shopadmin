import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import TestAjax from '../view/test/TestAjax'
import TestStore from '../view/test/TestStore'
import Main from '../components/components/main/MainBody'


let router = new VueRouter({
  routes: [
    {path: '/main',name: 'main',component: TestAjax},
    {
      path: '/auth',
      name: 'main-content',
      component:Main,
      children:[
        {path: '/auth/ajax',name: 'test',component: TestAjax, hidden: false },
        {path: '/auth/store',name: 'store',component: TestStore, hidden: false },
      ]
    },


  ]
})

router.beforeEach((to, from, next) => {
  if (true) {
    next();
  } else {
    next({path: '/url'});
  }
})
export default router;
