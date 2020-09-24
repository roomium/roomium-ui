import Vue from "vue";
import App from "./pages/App.vue";
import route from "./routers";

// boostrap vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// boostrap vue end

Vue.config.productionTip = false;

new Vue({
  router: route,
  ...App,
}).$mount("#app");
