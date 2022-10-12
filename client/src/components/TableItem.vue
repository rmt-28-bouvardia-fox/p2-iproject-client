<script>
import { mapWritableState } from "pinia";
import { useAppointmentStore } from "../stores/appointment";

export default {
  name: "TableItem",
  props: ["appointment", "index", "doctorAppointment"],
  computed: {
    ...mapWritableState(useAppointmentStore, ["appointmentId"]),
    formatDate() {
      if (this.doctorAppointment) {
        const date = new Date(this.doctorAppointment.appointmentDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
      } else if (this.appointment) {
        const date = new Date(this.appointment.appointmentDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
      } else {
        return "";
      }
    },
    formatPrice() {
      if (this.appointment.ConsultationReport.cost) {
        return this.appointment.ConsultationReport.cost.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      } else {
        return "";
      }
    },
  },
  methods: {
    createConsultReport() {
      this.appointmentId = this.doctorAppointment.id;
      this.$router.push("/consultReports");
    },
  },
};
</script>
<template>
  <tr class="border-b border-sky-900" v-if="appointment">
    <td>{{ index + 1 }}</td>
    <td>{{ appointment.chiefComplaint }}</td>
    <td>{{ formatDate }}</td>
    <td>{{ appointment.status }}</td>
    <td v-if="appointment.status != 'Uncomplete'">
      {{ appointment.ConsultationReport.diagnosis }}</td>
    <td v-if="appointment.status != 'Uncomplete'">
      {{ appointment.ConsultationReport.needSurgicalAction }}</td>
    <td v-if="appointment.status != 'Uncomplete'">
      {{ appointment.ConsultationReport.needMedicalDrug }}</td>
    <td v-if="appointment.status != 'Uncomplete'">
      {{ formatPrice }}</td>
    <td>{{ appointment.Doctor.name }}</td>
  </tr>
  <tr class="border-b border-sky-900" v-if="doctorAppointment">
    <td>{{ index + 1 }}</td>
    <td>{{ doctorAppointment.Patient.PatientDetail.name }}</td>
    <td>{{ doctorAppointment.chiefComplaint }}</td>
    <td>{{ formatDate }}</td>
    <div v-if="doctorAppointment.status == 'Uncomplete'">
      <td class="flex justify-center">
        <button class="p-0.5 rounded-lg shadow-md bg-sky-700" @click.prevent="createConsultReport">
          <span class="text-neutral-200">Start Appointment</span>
        </button>
      </td>
    </div>
  </tr>
</template>
