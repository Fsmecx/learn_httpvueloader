let component1 = {
    template: `<div class="title">Page 1<v-btn to="/panda">Kung Fu</v-btn></div>`
}
let component2 = {
    template: `<div class="title">Page 2</div>`
}
let component3 = {
    template: `<div class="title">Page 3</div>`
}
const routes = [{
        path: '/',
        redirect: '/about'
    },
    {
        path: '/home',
        component: httpVueLoader("./components/foo.vue")
    },
    {
        path: '/about',
        component: httpVueLoader("./components/bar.vue")
    },
    {
        path: '/page1',
        name: 'Page 1',
        component: component1,
    },
    {
        path: '/page2',
        name: 'Page 2',
        component: component2,
    },
    {
        path: '/page3',
        name: 'Page Three',
        component: component3,
    },
    {
        path: '*',
        component: httpVueLoader("./components/NotFound.vue")
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})
const app = new Vue({
    name: "app",
    router,
    el: "#app",
    components: {
        app: httpVueLoader("app.vue")
    }

})