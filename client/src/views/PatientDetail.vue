<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppointmentStore } from "../stores/appointment";
import TableItem from "../components/TableItem.vue";
export default {
  name: "PatientDetail",
  components: {
    TableItem,
  },
  computed: {
    ...mapWritableState(useAppointmentStore, [
      "patientDetail",
      "patientAppointments",
    ]),
    formatDate() {
      if (this.patientDetail) {
        const date = new Date(this.patientDetail.birthDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
      } else {
        return "";
      }
    },
    
  },
  methods: {
    ...mapActions(useAppointmentStore, [
      "fetchPatientDetails",
      "fetchPatientAppointments",
    ]),
  },
  data() {
    return {
      detail: false,
    };
  },
  async created() {
    await this.fetchPatientDetails();
    await this.fetchPatientAppointments();
    if (this.patientAppointments[0].status != "Uncomplete") {
      this.detail = true;
    }
  },
};
</script>
<template>
  <section>
    <div class="container h-screen mx-auto mt-20">
      <div class="flex w-[60%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto">
        <div class="p-20 text-sky-900">
          <div class="flex border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Name:</h2>
            <span class="text-2xl text-thin ml-4">{{
            patientDetail.name
            }}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Birth Date:</h2>
            <span class="text-2xl text-thin ml-4">{{ formatDate }}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Address:</h2>
            <span class="text-2xl text-thin ml-4">{{
            patientDetail.address
            }}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Gender:</h2>
            <span class="text-2xl text-thin ml-4">{{
            patientDetail.gender
            }}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Blood type:</h2>
            <span class="text-2xl text-thin ml-4">{{
            patientDetail.bloodType
            }}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Disease history:</h2>
            <span class="text-2xl text-thin ml-4">{{
            patientDetail.diseaseHistory
            }}</span>
          </div>
        </div>
      </div>
      <div class="flex border rounded-lg shadow-2xl bg-sky-300 bg-opacity-40 mx-auto mt-10">
        <div class="p-1 w-full">
          <div>
            <h1 class="text-2xl text-sky-900 mb-4 text-center">
              Medical History
            </h1>
          </div>
          <table class="w-full table-auto border-spacing-1 text-md text-center font-light text-sky-900">
            <thead>
              <tr class="border-b-2 border-sky-900">
                <th>#</th>
                <th>Chief Complaint</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th v-if="detail">Diagnosis</th>
                <th v-if="detail">Need Surgical Actions</th>
                <th v-if="detail">Need Medical Drug</th>
                <th v-if="detail">Cost</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              <TableItem v-for="(appointment, index) in patientAppointments" :key="appointment.id" :index="index"
                :appointment="appointment" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
