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
      console.log(localStorage.access_token);
      console.log(this.isLogin);
      this.isLogin = false;
      console.log(this.isLogin);
      console.log("tes masuk");
    } else {
      this.isLogin = true;
      console.log("masuk ke else");
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ["isLogin"]),
    // ...mapState(useAppStore, ["isLogin"]),
  },
};
</script>

<template>
  <Navbar v-if="isLogin" />
  <RouterView />
</template>
