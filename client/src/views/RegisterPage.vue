<script>
import { mapActions } from "pinia";
import { useAppointmentStore } from "../stores/appointment";
export default { 
  name: "RegisterPage",
  data() {
    return {
      registerData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppointmentStore, ["registerHandler"]),
    register() {
      this.registerHandler(this.registerData);
    },
  },
}
</script>
<template>
  <section class="flex container max-w-full max-h-screen">
    <div class="w-[45%] flex ">
      <img src="../assets/RegisterPage.jpg" alt="" style="object-position: 0 75%"
        class="w-full h-full object-bottom object-cover" />
    </div>
    <div class="w-[55%] flex mx-auto justify-center text-sky-900">
      <div
        class="p-2 rounded-xl w-[80%] h-[80%] lg:w-[65%] xl:w-[50%] border shadow-xl bg-sky-300 bg-opacity-50 place-self-center md:p-5 xl:px-16">
        <div class="text-center text-md md:text-2xl font-semibold md:mb-8">
          <h1>Register</h1>
        </div>
        <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-4">
          <h2>Please complete form below to register new acccount.</h2>
        </div>
        <form class="lg:mb-20">
          <div class="mb-4">
            <label for="email">
              <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-rose-500">
                Email
              </span>
              <input type="email" id="email" placeholder="Enter your email..." v-model="registerData.email"
                class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
            </label>
          </div>
          <div class="mb-3">
            <label for="password">
              <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-rose-500">
                Password
              </span>
              <input type="password" id="password" placeholder="Enter your password..." v-model="registerData.password"
                class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
            </label>
          </div>
          <div class="mt-5">
            <button type="submit" @click.prevent="register"
              class="w-full bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300">
              Register
            </button>
          </div>
          <RouterLink to="/login">
            <div
              class="container mt-5 w-full bg-rose-200 rounded-lg py-1 px-2 font-semibold text-center hover:bg-rose-300 active:bg-rose-400 active:text-sky-300">
              Cancel
            </div>
          </RouterLink>
        </form>
      </div>
    </div>
  </section>
</template>