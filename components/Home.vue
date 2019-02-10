<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-plans></home-plans>
  </span>
</template>

<script>
import * as x from "./HomeDetails.vue";
module.exports = {
  name: "home",
  components: {
    HomeHero: httpVueLoader("./HomeHero.vue"),
    HomeDetails: x, //httpVueLoader("./HomeDetails.vue"),
    HomePlans: httpVueLoader("./HomePlans.vue")
  }
};
</script>