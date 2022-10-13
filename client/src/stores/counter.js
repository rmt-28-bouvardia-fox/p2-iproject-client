import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `https://cryptic-waters-99430.herokuapp.com`,
    comics : [],
    comic : {},
    page : 1,
    cartItems : [],
    transactionToken : '',
    characters : []
  }),
  actions : {
    async renderComics(input){
      try {
        const {data} = await axios({
          url : this.basedUrl + '/comics',
          params : {
            page : this.page,
            title : input
          }
        })
        this.comics = data
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async renderComic(comicId){
      try {
        const {data} = await axios({
          url : this.basedUrl + `/comics/${comicId}`
        })
        this.comic = data
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async addToCart(input){
      try {
        const {data} = await axios({
          url : this.basedUrl + `/orders/add-to-cart`,
          method : 'post',
          data : input,
          headers : {
            access_token : localStorage.access_token
          }
        })
        Swal.fire(`Success add ${data.added.comicName} to cart`)
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async renderCart(){
      try {
        const {data} = await axios({
          url : this.basedUrl + `/orders/cart`,
          method : 'get',
          headers : {
            access_token : localStorage.access_token
          }
        })
        this.cartItems = data
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async payment (inputPrice){
      try {
        const {data} = await axios({
          method : 'get',
          url : this.basedUrl + `/orders/payment`,
          headers : {
            access_token : localStorage.access_token
          },
          params : {
            gross_amount : inputPrice
          }
        })
        this.transactionToken = data.transactionToken

      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async editStatus(order_id){
      try {
        const {data} = await axios({
          url : this.basedUrl + '/orders',
          method : 'patch',
          headers : {
            access_token : localStorage.access_token
          },
          data : {
            order_id : order_id
          }
        })
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async renderHome(){
      try {
        const {data} = await axios({
          url : this.basedUrl + '/characters',
          method : 'get'
        })
        this.characters = data
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    }
  }
})

