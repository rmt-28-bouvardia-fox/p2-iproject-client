<script>
import formatDistance from "date-fns/formatDistance";
import { mapActions } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  props: ["post"],
  computed: {
    formattedDate() {
      return formatDistance(new Date(this.post.createdAt), new Date());
    },
  },

  methods: {
    ...mapActions(usePostStore, ["likePost"]),
    detailPost(postId) {
      this.$router.push(`/post/${postId}`);
    },
    likeHandler(postId) {
      this.likePost(postId);
    },
  },
};
</script>
<template>
  <div class="mb-2 border-bottom border-2">
    <div id="titlePost">
      <h3 class="mt-2">{{ post.title }}</h3>
      <h5 style="font-size: 15px" class="mt-2">{{ formattedDate }} ago</h5>
    </div>
    <div id="imgPost" class="d-flex justify-content-center">
      <img
        @click.prevent="detailPost(post.id)"
        class="img-fluid"
        :src="post.imageUrl"
        alt="meme"
      />
    </div>
    <div
      @click.prevent="likeHandler(post.id)"
      id="likePost"
      class="border border-2 mt-3 mb-3"
      style="width: 100px; font-size: 1.5em"
    >
      <i class="fa-solid fa-thumbs-up ms-1"></i> {{ post.Likes.length }}
    </div>
  </div>
</template>
