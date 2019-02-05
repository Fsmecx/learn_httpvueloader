<template>
  <div class="container">
    <div class="card-body">
      <h5 class="card-title">Hello {{who}}</h5>
      <div>
        <p v-if="!ShowSpinner" class="card-text">{{message}}</p>
      </div>
      <p v-if="ShowSpinner" class="spinner-border">
        <span class="sr-only"></span>
      </p>
      <div>
        <button @click="OnSubmit" class="btn btn-primary">
          <slot>Submit</slot>
        </button>
      </div>
    </div>
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalLoginForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="email" id="defaultForm-email" class="form-control validate">
              <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
            </div>

            <div class="md-form mb-4">
              <i class="fas fa-lock prefix grey-text"></i>
              <input type="password" id="defaultForm-pass" class="form-control validate">
              <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-default">Login</button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a
        href
        class="btn btn-default btn-rounded mb-4"
        data-toggle="modal"
        data-target="#modalLoginForm"
      >
        Launch
        Modal Login Form
      </a>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      who: "lao ban",
      message: "click the button first",
      ShowSpinner: false
    };
  },
  methods: {
    OnSubmit: function() {
      console.log("in method");
      this.message = "Clicked";
      var comp = this;
      comp.ShowSpinner = true;
      axios
        .get("https://yesno.wtf/api")
        .then(resp => {
          this.OnHttpGetSuccess(resp);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    OnHttpGetSuccess: function(resp) {
      console.log("in then");
      var data = resp.data;
      console.log(resp);
      console.log("data ");
      console.log(data);
      this.message = data.answer;
      this.ShowSpinner = false;
    }
  }
};
</script>

<style>
/* .nihao {
  background-color: red;
} */
</style>