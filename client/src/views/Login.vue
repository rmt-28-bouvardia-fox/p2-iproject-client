<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppStore } from "@/stores/user";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["login", "gitHubSignIn"]),
    loginHandler() {
      this.login({ email: this.email, password: this.password });
    },
    toRegister() {
      console.log("masuk");
      this.$router.push("/register");
    },
  },
};
</script>

<template>
  <div class="login text-light col-10">
    <h3>Login</h3>
    <form v-on:submit.prevent="loginHandler">
      <div class="mb-3">
        <label for="login-email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="login-email"
          placeholder="Enter email address ..."
          required
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="login-password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="login-password"
          rows="3"
          required
          placeholder="Enter your password ..."
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>

    <br />

    <!-- <a
        @click.prevent="githubHandler"
        id="github-button"
        class="btn btn-block btn-social btn-github"
      >
        <i class="fa fa-github"></i> Sign in with Github
      </a> -->
    <!-- <center><GoogleLogin :callback="callback" /></center> -->

    <br />
    <br />
    <span
      >Dont have account?
      <button @click="toRegister" class="btn btn-info">Sign up now</button>
    </span>
  </div>
</template>

<style>
.login {
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
