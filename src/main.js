import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/triviaApp'},
  { path: '/triviaApp', component: TriviaApp}
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  
  router,
  render: h => h(App),
}).$mount('#app')
