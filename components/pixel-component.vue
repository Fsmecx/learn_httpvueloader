
 
<script>
require("../js/vuetify.js");
module.exports = {
  props: {
    parent: String
  },
  data: function() {
    return {};
  },
  components: {
    // "test-component": testComponent
  }
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h2>this is pixel</h2>
      <h3>I'm inside {{parent}}</h3>
      <button class="btn btn-primary">
        <slot></slot>
      </button>
    </div>

    <v-app>
     <v-layout align-center>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn depressed small>Normal</v-btn>
      </div>
      <div>
        <v-btn depressed small color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn depressed small color="error">Error</v-btn>
      </div>
      <div>
        <v-btn depressed small disabled>Disabled</v-btn>
      </div>
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn depressed>Normal</v-btn>
      </div>
      <div>
        <v-btn depressed color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn depressed color="error">Error</v-btn>
      </div>
      <div>
        <v-btn depressed disabled>Disabled</v-btn>
      </div>
    </v-flex>

    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn depressed large>Normal</v-btn>
      </div>
      <div>
        <v-btn depressed large color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn depressed large color="error">Error</v-btn>
      </div>
      <div>
        <v-btn depressed large disabled>Disabled</v-btn>
      </div>
    </v-flex>
  </v-layout>
    <v-app>
  </div>
</template>
