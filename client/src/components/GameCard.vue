<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movie";
import { useUserStore } from "../stores/user";

export default {
  props: ["game"],
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["addFavorite", "fetchOneMovie"]),
    addFavoriteHandler() {
      this.addFavorite(this.movie.id);
    },
    detailHandler(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<template>
  <div class="card mx-5 my-2" style="width: 18rem">
    <img :src="movie.imgUrl" class="card-img-top image-card my-2" alt="..." />

    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">Rating: {{ movie.rating }}</p>
    </div>
    <div class="card-body">
      <button
        v-if="isLogin"
        @click.prevent="addFavoriteHandler"
        class="btn btn-primary mx-2"
      >
        Favorite
      </button>
      <a @click.prevent="detailHandler(movie.id)" class="btn btn-info"
        >See detail</a
      >
    </div>
  </div>
</template>
