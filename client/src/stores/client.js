import { defineStore } from 'pinia'
import axios from 'axios'

export const useClientStore = defineStore('client',  {
    state : () => ({
        basedUrl : `http://localhost:3002`,
        isLoggedIn : localStorage.access_token ? true : false
    }),
    actions : {
        async login(inputBody){
            try {
                const {data} = await axios({
                    url : this.basedUrl + '/clients/login',
                    method : 'post',
                    data : inputBody
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async register(inputBody){
            console.log(inputBody)
            try {
                const {data} = await axios({
                    url : this.basedUrl + '/clients/register',
                    method : 'post',
                    data : inputBody
                })
                this.router.push('/login')
            } catch (error) {
                console.log(error)
            }
        }
    }
})