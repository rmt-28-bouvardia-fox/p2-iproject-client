import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const base = "https://rmt28-branded-things.herokuapp.com";

export const useUserStore = defineStore("user", {
  state: () => ({
    login: {
      email: "",
      password: "",
    },
    register: {
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      longitude: "",
      latitude: "",
    },
    isLogin: false,
  }),
  actions: {
    async loginAccount() {
      try {
        const { data } = await axios({
          url: `${base}/users/login`,
          method: "post",
          data: this.login,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          tittle: "No no no no",
          text: `${error.response.data.name}`,
          confirmButtonText: "Okeh",
        });
      }
    },
    async registerAccount() {
      try {
        await axios({
          url: `${base}/users/register`,
          method: "post",
          data: this.register,
        });
        Swal.fire({
          icon: "success",
          tittle: "Yes yes yes!!",
          text: `Register success`,
          confirmButtonText: "Okeh",
        });
        this.router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          tittle: "No no no no",
          text: `${error.response.data.message}`,
          confirmButtonText: "Okeh",
        });
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/login");
      this.isLogin = false;
    },
    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${base}/users/google-sign-in`,
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/")
      } catch (error) {
        Swal.fire({
          icon: "error",
          tittle: "No no no no",
          text: `${error.response.data.message}`,
          confirmButtonText: "Okeh",
        });
      }
    },
  },
});
