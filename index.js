const routes = [{
        path: '/foo',
        component: httpVueLoader('components/login-component.vue'),
    },
    {
        path: '/GetAllValues',
        component: httpVueLoader('components/getall.vue'),
    },
    {
        path: '/login',
        component: httpVueLoader('components/center.vue')
    }
];
const router = new VueRouter({
    routes // short for `routes: routes`
});
var x = new Vue({
    el: '#app',
    router,
    components: {
        // 'my-component': httpVueLoader('components/my-component.vue'),
        // 'nav-component': httpVueLoader('components/nav-component.vue'),
        // 'login-component': httpVueLoader('components/login-component.vue'),
        // 'canvas-component': httpVueLoader('./components/canvas-component.vue'),
        'app': httpVueLoader('./app.vue'),
    },
});