<script>
import { mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    methods: {
        ...mapActions(useUserStore, ['loginAction'])
    },
    computed: {
        ...mapWritableState(useUserStore, ['userLogin'])
    }
}
</script>
<template>
<section id="login-section" class="d-flex justify-content-center" style="height: 100vh; background-color: #000123; ">
    <div class="p-2 text-dark border border-5 border-info" style="margin: auto 0; width: 45%;">
        <div class="p-4" style="margin: auto;" id="login-card">
            <h1>Sign In</h1>
            <div id="login">
                <form @submit.prevent="loginAction" id="login-from" style="width: 80%;">
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="login-email">Email <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="userLogin.email" type="email" class="form-control form-control-lg" id="login-email" placeholder="Enter your email..." autocomplete="off" >
                    </div>
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="login-password">Password <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="userLogin.password" type="password" class="form-control form-control-lg" id="login-password" placeholder="Enter your password" autocomplete="off" >
                    </div>
                    <div class="justify-content-around">
                        <button class="btn" style="width: 40%; background-color: blue; color:white ;" type="submit">Sign In</button>
                        <RouterLink to="/" class="btn btn-danger" style="font-size: 20px;text-decoration: none; width: 40%; margin-left: 10%;">Back</RouterLink>
                    </div>
                </form>
                <div class="align-content-center mt-3 centre">
                    <p class="mb-0">
                        Don't have a Club ?
                        <routerLink class="fw-bold" to="/register" style="text-decoration: none;"> Sign up now.</routerLink>
                    </p>
                    <br>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
#login-card{
    background-color: white;
}
</style>