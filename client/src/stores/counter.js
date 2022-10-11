import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    basedUrl : `http://localhost:3002`,
    comics : []
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
    }
  }
})

