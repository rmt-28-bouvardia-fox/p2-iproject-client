<script>
import { mapActions, mapWritableState } from "pinia";
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
        return this.appointment.ConsultationReport.cost.toLocaleString(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
          }
        );
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions(useAppointmentStore, ["midtransHandler"]),
    createConsultReport() {
      this.appointmentId = this.doctorAppointment.id;
      this.$router.push("/consultReports");
    },
    payBill() {
      this.midtransHandler(
        this.appointment.id,
        this.appointment.ConsultationReport.cost
      );
    },
  },
};
</script>
<template>
  <tr class="border-b border-sky-900 font-semibold" v-if="appointment">
    <td>{{ index + 1 }}</td>
    <td>{{ appointment.chiefComplaint }}</td>
    <td>{{ formatDate }}</td>
    <td>
      {{ appointment.Doctor.name }}
    </td>
    <td>
      <span v-if="appointment.ConsultationReport">
        {{ appointment.ConsultationReport.diagnosis }}
      </span>
    </td>
    <td>
      <span v-if="appointment.ConsultationReport">
        <i
          class="fi fi-rr-check"
          v-if="appointment.ConsultationReport.needSurgicalAction === true"
        ></i>
        <i
          class="fi fi-rr-cross"
          v-if="appointment.ConsultationReport.needSurgicalAction === false"
        ></i>
      </span>
    </td>
    <td>
      <span v-if="appointment.ConsultationReport">
        <i
          class="fi fi-rr-check"
          v-if="appointment.ConsultationReport.needMedicalDrug === true"
        ></i>
        <i
          class="fi fi-rr-cross"
          v-if="appointment.ConsultationReport.needMedicalDrug === false"
        ></i>
      </span>
    </td>
    <td>
      <span v-if="appointment.ConsultationReport">
        {{ formatPrice }}
      </span>
    </td>
    <td>
      <span v-if="appointment.status !== 'Complete'">
        {{ appointment.status }}
      </span>
      <span v-if="appointment.status === 'Complete'">
        <button
          @click.prevent="payBill"
          class="text-slate-900 bg-rose-300 hover:bg-rose-400 rounded p-1 shadow-lg"
        >
          Pay Hospital Bill
        </button>
      </span>
    </td>
  </tr>
  <tr class="border-b border-sky-900 font-semibold" v-if="doctorAppointment">
    <td>{{ index + 1 }}</td>
    <td>{{ doctorAppointment.Patient.PatientDetail.name }}</td>
    <td>{{ doctorAppointment.chiefComplaint }}</td>
    <td>{{ formatDate }}</td>
    <td class="flex justify-center">
      <button
        v-if="doctorAppointment.status == 'Uncomplete'"
        class="p-0.5 rounded-lg shadow-md bg-sky-700"
        @click.prevent="createConsultReport"
      >
        <span class="text-neutral-200">Start Appointment</span>
      </button>
      <span v-if="doctorAppointment.status != 'Uncomplete'">{{
        doctorAppointment.status
      }}</span>
    </td>
  </tr>
</template>
