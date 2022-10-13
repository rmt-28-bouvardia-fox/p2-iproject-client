<script>
import { mapActions } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    ...mapActions(usePostStore, ["register"]),
    async handleRegister() {
      this.register(this.form);
    },
  },
};
</script>

<template>
  <section class="registerPage">
    <div class="row" style="height: 250px"></div>
    <div class="row text-center">
      <div class="col-4"></div>
      <div class="col-4 border border-2">
        <h1 class="text-center mt-3">Register New Account</h1>
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="type email here"
              v-model="form.email"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="type password here"
              v-model="form.password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="register-username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="register-username"
              placeholder="type username here"
              v-model="form.username"
              required
            />
          </div>
          <button type="submit" class="btn btn-secondary mb-2">Register</button>
        </form>
      </div>
      <div class="col-4"></div>
    </div>
  </section>
</template>
<style>
.registerPage {
  color: #2d3436;
}
</style>
