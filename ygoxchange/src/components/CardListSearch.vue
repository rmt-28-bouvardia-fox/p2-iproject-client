<script>
import CardList from "@/components/CardList.vue";
import CardSpinningLoader from "@/components/CardSpinningLoader.vue";
import CardItemSearch from "../components/CardItemSearch.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
  props: ["cardList", "searchNotFound", "searchQuery", "listType", "currency", "listLoader"],
  emits: ["prevHandler", "nextHandler", "handlePrimary", "handleSecondary"],
  components: {
    CardItemSearch,
    CustomButton,
    CardSpinningLoader,
  },
  methods: {
    prevHandler() {
      this.$emit("prevHandler");
    },
    nextHandler() {
      this.$emit("nextHandler");
    },
    handlePrimary(param) {
      this.$emit("handlePrimary", param);
    },
    handleSecondary(param) {
      this.$emit("handleSecondary", param);
    },
  },
};
</script>

<template>
  <div
    v-if="listType == 'addBid' || listType == 'database'"
    class="bg-lightGreyTheme border-1 rounded-lg px-24 py-8"
  >
    <div class="flex justify-center items-center">
      <CardSpinningLoader v-if="listLoader" />
    </div>
    <div v-if="searchNotFound" class="text-center">Card not found</div>
    <div v-if="!searchNotFound">
      <CardItemSearch
        v-for="card in cardList"
        :currency="currency"
        :listType="listType"
        :card="card"
        :key="card.id"
        @handlePrimary="handlePrimary"
        @handleSecondary="handleSecondary"
      />
      <div class="flex justify-end gap-6">
        <CustomButton
          v-if="searchQuery.hasPrev"
          @click="prevHandler"
          :name="'Previous'"
          :active="true"
          class="min-w-[105px]"
        />
        <CustomButton
          v-if="searchQuery.hasNext"
          @click="nextHandler"
          :name="'Next'"
          :active="true"
          class="min-w-[105px]"
        />
      </div>
    </div>
  </div>
  <div v-else class="bg-lightGreyTheme border-1 rounded-lg px-24 py-8">
    <div class="flex justify-center items-center">
      <CardSpinningLoader v-if="listLoader" />
    </div>
    <CardItemSearch
      v-for="card in cardList"
      :listType="listType"
      :card="card"
      :key="card.id"
      @handlePrimary="handlePrimary"
      @handleSecondary="handleSecondary"
    />
    <div v-if="searchNotFound" class="text-center">No item available</div>
  </div>
</template>
