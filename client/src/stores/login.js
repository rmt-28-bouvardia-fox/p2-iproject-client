import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useLoginStore = defineStore("login", {
  state: () => ({ login: { email: "", password: "" }, isLogin: false }),
  actions: {
    async loginUser() {
      try {
        const { data } = await axios({
          url: "https://hacktive-times.herokuapp.com/users/login",
          method: "post",
          data: this.login,
        });

        console.log(data);

        const { access_token, status } = data;

        localStorage.setItem("subscriber", status);
        localStorage.setItem("access_token", access_token);
        this.isLogin = true;
        this.login.email = "";
        this.login.password = "";
        this.router.push("/");
        Swal.fire({
          icon: "success",
          text: `Success login to your account`,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
    },
  },
});
