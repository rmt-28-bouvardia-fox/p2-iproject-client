<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginStore } from "../stores/login";

export default {
  methods: { ...mapActions(useLoginStore, ["loginUser"]) },
  computed: { ...mapWritableState(useLoginStore, ["login"]) },
};
</script>
<template>
  <h1 class="navbar">The Hacktiv Times</h1>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Login to your account</h1>
      <div class="login-wrapper">
        <form action="">
          <div class="input-wrapper">
            <label for="">Email</label>
            <input
              type="text"
              class="input"
              placeholder="Email"
              required
              v-model="login.email"
            />
          </div>
          <div class="input-wrapper">
            <label for="">Password</label>
            <input
              type="password"
              class="input"
              placeholder="Password"
              required
              v-model="login.password"
            />
          </div>
          <button @click.prevent="loginUser" class="login">Login</button>
        </form>
      </div>
      <div class="register-account">
        <p class="desc">
          Don't have an account yet?
          <RouterLink to="/register" class="link">Register</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Great Vibes", cursive;
  padding: 0.7rem 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.container {
  padding: 0 8rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-weight: 500;
  font-size: 1.5rem;
}

.login-wrapper form .input-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
}

.input-wrapper label {
  margin: 0.5rem 0;
}

.input {
  width: 400px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid black;
}

.login {
  cursor: pointer;
  width: 400px;
  padding: 0.5rem;
  border-radius: 20px;
  background-color: black;
  border: 1px solid black;
  color: #fff;
  transition: all 0.4s ease-in-out;
}

.login:hover {
  background-color: transparent;
  color: black;
}

.register-account {
  margin: 1rem 0;
}

.desc {
  color: #000;
  font-weight: 400;
  font-size: 0.8rem;
}

.link {
  color: rgba(0, 0, 0, 0.555);
}
</style>
