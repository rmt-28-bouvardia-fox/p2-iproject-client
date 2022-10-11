import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin:false,
    loginData:{
      email:'',
      password:''
    },
    registerData:{
      username:'',
      email:'',
      password:''
    },
    url:`http://localhost:3000`
  }),
  getters: {},
  actions: {
    async loginHandler(){
      try {
        const { data } = await axios({
          method:'post',
          url:`${this.url}/auth/login`,
          data:this.loginData
      })
      localStorage.setItem('access_token',data.access_token)
      localStorage.setItem('email',data.email)
      localStorage.setItem('status',data.status)
      localStorage.setItem('id',data.id)
      this.isLogin = true
      this.router.push('/')
      this.loginData.email = ''
      this.loginData.password = ''
      Swal.fire({
        icon:"success",
        title:"gotcha",
        timer:1500
        })
      } catch (err) {
        Swal.fire({
          icon:"error",
          title:"Oops...",
          text:`${err.response.data.message}`
          })
      }
    }
  },
})
