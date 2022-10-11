<script>
import { mapActions, mapState } from "pinia";
import { useCategoryNewsStore } from "../stores/categoryNews";
import Navbar from "./Navbar.vue";

export default {
  methods: {
    ...mapActions(useCategoryNewsStore, [
      "fetchCategoryNews",
      "fetchInternationalCategory",
    ]),
  },
  computed: {
    ...mapState(useCategoryNewsStore, [
      "headline",
      "categoryNews",
      "internationalCategory",
    ]),
  },
  created() {
    this.fetchInternationalCategory(this.$route.name);
    this.fetchCategoryNews(this.$route.name);
  },
  components: { Navbar },
};
</script>
<template>
  <Navbar />
  <div class="container">
    <div class="wrapper">
      <div class="headline-left">
        <h1 class="headline-left-title">
          International Top Articles in {{ this.$route.name }}
        </h1>
        <div class="headline-left-line"></div>
        <a
          :href="interCategory.url"
          target="_blank"
          v-for="(interCategory, index) in internationalCategory"
          :key="index"
          class="card-link"
        >
          <div class="headline-left-content">
            <h1 class="headline-left-subtitle">{{ interCategory.title }}</h1>
            <p class="headline-left-desc">{{ interCategory.description }}</p>
          </div>
        </a>
      </div>
      <div class="headline">
        <img :src="headline.urlToImage" class="headline-img" alt="" />
        <h1 class="headline-title">{{ headline.title }}</h1>
        <p class="headline-desc">{{ headline.description }}</p>
      </div>
    </div>
    <div class="line"></div>

    <div class="category-news">
      <a
        :href="category.url"
        target="_blank"
        v-for="(category, index) in categoryNews"
        :key="index"
        class="card-link"
      >
        <div class="card">
          <div class="left">
            <h3 class="card-title">{{ category.title }}</h3>
            <div class="card-desc">{{ category.description }}</div>
          </div>
          <div class="right">
            <img class="card-img" :src="category.urlToImage" alt="news image" />
          </div>
        </div>
      </a>
      <div class="card-line"></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 0 8rem;
}

.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.headline-left {
  color: #000;
  width: 350px;
}
.headline-left-content {
  color: #000;
}

.headline-left-title {
  font-weight: 600;
  font-size: 1.4rem;
}

.headline-left-subtitle {
  font-weight: 500;
  font-size: 0.8rem;
}

.headline-left-desc {
  font-size: 12px;
  margin: 0.6rem 0;
  font-weight: 300;
}
.headline {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 700px;
}

.headline-img {
  width: 600px;
  height: 350px;
  object-fit: cover;
}

.headline-title {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.headline-desc {
  font-weight: 300;
  font-size: 14px;
}

.category-news {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
}

.card-link {
  color: #000;
  margin: 1rem;
}

.card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: black;
}

.left {
  width: 250px;
  padding: 1rem;
}

.right {
  width: 250px;
}

.card-title {
  font-weight: 500;
  font-size: 1rem;
}

.card-desc {
  font-weight: 300;
  font-size: 11px;
  margin: 1rem 0;
}

.card-img {
  width: 250px;
  height: 150px;
  object-fit: cover;
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgb(0, 0, 0);
  margin: 1.5rem 0;
}

.line:last-child {
  display: none;
}

.headline-left-line {
  width: 100%;
  height: 1px;
  background-color: rgba(122, 122, 122, 0.235);
  margin: 1rem 0;
}
</style>
