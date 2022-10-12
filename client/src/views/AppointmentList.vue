<script>
export default {
  name: "AppointmentList"
}
</script>
<template>
  <section class="flex container mx-auto h-screen">
    <div class="flex max-h-[80%] border rounded-lg shadow-2xl bg-sky-300 bg-opacity-40 mx-auto mt-10">
      <div class="p-2">
        <div>
          <h1 class="text-2xl text-sky-900 mb-4 text-center">Appointment List</h1>
        </div>
        <table class="text-md font-light text-sky-900">
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
            <tr class="border-b border-sky-900">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>