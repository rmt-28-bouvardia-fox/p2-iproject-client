<script>
import LogoIcon from "./icons/LogoIcon.vue";
import { useUserStore } from "@/stores/user.js";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      route: "",
      show: false,
    };
  },
  components: { LogoIcon },
  computed: {
    ...mapState(useUserStore, ["access_token", "username"]),
  },
  watch: {
    $route: {
      handler(newValue) {
        this.route = newValue.name;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useUserStore, ["logoutHandler"]),
    goToLogin() {
      this.$router.push("/login");
    },
    logout() {
      this.logoutHandler();
    },
  },
};
</script>

<template>
  <div
    v-if="route == 'login' || route == 'register'"
    class="fixed flex h-[12vh] z-[9999] w-full"
  >
    <div class="w-1/4">
      <router-link to="/"><LogoIcon /></router-link>
    </div>
  </div>

  <div
    v-else
    class="fixed flex bg-darkGreyTheme h-[12vh] z-[9999] w-full items-center text-white border-b-8 border-b-[#D4BA52] drop-shadow-xl"
  >
    <div class="w-1/4">
      <router-link to="/"><LogoIcon /></router-link>
    </div>
    <div class="w-2/4 flex content-center justify-evenly text-lg">
      <router-link to="/">Home</router-link>
      <router-link to="/my-bids">My Bids</router-link>
      <router-link to="/database">Database</router-link>
    </div>
    <div class="w-1/4 text-lg text-center">
      <div class="flex justify-center items-center gap-4 relative">
        <IconifyIcon icon="bxs:user" />
        <p @mouseover="show = true" v-if="username">Hello, {{ username }}!</p>
        <div
          v-if="show"
          @mouseleave="show = false"
          class="absolute z-50 top-[30px] p-2 rounded-lg w-[150px] bg-white text-black"
        >
          <div
            @click="logout"
            class="hover:text-white hover:bg-black rounded-lg"
          >
            Logout
          </div>
        </div>
        <p @click="goToLogin" v-else-if="!username">Login</p>
      </div>
    </div>
  </div>
</template>
