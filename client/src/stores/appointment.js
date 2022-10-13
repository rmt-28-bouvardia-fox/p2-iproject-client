import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    baseUrl: "https://iproject-achfhm.herokuapp.com",
    isLogin: false,
    isLoading: false,
    role: "",
    patientDetail: {},
    doctors: [],
    symptoms: [],
    specialists: [],
    patientAppointments: [],
    doctorAppointments: [],
    appointmentId: "",
    diagnoses: [],
    transactionToken: "",
    page: {
      number: 1,
      size: 8,
    },
  }),
  getters: {},
  actions: {
    async registerHandler(registerData) {
      this.isLoading = true;
      try {
        await axios({
          url: this.baseUrl + "/patients/register",
          method: "post",
          data: registerData,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.push("/login");
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async loginHandlerPatient(loginData) {
      this.isLoading = true;
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/patients/login",
          data: loginData,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", "Patient");
        this.role = "Patient";
        this.isLogin = true;
        this.router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async loginHandlerDoctor(loginData) {
      this.isLoading = true;
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/doctors/login",
          data: loginData,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", "Doctor");
        this.isLogin = true;
        this.role = "Doctor";
        this.router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async handleCredentialResponse(response) {
      this.isLoading = true;
      try {
        const { data } = await axios({
          url: this.baseUrl + "/patients/google-sign-in",
          method: "post",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", "Patient");
        this.role = "Patient";
        this.isLogin = true;
        this.router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.log(error);
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    logoutHandler() {
      Swal.fire({
        title: "Are you sure want to log out?",
        text: "You need to log in again to make appointment!",
        icon: "warning",
        showCancelButton: true,
        background: "#e3f2fd",
        confirmButtonColor: "#4fc3f7",
        cancelButtonColor: "#f48fb1",
        confirmButtonText: "Yes, log me out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.isLogin = false;
          this.role = "";
          this.patientDetail = {};
          this.router.push("/");
          Swal.fire({
            icon: "success",
            title: "Logged out!",
            text: "Stay safe and stay healthy.",
            iconColor: "#4fc3f7",
            background: "#e3f2fd",
            confirmButtonColor: "#4fc3f7",
          });
        }
      });
    },
    async fetchPatientDetails() {
      this.isLoading = true;
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
        if (error.response.status == 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `You need to register your patient data first!`,
            background: "#e3f2fd",
            confirmButtonColor: "#4fc3f7",
          });
          this.router.push("/patientDetails");
        } else {
          this.errorHandler(error.response.data.message);
        }
      } finally {
        this.isLoading = false;
      }
    },
    async createPatientDetail(patientData) {
      this.isLoading = true;
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Patient detail has been created!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchDoctors() {
      this.isLoading = true;
      let query = {};
      if (this.page.number !== 1 || this.page.size !== 8) {
        query.page = this.page;
      }
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/doctors",
          params: query,
        });
        this.doctors = data;
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchSymptoms() {
      this.isLoading = true;
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
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchSpecialists(symptoms) {
      this.isLoading = true;
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
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async createAppointment(appointmentData) {
      this.isLoading = true;
      console.log(appointmentData);
      try {
        if (typeof appointmentData.symptom === "object") {
          appointmentData.symptom = appointmentData.symptom.join(",");
        }
        await axios({
          method: "post",
          url: this.baseUrl + "/appointments",
          headers: {
            access_token: localStorage.access_token,
          },
          data: appointmentData,
        });
        this.router.push("/patients");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Appointment has been created!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.log(error);
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchPatientAppointments() {
      this.isLoading = true;
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
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchDoctorAppointments() {
      this.isLoading = true;
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
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async createConsultReport(consultReportData) {
      this.isLoading = true;
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
        this.router.push("/doctorAppointments");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Consultation report has been created!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchDiagnoses() {
      this.isLoading = true;
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/diagnoses",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            appointmentId: this.appointmentId,
          },
        });
        this.diagnoses = data;
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async midtransHandler(appointmentId, cost) {
      this.isLoading = true;
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/appointments/transactions",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            appointmentId,
            cost,
          },
        });
        this.transactionToken = data.transactionToken;
        let cb = () => {
          this.updateStatus(appointmentId);
        };
        window.snap.pay(this.transactionToken, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            cb();
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
          },
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    async updateStatus(appointmentId) {
      this.isLoading = true;
      try {
        await axios({
          method: "patch",
          url: this.baseUrl + `/appointments/${appointmentId}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchPatientAppointments();
        this.router.push("/patients");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment completed now appointment have been archived!",
          toast: true,
          iconColor: "#4fc3f7",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        this.errorHandler(error.response.data.message);
      } finally {
        this.isLoading = false;
      }
    },
    errorHandler(error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}!`,
        background: "#e3f2fd",
        confirmButtonColor: "#4fc3f7",
      });
    },
  },
});
