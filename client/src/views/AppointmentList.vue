<script>
import { mapActions, mapWritableState } from 'pinia';
import TableItem from '../components/TableItem.vue';
import { useAppointmentStore } from '../stores/appointment';
export default {
  name: "AppointmentList",
  components: {
    TableItem
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["doctorAppointments"])
  },
  methods: {
    ...mapActions(useAppointmentStore, ["fetchDoctorAppointments"])
  },
  created() {
    this.fetchDoctorAppointments();
  }
}
</script>
<template>
  <section class="flex container mx-auto h-screen">
    <div class="flex w-[80%] max-h-[80%] border rounded-lg shadow-2xl bg-sky-300 bg-opacity-40 mx-auto mt-10">
      <div class="p-2 w-full">
        <div>
          <h1 class="text-2xl text-sky-900 mb-4 text-center">Appointment List</h1>
        </div>
        <table class="w-full table-auto border-spacing-1 text-md text-center font-light text-sky-900 ">
          <thead>
            <tr class="border-b-2 border-sky-900">
              <th>#</th>
              <th>Name</th>
              <th>Chief Complaint</th>
              <th>Appointment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <TableItem v-for="(doctorAppointment, index) in doctorAppointments" :key="doctorAppointment.id" :index="index" :doctorAppointment="doctorAppointment" />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>