import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import TestAjax from '../view/test/TestAjax'
import TestStore from '../view/test/TestStore'



let router = new Router({
  routes: [
    {path: '/ajax',name: 'test',component: TestAjax},
    {path: '/store',name: 'test',component: TestStore},
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
