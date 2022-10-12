import { defineStore } from 'pinia'
import axios from 'axios'

export const useClientStore = defineStore('client',  {
    state : () => ({
        basedUrl : `http://localhost:3002`,
        isLoggedIn : localStorage.access_token ? true : false,
        user : {}
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
                localStorage.setItem('username', data.username)
                this.isLoggedIn = true
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async register(inputBody){
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
        },
        async renderProfile(){
            try {
                const {data} = await axios({
                    url : this.basedUrl + `/orders/profile`,
                    method : 'get',
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                this.user = data
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }
})