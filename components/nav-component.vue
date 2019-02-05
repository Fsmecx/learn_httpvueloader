<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active">
          <a href="#">Home</a>
          {{who}}
          <slot></slot>
        </li>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
        <li>
          <a href="#">Page 3</a>
        </li>
      </ul>
    </div>
  </nav>
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
  background-color: #ffe;
}
</style>