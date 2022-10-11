import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {path: '/', name : 'home', component : Home},
  {path : '/login', name :'login', component : Login},
  {path : '/register', name : 'register', component : Register}
]

const router = createRouter({
  history : createWebHistory(),
  routes
})


router.beforeEach((to,from,next) =>{
  const isLoggedIn = localStorage.access_token ? true : false 
  if(to.name == 'login' && isLoggedIn == true){
    next('/')
  } else if(to.name == 'wishlist' && isLoggedIn == false){
    Swal.fire('Please login first')
    next('/login')
  } else{
    next()
  }
})


export default router

