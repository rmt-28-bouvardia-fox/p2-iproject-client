<script>
import { mapActions } from "pinia";
import { useAppointmentStore } from "../stores/appointment";
export default {
  name: "GoogleButton",
  methods: {
    ...mapActions(useAppointmentStore, ["handleCredentialResponse"]),
  },
  mounted() {
    const callbackGoogle = this.handleCredentialResponse;
    google.accounts.id.initialize({
      client_id:
        "1099479806094-b7sdirlf4i3um19j0nqdf5egpn9119og.apps.googleusercontent.com",
      callback: callbackGoogle,
    });
    google.accounts.id.renderButton(document.getElementById("googleButton"), {
      theme: "outline",
      size: "large",
    });
  },
};
</script>
<template>
  <div id="googleButton"></div>
</template>
