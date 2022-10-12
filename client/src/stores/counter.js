import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `http://localhost:3002`,
    comics : [],
    comic : {},
    page : 1,
    cartItems : []
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
    }
  }
})

