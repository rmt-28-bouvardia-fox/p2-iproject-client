import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    urlBase: "https://game-steam-h8.herokuapp.com",
    isLogin: false,
    games: [],
    wishlist: [],
    gameIdr: "",
    gameTitle: "",
    gameUrl: "",
    transactionToken: "",
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/login`,
          data: payload,
        });
        localStorage.setItem("access_token", data.data.access_token);
        this.isLogin = true;
        this.router.push("/");
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success login`,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

    async register(payload) {
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/register`,
          data: payload,
        });
        this.router.push("/login");
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success register`,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: "Oops...",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
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
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async addWishList(value) {
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/wishlist`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: value,
        });
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success add to wishlist!`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push("/wishlist");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
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
        this.wishlist = data.data;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async removeWishlist(id) {
      try {
        const data = await axios({
          method: "delete",
          url: `${this.urlBase}/pub/wishlist/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchWishList();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success remove wishlist!`,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    async checkout(id) {
      try {
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/pub/wishlist/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.gameTitle = data.data.dataGame.external;
        this.gameUrl = data.data.dataGame.thumb;
        const currency = await axios({
          method: "get",
          url: `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=IDR&amount=${data.data.dataGame.cheapest}`,
          headers: {
            "X-RapidAPI-Key":
              "97ca4703afmshfc24237fffe660fp16c760jsn46a0ccfdc419",
            "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
          },
        });
        this.gameIdr = Math.ceil(currency.data.rates.IDR.rate_for_amount);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

    async payment(price) {
      try {
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/pub/buygame/${price}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.transactionToken = data.data.transactionToken;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },

    async addOrder(payload) {
      try {
        const data = await axios({
          method: "post",
          url: `${this.urlBase}/pub/order`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: payload,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async fetchOrder() {
      try {
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/pub/order`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
