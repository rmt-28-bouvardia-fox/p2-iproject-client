<script>
import { useUserStore } from "@/stores/user";
import { mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(useUserStore, ["registerData"]),
  },
  methods: {
    ...mapActions(useUserStore, ["registerHandler"]),
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="flex justify-center pb-16">
    <div class="min-w-[35%] bg-white rounded-lg">
      <div class="text-center font-semibold text-4xl mt-5 pl-3 mb-8">Sign Up</div>
      <form
        class="flex-1 bg-white py-5 px-5 rounded-lg"
        @submit.prevent="registerHandler"
      >
        <div class="mb-5">
          <label
            for="username"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Username (Required)
          </label>
          <input
            type="text"
            name="username"
            id="username"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="registerData.username"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Email (Required)
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="registerData.email"
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Password (Required)
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="registerData.password"
          />
        </div>
        <div class="mb-5">
          <label
            for="phoneNumber"
            class="mb-3 block text-base font-medium text-[#22223B]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            v-model="registerData.phoneNumber"
          />
        </div>
        <div class="">
          <button
            class="w-full p-3 text-white border rounded-md bg-red-500 hover:bg-red-600"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
      <div class="text-center font-semibold pb-8">
        <p>
          Already a member?
          <a href="" @click.prevent="toLogin" class="text-red-500">Sign in.</a>
        </p>
      </div>
    </div>
  </div>
</template>
