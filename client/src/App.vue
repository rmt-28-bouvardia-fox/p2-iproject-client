<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppointmentStore } from "./stores/appointment";
import NavBar from "./components/NavBar.vue";
import PreLoader from "./components/PreLoader.vue"
export default {
  components: {
    NavBar,
    PreLoader
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["isLogin", "isLoading", "role"]),
  },
  methods: {
    ...mapActions(useAppointmentStore, ["fetchDoctors"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      this.fetchDoctors();
      this.role = localStorage.role
    }
  },
};
</script>

<template>
  <div class="w-full h-full bg-gradient-to-br from-white to-sky-100">
    <PreLoader v-if="isLoading" />
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
