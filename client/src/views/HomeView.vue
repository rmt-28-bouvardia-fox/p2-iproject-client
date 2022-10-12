<script>
// import TheWelcome from '../components/TheWelcome.vue'
import Banner from "../components/Banner.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    Banner,
    RecipeCard,
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
        <RecipeCard />
      </div>
    </div>
  </section>
  <!-- Food Area End -->
</template>
