<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
var canvasComponent = httpVueLoader("./components/canvas-component.vue");
var loginComponent = httpVueLoader("./components/login-component.vue");
var appNav = httpVueLoader("./components/AppNavigation.vue");
module.exports = {
  props: {},
  data: function() {
    return {
      test: "app.vue test"
    };
  },
  components: {
    "app-navigation": appNav,
    "login-component": loginComponent,
    "getall-component": httpVueLoader("./components/getall.vue"),
    "vuetify-test": httpVueLoader("./components/vuetifytest.vue"),
    "rating-component": httpVueLoader("./components/rating.vue"),
    "googleyoutube-component": httpVueLoader("./components/googleyoutube.vue")
  }
};
</script>
