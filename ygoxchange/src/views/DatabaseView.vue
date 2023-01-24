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
  data() {
    return {
      query: "",
      filter: {
        type: "",
        attribute: "",
        race: "",
      },
      typeItems: [
        "Effect Monster",
        "Flip Effect Monster",
        "Effect Monster",
        "Flip Effect Monster",
        "Flip Tuner Effect Monster",
        "Gemini Monster",
        "Normal Monster",
        "Normal Tuner Monster",
        "Pendulum Effect Monster",
        "Pendulum Flip Effect Monster",
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster",
        "Ritual Effect Monster",
        "Ritual Monster",
        "Skill Card",
        "Spell Card",
        "Spirit Monster",
        "Toon Monster",
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster",
        "Fusion Monster",
        "Link Monster",
        "Pendulum Effect Fusion Monster",
        "Synchro Monster",
        "Synchro Pendulum Effect Monster",
        "Synchro Tuner Monster",
        "XYZ Monster",
        "XYZ Pendulum Effect Monster",
      ],
      raceItems: [
        "Aqua",
        "Beast",
        "Beast-Warrior",
        "Creator-God",
        "Cyberse",
        "Dinosaur",
        "Divine-Beast",
        "Dragon",
        "Fairy",
        "Fiend",
        "Fish",
        "Insect",
        "Machine",
        "Plant",
        "Psychic",
        "Pyro",
        "Reptile",
        "Rock",
        "Sea Serpent",
        "Spellcaster",
        "Thunder",
        "Warrior",
        "Winged Beast",
        "Wyrm",
        "Zombie",
        "Normal",
        "Field",
        "Equip",
        "Continuous",
        "Quick-Play",
        "Ritual",
        "Counter",
      ],
      attributeItems: [
        "DARK",
        "DIVINE",
        "EARTH",
        "FIRE",
        "LIGHT",
        "WATER",
        "WIND",
      ],
    };
  },
  computed: {
    ...mapState(useBidStore, [
      "currency",
      "searchNotFound",
      "searchCardList",
      "listLoader",
    ]),
    ...mapWritableState(useBidStore, ["searchCard", "searchQuery"]),
  },
  methods: {
    ...mapActions(useBidStore, ["clearQuery"]),
    searchCardHandler() {
      this.searchQuery = {
        ...this.searchQuery,
        type: this.filter.type,
        attribute: this.filter.attribute,
        race: this.filter.race,
        query: this.query,
        page: 1,
      };
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
  },
  created() {
    this.clearQuery();
  },
};
</script>

<template>
  <div>
    <div class="pl-5">
      <div class="font-semibold text-white text-3xl">Database</div>
      <form class="py-9" @submit.prevent="searchCardHandler">
        <label for="search" class="pr-5 text-white">Search Card</label>
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
      <div class="pb-9">
        <select
          class="border p-2 border-goldTheme mr-4 rounded-xl"
          v-model="filter.type"
        >
          <option selected value="">No Type</option>
          <option v-for="(type, idx) in typeItems" :key="type">
            {{ type }}
          </option>
        </select>
        <select
          class="border p-2 border-goldTheme mr-4 rounded-xl"
          v-model="filter.race"
        >
          <option selected value="">No Race</option>
          <option v-for="(race, idx) in raceItems" :key="race">
            {{ race }}
          </option>
        </select>
        <select
          class="border p-2 border-goldTheme mr-4 rounded-xl"
          v-model="filter.attribute"
        >
          <option selected value="">No Attribute</option>
          <option v-for="(attribute, idx) in attributeItems" :key="attribute">
            {{ attribute }}
          </option>
        </select>
      </div>

      <CardListSearch
        :cardList="searchCardList"
        :searchNotFound="searchNotFound"
        :searchQuery="searchQuery"
        :listType="'database'"
        :listLoader="listLoader"
        @nextHandler="searchCardNextHandler"
        @prevHandler="searchCardPrevHandler"
      />
    </div>
  </div>
</template>
