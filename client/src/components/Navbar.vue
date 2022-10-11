<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "./../stores/user";

export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
      this.isLogin = false;
    },
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-4 px-lg-5">
      <div class="d-flex flex-row">
        <div class="navbar-left">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" aria-current="page" href="#!"
                >Home</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex flex-row-reverse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/register" class="nav-link" href="#!"
              >Register</RouterLink
            >
          </li>
          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/login" class="nav-link" href="#!"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link" @click.prevent="logout" href="#!">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
