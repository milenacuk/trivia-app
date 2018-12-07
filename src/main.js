import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/triviaApp'},
  { path: '/triviaApp', component: TriviaApp}
]
const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
})

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
