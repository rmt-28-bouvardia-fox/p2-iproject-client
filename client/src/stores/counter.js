import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `http://localhost:3002`,
    comics : [],
    comic : {}
  }),
  actions : {
    async renderHome(){
      try {
        const {data} = await axios({
          url : this.basedUrl + '/comics'
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

