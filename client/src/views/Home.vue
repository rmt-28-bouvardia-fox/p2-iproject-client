<script>
import { mapActions, mapState } from "pinia";
import { usePostStore } from "../stores/post";
import Post from "../components/Post.vue";

export default {
  components: {
    Post,
  },
  created() {
    this.checkAccessToken();
  },
  beforeMount() {
    this.fetchPosts();
  },
  mounted() {
    this.getNextPost();
  },
  unmounted() {
    window.onscroll = () => {};
  },
  computed: {
    ...mapState(usePostStore, ["posts", "getNextPost"]),
  },
  methods: {
    ...mapActions(usePostStore, ["checkAccessToken", "fetchPosts"]),
  },
};
</script>

<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <div class="row">
        <Post v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </div>
  </div>
  <div class="col-3"></div>
</template>
