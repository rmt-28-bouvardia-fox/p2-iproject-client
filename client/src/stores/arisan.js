import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const base = "http://localhost:3000";

export const useArisanStore = defineStore("arisan", {
  state: () => ({
    arisan: [],
    myArisan: [],
    arisanDetail: "",
    logTransaction: [],
    ott: "",
    spot: {
      longitude: "",
      latitude: "",
    },
  }),
  actions: {
    async fetchArisan() {
      try {
        const { data } = await axios({
          method: "Get",
          url: `${base}/arisan`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.arisan = data;
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
    async fetchMyArisan() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${base}/myarisan`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myArisan = data;
        console.log(data);
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
    async addMyArisan(id) {
      try {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          try {
            if (result.isConfirmed) {
              await axios({
                method: "Post",
                url: `${base}/myarisan/${id}`,
                headers: {
                  access_token: localStorage.access_token,
                },
                data: this.spot,
              });
              Swal.fire("Saved!", "", "success");
              this.fetchArisan();
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          } catch (error) {
            Swal.fire({
              title: "Arisan Already exist",
              text: "Take other arisan and be wise",
              timer: 2000,
            });
          }
        });
      } catch (error) {
        Swal.fire({
          title: "Arisan Already exist",
          text: "Take other arisan and be wise",
          timer: 2000,
        });
      }
    },
    async payTrans(id) {
      try {
        await axios({
          method: "Patch",
          url: `${base}/log/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchMyArisan();
        this.fetchLogTrans();
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
    async midTrans() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${base}/log`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.ott = data;
        this.fetchLogTrans();
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
    async fetchLogTrans() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${base}/log`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.logTransaction = data;
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
    async getArisanDetail(id) {
      try {
        const { data } = await axios({
          url: `${base}/arisan/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.arisanDetail = data
        this.router.push(`/myarisan/${id}`)
      } catch (error) {
        Swal.fire({
          title: "Data not found",
          text: "Please try again",
          timer: 2000,
        });
      }
    },
  },
});
