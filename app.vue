<template>
  <div>
    <div>
      <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/login">Login</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/GetAllValues">Go to GetAllValues</router-link>
      </p>
    </div>
    <router-view></router-view>
    <googleyoutube-component></googleyoutube-component>
  </div>
</template>
<script>
var canvasComponent = httpVueLoader("./components/canvas-component.vue");
var loginComponent = httpVueLoader("./components/login-component.vue");

module.exports = {
  props: {},
  data: function() {
    return {
      test: "app.vue test"
    };
  },

  components: {
    "canvas-component": canvasComponent,
    "login-component": loginComponent,
    "getall-component": httpVueLoader("./components/getall.vue"),
    "vuetify-test": httpVueLoader("./components/vuetifytest.vue"),
    "rating-component": httpVueLoader("./components/rating.vue"),
    "googleyoutube-component": httpVueLoader("./components/googleyoutube.vue")
  }
};
</script>
