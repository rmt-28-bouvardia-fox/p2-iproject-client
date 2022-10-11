import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("login", {
  state: () => ({ login: { email: "", password: "" }, isLogin: false }),
  actions: {
    async loginUser() {
      try {
        const { data } = await axios({
          url: "http://localhost:3000/users/login",
          method: "post",
          data: this.login,
        });

        const { access_token } = data;

        localStorage.setItem("access_token", access_token);
        this.isLogin = true;
        this.login.email = "";
        this.login.password = "";
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
    },
  },
});
