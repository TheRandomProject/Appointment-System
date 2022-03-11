import VueRouter from 'vue-router';

let routes = [
    {
        path: '/dashboard',
        component: require('./example/ExampleComponent.vue').default
    },
    {
        path: '/appointments',
        component: require('./page/appointment/index.vue').default

    }
];

export default new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'is-active'
});
