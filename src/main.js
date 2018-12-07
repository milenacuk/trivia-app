import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Vuex from 'vuex'
import { chuckModule } from './store/ChuckModule.js'
import { triviaModule } from './store/TriviaModule.js'
import Chuck from './components/Chuck.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/triviaApp'},
  { path: '/triviaApp', component: TriviaApp},
  { path: '/chuck', component: Chuck}
]
const store = new Vuex.Store({
  modules: {
    chuckModule,
    triviaModule
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
