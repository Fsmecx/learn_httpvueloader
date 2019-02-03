<template>
  <div>
    <h1>Canvas</h1>
    <pixel-component/>
  </div>
</template>

<script>
module.exports = {
  name: "canvas-component",
  compoents: {
    "pixel-component": httpVueLoader("components/pixel-component.vue")
  }
};
</script>

<style>
</style>