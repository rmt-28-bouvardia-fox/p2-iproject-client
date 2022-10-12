<script>
import { mapActions, mapState } from "pinia";
import { useInvitationStore } from "../stores/invitation";
import CardTemplate from "./../components/CardTemplate.vue";

export default {
  methods: {
    ...mapActions(useInvitationStore, ["getTemplate"]),
  },
  computed: {
    ...mapState(useInvitationStore, ["templates"]),
  },
  components: {
    CardTemplate,
  },
  created() {
    this.getTemplate();
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <div>
    <div class="template">
      <img
        class="background"
        src="https://images.unsplash.com/photo-1634055980590-1a44e5a8b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div class="centered">
        <div class="d-flex flex-row">
          <CardTemplate
            v-for="templates in templates"
            :templates="templates"
            :key="templates.id"
          />
        </div>
        <RouterLink
          to="/create"
          button
          type="submit"
          class="btn btn-primary"
          v-if="isLogin"
        >
          Next
        </RouterLink>
      </div>
    </div>
  </div>
</template>
