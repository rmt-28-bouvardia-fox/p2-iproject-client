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
    ...mapWritableState(useBidStore, ["winningBids", "searchNotFound", "listLoader"]),
  },
  methods: {
    ...mapActions(useBidStore, ["winningBid", "payment", "clearQuery"]),
  },
  created() {
    this.winningBids = [];
    this.clearQuery();
    this.winningBid();
  },
};
</script>

<template>
  <div class="pt-10 pb-8">
    <CardListSearch
      :cardList="winningBids"
      :listType="'winning'"
      :searchNotFound="searchNotFound"
      :listLoader="listLoader"
      @handlePrimary="payment"
    />
  </div>
</template>
