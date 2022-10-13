<script>
import { mapActions } from "pinia";
import { useAppointmentStore } from "../stores/appointment";

export default {
  name: "FormPatientDetail",
  methods: {
    ...mapActions(useAppointmentStore, ["createPatientDetail"]),
    createPD() {
      this.createPatientDetail(this.patientData);
    },
  },
  data() {
    return {
      patientData: {
        name: "",
        birthDate: "",
        address: "",
        gender: "",
        bloodType: "",
        diseaseHistory: "",
      },
    };
  },
  unmounted() {
    this.patientData = {
      name: "",
      birthDate: "",
      address: "",
      gender: "",
      bloodType: "",
      diseaseHistory: "",
    };
  },
};
</script>
<template>
  <section class="flex container mx-auto h-screen">
    <div
      class="flex w-[40%] h-[80%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10"
    >
      <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
        <div>
          <h1 class="text-3xl mb-3 text-center font-bold">
            Create patient detail
          </h1>
        </div>
        <div>
          <form action="">
            <div class="mb-3">
              <label for="name">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Name
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  v-model="patientData.name"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="birthDate">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Birth Date
                </span>
                <input
                  type="date"
                  id="birthDate"
                  v-model="patientData.birthDate"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="address">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Address
                </span>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address..."
                  v-model="patientData.address"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="gender">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Gender
                </span>
                <select
                  name=""
                  id=""
                  class="h-7 w-32 text-slate-50 rounded-lg bg-slate-500 text-center"
                  v-model="patientData.gender"
                >
                  <option value="" selected disabled class="text-slate-50">
                    --Select--
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
            <div class="mb-3">
              <label for="bloodType">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Blood type
                </span>
                <select
                  name=""
                  id=""
                  class="h-7 w-32 text-slate-50 rounded-lg bg-slate-500 text-center"
                  v-model="patientData.bloodType"
                >
                  <option value="" selected disabled class="text-slate-50">
                    --Select--
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </label>
            </div>
            <div class="mb-3">
              <label for="diseaseHistory">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Disease History
                </span>
                <textarea
                  id="diseaseHistory"
                  placeholder="Enter your disease history..."
                  cols="10"
                  rows="5"
                  v-model="patientData.diseaseHistory"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                @click.prevent="createPD"
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
