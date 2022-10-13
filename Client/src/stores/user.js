import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => (
    {
      isLogin: false,
      userLogin: {},
      baseUrl: `https://dreamfootball1.herokuapp.com`,
      coach: '',
      newUser: {},
      myTeam: {},
      newTeam: {},
      otp: '',
      otpInput: '',
      showLoadingU: false,
      hasTeam: true
    }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async loginAction() {
      try {
        this.showLoadingU = true
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
        this.showLoadingU = false
        this.isLogin = true
        this.coach = data.name
        this.router.push('/home')
        localStorage.name = data.name
        localStorage.access_token = data.access_token
        localStorage.team = true
      } catch (error) {
        this.showLoadingU = false
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
      }
    },
    async registerAction() {
      try {
        if (this.otp !== Number(this.otpInput) ) {
          throw{name: 'wrong otp'}
        }
        this.showLoadingU = true
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
        this.showLoadingU = false
        this.isLogin = true
        this.coach = data.name
        this.router.push('/createTeam')
        localStorage.name = data.name
        localStorage.access_token = data.access_token
      } catch (error) {
        this.showLoadingU = false
        if (error.name == 'wrong otp') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.name
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data
          })
        }
      }
    },
    async verifyEmail() {
      try {
        this.showLoadingU = true
        const { data } = await axios({
          url: `${this.baseUrl}/users/verifyEmail`,
          method: "POST",
          data: {email: this.newUser.email},
        })
        this.router.push('/verifyOtp')
        this.otp = data.otp
        this.showLoadingU = false
      } catch (error) {
        this.showLoadingU = false
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
      }
    },
    logoutAction() {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, sign out!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.showLoadingUser = true
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success',
            text: "Sign Out",
            showConfirmButton: false,
            timer: 1000
          })
          localStorage.clear()
          this.isLogin = false
          this.coach = ''
          this.userLogin = {}
          this.newUser = {}
          this.router.push('/')
          this.myTeam = {}
        }
      }).catch((err) => {
        this.showLoadingUser = false
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data
        })
      })
     
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
        this.hasTeam = true
        localStorage.team = true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        })
      }
    }
  },
})
