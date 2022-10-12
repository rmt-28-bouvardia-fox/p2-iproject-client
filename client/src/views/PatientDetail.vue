<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppointmentStore } from '../stores/appointment';

export default {
  name: "PatientDetail",
  computed: {
    ...mapWritableState(useAppointmentStore, ["patientDetail"])
  },
  methods: {
    ...mapActions(useAppointmentStore, ["fetchPatientDetails"])
  },
  created() {
    this.fetchPatientDetails();
    if(this.patientDetail.name === undefined) {
      this.$router.push("/patientDetails")
    }
  }
}
</script>
<template>
  <section>
    <div class="container h-screen mx-auto mt-20">
      <div class="flex w-[60%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto">
        <div class="p-20 text-sky-900">
          <div class="flex border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Name:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.name}}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Birth Date:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.birthDate}}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Address:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.address}}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Gender:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.gender}}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Blood type:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.bloodType}}</span>
          </div>
          <div class="flex mt-4 border-b border-sky-900">
            <h2 class="text-2xl font-semibold">Disease history:</h2><span class="text-2xl text-thin ml-4">{{patientDetail.diseaseHistory}}</span>
          </div>
        </div>
      </div>
      <div class="flex border rounded-lg shadow-2xl bg-sky-300 bg-opacity-40 mx-auto mt-10">
        <div class="p-1">
          <div>
            <h1 class="text-2xl text-sky-900 mb-4 text-center">Medical History</h1>
          </div>
          <table class="text-md font-light text-sky-900">
            <thead>
              <tr class="border-b-2 border-sky-900">
                <th>#</th>
                <th>Chief complaint</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Diagnosis</th>
                <th>Need surgical actions</th>
                <th>Need medical drug</th>
                <th>Cost</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-sky-900">
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
              </tr>
              <tr class="border-b border-sky-900">
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
                <td>Lorem ipsum dolor sit amet. </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>