import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  state: () => ({
    getNews: [],
    getSidebarData: [],
    transacToken: "",
    isSubsribe: false,
  }),
  actions: {
    async fetchNews(category) {
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

        const news = data.articles.slice(0, 10);

        this.getNews = news;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDataSidebar() {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/news",
          method: "get",
          params: {
            country: "us",
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const articles = data.articles.slice(0, 10);

        this.getSidebarData = articles;
      } catch (error) {
        console.log(error);
      }
    },
    async getTransactionToken(orderId) {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/news/midtrans",
          method: "post",
          params: {
            orderId,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.transacToken = data.transactionToken;
      } catch (error) {
        console.log(error);
      }
    },
    async subscribe() {
      await axios({
        url: "http://localhost:3000/news/status",
        method: "patch",
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
});
