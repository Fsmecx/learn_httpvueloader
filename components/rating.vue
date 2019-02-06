<script>
module.exports = {
  props: {},
  data: function() {
    return { rating: 4 };
  },
  components: {}
};
</script>
<template>
  <div>
    <v-app>
      <div class="text-xs-center">
        <span class="fa fa-star fa-2x" v-bind:class="{checked:(rating>0)}" v-on:click="rating=1"></span>
        <span class="fa fa-star fa-2x" v-bind:class="{checked:(rating>1)}" v-on:click="rating=2"></span>
        <span class="fa fa-star fa-2x" v-bind:class="{checked:(rating>2)}" v-on:click="rating=3"></span>
        <span class="fa fa-star fa-2x" v-bind:class="{checked:(rating>3)}" v-on:click="rating=4"></span>
        <span class="fa fa-star fa-2x" v-bind:class="{checked:(rating>4)}" v-on:click="rating=5"></span>
      </div>
    </v-app>
  </div>
</template>
<style scoped>
.checked {
  color: orange;
}
</style>