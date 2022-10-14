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
    isLogin: false
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
        const data = await axios({
          url: basicUrl+'/register',
          method: 'post',
          data: this.register
        })
        await Swal.fire({
          icon: 'Success',
          title: 'Succesfully registered!',
          text: `Username ${data.username} successfully registered !`,
          footer: 'Click Anywhere to continue!'
        })
        router.push('/login')
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
        })
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
        localStorage.setItem('page', `${page}`)
        this.products = vehicles.data
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
