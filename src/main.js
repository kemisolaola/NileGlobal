import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')
