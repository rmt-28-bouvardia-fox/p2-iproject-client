<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useUserStore, ["register"]),
    handleRegister() {
      try {
        console.log("masuk handleregister");
        this.register({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Succesfully register",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `${error.message}`,
        });
      }
    },
    // directLogin() {
    //   this.$router.push("/login");
    // },
  },
};
</script>

<template>
  <!-- Section: Design Block -->
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <section class="text-center text-lg-start">
    <!-- Jumbotron -->
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div
            class="card cascading-right"
            style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
            "
          >
            <div class="card-body p-5 shadow-5 text-center">
              <h2 class="fw-bold mb-5 text-dark">Sign up now</h2>
              <form id="register-form" @submit.prevent="handleRegister">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="form-outline mb-4">
                  <input
                    type="username"
                    id="form3Example3"
                    class="form-control"
                    placeholder="Enter your username ..."
                    autocomplete="off"
                    required
                    v-model="username"
                  />
                  <label class="form-label" for="form3Example3">Username</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="emailRegister"
                    class="form-control"
                    placeholder="Enter your email address ..."
                    autocomplete="off"
                    required
                    v-model="email"
                  />
                  <label class="form-label" for="emailRegister"
                    >Email address</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="passwordRegister"
                    class="form-control"
                    placeholder="Enter your password ..."
                    autocomplete="off"
                    required
                    v-model="password"
                  />
                  <label class="form-label" for="passwordRegister"
                    >Password</label
                  >
                </div>

                <!-- Checkbox -->

                <!-- Submit button -->
                <button type="submit" class="btn btn-dark btn-block mb-4">
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
            class="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</template>

<style>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>
