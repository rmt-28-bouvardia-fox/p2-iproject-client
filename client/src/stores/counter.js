import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import easyinvoice from 'easyinvoice'
import router from '../router'
import Swal from 'sweetalert2'
const basicUrl = 'http://localhost:3000'

export const useCounterStore = defineStore('counter', {
  state: () =>({
    login: {
      email: '',
      password: ''
    },
    register: {
      username: '',
      email: '',
      password: ''
    },
    products: [],
    favProducts:[],
    dataProduct: {},
    invoiceBase64: '',
    username: '',
    isLogin: false,
    page: 0,
    validity: true
  }),
  actions:{
    getInvoiceData(data){
      return {
        images: {
            background: 'https://public.easyinvoice.cloud/img/watermark-draft.jpg'
        },
        sender: {
            company: 'Abcd Corp',
            address: 'ABCD corp street',
            zip: '1234 AB',
            city: 'Medan',
            country: 'Indonesia'
        },
        client: {
            company: `${this.username}`,
        },
        information: {
            number: `${new Date().getTime()}`,
            date: `${data.createdAt}`,
            'due-date': '15 days from date'
        },
        products: [
            {
                quantity: 'A week',
                description: `${data.Vehicle.name}`,
                price: `${data.perWeek}`
            },
        ],
        'bottom-notice': 'Kindly pay your invoice within 15 days.',
        settings: {
            currency: 'USD' 
        }
      };
    },
    async createInvoice(data) {
      const invoiceData = this.getInvoiceData(data);
      const result = await easyinvoice.createInvoice(invoiceData);
      this.invoiceBase64 = result.pdf;
    },
    async renderInvoice(data) {
      document.getElementById('pdf').innerHTML = 'loading...';
      const invoiceData = this.getInvoiceData(data);
      const result = await easyinvoice.createInvoice(invoiceData);
      easyinvoice.render('pdf', result.pdf);
    },
    async getLogin(){
      try{
        const {data} = await axios({
          url: basicUrl+'/login',
          method: 'post',
          data: this.login
        })
        this.isLogin = true
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    },
    async getRegister(){
      try{
        this.registerValidation(this.register.email)
        if(this.validity === false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email is not exist!!',
            footer: 'Click Anywhere to Try Again !'
          })
        }else{
          const data = await axios({
            url: basicUrl+'/register',
            method: 'post',
            data: this.register
          })
          await Swal.fire({
            icon: 'success',
            title: 'Succesfully registered!',
            text: `Username ${data.username} successfully registered !`,
            footer: 'Click Anywhere to continue!'
          })
          router.push('/login')
        }
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.errors[0].message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    },
    async getVehicle(){
      try{
        const vehicles = await axios({
          url: basicUrl+'/vehicles/vehicles',
          method: 'get',
          headers: {
            access_token : localStorage.getItem('access_token')
          },
          query:{
            page: 1
          }
        })
        this.page = 1
        localStorage.setItem('page', '1')
        this.products = vehicles.data
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    },
    async nextPage(){
      try{
        const currentPage = Number(localStorage.getItem('page'))
        const page = currentPage + 1
        const vehicles = await axios({
          url: basicUrl+'/vehicles/vehicles',
          method: 'get',
          headers: {
            access_token : localStorage.getItem('access_token')
          },
          params:{
            page
          }
        })
        if(vehicles.data[0] !== null){
          this.page = page
          localStorage.setItem('page', `${page}`)
        }
        this.products = vehicles.data
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    },
    logout(){
      localStorage.clear()
      this.router.push('/login')
      this.isLogin = false
      Swal.fire({
        icon: 'success',
        text: 'Logged out!',
        footer: 'Click Anywhere to continue !'
      })
    },
    async previousPage(){
      try{
        const currentPage = Number(localStorage.getItem('page'))
        const page = currentPage - 1
        const vehicles = await axios({
          url: basicUrl+'/vehicles/vehicles',
          method: 'get',
          headers: {
            access_token : localStorage.getItem('access_token')
          },
          params:{
            page
          }
        })
        if(vehicles.data[0] !== null){
          this.page = page
          localStorage.setItem('page', `${page}`)
        }
        this.products = vehicles.data
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    },
    loginValidation(){
      const access_token = localStorage.getItem('access_token')
      if(access_token){
        this.isLogin = true
      }
    },
    async registerValidation(email){
      try{
        const data = axios({
          url: basicUrl+'/tpapi/verify',
          method: 'get',
          data: {
            email
          }
        })
        if(data.deliverability === 'UNDELIVERABLE'){
          this.validity = false
        }
      }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          footer: 'Click Anywhere to Try Again !'
        })
      }
    }
  }
})
