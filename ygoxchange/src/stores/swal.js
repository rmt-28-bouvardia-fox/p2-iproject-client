import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useSwalStore = defineStore("swal", {
  state: () => ({
    toastSwal: {
      position: "top-end",
      icon: "success",
      showConfirmButton: true,
    },
  }),

  actions: {
    swalInfo(title, text, timer = 1500) {
      Swal.fire({
        ...this.toastSwal,
        toast: true,
        showConfirmButton: false,
        timer: timer,
        icon: "info",
        title: title,
        text: text,
      });
    },
    swalConfirmation(title, icon, confirmText, callback, id, cancelCallback) {
      Swal.fire({
        title: title,
        icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmText,
      }).then((result) => {
        if (result.isConfirmed) {
          callback(id);
        } else {
          if (cancelCallback) {
            cancelCallback();
          }
        }
      });
    },
    swalError(text, title = "Something went wrong", useHTML) {
      let opt = {
        icon: "error",
        title: title,
      };
      if (useHTML) {
        opt.html = text;
      } else {
        opt.text = text;
      }
      Swal.fire({
        icon: "error",
        title: title,
        text: text,
      });
    },
    errorHandler(error) {
      const message = error?.response?.data?.message;
      if (message) {
        if (Array.isArray(message)) {
          const newMsg = message.map((e) => e + "<br>").join("");
          this.swalError(newMsg, "Validation Error", true);
        } else {
          this.swalError(message);
        }
      } else {
        this.swalError(error.message);
      }
    },
  },
});
