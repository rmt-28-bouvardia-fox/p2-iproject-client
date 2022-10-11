<script>
import {mapActions} from 'pinia'
import { useClientStore } from '../stores/client';
export default {
    methods :{
        ...mapActions(useClientStore,['login'])
    },
    data(){
        return {
            email : '',
            password : ''
        }
    }
}
</script>

<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="card-body p-md-5 mx-md-4">
                                <div class="text-center mt-5 mb-3">
                                    <img src="../assets/Marvel_Logo.svg.png"
                                    style="width: 185px;" alt="logo">
                                </div>
                                <form @submit.prevent="login({email,password})" class="mt-5">
                                    <p class="text-center">Please login to your account</p>
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form2Example11" class="form-control"
                                        placeholder="Email address" v-model ="email"/>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="password" id="form2Example22" class="form-control" 
                                        placeholder="password" v-model="password"/>
                                    </div>
                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2">Don't have an account?</p>
                                        <router-link to="/register" type="button" class="btn btn-outline-danger">Create new</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center bg-dark">
                            <img src="../assets/avengers2-movieposter-web_210f6394.jpeg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
    background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
    .gradient-form {
            height: 100vh !important;
    }
}
@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
}
</style>