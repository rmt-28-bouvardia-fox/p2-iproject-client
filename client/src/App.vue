<script>
import { mapState, mapWritableState } from "pinia";
import Navbar from "./components/Navbar.vue";
import { useAppStore } from "./stores/user";

export default {
  components: {
    Navbar,
  },
  created() {
    if (!localStorage.access_token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
  },
};
</script>

<template>
  <Navbar v-if="isLogin" />
  <RouterView />
</template>
