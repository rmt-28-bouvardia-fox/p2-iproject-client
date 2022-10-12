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
    ...mapWritableState(useBidStore, ["sellingBids", "searchNotFound"]),
  },
  methods: {
    ...mapActions(useBidStore, ["sellingBid", "clearQuery"]),
  },
  created() {
    this.sellingBids = [];
    this.clearQuery();
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
  <CardListSearch
    :searchNotFound="searchNotFound"
    :cardList="sellingBids"
    :listType="'selling'"
  />
</template>
