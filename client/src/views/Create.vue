<script>
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  data() {
    return {
      formCreate: {},
      boxes: 0,
      image: null,
    };
  },
  created() {
    this.checkAccessToken();
    this.fetchMemes();
  },
  computed: {
    ...mapState(usePostStore, ["memes"]),
  },
  methods: {
    ...mapActions(usePostStore, [
      "createPost",
      "fetchMemes",
      "checkAccessToken",
      "uploadFile",
    ]),
    async submitCreate() {
      this.createPost(this.formCreate);
    },
    async changeMeme(template_id, boxes, name) {
      this.formCreate.template_id = template_id;
      this.formCreate.name = name;
      this.boxes = boxes;
    },
    async changePageMeme(page) {
      this.fetchMemes(page);
    },
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    uploadImage() {
      const fd = new FormData();
      fd.append("meme", this.image, this.image.name);
      this.uploadFile(fd);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-5">
      <h2>Choose Your Meme</h2>
      <div class="border-bottom border-2"></div>
      <!-- pagination -->
      <div class="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                v-if="memes.currentPage <= 1"
                class="page-link disabled"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
              <a
                v-if="memes.currentPage > 1"
                @click.prevent="changePageMeme(+memes.currentPage - 1)"
                class="page-link"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a
                v-if="memes.currentPage < memes.totalPages"
                @click.prevent="changePageMeme(+memes.currentPage + 1)"
                class="page-link"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
              <a
                v-if="memes.currentPage >= memes.totalPages"
                class="page-link disabled"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- meme -->
      <div class="memes">
        <a
          @click.prevent="changeMeme(meme.id, meme.box_count, meme.name)"
          v-for="(meme, index) in memes.memes"
          href=""
        >
          <img class="img-fluid m-1" :key="index" :src="meme.url" alt="" />
        </a>
      </div>
    </div>

    <div class="col-5">
      <div class="text-center mt-5 mb-3">
        <div class="border border-2 p-3">
          <h1 class="text-center mt-1">Create Meme</h1>
          <form @submit.prevent="submitCreate">
            <div class="mb-3">
              <label for="title" class="form-label">Meme</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Choose your meme"
                v-model="formCreate.name"
                disabled
                required
              />
            </div>
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="type title here"
                v-model="formCreate.title"
                required
              />
            </div>
            <div class="mb-3">
              <label for="text1" class="form-label">Text 1</label>
              <input
                type="text"
                class="form-control"
                id="text1"
                placeholder="type text here"
                v-model="formCreate.text0"
                required
              />
            </div>
            <div v-if="boxes >= 2" class="mb-3">
              <label for="text2" class="form-label">Text 2</label>
              <input
                type="text"
                class="form-control"
                id="text2"
                placeholder="type text here"
                v-model="formCreate.text1"
              />
            </div>
            <div v-if="boxes >= 3" class="mb-3">
              <label for="text3" class="form-label">Text 3</label>
              <input
                type="text"
                class="form-control"
                id="text3"
                placeholder="type text here"
                v-model="formCreate.text2"
              />
            </div>
            <div v-if="boxes >= 4" class="mb-3">
              <label for="text4" class="form-label">Text 4</label>
              <input
                type="text"
                class="form-control"
                id="text4"
                placeholder="type text here"
                v-model="formCreate.text3"
              />
            </div>
            <div v-if="boxes >= 5" class="mb-3">
              <label for="text5" class="form-label">Text 5</label>
              <input
                type="text"
                class="form-control"
                id="text5"
                placeholder="type text here"
                v-model="formCreate.text4"
              />
            </div>
            <div v-if="boxes >= 6" class="mb-3">
              <label for="text6" class="form-label">Text 6</label>
              <input
                type="text"
                class="form-control"
                id="text6"
                placeholder="type text here"
                v-model="formCreate.text5"
              />
            </div>
            <button type="submit" class="btn btn-secondary mb-2">Post</button>
          </form>
        </div>
        <div class="uploadImage mt-2">
          <h3>Have your own meme ? upload it here</h3>
          <p>your filename is the title of the post</p>
          <input type="file" name="meme" @change="onFileSelected" />
          <button @click.prevent="uploadImage">Upload</button>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>
<style>
.memes a img:hover {
  opacity: 50%;
}

.memes a img {
  width: 130px;
  height: 130px;
}
</style>
