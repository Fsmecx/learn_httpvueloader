<template>
  <div class="card">
    <div class="card-header">{{title}} Header</div>
    <div class="card-body">
      <h2>{{title}} body</h2>
      <pixel-component :parent="title">hello</pixel-component>
    </div>
    <div class="card-footer">{{title}} footer</div>
  </div>
</template>
<script>
var x = require("./pixel-component.vue");
module.exports = {
  data: function() {
    return {
      title: "Canvas"
    };
  },
  components: {
    "pixel-component": httpVueLoader("./pixel-component.vue")
  }
};
</script>

