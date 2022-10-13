<template>
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
              <h2 class="fw-bold mb-5">Sign up now</h2>
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="form-outline mb-4">
                  <input
                    v-model="register.username"
                    type="text"
                    id="form3Example4"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example4">username</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    v-model="register.email"
                    type="email"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3"
                    >Email address</label
                  >
                </div>
                <div class="form-outline mb-4">
                  <input
                    v-model="register.phoneNumber"
                    type="number"
                    id="form3Example3"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example3"
                    >Phone Number</label
                  >
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    v-model="register.password"
                    type="password"
                    id="form3Example4"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
                <!-- Submit button -->
                <button
                  @click.prevent="registerAccount"
                  type="submit"
                  class="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>Already have an account:</p>
                  <router-link to="/login">Login</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2021/01/28/tiktok-13_43.jpeg?w=480"
            class="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  methods: {
    ...mapActions(useUserStore, ["registerAccount"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["register"]),
  },
};
</script>

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
