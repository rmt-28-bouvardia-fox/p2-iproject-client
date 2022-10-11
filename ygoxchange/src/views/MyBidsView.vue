<script>
import CustomButton from "@/components/CustomButton.vue";
export default {
  components: { CustomButton },
  data() {
    return {
      render: "my-bids-home",
    };
  },
  watch: {
    "$route": {
      handler(value) {
        this.render = value.name
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div>
    <div class="flex gap-4">
      <router-link class="w-1/2" to="/my-bids">
        <CustomButton
          class="w-full"
          :name="'Selling List'"
          :active="render === 'my-bids-home'"
      /></router-link>
      <router-link class="w-1/2" to="/my-bids/my-winning-list">
        <CustomButton
          class="w-full"
          :name="'My Winning List'"
          :active="render === 'my-winning-list'"
        />
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
