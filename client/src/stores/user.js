import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin:false,
    loginData:{
      email:'',
      password:''
    },
    registerData:{
      username:'',
      email:'',
      password:''
    }
  }),
  getters: {},
  actions: {
    
  },
})
