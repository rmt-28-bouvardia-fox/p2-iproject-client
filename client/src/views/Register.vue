<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions(useAppStore, ["register"]),
    handleRegister() {
      this.register(this.form)
    }
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="card mb-1">
          <div class="row">
            <div class="col-md-6">
              <img
                src="../assets/collageoffruitandveg.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <div class="col-12 col-md-6 offset-md-3">
                  <h5 class="card-title">Sign-Up</h5>
                  <form class="" @submit.prevent="handleRegister">
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label"
                        >Username</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.username"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label"
                        >Email address</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="form.email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        v-model="form.password"
                      />
                    </div>

                    <button type="submit" class="btn btn-success">
                      Sign-Up
                    </button>
                  </form>
                  <div class="mt-2">
                    <span>Already have an account? </span>
                    <RouterLink href="" to="/login">Sign-In</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
