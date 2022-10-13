<script>
import Navbar from "./components/Navbar.vue";
import { mapActions } from "pinia";
import { usePostStore } from "./stores/post";

export default {
  components: {
    Navbar,
  },
  created() {
    this.checkAccessToken();
  },
  methods: {
    ...mapActions(usePostStore, ["checkAccessToken"]),
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>
