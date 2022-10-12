<template>
  <section class="text-center text-lg-start">
    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img
            src="https://2.bp.blogspot.com/-GhGpsk1pghU/XH46mPAdI9I/AAAAAAABXxY/bTQuuDfVXoU7PJmzMxQLd4Ybp08R636LgCLcBGAs/s1600/IMG_20181006_120802.jpg"
            alt="Trendy Pants and Shoes"
            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
          />
        </div> 
        <div class="col-lg-8">
          <h1 class="fw-bold mb-5 text-center">Login Account</h1>
          <div class="card-body py-5 px-md-5">
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  v-model="login.email"
                  type="email"
                  id="form2Example1"
                  class="form-control"
                />
                <label class="form-label" for="form2Example1"
                  >Email address</label
                >
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input
                  v-model="login.password"
                  type="password"
                  id="form2Example2"
                  class="form-control"
                />
                <label class="form-label" for="form2Example2">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Checkbox -->
                </div>

                <div class="col">
                  <!-- Simple link -->
                  <router-link to="/register" href="#!"
                    >Doesnt have any account?</router-link
                  >
                </div>
              </div>

              <!-- Submit button -->
              <button
                @click.prevent="loginAccount"
                type="button"
                class="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  created() {
    console.log("masuk login form ini bgst");
  },
  methods: {
    ...mapActions(useUserStore, ["loginAccount"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["login"]),
  },
};
</script>

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
