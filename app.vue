<template >
  <v-app>
    <menu-component></menu-component>
    <v-toolbar app>
      <v-toolbar-title>Category 1B</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>hello</v-footer>
  </v-app>
</template> 
<script >
module.exports = {
  props: {},
  data: function() {
    return {};
  },
  components: {
    "menu-component": httpVueLoader("./components/menu.vue")
  }
};
</script>