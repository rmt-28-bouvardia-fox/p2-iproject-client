import { defineStore } from "pinia";
import axios from "axios";
export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    patientDetail: {},
    doctors: [],
  }),
  getters: {},
  actions: {
    async registerHandler(registerData) {
      try {
        await axios({
          url: this.baseUrl + "/patients/register",
          method: "post",
          data: registerData,
        });
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
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
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },
    async fetchPatientDetails() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/patients/patientdetails",
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.patientDetail = data
      } catch (error) {
        console.log(error)
      }
    },
    async createPatientDetail(patientData) {
      try {
        await axios ({
          method: "post",
          url: this.baseUrl + "/patients/patientdetails",
          data: patientData,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.router.push("/patients")
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDoctors() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/doctors"
        })
        this.doctors = data
      } catch (error) {
        console.log(error)
      }
    },
  },
});
