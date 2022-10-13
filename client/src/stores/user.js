import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    baseUrl: "https://iproject-wedding-invitation.herokuapp.com",
    username: "",
    email: "",
    password: "",
    isLogin: false,
  }),
  actions: {
    async registerHandler() {
      try {
        const register = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        });
        this.router.push("/login");
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      } finally {
        (this.username = ""), (this.email = ""), (this.password = "");
      }
    },
    async loginHandler() {
      try {
        const login = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: this.email,
            password: this.password,
          },
        });
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        localStorage.setItem("access_token", login.data.access_token);
        this.isLogin = true;
        this.router.push("/template");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      } finally {
        this.email = "";
        this.password = "";
      }
    },
    async handleCredentialResponse(response) {
      try {
        const data = await axios({
          method: "post",
          url: this.baseUrl + "/google-sign-in",
          headers: {
            google_token: response.credential,
          },
        });
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        localStorage.setItem("access_token", data.data.access_token);
        this.isLogin = true;
        this.router.push("/create");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    },
  },
});
