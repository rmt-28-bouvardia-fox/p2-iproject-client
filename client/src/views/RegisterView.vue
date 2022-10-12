<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "./../stores/user";
import Navbar from "./../components/Navbar.vue";

export default {
  methods: {
    ...mapActions(useUserStore, [
      "registerHandler",
      "handleCredentialResponse",
    ]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["username", "email", "password"]),
  },
  components: {
    Navbar,
  },
  mounted() {
    const cb = this.handleCredentialResponse;
    google.accounts.id.initialize({
      client_id:
        "450593059360-cnkdesakn2gsarj75n1phoal630ec63f.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-button-login"),
      { theme: "outline", size: "large" } // customization attributes
    );
  },
};
</script>

<template>
  <Navbar />
  <div>
    <div class="register">
      <img
        class="background"
        src="https://images.unsplash.com/photo-1634055980590-1a44e5a8b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div class="centered">
        <h3>Your Journey Begin Here</h3>
        <br />
        <br />
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <label class="text-danger text-end fw-bold">*</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Type your username"
              v-model="username"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <label class="text-danger text-end fw-bold">*</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Type your email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <label class="text-danger text-end fw-bold">*</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Type your password"
              v-model="password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="registerHandler"
          >
            Submit
          </button>
        </form>
        <hr />
        <h6 class="text-center">Register with</h6>
        <div id="google-button-login"></div>
      </div>
    </div>
  </div>
</template>
