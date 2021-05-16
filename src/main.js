import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false

//Load the token the localStorage
Vue.prototype.$http = axios
const token = localStorage.getItem('token')

//Is there is any token then we will simply append default axios authorization header
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')