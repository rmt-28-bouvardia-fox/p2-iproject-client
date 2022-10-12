import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => (
    {
      isLogin: false,
      userLogin: {},
      baseUrl: `http://localhost:3000`,
      coach: '',
      newUser: {},
      myTeam: {},
      newTeam: {},
    }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async loginAction() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/users/login`,
          method: 'POST',
          data: this.userLogin
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success',
          text: "Success Login",
          showConfirmButton: false,
          timer: 1000
        })
        this.isLogin = true
        this.coach = data.name
        this.router.push('/home')
        localStorage.name = data.name
        localStorage.access_token = data.access_token
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
      }
    },
    async registerAction() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/users/register`,
          method: 'POST',
          data: this.newUser
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success',
          text: "Success Register",
          showConfirmButton: false,
          timer: 1000
        })
        this.isLogin = true
        this.coach = data.name
        this.router.push('/createTeam')
        localStorage.name = data.name
        localStorage.access_token = data.access_token
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
      }
    },
    logoutAction() {
      localStorage.clear()
      this.isLogin = false
      this.coach = ''
      this.userLogin = {}
      this.newUser = {}
      this.router.push('/')
      this.myTeam = {}
    },
    async createTeam() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/teams`,
          method: 'POST',
          data: this.newTeam,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.myTeam = data
        this.router.push('/home')
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async fetchTeam() {
      try {
        const { data } = await axios({
          url: `${this.baseUrl}/teams`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.myTeam = data
      } catch (error) {
        console.log(error.response.data);
      }
    }
  },
})
