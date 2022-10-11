<script>
import { mapActions, mapState } from "pinia";
import { useInvitationStore } from "../stores/invitation";
import CardTemplate from "./../components/CardTemplate.vue";

export default {
  methods: {
    ...mapActions(useInvitationStore, ["getTemplate", "chooseTemplate"]),
  },
  computed: {
    ...mapState(useInvitationStore, ["templates", "TemplateId"]),
  },
  components: {
    CardTemplate,
  },
  created() {
    this.getTemplate();
    // this.chooseTemplate();
  },
};
</script>

<template>
  <div>
    <div class="home">
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
        <form>
        <div class="mb-3">
            <label for="TemplateId" class="form-label">Choose Template</label>
            <label class="text-danger text-end fw-bold">*</label>
            <input
              type="number"
              class="form-control"
              id="TemplateId"
              placeholder="Type your Template"
              v-model="TemplateId"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="chooseTemplate"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
