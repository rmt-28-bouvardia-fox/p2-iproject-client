import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    baseUrl: "https://masakapa.herokuapp.com",
    recipes: [],
  }),
  getters: {},
  actions: {
    async fetchRecipes() {
      // console.log(payload);
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/recipes`,
        });
        this.recipes = data.meals;

        console.log(data, "<< data");
        console.log(data.meals, "<<< data meals");
        console.log(this.recipes, "this recipes");
        console.log(data.meals[0], "<<< data meals 0");
      } catch (error) {
        console.log(error);
        Swal.fire(error.message);
      }
    },
    // login(payload) {
    //   console.log("masuk store");
    //   return axios({
    //     method: "post",
    //     url: "http://localhost:3000/customers/login",
    //     data: payload,
    //   });
    // },
    // register(payload) {
    //   return axios({
    //     method: "post",
    //     url: "http://localhost:3000/customers/register",
    //     data: payload,
    //   });
    //   // this.router.push("/login");
    // },
  },
});
