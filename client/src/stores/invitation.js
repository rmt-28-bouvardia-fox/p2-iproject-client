import axios from "axios";
import { defineStore } from "pinia";

export const useInvitationStore = defineStore({
  id: "invitation",
  state: () => ({
    baseUrl: "https://iproject-wedding-invitation.herokuapp.com",
    groomName: "",
    fatherGroom: "",
    motherGroom: "",
    BrideName: "",
    fatherBride: "",
    motherBride: "",
    weddingDate: "",
    weddingLocation: "",
    templates: [],
    TemplateId: "",
    invitation:"",
  }),
  actions: {
    async createInvitation() {
      try {
        const invitation = await axios({
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
            TemplateId:this.TemplateId
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push(`/${invitation.data.coupleName}/journey`);
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      } finally {
        (this.groomName = ""),
          (this.fatherGroom = ""),
          (this.motherGroom = ""),
          (this.BrideName = ""),
          (this.fatherBride = ""),
          (this.motherBride = ""),
          (this.weddingDate = ""),
          (this.weddingLocation = "");
          (this.TemplateId = "");
      }
    },
    async getTemplate() {
      try {
        const template = await axios({
          method: "get",
          url: this.baseUrl + "/template",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.templates = template.data;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    },
    async fetchInvitation(coupleName){
      try {
        const getInvitation = await axios({
          method: "get",
          url: this.baseUrl +`/${coupleName}/journey`
        })
        this.invitation = getInvitation.data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    }
  },
});
