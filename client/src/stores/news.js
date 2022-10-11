import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  state: () => ({ getNews: [] }),
  actions: {
    async fetchNews() {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/news",
          method: "get",
          params: {
            country: "id",
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.getNews = data.articles;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
