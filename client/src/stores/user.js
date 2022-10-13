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
    url:`https://iprojectmusic.herokuapp.com`,
    page:'list',
    img:''
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
      this.img = data.img
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
    },
    async registerHandler(){
      try {
        await axios({
          method:'post',
          url:`${this.url}/auth/register`,
          data:this.registerData
        })
        this.router.push('/login')
        this.registerData.username = ''
        this.registerData.email = ''
        this.registerData.password = ''
        Swal.fire({
          icon:"success",
          title:"gotcha",
          timer:1500
          })
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon:"error",
          title:"Oops...",
          text:`${err.response.data.message}`
          })
      }
    },
    checkAccessToken(){
      if(localStorage.access_token){
        this.isLogin = true
      }
      else{
        this.isLogin = false
      }
    },
    async handleCredentialResponse(response){
      try {
        const { data } = await axios({
          method:'post',
          url:`${this.url}/auth/googleLogin`,
          headers:{
            google_token:response.credential
          }
        })
        localStorage.setItem('access_token',data.access_token)
        localStorage.setItem('email',data.email)
        localStorage.setItem('status',data.status)
        localStorage.setItem('id',data.id)
        this.isLogin = true
        this.router.push('/')
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
    },
    changePage(page){
      this.page = page
    },
    logOut(){
      localStorage.clear()
      this.router.push('/login')
      this.isLogin = false
    }
  },
})
