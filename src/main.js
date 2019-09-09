import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// Setting up default vue's http modules for API calls
Vue.prototype.$http = axios;
// Load the token from localStorage
const token = localStorage.getItem("token");
// Is there i any token then we will simply append default axios auth headers
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
