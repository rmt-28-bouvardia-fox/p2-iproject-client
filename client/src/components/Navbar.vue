<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  data() {
    return {
      username: localStorage.username,
    };
  },
  computed: {
    ...mapState(useAppStore, ["userData"]),
  },
  methods: {
    ...mapActions(useAppStore, ["logout"]),
    handleLogout() {
      this.logout();
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="../assets/orange-agriculture-icon-png-0.png"
          alt="Bootstrap"
          width="40"
          height="40"
        />
      </RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/mylist"
              >My Bid</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Analytic Prices</a
            >
          </li>
        </ul>
        <span class="px-3">Hai, {{ username }}</span>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          @click.prevent="handleLogout"
        >
          Sign-Out
        </button>
      </div>
    </div>
  </nav>
</template>
