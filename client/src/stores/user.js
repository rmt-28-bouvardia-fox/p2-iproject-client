import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    count: 0,
    name: "Eduardo",
    urlBase: "http://localhost:3000",
    isLogin: false,
    games: [],
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
        const data = await axios({
          method: "get",
          url: `${this.urlBase}/pub/games/?title=${title}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {}
    },
  },
});
