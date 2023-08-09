<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/stores/user";

export default {
  created() {
    this.fetchWishList();
  },
  computed: {
    ...mapState(useAppStore, ["wishlist", "rows"]),
  },
  methods: {
    ...mapActions(useAppStore, [
      "fetchWishList",
      "removeWishlist",
      "checkout",
      "addOrder",
    ]),
    deleteWishListHandler(id) {
      this.removeWishlist(id);
    },
    buyHandler(id, title, price, imageUrl) {
      this.$router.push(`/checkout/${id}`);
    },
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center text-light">Wishlist Page</h1>
    <div class="row mt-3">
      <div
        v-for="(movie, idx) in wishlist"
        :key="idx"
        class="card text-white bg-secondary mb-3 mx-3"
        style="width: 18rem"
      >
        <img
          :src="movie.dataGame.thumb"
          class="card-img-top image-card my-2"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">{{ movie.dataGame.external }}</h5>
          <span>Rp {{ movie.dataGame.cheapest }}</span>
        </div>
        <button
          class="btn btn-info mx-2 my-2"
          @click.prevent="
            buyHandler(
              movie.id,
              movie.dataGame.external,
              movie.dataGame.cheapest,
              movie.dataGame.thumb
            )
          "
        >
          Checkout
        </button>
        <button
          @click.prevent="deleteWishListHandler(movie.id)"
          class="btn btn-danger mx-2 my-2"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
