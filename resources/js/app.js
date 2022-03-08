// Style
import 'buefy/dist/buefy.css'
require('./bootstrap');
import '@fortawesome/fontawesome-free/css/all.css'

// Components
import router from "./components/routes";
import VueRouter from "vue-router";
import Vue from "vue";
import Buefy from 'buefy'
import IdleVue from 'idle-vue'


Vue.use(IdleVue, {
	eventEmitter: app,
	idleTime: 300000,
})


Vue.use(Buefy)

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
})
