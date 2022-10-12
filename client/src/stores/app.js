import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    userData: {},
    isLogin: localStorage.access_token ? true : false,
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: payload,
        });
        console.log(data)
        this.userData = data;
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome, ${data.username}`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
  },
});
