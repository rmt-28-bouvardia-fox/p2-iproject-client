<script>
export default {
  name: "FormAppointment"
}
</script>
<template>
  <section class="flex container mx-auto h-screen">
    <div class="flex w-[40%] max-h-[70%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10">
      <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
        <div>
          <h1 class="text-3xl mb-3">Create appointment</h1>
        </div>
        <div>
          <form action="">
            <div class="mb-3">
              <label for="chiefComplaint">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Chief Complaint
                </span>
                <input type="text" id="chiefComplaint" placeholder="Enter your chief complaint..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
              </label>
            </div>
            <div class="mb-3">
              <label for="symptoms">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Symptoms
                </span>
                <input type="text" id="symptoms" placeholder="Enter your symptoms..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
              </label>
            </div>
            <div class="mb-3">
              <label for="appointmentDate">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Appointment Date
                </span>
                <input type="date" id="appointmentDate"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
              </label>
            </div>
            <div class="mb-3">
              <label for="gender">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Doctor
                </span>
                <select name="" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <div class="mt-5">
              <button type="submit"
                class="w-full bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>