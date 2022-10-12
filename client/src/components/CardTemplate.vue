<script>
import { mapActions, mapWritableState } from "pinia";
import { useInvitationStore } from "../stores/invitation";
import { useUserStore } from "../stores/user";

export default {
  props: ["templates"],
  methods: {
    ...mapActions(useInvitationStore, ["getTemplate"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Template image-->
      <img
        class="mh-100"
        style="width: 300px; height: 200px"
        :src="templates.background"
        alt="..."
        d-flex
      />
      <!-- Template details-->
      <div class="card-body p-4">
        {{ templates.id }}
      </div>
    </div>
  </div>
</template>
