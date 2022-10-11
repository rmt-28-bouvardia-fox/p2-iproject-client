<script>
import LogoIcon from "./icons/LogoIcon.vue";
export default {
  data() {
    return {
      route: "",
    };
  },
  components: { LogoIcon },
  watch: {
    $route: {
      handler(newValue) {
        this.route = newValue.name;
      },
      deep: true,
      immediate: true,
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
      <div class="flex justify-center items-center gap-4">
        <IconifyIcon icon="bxs:user" />
        <p>Hello, Yugi Mutou!</p>
      </div>
    </div>
  </div>
</template>
