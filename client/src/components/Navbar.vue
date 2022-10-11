<script>
    import {mapState} from 'pinia'
    import {useCounterStore} from '../stores/counter'
    export default {
        computed : {
            ...mapState(useCounterStore, ['isLoggedIn'])
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <img src="../assets/images.jpeg" height="28" alt="CoolBrand">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    
                    
                </div>
                <div class="navbar-nav ms-auto">
                    <router-link to="/" href="#" class="nav-item nav-link">Home</router-link>
                    <router-link to="/" href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Profile</router-link>
                    <router-link href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Logout</router-link>
                    <router-link to="/" href="#" class="nav-item nav-link">Cart</router-link>
                    <router-link to="/" href="#" class="nav-item nav-link">Orders</router-link>
                    <router-link to="/login" href="#" class="nav-item nav-link" v-if="isLoggedIn == false">Login</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>