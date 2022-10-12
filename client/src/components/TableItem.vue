<script>
export default {
  name: "TableItem",
  props: ["appointment", "index", "doctorAppointment"],
  computed: {
    formatDate() {
      if (this.doctorAppointment) {
        const date = new Date(this.doctorAppointment.appointmentDate)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString('id-ID', options)
      } else if (this.appointment) {
        const date = new Date(this.appointment.appointmentDate)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString('id-ID', options)
      }
    }
  },
}
</script>
<template>
  <tr class="border-b border-sky-900" v-if="appointment">
    <td>{{index+1}}</td>
    <td>{{appointment.chiefComplaint}}</td>
    <td>{{formatDate}}</td>
    <td>{{appointment.status}}</td>
    <div v-if="appointment.status != 'Uncomplete'">
      <td>{{appointment.chiefComplaint}}</td>
      <td>{{appointment.chiefComplaint}}</td>
      <td>{{appointment.chiefComplaint}}</td>
      <td>{{appointment.chiefComplaint}}</td>
      <td>{{appointment.chiefComplaint}}</td>
    </div>
  </tr>
  <tr class="border-b border-sky-900" v-if="doctorAppointment">
    <td>{{index+1}}</td>
    <td>{{doctorAppointment.Patient.PatientDetail.name}}</td>
    <td>{{doctorAppointment.chiefComplaint}}</td>
    <td>{{formatDate}}</td>
    <td>{{doctorAppointment.status}}</td>
  </tr>
</template>