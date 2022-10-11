<script>
import { mapActions, mapState } from "pinia";
import { useNewsStore } from "../stores/news";
import CardComponent from "../components/CardComponent.vue";
import Navbar from "../components/Navbar.vue";
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
  methods: { ...mapActions(useNewsStore, ["fetchNews", "fetchDataSidebar"]) },
  computed: { ...mapState(useNewsStore, ["getNews", "getSidebarData"]) },
  created() {
    this.fetchNews();
    this.fetchDataSidebar();
  },
  components: { CardComponent, Navbar, SidebarComponent },
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
    <div class="sidebar">
      <div class="rows">
        <h1 class="sidebar-title">International top articles</h1>
        <div class="sidebar-line"></div>
        <SidebarComponent
          v-for="(data, index) in getSidebarData"
          :key="index"
          :data="data"
        />
      </div>
    </div>
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
  min-height: 406vh;
  width: 1px;
  background-color: #000;
  margin: 0 1rem;
}
.sidebar {
  flex: 0.5;
}

.sidebar-title {
  font-size: 1.35rem;
  font-weight: 500;
}

.sidebar-line {
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 1rem 0;
}
</style>
