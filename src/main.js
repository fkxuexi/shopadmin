import Vue from 'vue'
import store from './utils/storage/store'
import App from './App'
import router from './utils/routers'
import component from './utils/component'


import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css'
import '../static/common.css'

Vue.config.productionTip = false

import ajax from './utils/ajax'
import message from './components/lib/msg/Msg'
import notification from './components/lib/notification/Notification'
Vue.prototype.$message = message;
Vue.prototype.$notify = notification;
Vue.use(ajax)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
