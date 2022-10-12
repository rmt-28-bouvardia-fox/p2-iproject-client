<script>
import { mapActions } from "pinia";
import { useAppointmentStore } from "../stores/appointment";

export default {
  name: "FormConsultReport",
  data() {
    return {
      consultReportData: {
        diagnosis: "",
        needSurgicalAction: false,
        needMedicalDrug: false,
        cost: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppointmentStore, ["createConsultReport"]),
    createReport() {
      this.createConsultReport(this.consultReportData);
    },
  },
};
</script>
<template>
  <section class="flex container mx-auto h-screen">
    <div
      class="flex w-[40%] max-h-[70%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10"
    >
      <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
        <div>
          <h1 class="text-3xl mb-3">Consultation Report</h1>
        </div>
        <div>
          <form action="">
            <div class="mb-3">
              <label for="diagnosis">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Diagnosis
                </span>
                <input
                  type="text"
                  id="diagnosis"
                  placeholder="Enter your diagnosis..."
                  v-model="consultReportData.diagnosis"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="needSurgicalAction">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Need surgical action
                </span>
                <select
                  name="needSurgicalAction"
                  id="needSurgicalAction"
                  v-model="consultReportData.needSurgicalAction"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </div>
            <div class="mb-3">
              <label for="needMedicalDrug">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Need medical drug
                </span>
                <select
                  name="needMedicalDrug"
                  id="needMedicalDrug"
                  v-model="consultReportData.needMedicalDrug"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </div>
            <div class="mb-3">
              <label for="cost">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Cost
                </span>
                <input
                  type="text"
                  id="cost"
                  placeholder="Enter cost for appointment..."
                  v-model="consultReportData.cost"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                @click.prevent="createReport"
                class="w-full bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
