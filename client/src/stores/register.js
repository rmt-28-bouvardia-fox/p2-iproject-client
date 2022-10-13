import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRegisterUser = defineStore("register", {
  state: () => ({ register: { username: "", email: "", password: "" } }),
  actions: {
    async registerUser() {
      try {
        await axios({
          url: "https://hacktive-times.herokuapp.com/users/register",
          method: "post",
          data: this.register,
        });

        this.router.push("/");
        this.register.username = "";
        this.register.email = "";
        this.register.password = "";
        Swal.fire({
          icon: "success",
          text: `Success register account`,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
