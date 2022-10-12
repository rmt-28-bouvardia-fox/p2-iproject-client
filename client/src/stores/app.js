import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    userData: {},
    isLogin: localStorage.access_token ? true : false,
    products: [],
    bidList: []
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
        // console.log(data);
        this.userData = data;
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.isLogin = true;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Happy Bidding, ${data.username}`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async register(paylaod) {
      // console.log(paylaod, "masuk store")
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: paylaod,
        });
        this.router.push("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome, new User!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    async logout() {
      localStorage.clear();
      this.userData = {};
      this.router.push("/login");
      this.isLogin = false;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bye bye!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async fetchProduct() {
      try {
        const {data} = await axios({
          url: this.baseUrl + '/products',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.products = data
        console.log(data)
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchMyBid() {

    }
  },
});
