<script>
var x = require("../js/vuetify.js");
module.exports = {
  props: {
    parent: String
  },
  data: function() {
    return { rating: 3 };
  },
  components: {
    // "test-component": testComponent
  }
};
</script>
<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2>this is pixel</h2>
        <h3>I'm inside {{parent}}</h3>
        <button class="btn btn-primary">
          <slot></slot>
        </button>
      </div>
    </div>
    <div class="text-xs-center">
      <v-rating v-model="rating"></v-rating>
    </div>
  </div>
</template>
