<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import Navbar from "../components/Navbar.vue";
import { useWeatherStore } from "../stores/weather";
export default {
  components: { Navbar },
  methods: {
    ...mapActions(useWeatherStore, ["fetchWeather"]),
    ...mapActions(useWeatherStore, ["currentLocation"]),
  },
  computed: {
    ...mapState(useWeatherStore, ["getWeather"]),
    ...mapWritableState(useWeatherStore, ["getCity"]),
  },
  created() {
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
  <Navbar />
  <div class="container">
    <div class="wrapper">
      <form action="" class="search-wrapper">
        <input
          type="search"
          name=""
          class="search-input"
          placeholder="Search city"
          id=""
          v-model="getCity"
        />
        <button @click.prevent="fetchWeather" class="search-btn">Search</button>
      </form>
      <div class="card">
        <div class="top">
          <img
            src="../assets/day.jpg"
            alt=""
            class="weather-img"
            v-if="getWeather.isDayTime"
          />
          <img
            src="../assets/night.jpg"
            alt=""
            class="weather-img"
            v-if="!getWeather.isDayTime"
          />
        </div>
        <div class="bottom">
          <!-- <img :src="`../assets/icons/1.svg`" alt="" srcset="" /> -->
          <h4 class="weather-text">{{ getWeather.weatherText }}</h4>
          <p class="city-title">City</p>
          <h1 class="city">{{ getWeather.name }}</h1>
          <div class="temperature">
            <h3 class="temperature-title">Temperature</h3>
            <div class="celcius">{{ getWeather.temperature }}℃</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 0 8rem;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search-wrapper {
  margin: 1rem 0;
}

.search-input {
  padding: 0.3rem 1rem;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 0.5rem;
}

.search-btn {
  cursor: pointer;
  padding: 0.3rem 1rem;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
}

.card {
  width: 270px;
  height: 350px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
}

.weather-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.bottom {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
}

.weather-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.8rem;
}

.city-title {
  font-size: 12px;
  font-weight: 400;
  color: rgb(109, 109, 109);
}

.city {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.temperature-title {
  font-weight: 500;
}
</style>
