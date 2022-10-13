<script>
import { mapActions, mapState } from "pinia";
import { useRecipeStore } from "../stores/recipe";

export default {
  props: ["recipe"],
};
</script>

<template>
  <div class="col-md-4 col-sm-6">
    <div class="single-food">
      <div class="food-img">
        <img :src="recipe.strMealThumb" class="img-fluid" alt="" />
      </div>
      <div class="food-content">
        <div class="d-flex justify-content-between">
          <h5>{{ recipe.strMeal }}</h5>
          <span class="style-change">{{ recipe.strCategory }}</span>
        </div>
        <h6 class="text-dark">Original Recipe From</h6>
        <h5>{{ recipe.strArea }}</h5>
      </div>
    </div>
  </div>
</template>
