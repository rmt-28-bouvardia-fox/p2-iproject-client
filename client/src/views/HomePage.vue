<script>
import { mapActions, mapState } from "pinia";
import { useNewsStore } from "../stores/news";
import CardComponent from "../components/CardComponent.vue";
import Navbar from "../components/Navbar.vue";

export default {
  methods: { ...mapActions(useNewsStore, ["fetchNews"]) },
  computed: { ...mapState(useNewsStore, ["getNews"]) },
  created() {
    this.fetchNews();
  },
  components: { CardComponent, Navbar },
};
</script>
<template>
  <Navbar />
  <div class="container">
    <div class="home-wrapper">
      <div class="rows">
        <!-- Card -->
        <CardComponent v-for="news in getNews" :key="news.id" :news="news" />
      </div>
    </div>
    <div class="line"></div>
    <div class="sidebar"></div>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  padding: 0 8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.home-wrapper {
  flex: 1.2;
}

.line {
  min-height: 100%;
  width: 1px;
  background-color: #000;
  margin: 0 1rem;
}
.sidebar {
  flex: 0.5;
}
</style>
