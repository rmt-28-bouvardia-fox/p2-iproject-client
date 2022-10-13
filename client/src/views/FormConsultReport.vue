<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppointmentStore } from "../stores/appointment";

export default {
  name: "FormConsultReport",
  computed: {
    ...mapWritableState(useAppointmentStore, ["diagnoses"]),
  },
  data() {
    return {
      consultReportData: {
        diagnosis: "",
        needSurgicalAction: "",
        needMedicalDrug: "",
        cost: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppointmentStore, [
      "createConsultReport",
      "fetchDiagnoses",
    ]),
    createReport() {
      this.createConsultReport(this.consultReportData);
    },
  },
  created() {
    this.fetchDiagnoses();
  },
  unmounted() {
    this.consultReportData = {
      diagnosis: "",
      needSurgicalAction: "",
      needMedicalDrug: "",
      cost: "",
    };
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
          <h1 class="text-3xl mb-3 text-center font-bold">
            Consultation Report
          </h1>
        </div>
        <div class="mb-3 text-slate-900">
          <p class="font-semibold">
            Diagnoses based on symptom ranked by accuracy
          </p>
          <ul>
            <li v-for="(diagnosis, index) in diagnoses" :key="index">
              {{ index + 1 }}. {{ diagnosis.Issue.Name }}
            </li>
          </ul>
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
                  class="h-7 text-slate-50 rounded-lg bg-slate-500 text-center"
                  v-model="consultReportData.needSurgicalAction"
                >
                  <option value="" selected disabled class="text-slate-50">
                    --Select--
                  </option>
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
                  class="h-7 text-slate-50 rounded-lg bg-slate-500 text-center"
                  v-model="consultReportData.needMedicalDrug"
                >
                  <option value="" selected disabled class="text-slate-50">
                    --Select--
                  </option>
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
                class="w-full bg-slate-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-slate-600 active:bg-slate-700 text-slate-100 active:text-slate-50"
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
