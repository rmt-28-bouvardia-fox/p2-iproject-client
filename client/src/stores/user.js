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
        url: "http://localhost:3000/users/login",
        data: payload,
      });
    },
    register(payload) {
      return axios({
        method: "post",
        url: "http://localhost:3000/users/register",
        data: payload,
      });
      // this.router.push("/login");
    },
  },
});
