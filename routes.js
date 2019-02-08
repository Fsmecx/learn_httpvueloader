const router = new VueRouter({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'home',
            component: httpVueLoader("./components/Home.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: httpVueLoader('./views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        // {
        //     path: '/menu',
        //     name: 'menu',
        //     component: () => import('./views/Menu.vue')
        // },
        // {
        //     path: '/sign-in',
        //     name: 'signin',
        //     component: () => import('./views/Signin.vue')
        // },
        // {
        //     path: '/join',
        //     name: 'join',
        //     component: () => import('./views/Join.vue')
        // }
    ]
});