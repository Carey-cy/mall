import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
