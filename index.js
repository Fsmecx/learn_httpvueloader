// let component1 = {
//     template: `<div class="title">Page 1<v-btn to="/panda">Kung Fu</v-btn></div>`
// }
// let component2 = {
//     template: `<div class="title">Page 2</div>`
// }
// let component3 = {
//     template: `<div class="title">Page 3</div>`
// }
// const routes = [{
//         path: '/',
//         redirect: '/about'
//     },
//     {
//         path: '/home',
//         component: httpVueLoader("./components/foo.vue")
//     },
//     {
//         path: '/about',
//         component: httpVueLoader("./components/bar.vue")
//     },
//     {
//         path: '/page1',
//         name: 'Page 1',
//         component: component1,
//     },
//     {
//         path: '/page2',
//         name: 'Page 2',
//         component: component2,
//     },
//     {
//         path: '/page3',
//         name: 'Page Three',
//         component: component3,
//     },
//     {
//         path: '*',
//         component: httpVueLoader("./components/NotFound.vue")
//     }
// ]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// const router = new VueRouter({
//     // mode: 'history',
//     routes // short for `routes: routes`
// })
// router.beforeEach((to, from, next) => {
//     console.log("before each")
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/login')
//     } else {
//         next()
//     }
// })
// const app = new Vue({
//     name: "app",
//     router,
//     el: "#app",
//     components: {
//         app: httpVueLoader("app.vue")
//     }

// })
// qq(1);
// gg(1);
var url = "https://yesno.wtf/api1"
// url = 'https://dog.ceo/api/breeds/list/all1'
// url = 'https://google.come/test'
// url = "https://cors-anywhere.herokuapp.com/https://demo.ckan.org/api/3/action/group_list"
url = "https://demo.ckan.org/api/3/action/group_list"
// var r = new apiRequest()

// r.url(url).send()
// fetch(url).then(resp => resp.json()).then(data => {
//     console.log(data)
//     return data
// }).then(data => {
//     console.log(data)

// }).catch(error => console.log(error))

$.ajax({
    'url': url,
    // crossDomain: "true",
    // statusCode: {s
    //     404: function () {
    //         console.log("404");
    //     }
    // },
    // headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    // },
    success: data => {
        console.log("success")
        console.log(data)
    },
    error: function (xhr, ajaxOptions, thrownError) {
        console.log("error")
        console.log(xhr.status)
        console.log(ajaxOptions)
        console.log(thrownError)
        console.log("error " + xhr.status)
    },
    complete: function (status, text) {
        console.log('complete')
        console.log(status);
    }
});