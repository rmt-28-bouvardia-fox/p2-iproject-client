import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `http://localhost:3002`,
    comics : [],
    comic : {},
    page : 1
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
    }
  }
})

