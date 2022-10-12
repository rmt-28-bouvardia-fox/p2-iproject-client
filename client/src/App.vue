<script>
import { mapState } from "pinia";
import { useAppStore } from "./stores/app";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAppStore, ["isLogin"]),
  },
};
</script>

<template>
  <Navbar v-show="isLogin == true" />
  <RouterView />
</template>
