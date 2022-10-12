<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCategoryNewsStore } from "../stores/categoryNews";
import { useLoginStore } from "../stores/login";
import { useWeatherStore } from "../stores/weather";
import { useNewsStore } from "../stores/news";

export default {
  computed: {
    ...mapWritableState(useLoginStore, ["isLogin"]),
    ...mapState(useWeatherStore, ["getWeather", "getCurrentWeather"]),
    ...mapState(useNewsStore, ["transacToken"]),
    ...mapWritableState(useNewsStore, ["isSubsribe"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["logout"]),
    ...mapActions(useCategoryNewsStore, [
      "fetchCategoryNews",
      "fetchInternationalCategory",
    ]),
    ...mapActions(useNewsStore, ["getTransactionToken", "subscribe"]),
    fetchCategory(value) {
      this.fetchCategoryNews(value);
      this.fetchInternationalCategory(value);
    },
    ...mapActions(useWeatherStore, ["currentLocation"]),
    async orderToken(orderId) {
      await this.getTransactionToken(orderId);

      const cb = this.subscribe;

      window.snap.pay(this.transacToken, {
        onSuccess: function () {
          cb();
        },
        onPending: function () {},
        onError: function () {},
        onClose: function () {
          cb();
        },
      });
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

    console.log(localStorage.subscriber == "subscriber");

    if (localStorage.subscriber === "subscriber") {
      this.isSubsribe = true;
    } else {
      this.isSubsribe = false;
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.currentLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        this.fetchWeather("jakarta");
      }
    );
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
      <div class="current-weather">
        <p class="weather-text">{{ getCurrentWeather.weatherText }}</p>
        <div class="content">
          <div class="left">
            <span class="title">City</span>
            <p class="city">{{ getCurrentWeather.name }}</p>
          </div>
          <div class="right">
            <div class="temperature">{{ getCurrentWeather.temperature }}℃</div>
          </div>
        </div>
      </div>
      <ul class="link-wrapper">
        <li>
          <RouterLink to="/" class="link news-category">Latest News</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/sports"
            class="link news-category"
            @click.prevent="fetchCategory('Sports')"
            >Sports</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/business"
            class="link news-category"
            @click.prevent="fetchCategory('Business')"
            >Business</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/entertainment"
            class="link news-category"
            @click.prevent="fetchCategory('Entertainment')"
            >Entertainment</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/health"
            class="link news-category"
            @click.prevent="fetchCategory('Health')"
            >Health</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/science"
            class="link news-category"
            @click.prevent="fetchCategory('Science')"
            >Science</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/technology"
            class="link news-category"
            @click.prevent="fetchCategory('Technology')"
            >Technology</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/weather" class="link news-category"
            >Weather</RouterLink
          >
        </li>
      </ul>
      <button
        @click.prevent="
          orderToken((Math.random() + 1).toString(10).substring(2))
        "
        v-if="!isSubsribe"
      >
        Subscribe
      </button>
      <p v-else-if="isSubsribe">Subscriber</p>
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

.bottom-wrapper {
  position: relative;
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
  border: 1px solid rgb(0, 0, 0);
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

.current-weather {
  width: 200px;
  display: flex;
  border: 1px solid rgba(116, 116, 116, 0.245);
  flex-direction: column;
  padding: 0.3rem;
}

.weather-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 8px;
  font-weight: 300;
}
.city {
  font-size: 10px;
}
</style>
