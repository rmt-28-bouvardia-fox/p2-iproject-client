<script>
import { useUserStore } from "@/stores/user";
import { mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(useUserStore, ["loginData"]),
  },
  methods: {
    ...mapActions(useUserStore, ["loginHandler", "loginGoogleHandler"]),
    toRegister() {
      this.$router.push("/register");
    },
  },
  mounted() {
    const callback = this.loginGoogleHandler;
    window.google.accounts.id.initialize({
      client_id:
        "56563606716-0lnc5sqk8ekgkrp6kk7jquu2kfd8i5jq.apps.googleusercontent.com",
      callback: callback,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("google-button-login"),
      {
        theme: "light",
        size: "large",
      }
    );
  },
};
</script>

<template>
  <div class="flex justify-center pb-16">
    <div class="min-w-[35%] bg-white rounded-lg p-4">
      <div class="text-center font-semibold text-4xl mt-5 pl-3 mb-8">Sign In</div>
      <form
        class="flex-1 bg-white py-5 px-5 rounded-lg"
        @submit.prevent="loginHandler"
      >
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="loginData.email"
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="loginData.password"
          />
        </div>
        <div class="mt-16">
          <button
            class="w-full p-3 text-white border rounded-md bg-red-500 hover:bg-red-600"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <div class="text-center font-semibold">
        <p>
          Don't have an account?
          <a href="" @click.prevent="toRegister" class="text-redTheme"
            >Create here.</a
          >
        </p>
      </div>
      <div class="mt-8 text-center text-slate-600">
        <p>or login with</p>
      </div>
      <div class="mt-8 mb-8">
        <div
          id="google-button-login"
          class="w-full p-3 flex justify-center items-center"
        ></div>
      </div>
    </div>
  </div>
</template>

