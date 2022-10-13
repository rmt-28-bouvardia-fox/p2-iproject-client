<script>
import { mapActions, mapWritableState } from 'pinia';
import { customerStore } from '../stores/customer'

export default{
    methods: {
      ...mapActions(customerStore, ['getRegister'])
    },
    computed: {
      ...mapWritableState(customerStore, ['register'])
    }
}
</script>

<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title mb-3">Register Form</h3>
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="mb-3">
                  <label for="phoneNumber" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="phoneNumber" v-model="phoneNumber" />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" v-model="address" />
                </div>
                <div class="mb-3">
                  <button class="btn btn-dark" @submit.prevent="fetchDataLogIn">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>