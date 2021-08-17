import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGeolocation)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps,
  {
    load: {
      key: 'AIzaSyBA_R48uaqSS-Z47jB6gCJxr_B2KMdIt8E'
    },
    installComponents: true
  })

new Vue({
  router,
  store,
  vuetify,
  VueGeolocation,
  VueGoogleMaps,
  render: h => h(App)
}).$mount('#app')
