<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppStore } from "@/stores/user";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      steamUrl: "",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["register"]),
    registerHandler() {
      this.register({
        username: this.username,
        email: this.email,
        password: this.password,
        steamUrl: this.steamUrl,
      });
    },
    toSignIn() {
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="register text-light">
    <h3>Sign up and enjoy</h3>
    <form action="" v-on:submit.prevent="registerHandler">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          class="form-control"
          id="username"
          rows="3"
          v-model="username"
          placeholder="Enter your username ..."
          required
        />
      </div>
      <div class="mb-3">
        <label for="register-email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="register-email"
          placeholder="Enter email address ..."
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="register-password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="register-password"
          rows="3"
          v-model="password"
          placeholder="Enter your password ..."
          required
        />
      </div>
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Steam Url</label>
        <input
          class="form-control"
          id="phonenumber"
          rows="3"
          v-model="steamUrl"
          placeholder="Enter steam url"
        />
      </div>
      <button class="btn btn-primary" type="submit">Sign Up</button>
    </form>
    <span>Already have account?</span>

    <button class="btn btn-danger align-middle mx-2" @click="toSignIn">
      Sign In
    </button>
  </div>
</template>

<style>
.register {
  border: solid 1px;
  background-color: black;
  padding: 15px;
  width: 25%;
  margin: auto;
  border-radius: 10px;
  margin-top: 150px;
  margin-bottom: 50px;
}
</style>
