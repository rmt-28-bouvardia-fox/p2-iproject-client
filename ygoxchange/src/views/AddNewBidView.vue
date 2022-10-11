<script>
import CustomButton from "@/components/CustomButton.vue";
import CardPrices from "@/components/CardPrices.vue";
import { useBidStore } from "@/stores/bid";
import { mapState, mapActions, mapWritableState } from "pinia";
export default {
  components: {
    CustomButton,
    CardPrices,
  },
  data() {
    return {
      query: "",
      step: 1,
      selectedCard: {},
      input: {
        price: 0,
        condition: "new",
        expiredBy: "",
        notes: "",
      },
    };
  },
  computed: {
    ...mapState(useBidStore, ["currency", "searchNotFound", "searchCardList"]),
    ...mapWritableState(useBidStore, ["searchQuery"]),
    limitDateTime() {
      let d = new Date();
      let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let minutes = d.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      let time = d.getHours() + ":" + minutes;

      return date + " " + time;
    },
  },
  methods: {
    ...mapActions(useBidStore, [
      "searchCard",
      "getCurrency",
      "clearQuery",
      "addNewBid",
    ]),
    searchCardHandler() {
      this.searchQuery.page = 1;
      this.searchQuery.query = this.query;
      this.searchCard();
    },
    searchCardNextHandler() {
      this.searchQuery.page++;
      this.searchCard();
    },
    searchCardPrevHandler() {
      this.searchQuery.page--;
      this.searchCard();
    },
    selectCard(card) {
      this.selectedCard = card;
      this.step = 2;
    },
    backStep() {
      this.step = 1;
      this.selectedCard = {};
      this.input = {
        price: 0,
        condition: "new",
        expiredBy: "",
        notes: "",
      };
    },
    submit() {
      this.addNewBid(this.input);
    },
  },
  created() {
    this.getCurrency();
  },
  beforeDestroy() {
    this.clearQuery();
  },
};
</script>

<template>
  <div v-if="step === 1">
    <div class="pl-5">
      <div class="font-semibold text-3xl">New Auction</div>
      <form class="py-9" @submit.prevent="searchCardHandler">
        <label for="search" class="pr-5">Search Card</label>
        <input
          type="text"
          id="search"
          name="search"
          class="border-2 rounded-lg mr-5 p-1"
          v-model="query"
        />
        <button
          type="submit"
          class="bg-redTheme rounded-full text-white shadow-lg px-5 py-1"
        >
          Search
        </button>
      </form>
    </div>
    <div class="bg-lightGreyTheme border-1 rounded-lg px-24 py-8">
      <div v-if="searchNotFound" class="text-center">Card not found</div>
      <div v-if="!searchNotFound">
        <div v-for="card in searchCardList" :key="card.id">
          <div class="flex pb-5">
            <img
              class="w-1/4"
              :src="card.card_images[0].image_url"
              :alt="card.name"
            />
            <div class="w-2/4 px-4">
              <div class="text-semibold text-2xl text-blueTheme pb-6">
                {{ card.name }}
              </div>
              <CardPrices :currency="currency" :card="card" />
            </div>
            <div class="w-1/4 flex flex-col gap-4 sm:text-sm justify-center">
              <CustomButton
                class=""
                :name="'Use this card'"
                :active="true"
                @click="selectCard(card)"
              /><CustomButton class="" :name="'Check detail'" :active="true" />
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-6">
          <CustomButton
            v-if="searchQuery.hasPrev"
            @click="searchCardPrevHandler"
            :name="'Previous'"
            :active="true"
            class="min-w-[105px]"
          />
          <CustomButton
            v-if="searchQuery.hasNext"
            @click="searchCardNextHandler"
            :name="'Next'"
            :active="true"
            class="min-w-[105px]"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-if="step === 2">
    <div>
      <div>
        <div class="font-semibold text-3xl pb-9">New Auction</div>
        <CustomButton @click="backStep" :name="'Back'" :active="true" />
      </div>
      <div class="flex pt-9">
        <div class="w-2/3">
          <div class="text-bold text-3xl text-blueTheme pb-6">
            {{ selectedCard.name }}
          </div>
          <form @submit.prevent="submit">
            <div class="flex pb-2">
              <div class="w-1/2">
                <label for="price">Price (Rp)</label>
              </div>
              <div class="w-1/2">
                <input
                  required
                  v-model="input.price"
                  class="border-2 rounded-lg p-1"
                  type="number"
                  id="price"
                  name="price"
                />
              </div>
            </div>
            <div class="flex pb-2">
              <div class="w-1/2">
                <label for="condition">Condition</label>
              </div>
              <div class="w-1/2">
                <select
                  v-model="input.condition"
                  id="condition"
                  name="condition"
                  class="border-2 rounded-lg p-1"
                >
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
              </div>
            </div>
            <div class="flex pb-2">
              <div class="w-1/2">
                <label for="expiredBy">Auction End At</label>
              </div>
              <div class="w-1/2">
                <input
                  v-model="input.expiredBy"
                  required
                  class="border-2 rounded-lg p-1"
                  type="datetime-local"
                  :min="limitDateTime"
                  id="expiredBy"
                  name="expiredBy"
                />
              </div>
            </div>
            <div class="flex pb-2">
              <div class="w-1/2">
                <label for="notes">Seller Notes</label>
              </div>
              <div class="w-1/2">
                <textarea
                  required
                  v-model="input.notes"
                  class="border-2 rounded-lg p-1"
                  id="notes"
                  name="notes"
                  rows="3"
                />
              </div>
            </div>
            <div class="flex justify-center pt-10">
              <CustomButton
                type="submit"
                :name="'Start auction with this card'"
                :active="true"
              />
            </div>
          </form>
        </div>
        <div class="w-1/3 p-4 border-2">
          <CardPrices
            :currency="currency"
            :card="selectedCard"
            :detail="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
