<script>
import { mapActions } from "pinia";
import { useAppointmentStore } from "../stores/appointment";
import GoogleButton from "../components/GoogleButton.vue";
export default {
  name: "LoginPage",
  components: {
    GoogleButton,
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppointmentStore, [
      "loginHandlerPatient",
      "loginHandlerDoctor",
    ]),
    loginPatient() {
      this.loginHandlerPatient(this.loginData);
    },
    loginDoctor() {
      this.loginHandlerDoctor(this.loginData);
    },
  },
};
</script>
<template>
  <!--Login Page-->
  <section class="flex container max-w-full max-h-screen">
    <div class="w-[45%] flex">
      <img
        src="../assets/LoginPage.jpg"
        alt=""
        style="object-position: 0 75%"
        class="w-full h-full object-bottom object-cover"
      />
    </div>
    <div class="w-[55%] flex mx-auto justify-center text-sky-900">
      <div
        class="p-2 rounded-xl w-[80%] h-[80%] lg:w-[65%] xl:w-[50%] border shadow-xl bg-sky-300 bg-opacity-50 place-self-center md:p-5 xl:p-16"
      >
        <div class="text-center text-md md:text-2xl font-semibold md:mb-8">
          <h1>Login</h1>
        </div>
        <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-4">
          <h2>
            If you are already have an account, please enter your login
            information.
          </h2>
        </div>
        <form class="lg:mb-4">
          <div class="mb-4">
            <label for="email">
              <span
                class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-red-500"
              >
                Email
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                v-model="loginData.email"
                class="md:p-1 border rounded w-full block text-sm text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500"
              />
            </label>
          </div>
          <div class="mb-3">
            <label for="password">
              <span
                class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-red-500"
              >
                Password
              </span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password..."
                v-model="loginData.password"
                class="md:p-1 border rounded w-full block text-sm text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500"
              />
            </label>
          </div>
          <div class="mt-5">
            <button
              type="submit"
              @click.prevent="loginPatient"
              class="w-full bg-slate-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-slate-600 active:bg-slate-700 text-slate-100 active:text-slate-50"
            >
              Login as Patient
            </button>
          </div>
          <div class="mt-3">
            <button
              type="submit"
              @click.prevent="loginDoctor"
              class="w-full bg-slate-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-slate-600 active:bg-slate-700 text-slate-100 active:text-slate-50"
            >
              Login as Doctor
            </button>
          </div>
        </form>
        <div class="text-center text-md font-semibold md:mb-4">
          <h1>Or Sign In with Google</h1>
        </div>
        <div class="mb-4 justify-center">
          <GoogleButton />
        </div>
        <div class="text-center text-md md:text-2xl font-semibold md:mb-2">
          <h1>New Patient</h1>
        </div>
        <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-2">
          <h2>
            Create your account to make appointments with our professional
            doctors.
          </h2>
        </div>
        <RouterLink to="/register">
          <div
            class="mt-5 bg-slate-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-slate-600 active:bg-slate-700 text-slate-100 active:text-slate-50"
          >
            Create new Account
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
