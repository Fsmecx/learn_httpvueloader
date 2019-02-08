<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-plans></home-plans>
  </span>
</template>

<script>
module.exports = {
  name: "home",
  components: {
    HomeHero: httpVueLoader("./HomeHero.vue"),
    HomeDetails: httpVueLoader("./HomeDetails.vue"),
    HomePlans: httpVueLoader("./HomePlans.vue")
  }
};
</script>