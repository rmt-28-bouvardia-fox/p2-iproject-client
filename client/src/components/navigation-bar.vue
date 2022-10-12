<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png"
            height="50"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Arisan</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/myarisan" class="nav-link" href="#"
              >My Arisan</router-link
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->
        <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>

        <!-- Notifications -->
        <div class="dropdown">
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge bg-danger">Sign action</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a
                v-if="isLogin"
                @click.prevent="logout"
                class="dropdown-item"
                href="#"
                >Sign Out</a
              >
            </li>
            <li>
              <router-link
                to="/register"
                v-if="!isLogin"
                class="dropdown-item"
                href="#"
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link
                to="/login"
                v-if="!isLogin"
                class="dropdown-item"
                href="#"
                >Sign In</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Avatar -->
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-circle"
          height="25"
          alt="Black and White Portrait of a Man"
          loading="lazy"
        />
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>
