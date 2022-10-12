<script>
    import {mapWritableState} from 'pinia'
    import {useClientStore} from '../stores/client'
    export default {
        computed : {
            ...mapWritableState(useClientStore, ['isLoggedIn'])
        },
        methods : {
            logout(){
                this.$router.push('/')
                localStorage.clear()
                this.isLoggedIn = false
            }
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
                    <router-link to="/" href="#" class="nav-item nav-link">Home</router-link>
                    <router-link to="/comics" href="#" class="nav-item nav-link">Comics</router-link>
                    
                </div>
                <div class="navbar-nav ms-auto">
                    
                    <router-link to="/cart" href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Cart</router-link>
                    <router-link to="/register" href="#" class="nav-item nav-link" v-if="isLoggedIn == false">Register</router-link>
                    <router-link to="/login" href="#" class="nav-item nav-link" v-if="isLoggedIn == false">Login</router-link>
                    <router-link to="/Chat" href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Chat</router-link>
                    <router-link to="/profile" href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Profile</router-link>
                    <a @click.prevent="logout" href="#" class="nav-item nav-link" v-if="isLoggedIn == true">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>