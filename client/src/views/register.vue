<script>
    import { mapActions,mapWritableState } from 'pinia'
    import { useUserStore } from '../stores/user'
    import Button from '../components/button.vue'
    export default{
        methods:{
            ...mapActions(useUserStore,['registerHandler'])
        },
        computed:{
            ...mapWritableState(useUserStore,['registerData'])
        },
        components:{
            Button
        }
    }
</script>

<template>
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <RouterLink class="nav-link" id="tab-login" data-mdb-toggle="pill" to="login" role="tab"
                aria-controls="pills-login" aria-selected="true">Login</RouterLink>
        </li>
        <li class="nav-item" role="presentation">
            <RouterLink class="nav-link active" id="tab-register" data-mdb-toggle="pill" to="" role="tab"
                aria-controls="pills-register" aria-selected="false">Register</RouterLink>
        </li>
    </ul>

    <section> <br>
        <div class="container">
            <form>
                <!-- Username input -->
                <div class="form-outline mb-4">
                    <input type="text" id="registerUsername" class="form-control" v-model="registerData.username" />
                    <label class="form-label" for="registerUsername">Username</label>
                </div>
            
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="registerEmail" class="form-control" v-model="registerData.email" />
                    <label class="form-label" for="registerEmail">Email</label>
                </div>
            
                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="registerPassword" class="form-control" v-model="registerData.password" />
                    <label class="form-label" for="registerPassword">Password</label>
                </div>
            
                <div class="row mb-4">
                    <div class="col-md-6 d-flex align-self-center">
                        <!-- Submit button -->
                        <Button @submit.prevent="registerHandler" :variant="'btn btn-primary'" :name="'Sign In'" :type="'submit'"></Button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>