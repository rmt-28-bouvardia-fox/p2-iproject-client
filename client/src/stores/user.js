import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    email: "",
  }),
  getters: {},
  actions: {
    login(payload) {
      console.log("masuk store");
      return axios({
        method: "post",
        url: "https://masakapa.herokuapp.com/users/login", // http://localhost:3000 as basic url
        data: payload,
      });
    },
    register(payload) {
      return axios({
        method: "post",
        url: "https://masakapa.herokuapp.com/register",
        data: payload,
      });
      // this.router.push("/login");
    },
  },
});
