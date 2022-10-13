<script>
import { mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    methods: {
        ...mapActions(useUserStore, ['registerAction'])
    },
    computed: {
        ...mapWritableState(useUserStore, ['otpInput'])
    }
}
</script>
<template>
<section id="verify-section" class="d-flex justify-content-center" style="height: 100vh; background-color: #000123; ">
    <div class="p-2 text-dark border border-5 border-info" style="margin: auto 0; width: 45%;">
        <div class="p-4" style="margin: auto;" id="verify-card">
            <h1>Input OTP</h1>
            <div id="verify">
                <form @submit.prevent="registerAction" id="verify-from" style="width: 80%;">
                    <div class="mb-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <label for="otp-email">Input OTP <label class="text-danger text-end fw-bold">*</label></label>
                        </div>
                        <input v-model="otpInput" type="password" class="form-control form-control-lg" id="otp-email" placeholder="Enter your email..." autocomplete="off" >
                    </div>
                    <div class="justify-content-around">
                        <button class="btn" style="width: 40%; background-color: blue; color:white ;" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
#verify-card{
    background-color: white;
}
</style>