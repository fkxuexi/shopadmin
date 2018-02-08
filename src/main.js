import Vue from 'vue'
import store from './utils/storage/store'
import App from './App'
import router from './utils/routers'
import ajax from './utils/ajax'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false


Vue.use(ajax);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
