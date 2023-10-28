<script>
import { mapWritableState, mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/user";

export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
    // ...mapState(useAppStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAppStore, ["fetchGames"]),
    logoutHandler() {
      Swal.fire({
        title: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.isLogin = false;
          this.$router.push("/login");
          Swal.fire({
            position: "top",
            icon: "success",
            title: `Logout Success!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    },
    // submitSearch() {
    //   //   console.log(this.title);
    //   this.fetchGames(this.title);
    // },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-dark navbar-dark">
    <div class="container-fluid">
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
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/wishlist"
              >Wishlist</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link active" to="/wishlist"
              >Wishlist</router-link
            >
          </li> -->
        </ul>

        <a @click.prevent="logoutHandler" href="" class="btn btn-danger"
          >Logout</a
        >
        <!-- <router-link v-if="!isLogin" to="/login" class="btn btn-info"
          >Sign In</router-link
        > -->
      </div>
    </div>
  </nav>
</template>
