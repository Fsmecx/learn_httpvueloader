var x = new Vue({
    el: 'app',
    components: {
        // 'my-component': httpVueLoader('components/my-component.vue'),
        // 'nav-component': httpVueLoader('components/nav-component.vue'),
        // 'login-component': httpVueLoader('components/login-component.vue'),
        // 'canvas-component': httpVueLoader('./components/canvas-component.vue'),
        'app': httpVueLoader('./app.vue'),

    }
});