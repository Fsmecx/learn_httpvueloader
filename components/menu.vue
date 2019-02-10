<template>
  <v-navigation-drawer app fixed clipped>
    <!-- <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Category 1B Project</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>-->
    <!-- <v-divider></v-divider> -->
    <!-- <v-list>
      <v-list-tile v-for="item in items" :key="item.key" :to="{path:item.path}">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>-->
    <v-list>
      <v-list-tile v-for="i in 3" :key="i" to="{path: '/page' + i}">
        <v-list-tile-action>
          <v-icon>{{ icons[i-1] }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Page {{ i }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
module.exports = {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard", path: "/home" },
        { title: "About", icon: "question_answer", path: "/about" }
      ],
      right: null,
      icons: ["dashboard", "home", "event"]
    };
  }
};
</script>
<style>
li .a {
  text-decoration: none;
}
</style>

