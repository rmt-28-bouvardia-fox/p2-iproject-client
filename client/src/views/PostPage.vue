<script>
import { mapActions, mapState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  created() {
    this.checkAccessToken();
  },
  mounted() {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://https-bukan9gag-dbeda-web-app.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
  watch: {
    "$route.params": {
      async handler(params) {
        await this.fetchPost(params.id);
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState(usePostStore, ["post"]),
  },
  methods: {
    ...mapActions(usePostStore, ["fetchPost", "checkAccessToken", "likePost"]),
    likeHandler(postId) {
      this.likePost(postId);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <div class="row">
        <div class="mb-2 border-bottom border-2">
          <div id="titlePost">
            <h3 class="mt-2">{{ post.title }}</h3>
          </div>
          <div id="imgPost" class="d-flex justify-content-center">
            <img class="img-fluid" :src="post.imageUrl" alt="meme" />
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
      </div>
      <div id="disqus_thread"></div>
    </div>
  </div>
  <div class="col-3"></div>
</template>
