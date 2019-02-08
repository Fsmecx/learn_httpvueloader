const app = new Vue({
    router,
    el: "#app",
    components: {
        app: httpVueLoader("app.vue")
    }

})