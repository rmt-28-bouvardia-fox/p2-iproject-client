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
    ...mapWritableState(useBidStore, ["sellingBids"]),
  },
  methods: {
    ...mapActions(useBidStore, ["sellingBid"]),
  },
  created() {
    this.sellingBids = [];
    this.sellingBid();
  },
};
</script>

<template>
  <div class="flex pt-10 pb-8 justify-end">
    <router-link to="/new-bid">
      <CustomButton class="w-full" :name="'Add New Auction'" :active="true"
    /></router-link>
  </div>
  <CardListSearch :cardList="sellingBids" :listType="'selling'" />
</template>
