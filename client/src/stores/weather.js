import axios from "axios";
import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    getWeather: {},
    getCity: "",
    getCurrentWeather: {},
    internationalWeather: [],
  }),
  actions: {
    async fetchWeather(city) {
      try {
        if (!this.getCity) {
          this.getCity = city;
        }

        const { data } = await axios({
          url: "http://localhost:3000/weather",
          method: "get",
          params: {
            city: this.getCity,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.getCity = "";

        this.getWeather = {
          name: data.city.LocalizedName,
          isDayTime: data.cityCondition[0].IsDayTime,
          weatherIcon: data.cityCondition[0].WeatherIcon,
          weatherText: data.cityCondition[0].WeatherText,
          temperature: data.cityCondition[0].Temperature.Metric.Value,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCurrentWeather(city) {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/weather",
          method: "get",
          params: {
            city,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.getCurrentWeather = {
          name: data.city.LocalizedName,
          isDayTime: data.cityCondition[0].IsDayTime,
          weatherIcon: data.cityCondition[0].WeatherIcon,
          weatherText: data.cityCondition[0].WeatherText,
          temperature: data.cityCondition[0].Temperature.Metric.Value,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async currentLocation(lat, long) {
      try {
        const location = `${lat},${long}`;

        const { data } = await axios({
          url: "http://localhost:3000/weather/geolocations",
          method: "get",
          params: {
            location,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        await this.fetchWeather(data.LocalizedName);
        await this.fetchCurrentWeather(data.LocalizedName);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
