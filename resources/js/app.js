// Style
import 'buefy/dist/buefy.css'
require('./bootstrap');
import '@fortawesome/fontawesome-free/css/all.css'
import "@mdi/font/scss/materialdesignicons.scss";

// Components
import VueRouter from "vue-router";
import Vue from "vue";
import Buefy from 'buefy'
import router from "./components/routes.js";
import VueTablerIcons from "vue-tabler-icons";

import Container from "./components/layouts/container.vue";
import Navbar from "./components/layouts/navbar.vue";
import Sidebar from "./components/layouts/sidebar.vue";

Vue.use(Buefy)

Vue.use(VueRouter)

Vue.use(VueTablerIcons);

new Vue({
    el: '#app',
    components: {
        Container,
        Navbar,
        Sidebar
    },
    router,
})
