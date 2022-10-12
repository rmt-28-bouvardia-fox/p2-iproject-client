<script>
import CustomButton from "@/components/CustomButton.vue";
import CardPrices from "@/components/CardPrices.vue";
export default {
  props: ["card", "listType", "currency"],
  emits: ["handlePrimary", "handleSecondary"],
  components: {
    CardPrices,
    CustomButton,
  },
  data() {
    return {
      subtype: "",
    };
  },
  computed: {
    subtypeCategory() {
      let type = this.card.type;
      if (type.includes("Monster")) {
        return "Race";
      } else {
        return type.split(" ")[0];
      }
    },
  },
  methods: {
    selectCard(card) {
      this.$emit("handlePrimary", card);
    },
    goToCardDatabase(id) {
      this.$emit("handleSecondary", id);
    },
  },
};
</script>

<template>
  <div v-if="listType == 'addBid'" class="flex pb-8">
    <div class="w-1/4">
      <img :src="card.card_images[0].image_url" :alt="card.name" />
    </div>
    <div class="w-2/4 px-4">
      <div class="font-semibold text-2xl text-blueTheme pb-6">
        {{ card.name }}
      </div>
      <CardPrices :currency="currency" :card="card" />
    </div>
    <div class="w-1/4 flex flex-col gap-4 sm:text-sm pt-10">
      <CustomButton
        class=""
        :name="'Use this card'"
        :active="true"
        @click="selectCard(card)"
      />
      <!-- <CustomButton class="" :name="'Check detail'" :active="true" /> -->
    </div>
  </div>
  <div v-if="listType == 'database'" class="flex pb-8">
    <div class="w-1/4">
      <img :src="card.card_images[0].image_url" :alt="card.name" />
    </div>
    <div class="w-3/4 px-4">
      <div class="font-semibold text-2xl text-blueTheme pb-6">
        {{ card.name }}
      </div>
      <div class="pb-8">
        <div class="flex">
          <div class="w-1/4 min-w-[125px] font-semibold text-blueTheme">Type</div>
          <div class="w-3/4">{{ card.type }}</div>
        </div>
        <div class="flex">
          <div class="w-1/4 min-w-[125px] font-semibold text-blueTheme">
            Subtype ( {{ subtypeCategory }} )
          </div>
          <div class="w-3/4">{{ card.race }}</div>
        </div>
        <div class="flex">
          <div class="w-1/4 min-w-[125px] font-semibold text-blueTheme">
            ATK
          </div>
          <div class="w-3/4">{{ card.atk }}</div>
        </div>
        <div class="flex">
          <div class="w-1/4 min-w-[125px] font-semibold text-blueTheme">
            DEF
          </div>
          <div class="w-3/4">{{ card.def }}</div>
        </div>
      </div>
      <div>{{ card.desc }}</div>
    </div>
  </div>
</template>
