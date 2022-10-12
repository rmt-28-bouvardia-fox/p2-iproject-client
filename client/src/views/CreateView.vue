<script>
import { mapActions, mapWritableState } from "pinia";
import { useInvitationStore } from "./../stores/invitation";

export default {
  methods: {
    ...mapActions(useInvitationStore, ["createInvitation"]),
  },
  computed: {
    ...mapWritableState(useInvitationStore, [
      "groomName",
      "fatherGroom",
      "motherGroom",
      "BrideName",
      "fatherBride",
      "motherBride",
      "weddingDate",
      "weddingLocation",
      "TemplateId"
    ]),
  },
};
</script>

<template>
  <div>
    <div class="create">
      <img
        class="background"
        src="https://images.unsplash.com/photo-1634055980590-1a44e5a8b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div class="centered">
        <h3>Please Insert Your Data</h3>
        <br />
        <br />
        <form>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="groomName" class="col-form-label">Groom's Name</label>
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="groomName"
                class="form-control"
                placeholder="Type Groom's Name"
                v-model="groomName"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="fatherGroom" class="col-form-label"
                >Name of the groom's father</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="fatherGroom"
                class="form-control"
                placeholder="Type Groom's Father Name"
                v-model="fatherGroom"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="motherGroom" class="col-form-label"
                >Name of the groom's mother</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="motherGroom"
                class="form-control"
                placeholder="Type Groom's Mother Name"
                v-model="motherGroom"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="BrideName" class="col-form-label">Bride's Name</label>
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="BrideName"
                class="form-control"
                placeholder="Type Bride's Name"
                v-model="BrideName"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="fatherBride" class="col-form-label"
                >Name of the bride's father</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="fatherBride"
                class="form-control"
                placeholder="Type Bride's Father Name"
                v-model="fatherBride"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="motherBride" class="col-form-label"
                >Name of the bride's mother</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="motherBride"
                class="form-control"
                placeholder="Type Bride's Mother Name"
                v-model="motherBride"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="weddingDate" class="col-form-label"
                >Wedding Date</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="date"
                id="weddingDate"
                class="form-control"
                placeholder="Type Wedding Date"
                v-model="weddingDate"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="weddingLocation" class="col-form-label"
                >Wedding Location</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="weddingLocation"
                class="form-control"
                placeholder="Type Wedding Location"
                v-model="weddingLocation"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="TemplateId" class="col-form-label"
                >Choose Template</label
              >
              <label class="text-danger text-end fw-bold">*</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="TemplateId"
                class="form-control"
                placeholder="Type Wedding Location"
                v-model="TemplateId"
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="createInvitation"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
