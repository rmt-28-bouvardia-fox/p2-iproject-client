import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    userData: {},
    isLogin: localStorage.access_token ? true : false,
    products: [],
    bidLists: [],
    product: {},
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
        localStorage.setItem("id", data.id)
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
        const { data } = await axios({
          url: this.baseUrl + "/products",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.products = data;
        // console.log(data)
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchOneProduct(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/products/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.product = data;
        // console.log(data)
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchMyBid() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/myBidList",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.bidLists = data;
        // console.log(data)
      } catch (error) {
        // console.log(error)
        Swal.fire(error.response.data.message);
      }
    },
    async addBidList(id) {
      try {
        await axios({
          method: "post",
          url: this.baseUrl + `/myBidList/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/mylist");
        // console.log("berhasil nge add");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "added to your Bid List",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Log-In First!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        // console.log(error);
      }
    },
    async startBidding(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/startBid/${id}`,
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        await this.fetchProduct();
        this.router.push(`/detail/${id}`);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async deleteBidList(id) {
      // console.log('ke hit', id)
      try {
        await axios({
          method: "delete",
          url: this.baseUrl + `/deleteList/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        await this.fetchMyBid();
        this.router.push("/mylist");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "List removed from your Bid List",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
  },
});
