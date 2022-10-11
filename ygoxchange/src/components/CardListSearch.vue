<script>
import CardItemSearch from "../components/CardItemSearch.vue";
export default {
  props: ["items"],
  components: {
    CardItemSearch,
  },
};
</script>

<template>
  <div
    class=""
  >
    <CardItemSearch
      v-if="items.length > 0"
      v-for="item in items"
      :key="item.key"
      :item="item"
    />
  </div>
</template>
