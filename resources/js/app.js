// Style
import 'buefy/dist/buefy.css'
require('./bootstrap');
import '@fortawesome/fontawesome-free/css/all.css'

// Components
import VueRouter from "vue-router";
import Vue from "vue";
import Buefy from 'buefy'
import router from "./components/routes.js";
import Container from "./components/layouts/container.vue";


Vue.use(Buefy)

Vue.use(VueRouter)

new Vue({
    el: '#app',
    components: {
        Container
    },
    router,
})
