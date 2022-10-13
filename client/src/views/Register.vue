<script>
import { mapActions } from 'pinia';
import { useClientStore } from '../stores/client';

    export default {
        data(){
            return {
                email : ``,
                password : ``,
                username : ``,
                phoneNumber : ``,
                address : ``,
                firstName : ``,
                lastName : ``
            }
        },
        methods : {
            ...mapActions(useClientStore,['register'])
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
                                <div class="text-center mt-3 mb-3">
                                    <img src="../assets/Marvel_Logo.svg.png"
                                    style="width: 185px;" alt="logo">
                                </div>
                                <form @submit.prevent="register({firstName,lastName,username,email,password,address,phoneNumber})" class="mt-5">
                                    <p class="text-center">Start your journey with us with a new account</p>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="text" class="form-control" 
                                            placeholder="First Name"
                                            v-model="firstName"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="text" class="form-control" 
                                            placeholder="Last Name"
                                            v-model="lastName"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="text" class="form-control" 
                                            placeholder="Username"
                                            v-model="username"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="email" class="form-control"
                                            placeholder="Email address" 
                                            v-model="email"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="password" class="form-control" 
                                            placeholder="Password"
                                            v-model="password"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="number" class="form-control" 
                                            placeholder="Phone Number"
                                            v-model="phoneNumber"
                                        />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input 
                                            type="text" class="form-control" 
                                            placeholder="Address"
                                            v-model="address"
                                        />
                                    </div>
                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2">Already have an account?</p>
                                        <router-link to="/login" type="button" class="btn btn-outline-danger">Login Here</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex bg-dark border">
                            <img  class="mh-100 mw-100" src="../assets/avengers2-movieposter-web_210f6394.jpeg" alt="">
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