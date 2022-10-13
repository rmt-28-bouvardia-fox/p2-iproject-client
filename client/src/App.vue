<script>
import { RouterLink, RouterView } from "vue-router";
import Swal from "sweetalert2";
// import HelloWorld from './components/HelloWorld.vue'
import Headers from "./components/Headers.vue";

export default {
  components: {
    Headers,
    // Banner,
  },
  methods: {
    async handleLogout() {
      try {
        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        this.$router.push("/");

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "You're now logged out",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
};
</script>

<template>
  <Headers @handleLogout="handleLogout" />

  <RouterView />
</template>

<style></style>
