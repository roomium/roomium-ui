import Vue from 'vue'
import App from './pages/App.vue'
import route from './routers'

Vue.config.productionTip = false

new Vue({
  router: route,
  ...App
}).$mount('#app')
