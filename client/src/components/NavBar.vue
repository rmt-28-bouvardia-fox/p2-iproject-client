<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "NavBar",
  data() {
    return {
      access_token: localStorage.getItem("access_token"),
      accountStatus: localStorage.getItem("accountStatus"),
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logoutHandler"]),
    localLogout() {
      this.logoutHandler();
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img
        src="https://pbs.twimg.com/profile_images/1567494810067673096/AMSt_gdM_400x400.jpg"
        class="navbar-brand col-lg-2 col-sm-4 col-4"
      />

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
        </ul>
        <div v-if="isLogin && accountStatus">
          <div v-if="accountStatus === 'Reguler'">
            <div class="d-flex">
              <RouterLink to="/payment" class="btn btn-outline-success">
                Become Premium
              </RouterLink>
            </div>
          </div>
          <button @click.prevent="localLogout" class="btn btn-outline-success">
            Logout
          </button>
        </div>
        <div v-else-if="!isLogin">
          <div class="d-flex">
            <RouterLink
              to="/login"
              role="button"
              class="btn btn-outline-success"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
