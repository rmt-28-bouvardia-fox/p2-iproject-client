import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import ComicDetail from '../views/ComicDetail.vue'
import Comic from '../views/Comic.vue'
import Profile from '../views/Profile.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {path: '/', name : 'home', component : Home},
  {path : '/login', name :'login', component : Login},
  {path : '/register', name : 'register', component : Register},
  {path : '/cart', name : 'cart', component : Cart},
  {path : '/profile', name : 'profile', component : Profile},
  {path : '/chat', name : 'chat', component : Chat},
  {path : '/comics', name : 'comics', component : Comic},
  {path : '/comics/:id', name : 'comicdetail', component : ComicDetail}
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
  } else if(to.name == 'profile' && isLoggedIn == false){
    next('/login')
  } else if(to.name == 'chat' && isLoggedIn == false){
    next('/login')
  } else{
    next()
  }
})


export default router

