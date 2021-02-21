window.$ = window.jQuery = require('jquery')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
