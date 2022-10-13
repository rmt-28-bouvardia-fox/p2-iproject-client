<script>
import CustomButton from "@/components/CustomButton.vue";
import CardListSearch from "@/components/CardListSearch.vue";
import CardPrices from "@/components/CardPrices.vue";
import { useBidStore } from "@/stores/bid";
import { mapState, mapActions, mapWritableState } from "pinia";
export default {
  components: {
    CustomButton,
    CardListSearch,
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
    ...mapState(useBidStore, ["currency", "listLoader"]),
    ...mapWritableState(useBidStore, [
      "searchQuery",
      "searchNotFound",
      "searchCardList",
    ]),
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
      const payload = {
        cardId: this.selectedCard.id,
        ...this.input,
      };
      this.addNewBid(payload);
    },
  },
  created() {
    this.clearQuery();
    this.getCurrency();
  },
};
</script>

<template>
  <div v-if="step === 1">
    <div class="pl-5">
      <div class="font-semibold text-white text-3xl">New Auction</div>
      <form class="py-9 " @submit.prevent="searchCardHandler">
        <label for="search " class="pr-5 text-white">Search Card</label>
        <input
          type="text"
          id="search"
          name="search"
          class="border-2 rounded-lg mr-5 p-1"
          v-model="query"
        />
        <CustomButton
          class="rounded-full text-white shadow-lg px-5 py-1"
          type="submit"
          name="Search"
          :active="true"
        />
      </form>
    </div>

    <CardListSearch
      :cardList="searchCardList"
      :searchNotFound="searchNotFound"
      :searchQuery="searchQuery"
      :currency="currency"
      :listType="'addBid'"
      :listLoader="listLoader"
      @nextHandler="searchCardNextHandler"
      @prevHandler="searchCardPrevHandler"
      @handlePrimary="selectCard"
    />
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
                  <option value="New">New</option>
                  <option value="Used">Used</option>
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
