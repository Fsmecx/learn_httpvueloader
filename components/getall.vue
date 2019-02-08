<template>
  <div class="card w-100px">
    <div class="card-header">{{title}} Header</div>
    <div class="card-body">
      <h2>{{title}} body</h2>
      <div>
        <span v-if="!resp" class="spinner-border"></span>
      </div>
      {{resp}}
    </div>
    <div class="card-footer">{{title}} footer</div>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      title: "Get all",
      resp: null
    };
  },
  beforeMount: function() {
    var vm = this;
    axios
      .get("http://localhost:4000/users")
      .then(function(resp) {
        // console.log(resp);
        vm.resp = JSON.stringify(resp);
      })
      .catch(function(error) {
        if (!error.response) {
          // network error
          vm.resp = "Error: Network Error";
        } else {
          vm.resp = error.response.data.message;
        }
      })
      .then(function() {
        console.log(vm.resp);
      });
  }
};
</script>
