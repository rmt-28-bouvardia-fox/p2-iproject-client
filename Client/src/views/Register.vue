<script>
import { mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    methods: {
        ...mapActions(useUserStore, ['registerAction'])
    },
    computed: {
        ...mapWritableState(useUserStore, ['newUser'])
    }
}
</script>
<template>
<section id="register-section" class="d-flex justify-content-center" style="height: 100vh; background-color: #000123; ">
    <div class="p-2 text-dark border border-5 border-danger" style="margin: auto 0; width: 45%;">
        <div class="p-4" style="margin: auto;" id="register-card">
            <h1>Sign Up</h1>
            <div id="register">
                <form @submit.prevent="registerAction" id="register-from" style="width: 80%;">
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="register-name">Name <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="newUser.name" type="text" class="form-control form-control-lg" id="register-name" placeholder="ex: Samsul Sobirin" autocomplete="off" >
                    </div>
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="register-email">Email <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="newUser.email" type="email" class="form-control form-control-lg" id="register-email" placeholder="ex: samsul@gmail.com" autocomplete="off" >
                    </div>
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="register-password">Password <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="newUser.password" type="password" class="form-control form-control-lg" id="register-password" placeholder="Enter password" autocomplete="off" >
                    </div>
                    <div class="justify-content-around">
                        <button class="btn" style="width: 40%; background-color: blue; color:white ;" type="submit">Sign Up</button>
                        <RouterLink to="/" class="btn btn-danger" style="font-size: 20px;text-decoration: none; width: 40%; margin-left: 10%;">Back</RouterLink>
                    </div>
                </form>
                <div class="align-content-center mt-3 centre">
                    <p class="mb-0">
                        Already have a Club ?
                        <routerLink class="fw-bold" to="/login" style="text-decoration: none;">Sign in here.</routerLink>
                    </p>
                    <br>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
#register-card{
    background-color: white;
}
</style>