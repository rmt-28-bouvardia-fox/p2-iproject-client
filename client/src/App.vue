<script>
import { mapWritableState } from "pinia";
import FooterBar from "./components/footer-bar.vue";
import { useUserStore } from "./stores/user";
import { useArisanStore } from "./stores/arisan";
export default {
  data() {
    return {
      location: {
        longitude: "",
        latitude: "",
      },
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(this.getLocation);
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
  watch: {
    location(oldLoc, newLoc) {
      console.log(oldLoc, newLoc);
      navigator.geolocation.getCurrentPosition(this.getLocation);
    },
  },
  computed: {
    ...mapWritableState(useUserStore, ["register", "isLogin"]),
    ...mapWritableState(useArisanStore, ["spot"])
  },
  components: { FooterBar },
  methods: {
    getLocation(position) {
      this.register.latitude = position.coords.latitude;
      this.register.longitude = position.coords.longitude;
      this.location.latitude = position.coords.latitude;
      this.location.longitude = position.coords.longitude;
      this.spot.longitude = position.coords.longitude;
      this.spot.latitude = position.coords.latitude;
    },
  },
};
</script>

<template>
  <RouterView />
  <FooterBar />
</template>
