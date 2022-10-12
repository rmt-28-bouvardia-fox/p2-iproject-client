<script>
import { mapActions, mapWritableState } from "pinia";
import NavBar from "./components/NavBar.vue";
import { useAppointmentStore } from "./stores/appointment";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAppointmentStore, ["fetchDoctors"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      this.fetchDoctors();
    }
  },
};
</script>

<template>
  <div class="w-full h-full bg-gradient-to-br from-white to-sky-100">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
