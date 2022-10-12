<script>
import { mapActions, mapState } from "pinia";
// import { useMovieStore } from "../stores/movie";
import { useAppStore } from "../stores/user";

export default {
  props: ["game"],
  computed: {
    ...mapState(useAppStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAppStore, ["fetchGames", "addWishList"]),
    addFavoriteHandler() {
      // console.log(this.game);
      this.addWishList({ dataGame: this.game });
    },
    detailHandler(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<template>
  <div class="card mx-5 my-2" style="width: 18rem">
    <img :src="game.thumb" class="card-img-top image-card my-2" alt="..." />

    <div class="card-body">
      <h5 class="card-title">{{ game.external }}</h5>
    </div>
    <div class="card-body">
      <button @click.prevent="addFavoriteHandler" class="btn btn-primary mx-2">
        Wishlist
      </button>
    </div>
  </div>

  <!-- <div class="card mx-auto col-md-3 col-10 mt-5">
    <img class="mx-auto img-thumbnail" :src="game.thumb" />
    <div class="card-body text-center mx-auto">
      <div class="cvp">
        <h5 class="card-title font-weight-bold">{{ game.external }}</h5>
        <p class="card-text">${{ game.cheapest }}</p>
        <a href="#" class="btn details px-auto">view details</a><br />
        <a href="#" class="btn cart px-auto">ADD TO WISHLIST</a>
      </div>
    </div>
  </div> -->
</template>

<style>
.details {
  border: 1.5px solid grey;
  color: #212121;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px #212121;
}

.cart {
  background-color: #212121;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 900;
  width: 100%;
  height: 39px;
  padding-top: 9px;
  box-shadow: 0px 5px 10px #212121;
}

.card {
  width: fit-content;
}

.card-body {
  width: fit-content;
}

.btn {
  border-radius: 0;
}

.img-thumbnail {
  border: none;
}

.card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-bottom: 10px;
}
</style>
