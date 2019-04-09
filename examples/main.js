import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import {Input} from 'a-pei'

// Vue.use(Input)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
