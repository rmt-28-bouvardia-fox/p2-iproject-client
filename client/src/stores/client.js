import { defineStore } from 'pinia'
import axios from 'axios'

export const useClientStore = defineStore('client',  {
    state : () => ({
        basedUrl : `https://cryptic-waters-99430.herokuapp.com`,
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
                Swal.fire('Login success')
            } catch (error) {
                Swal.fire(error.response.data.message)
            }
        },
        async register(inputBody){
            try {
                const {data} = await axios({
                    url : this.basedUrl + '/clients/register',
                    method : 'post',
                    data : inputBody
                })
                Swal.fire('Your account has been Created!')
                this.router.push('/login')
            } catch (error) {
                Swal.fire(error.response.data.message)
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
            } catch (error) {
                Swal.fire(error.response.data.message)
            }
        }
    }
})