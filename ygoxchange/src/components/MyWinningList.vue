<script>
import CustomButton from "@/components/CustomButton.vue";
import CardListSearch from "@/components/CardListSearch.vue";
import { useBidStore } from "@/stores/bid";
import { mapState, mapActions, mapWritableState } from "pinia";
export default {
  components: {
    CustomButton,
    CardListSearch,
  },
  computed: {
    ...mapWritableState(useBidStore, ["winningBids"]),
  },
  methods: {
    ...mapActions(useBidStore, ["winningBid"]),
  },
  created() {
    this.winningBids = [];
    this.winningBid();
  },
};
</script>

<template>
  <div class="pt-10 pb-8">
    <CardListSearch :cardList="winningBids" :listType="'winning'" />
  </div>
</template>
