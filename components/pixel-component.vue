<template>
  <div class="card">
    <div class="card-body">
      <h2>this is pixel</h2>
      <h3>I'm inside {{parent}}</h3>
      <slot></slot>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: {
    parent: String
  }
};
</script>

