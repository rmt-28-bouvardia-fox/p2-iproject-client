<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapWritableState(useUserStore, {
      storeId: "id",
      storeEmail: "email",
    }),
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    handleLogin() {
      console.log("masuk handlelogin");
      this.login({ email: this.email, password: this.password })
        .then((result) => {
          console.log(result.data);
          localStorage.setItem("access_token", result.data.access_token);
          localStorage.setItem("username", result.data.username);
          this.id = result.data.id;
          this.storeEmail = result.data.email;
          this.$router.push("/");

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You're now logging in",
          });
        })
        .catch((err) => {
          console.log(err, "<<< error");
          // console.log(err.name, "<<< error name");

          Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${err.message}`,
          });
        });
    },
  },
};
</script>

<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <!-- Section: Design Block -->
  <section class="text-center text-lg-start">
    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img
            src="https://images.unsplash.com/photo-1574484184081-afea8a62f9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80"
            alt="Drive Poster"
            class="w-100 rounded-4 shadow-4"
          />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">
            <h2 class="fw-bold mb-5 text-dark">Login Page</h2>
            <form id="login-form" @submit.prevent="handleLogin">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="emailLogin"
                  class="form-control"
                  placeholder="Enter your email address ..."
                  autocomplete="off"
                  required
                  v-model="email"
                />
                <label class="form-label" for="emailLogin">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="passwordLogin"
                  class="form-control"
                  placeholder="Enter your password ..."
                  autocomplete="off"
                  required
                  v-model="password"
                />
                <label class="form-label" for="passwordLogin">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Simple link -->
                  <RouterLink
                    class="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    <a href="">Don't have an account? Please register first</a>
                  </RouterLink>
                  <!-- <a href="#!">Don't have an account? Please register first</a> -->
                </div>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-dark btn-block mb-4">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<style>
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
