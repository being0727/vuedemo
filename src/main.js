import Vue from 'vue'
import App from './App'

// TODO

Vue.config.productionTip = false
let vm = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})

Vue.use({
    vm
})