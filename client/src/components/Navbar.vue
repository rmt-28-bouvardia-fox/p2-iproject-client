<script>
import { mapActions, mapState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  computed: {
    ...mapState(usePostStore, ["loginData"]),
  },
  methods: {
    ...mapActions(usePostStore, ["logout"]),
    async handleLogout() {
      await this.logout();
    },
  },
};
</script>
<template>
  <div class="row sticky">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"
          ><img
            class="img-fluid"
            style="height: 30px"
            src="../assets/9GAG3.png"
            alt=""
        /></RouterLink>
        <div class="navbar-brand">
          <RouterLink class="nav-link navbarText" to="/create">
            <i class="fa-solid fa-face-laugh-squint"></i>
            Post</RouterLink
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link navbarText" to="/"
                ><i class="fa-sharp fa-solid fa-house"></i> Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <div v-if="loginData.access_token" class="nav-link navbarText">
                <i class="fa-solid fa-user"></i>
                Hello {{ loginData.username }}
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                v-if="!loginData.access_token"
                class="nav-link dropdown-toggle navbarText"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-right-to-bracket"></i>
                Sign In
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink
                    v-if="!loginData.access_token"
                    class="dropdown-item"
                    to="/login"
                    ><i class="fa-solid fa-user"></i> Login</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    v-if="!loginData.access_token"
                    class="dropdown-item"
                    to="/register"
                    ><i class="fa-solid fa-circle-up"></i> Register</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                v-if="loginData.access_token"
                @click.prevent="handleLogout"
                class="nav-link navbarText"
                href="/"
              >
                <i class="fa-solid fa-right-from-bracket"></i> Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navbarText {
  color: #353b48;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
