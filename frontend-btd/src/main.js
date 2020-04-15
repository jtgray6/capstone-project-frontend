import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBlBbuCm0P0rqCou8kmyRcqIcC_1m0Mok0',
    libraries: 'places',
  },
})
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
