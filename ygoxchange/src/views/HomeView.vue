<script>
import CardList from "@/components/CardList.vue";
import { mapActions, mapWritableState } from "pinia";
import { useBidStore } from "@/stores/bid.js";
export default {
  components: {
    CardList,
  },
  computed: {
    ...mapWritableState(useBidStore, ["bids"]),
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
  <div class="pb-[10vh]">
    <CardList :items="bids" />
  </div>
</template>
