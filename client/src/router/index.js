import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import ComicDetail from '../views/ComicDetail.vue'

const routes = [
  {path: '/', name : 'home', component : Home},
  {path : '/login', name :'login', component : Login},
  {path : '/register', name : 'register', component : Register},
  {path : '/cart', name : 'cart', component : Cart},  
  {path : '/comic/:id', name : 'comicdetail', component : ComicDetail}
]

const router = createRouter({
  history : createWebHistory(),
  routes
})


router.beforeEach((to,from,next) =>{
  const isLoggedIn = localStorage.access_token ? true : false 
  if(to.name == 'login' && isLoggedIn == true){
    next('/')
  } else if(to.name == 'cart' && isLoggedIn == false){
    next('/login')
  } else if(to.name == 'wishlist' && isLoggedIn == false){
    next('/login')
  } else{
    next()
  }
})


export default router

