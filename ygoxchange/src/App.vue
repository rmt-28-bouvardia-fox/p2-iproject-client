<script>
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {
      useBg: false,
    };
  },
  components: { NavBar },
  watch: {
    $route: {
      handler(newValue) {
        if (newValue.name == "login" || newValue.name == "register") {
          this.useBg = true;
        } else {
          this.useBg = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<template>
  <div :class="{ 'yugi-bg': useBg }"></div>
  <div class="general-bg"></div>
  <NavBar />
  <div class="h-screen mx-40 pt-[15vh]">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}
.yugi-bg {
  background: url("@/assets/bg.png") center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
}

.general-bg {
  background-image: linear-gradient(to right, #141e30, #243b55);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -2;
}
</style>
