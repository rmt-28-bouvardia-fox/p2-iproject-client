import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `http://localhost:3002`,
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
        console.log(error)
      }
    },
    async renderComic(comicId){
      try {
        const {data} = await axios({
          url : this.basedUrl + `/comics/${comicId}`
        })
        // console.log(data)
        this.comic = data
      } catch (error) {
        console.log(error)
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
        console.log(data)
      } catch (error) {
        console.log(error)
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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
      }
    }
  }
})

