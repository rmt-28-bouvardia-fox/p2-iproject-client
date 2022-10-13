<script>
import CardList from "@/components/CardList.vue";
import CardSpinningLoader from "@/components/CardSpinningLoader.vue";
import { mapActions, mapWritableState } from "pinia";
import { useBidStore } from "@/stores/bid.js";
export default {
  components: {
    CardList,
    CardSpinningLoader,
  },
  computed: {
    ...mapWritableState(useBidStore, ["bids", "mainLoader"]),
  },
  methods: {
    ...mapActions(useBidStore, ["listenBids", "unlistenBids"]),
  },
  mounted() {
    this.listenBids();
  },
  beforeDestroy() {
    this.unlistenBids();
  },
};
</script>

<template>
  <div
    v-if="mainLoader"
    class="fixed top-0 left-0 w-screen h-screen z-[999] glass"
  >
    <div
      class="absolute top-1/2 left-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <CardSpinningLoader />
    </div>
  </div>
  <div class="pb-[10vh]">
    <CardList :items="bids" />
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.205);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.7px);
  -webkit-backdrop-filter: blur(7.7px);
}
</style>
