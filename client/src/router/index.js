import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import PatientDetail from "../views/PatientDetail.vue"
import FormPatientDetail from "../views/FormPatientDetail.vue"
import FormAppointment from "../views/FormAppointment.vue"
import FormConsultReport from "../views/FormConsultReport.vue"
import AppointmentList from "../views/AppointmentList.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/patients',
      name: 'PatientDetail',
      component: PatientDetail
    },
    {
      path: '/patientDetails',
      name: 'FormPatientDetail',
      component: FormPatientDetail
    },
    {
      path: '/appointments',
      name: 'FormAppointment',
      component: FormAppointment
    },
    {
      path: '/consultReports',
      name: 'FormConsultReport',
      component: FormConsultReport
    },
    {
      path: '/doctorAppointments',
      name: 'AppointmentList',
      component: AppointmentList
    },
  ]
})

export default router
