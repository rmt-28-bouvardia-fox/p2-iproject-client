<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/user";

export default {
  created() {
    this.checkout(this.$route.params.wishlistId);
  },
  computed: {
    ...mapState(useAppStore, ["gameIdr", "gameTitle", "gameUrl"]),
  },
  methods: {
    ...mapActions(useAppStore, ["checkout"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="card mx-auto col-md-3 col-10 mt-5 pt-4">
      <div class="d-flex sale"></div>
      <img class="mx-auto img-thumbnail" :src="gameUrl" />
      <div class="card-body text-center mx-auto">
        <h5 class="card-title">{{ gameTitle }}</h5>
        <p class="card-text">Rp {{ gameIdr }}</p>
      </div>
    </div>
  </div>
</template>
