<script>
// var x = require("../js/vuetify.js");
module.exports = {
  props: {},
  data: function() {
    return {
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"]
      ],
      show: true
    };
  },
  components: {}
};
</script>
<template>
  <div>
    <v-container fluid class="text-xs-center">
      <v-layout justify-space-between row wrap>
        <v-flex xs12>
          <v-btn color="indigo" class="white--text" @click="show = !show">Toggle</v-btn>
        </v-flex>

        <v-flex xs12 class="mt-5">
          <v-badge v-model="show" color="cyan" left>
            <span slot="badge">6</span>
            <v-icon large color="grey lighten-1">shopping_cart</v-icon>
          </v-badge>

          <v-badge v-model="show" color="purple">
            <span slot="badge">6</span>
            <v-icon large color="grey">mail</v-icon>
          </v-badge>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.checked {
  color: orange;
}
</style>
