<script>
// import TheWelcome from '../components/TheWelcome.vue'
import { mapActions, mapState } from "pinia";
import { useRecipeStore } from "../stores/recipe";
import Banner from "../components/Banner.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    Banner,
    RecipeCard,
  },
  // props: ["recipes"],
  computed: {
    ...mapState(useRecipeStore, ["recipes"]),
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    ...mapActions(useRecipeStore, ["fetchRecipes"]),
    handleCardClick(id) {
      this.$emit("handleDetail", id);
      this.$router.push(`recipe/${id}`);
    },
  },
};
</script>

<template>
  <Banner />
  <!-- Food Area starts -->
  <section class="food-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="section-top">
            <h3>
              <span class="style-change">Mari coba</span> <br />masak resep
              menarik ini
            </h3>
            <p class="pt-3">
              Berikut merupakan beberapa resep menarik dari berbagai belahan
              dunia yang wajib dicoba.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <RecipeCard
          v-for="(recipe, index) in recipes"
          :key="index"
          :recipe="recipe"
          @click="handleCardClick(recipe.idMeal)"
        />
      </div>
    </div>
  </section>
  <!-- Food Area End -->
</template>
