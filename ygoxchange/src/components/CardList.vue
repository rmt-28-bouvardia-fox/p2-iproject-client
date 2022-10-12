<script>
import CardItem from "../components/CardItem.vue";
export default {
  props: ["items"],
  components: {
    CardItem,
  },
  methods: {
    toDetailBid(id) {
      this.$router.push(`/bid/${id}`);
    },
  },
};
</script>

<template>
  <div
    class="grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <CardItem
      v-if="items.length > 0"
      v-for="item in items"
      @click="toDetailBid(item.key)"
      :key="item.key"
      :item="item"
    />
  </div>
</template>
