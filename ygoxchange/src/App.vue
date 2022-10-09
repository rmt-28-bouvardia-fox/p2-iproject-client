<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <div class="h-screen mx-40 pt-[15vh]">
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
}
</style>
