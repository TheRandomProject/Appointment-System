import VueRouter from 'vue-router';

let routes = [
    {
        path: '/home',
        component: require('./example/ExampleComponent.vue').default
    }
];

export default new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'is-active'
});