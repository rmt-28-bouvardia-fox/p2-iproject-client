import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryNewsStore = defineStore("categoryNews", {
  state: () => ({ categoryNews: [], headline: {}, internationalCategory: [] }),
  actions: {
    async fetchCategoryNews(category) {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/news",
          method: "get",
          params: {
            country: "id",
            category,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.headline = data.articles[0];
        const news = data.articles.slice(1, 10);
        this.categoryNews = news;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchInternationalCategory(category) {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/news",
          method: "get",
          params: {
            country: "us",
            category,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const news = data.articles.slice(0, 3);
        this.internationalCategory = news;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
