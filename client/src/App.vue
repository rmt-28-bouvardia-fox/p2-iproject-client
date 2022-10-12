<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<template>
  <Navbar v-if!="final"/>
  <RouterView />
</template>

<style scoped>
</style>
