import { defineStore } from "pinia";
import axios from "axios";

export const useRegisterUser = defineStore("register", {
  state: () => ({ register: { username: "", email: "", password: "" } }),
  actions: {
    async registerUser() {
      try {
        await axios({
          url: "http://localhost:3000/users/register",
          method: "post",
          data: this.register,
        });

        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
