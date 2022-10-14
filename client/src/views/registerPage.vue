<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default{
    methods: {
      ...mapActions(useCounterStore, ['getRegister'])
    },
    computed: {
      ...mapWritableState(useCounterStore, ['register'])
    }
}
</script>
<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form @click.prevent="getRegister">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Register Form</h3>
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="register.username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="register.email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="register.password" />
                </div>
                <div class="mb-3">
                  <button class="btn btn-dark" @submit.prevent="fetchDataLogIn">Register</button>
                </div>
                <div class="mb-3">
                    <RouterLink to="/login" class="btn btn-link">Back to Login</RouterLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>