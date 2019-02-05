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
      <!-- <login-component/> -->
    </div>
  </div>
</template>
<script>
var canvasComponent = httpVueLoader("./components/canvas-component.vue");
var loginComponent = httpVueLoader("./components/login-component.vue");
module.exports = {
  data: function() {
    return {
      test: "app.vue test"
    };
  },
  components: {
    "canvas-component": canvasComponent,
    "login-component": loginComponent
  }
};
</script>
