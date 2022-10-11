<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginStore } from "../stores/login";
import { useNewsStore } from "../stores/news";

export default {
  computed: { ...mapWritableState(useLoginStore, ["isLogin"]) },
  methods: {
    ...mapActions(useLoginStore, ["logout"]),
    ...mapActions(useNewsStore, ["fetchNews"]),
    newsCategory(cateogry) {
      this.fetchNews(cateogry);
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>
<template>
  <div class="nav-container">
    <div class="top-wrapper">
      <h1 class="logo">The Hacktiv Times</h1>
      <ul class="link-wrapper">
        <li v-if="!isLogin">
          <RouterLink to="/login" class="link user-btn">Login</RouterLink>
        </li>
        <li v-if="!isLogin">
          <RouterLink to="/register" class="link user-btn">Register</RouterLink>
        </li>
        <li v-if="isLogin">
          <RouterLink to="/login" @click.prevent="logout" class="link user-btn"
            >Logout</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="bottom-wrapper">
      <ul class="link-wrapper">
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('')"
            >Latest News</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('sports')"
            >Sports</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('business')"
            >Business</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('entertainment')"
            >Entertainment</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('health')"
            >Health</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('science')"
            >Science</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="link news-category"
            @click.prevent="fetchNews('technology')"
            >Technology</RouterLink
          >
        </li>
      </ul>
      <div class="line2-top"></div>
      <div class="line2-bottom"></div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.nav-container {
  width: 100%;
  padding: 1rem 8rem;
}

.top-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.line {
  width: 100%;
  margin: 1rem 0;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.158);
}

.line2-top {
  margin-top: 1rem;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.5);
}
.line2-bottom {
  width: 100%;
  margin: 0.3rem 0;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.5);
}

.logo {
  font-family: "Great Vibes", cursive;
}

.link-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  margin-left: 1rem;
}

.user-btn {
  border: 1px solid black;
  padding: 0.3rem 1.4rem;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  transition: all 0.4s ease-in-out;
}

.user-btn:hover {
  background-color: transparent;
  color: #000;
}

.news-category {
  font-size: 12px;
  color: #000;
  font-weight: 400;
}
</style>
