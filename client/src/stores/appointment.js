import { defineStore } from "pinia";
import axios from 'axios';
export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
  }),
  getters: {},
  actions: {
    async loginHandlerPatient(loginData) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/patients/login",
          data: loginData,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async loginHandlerDoctor(loginData) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/doctors/login",
          data: loginData,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    logoutHandler(){
      localStorage.clear()
      this.isLogin = false
      this.router.push("/")
    }
  },
});
