<template>
  <div class="hello">Hello {{who}}</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      who: "world"
    };
  }
};
</script>

<style>
.hello {
  background-color: rgb(179, 179, 127);
}
</style>