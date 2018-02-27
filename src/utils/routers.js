import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from '../components/components/main/MainBody'
import TestAjax from '../view/test/TestAjax'
import TestStore from '../view/test/TestStore'
import ActivityRule from '../view/activity/ActivityRule'


let router = new VueRouter({
  routes: [
    {path: '/main',name: 'main',component: TestAjax},
    {
      path: '/auth',
      name: 'main-content',
      component:Main,
      children:[
        {path: '/auth/ajax',name: 'test',component: TestAjax, hidden: false },
        {path: '/auth/store',name: 'store',component: ActivityRule, hidden: false },
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
