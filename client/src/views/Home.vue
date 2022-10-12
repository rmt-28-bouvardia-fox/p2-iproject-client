<script>
// import TheWelcome from "../components/TheWelcome.vue"
import { mapActions, mapState } from "pinia";
import GameCard from "../components/GameCard.vue";
import { useAppStore } from "@/stores/user";
export default {
  data() {
    return {
      perPage: 9,
      pageNumber: 1,
    };
  },
  components: {
    GameCard,
  },
  created() {
    // this.fetchGames();
  },
  computed: {
    ...mapState(useAppStore, ["games", "rows"]),
  },
  methods: {
    ...mapActions(useAppStore, ["fetchGames", "paginationMovie"]),
    handlePageChange(val) {
      this.pageNumber = val;
      this.paginationMovie(this.perPage, this.pageNumber);
    },
    nextButton() {
      if (this.pageNumber !== Math.ceil(this.rows / this.perPage)) {
        this.pageNumber++;
        this.paginationMovie(this.perPage, this.pageNumber);
      }
    },
    previousButton() {
      if (this.pageNumber !== 1) {
        this.pageNumber--;
        this.paginationMovie(this.perPage, this.pageNumber);
      }
    },
    submitSearch() {
      //   console.log(this.title);
      this.fetchGames(this.title);
    },
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">Home Page</h1>
    <div class="row mt-3">
      <!-- <div>
        <div class="pagination mx-5">
          <button @click="previousButton" class="btn page-link">
            Previous
          </button>
          <span
            v-for="(item, idx) in new Array(
              Math.ceil(this.rows / this.perPage)
            )"
            :key="idx"
          >
            <button @click="handlePageChange(idx + 1)" class="btn page-link">
              {{ idx + 1 }}
            </button>
          </span>
          <button @click="nextButton" class="btn page-link">Next</button>
        </div>
      </div> -->
      <form class="d-flex mx-5" role="search" @submit.prevent="submitSearch">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search by title..."
          aria-label="Search"
          name="title"
          v-model="title"
          required
          width="200"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <GameCard v-for="(game, idx) in games" :key="idx" :game="game" />
    </div>
  </div>
</template>
