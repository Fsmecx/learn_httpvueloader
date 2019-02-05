<template>
  <div>
    <div class="card" style="width:500px">
      <div class="card-header">App.Vue Header</div>
      <div class="card-body">
        <h1>App.vue Body</h1>
        {{test}}
        <canvas-component></canvas-component>
      </div>
      <div class="card-footer">App.Vue Footer</div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      test: "app.vue test"
    };
  },
  components: {
    "canvas-component": httpVueLoader("./canvas-component.vue")
  }
};
</script>
