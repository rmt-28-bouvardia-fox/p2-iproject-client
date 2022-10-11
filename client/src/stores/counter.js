import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter',  {
  state : () => ({
    isLoggedIn : localStorage.access_token ? true : false,
    basedUrl : `http://localhost:3002`,
    comics : []
  }),
  actions : {
    async renderHome(){
      try {
        const {data} = await axios({
          url : this.basedUrl 
        })
        // console.log(data)
        this.comics = data
        console.log(data)
        console.log(this.comics, `<~~~`)
      } catch (error) {
        console.log(error)
      }
    }
  }
})

