import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    urlBase: "http://localhost:3000",
    isLogin: false,
    games: [],
    wishlist: [],
    gameIdr: "",
    gameTitle: "",
    gameUrl: "",
  }),
  getters: {},
  actions: {
    async login(payload) {
      console.log(payload);
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/login`,
          data: payload,
        });
        // console.log(data);
        localStorage.setItem("access_token", data.data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async fetchGames(title) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.urlBase}/pub/games?title=${title}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.games = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addWishList(value) {
      // console.log(value);
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/wishlist`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: value,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async fetchWishList() {
      try {
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/pub/wishlist`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.wishlist = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async removeWishlist(id) {
      // console.log(id, "masuk pinia");
      try {
        const data = await axios({
          method: "delete",
          url: `${this.urlBase}/pub/wishlist/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchWishList();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async checkout(name, price, url) {
      this.gameTitle = name;
      this.gameUrl = url;
      try {
        const currency = await axios({
          method: "get",
          url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=IDR&amount=${price}`,
          headers: {
            "X-RapidAPI-Key":
              "97ca4703afmshfc24237fffe660fp16c760jsn46a0ccfdc419",
            "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
          },
        });
        console.log(currency.data.rates.IDR.rate_for_amount);
        this.gameIdr = currency.data.rates.IDR.rate_for_amount;
        console.log(this.gameTitle, this.gameIdr, this.gameUrl);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
