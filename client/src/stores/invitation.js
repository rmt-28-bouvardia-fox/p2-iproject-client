import axios from "axios";
import { defineStore } from "pinia";

export const useInvitationStore = defineStore({
  id: "invitation",
  state: () => ({
    baseUrl: "http://localhost:3000",
    groomName: "",
    fatherGroom: "",
    motherGroom: "",
    BrideName: "",
    fatherBride: "",
    motherBride: "",
    weddingDate: "",
    weddingLocation: "",
  }),
  actions: {
    async createInvitation() {
      try {
        const register = await axios({
          method: "post",
          url: this.baseUrl + "/create",
          data: {
            groomName: this.groomName,
            fatherGroom: this.fatherGroom,
            motherGroom: this.motherGroom,
            BrideName: this.BrideName,
            fatherBride: this.fatherBride,
            motherBride: this.motherBride,
            weddingDate: this.weddingDate,
            weddingLocation: this.weddingLocation,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/template");
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      } finally {
        (this.username = ""), (this.email = ""), (this.password = "");
      }
    },
  },
});
