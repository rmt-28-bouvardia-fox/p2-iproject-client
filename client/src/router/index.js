import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PatientDetail from "../views/PatientDetail.vue";
import FormPatientDetail from "../views/FormPatientDetail.vue";
import FormAppointment from "../views/FormAppointment.vue";
import FormConsultReport from "../views/FormConsultReport.vue";
import AppointmentList from "../views/AppointmentList.vue";
import DoctorList from "../views/DoctorList.vue"
import Swal from 'sweetalert2'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/patients",
      name: "PatientDetail",
      component: PatientDetail,
    },
    {
      path: "/patientDetails",
      name: "FormPatientDetail",
      component: FormPatientDetail,
    },
    {
      path: "/appointments",
      name: "FormAppointment",
      component: FormAppointment,
    },
    {
      path: "/consultReports",
      name: "FormConsultReport",
      component: FormConsultReport,
    },
    {
      path: "/doctors",
      name: "DoctorList",
      component: DoctorList,
    },
    {
      path: "/doctorAppointments",
      name: "AppointmentList",
      component: AppointmentList,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if ((to.name === 'LoginPage' || to.name === 'RegisterPage') && localStorage.access_token){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `You already logged in!`,
      background: "#e3f2fd",
      confirmButtonColor: "#4fc3f7",
    });
    next({ name: 'HomePage' })
  } else if ((to.name === 'PatientDetail' || to.name === 'FormPatientDetail' || to.name === 'FormAppointment') && localStorage.role === 'Doctor') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `You don't have access!`,
      background: "#e3f2fd",
      confirmButtonColor: "#4fc3f7",
    });
    next({ name: 'HomePage' })
  } else if ((to.name === 'FormConsultReport' || to.name === 'AppointmentList') && localStorage.role === 'Patient') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `You don't have access!`,
      background: "#e3f2fd",
      confirmButtonColor: "#4fc3f7",
    });
    next({ name: 'HomePage' })
  } else {
    next()
  }
})
export default router;
