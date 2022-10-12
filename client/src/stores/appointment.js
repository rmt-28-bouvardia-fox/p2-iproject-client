import { defineStore } from "pinia";
import axios from "axios";
export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    patientDetail: {},
    doctors: [],
    symptoms: [],
    specialists: [],
    patientAppointments: [],
    doctorAppointments: [],
    appointmentId: "",
    diagnoses: [],
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
            access_token: localStorage.access_token,
          },
        });
        this.patientDetail = data;
      } catch (error) {
        console.log(error);
      }
    },
    async createPatientDetail(patientData) {
      try {
        await axios({
          method: "post",
          url: this.baseUrl + "/patients/patientdetails",
          data: patientData,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/patients");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDoctors() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/doctors",
        });
        this.doctors = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSymptoms() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/symptoms",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.symptoms = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSpecialists(symptoms) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/specialists",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            symptoms: `[${symptoms}]`,
          },
        });
        console.log(data);
        let arrayId = [];
        data.forEach((el) => {
          arrayId.push(el.ID);
        });
        let specialistId = arrayId.join(",");
        const doctors = await axios({
          method: "get",
          url: this.baseUrl + "/doctors/specialists",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            specialistId,
          },
        });
        this.specialists = doctors.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createAppointment(appointmentData) {
      try {
        appointmentData.symptom = appointmentData.symptom.join(",");
        console.log(appointmentData);
        await axios({
          method: "post",
          url: this.baseUrl + "/appointments",
          headers: {
            access_token: localStorage.access_token,
          },
          data: appointmentData,
        });
        this.router.push("/patients");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPatientAppointments() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/patients",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.patientAppointments = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDoctorAppointments() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/doctors",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.doctorAppointments = data;
      } catch (error) {
        console.log(error);
      }
    },
    async createConsultReport(consultReportData) {
      try {
        await axios({
          method: "post",
          url:
            this.baseUrl +
            `/appointments/consultationReports/${this.appointmentId.toString()}`,
          data: consultReportData,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/doctors");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDiagnoses() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/diagnoses",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            appointmentId: this.appointmentId
          }
        });
        this.diagnoses = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
