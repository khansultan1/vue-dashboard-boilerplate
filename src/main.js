import Vue from 'vue';
import App from './App.vue';
import Routes from './routes.js';
import VueRouter from 'vue-router';
import 'jquery/dist/jquery.min.js'
Vue.config.productionTip = false
Vue.use(VueRouter)
var router = new VueRouter({
  routes: Routes,
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
