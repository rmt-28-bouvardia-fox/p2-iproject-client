<script>
import { mapActions, mapWritableState } from 'pinia';
import { customerStore } from '../stores/customer'

export default{
    methods: {
      ...mapActions(customerStore, ['getLogin'])
    },
    computed: {
      ...mapWritableState(customerStore, ['login'])
    }
}
</script>

<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form @submit.prevent="getLogin">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Login Form</h3>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="login.email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="login.password" />
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-dark" >Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>