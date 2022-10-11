<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "./../stores/user";

export default {
  methods: {
    ...mapActions(useUserStore, ["loginHandler"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["email", "password"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <div>
    <div class="home">
      <img
        class="background"
        src="https://images.unsplash.com/photo-1634055980590-1a44e5a8b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div class="centered">
        <h3>One Step Closer</h3>
        <br />
        <br />
        <form>
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
            @click.prevent="loginHandler"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
