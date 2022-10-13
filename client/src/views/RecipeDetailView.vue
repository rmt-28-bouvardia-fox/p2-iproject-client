<script>
import { mapActions, mapState } from "pinia";
import { useRecipeStore } from "../stores/recipe";

export default {
  props: ["recipe"],
};
</script>

<template>
  <br />
  <br />
  <br />

  <div class="deshes-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-top2 text-center">
            <h3>Try this <span>special</span> Recipe</h3>
            <p>
              <i
                >Resep simpel dan mudah yang dapat dicoba bahkan oleh pemula.</i
              >
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-6 align-self-center">
          <h1>01.</h1>
          <div class="deshes-text">
            <h3>
              <span>Garlic</span><br />
              green beans
            </h3>
            <p class="pt-3">
              Be. Seed saying our signs beginning face give spirit own beast
              darkness morning moveth green multiply she'd kind saying one
              shall, two which darkness have day image god their night. his
              subdue so you rule can.
            </p>
            <span class="style-change">$12.00</span>
          </div>
        </div>
        <div
          class="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0"
        >
          <img src="../assets/images/deshes1.png" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <!-- Deshes Area End -->
</template>
