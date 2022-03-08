// styles
import 'buefy/dist/buefy.css'
require('./bootstrap');
import '@fortawesome/fontawesome-free/css/all.css'

// components
import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

const app = new Vue({
    el: '#app',
});
