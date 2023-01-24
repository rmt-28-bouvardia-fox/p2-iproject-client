import { defineStore } from "pinia";
import { useSwalStore } from "@/stores/swal";
import api from "@/helpers/api.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    access_token: localStorage.access_token,
    username: localStorage.username,
    loginData: {
      email: "",
      password: "",
    },
    registerData: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  }),
  actions: {
    setAccessToken() {
      this.access_token = localStorage.access_token;
      this.username = localStorage.username;
    },
    async getUser() {
      const swal = useSwalStore();
      try {
        if (!localStorage.access_token) {
          return false;
        }

        const { data } = await api({
          url: "/user",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        return data;
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async loginHandler() {
      const swal = useSwalStore();
      try {
        const result = await api({
          url: "/login",
          method: "POST",
          data: {
            email: this.loginData.email,
            password: this.loginData.password,
          },
        });

        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("username", result.data.username);
        this.setAccessToken();
        this.loginData = {
          email: "",
          password: "",
        };
        swal.swalInfo("Login Success!");
        this.router.push("/");
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    async registerHandler() {
      const swal = useSwalStore();
      try {
        await api({
          url: "/register",
          method: "POST",
          data: {
            username: this.registerData.username,
            email: this.registerData.email,
            password: this.registerData.password,
            phoneNumber: this.registerData.phoneNumber,
          },
        });
        this.registerData = {
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
        };
        swal.swalInfo("Register Success!");
        this.router.push("/login");
      } catch (error) {
        swal.errorHandler(error);
      }
    },
    logoutHandler() {
      const swal = useSwalStore();
      swal.swalConfirmation(
        "Are you sure you want to logout?",
        "warning",
        "Logout",
        () => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("username");
          this.setAccessToken();
          this.router.push("/");
        }
      );
    },
    async loginGoogleHandler(response) {
      const swal = useSwalStore();
      try {
        const { data } = await api({
          url: "/login-google",
          method: "POST",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.setAccessToken();
        swal.swalInfo("Login Success!");
        this.router.push("/");
      } catch (error) {
        swal.errorHandler(error);
      }
    },
  },
});
