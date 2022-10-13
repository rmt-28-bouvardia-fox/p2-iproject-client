<script>
import { mapActions, mapWritableState } from "pinia";
import DoctorCard from "../components/DoctorCard.vue";
import { useAppointmentStore } from "../stores/appointment";
export default {
  name: "DoctorList",
  components: {
    DoctorCard,
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["doctors", "page"]),
  },
  methods: {
    ...mapActions(useAppointmentStore, ["fetchDoctors"]),
    changePageUp() {
      if (this.doctors.length == 8) {
        this.page.number++;
        this.fetchDoctors();
      }
    },
    changePageDown() {
      if (this.page.number != 1) {
        this.page.number--;
        this.fetchDoctors();
      }
    },
  },
};
</script>
<template>
  <section class="container h-full mx-auto">
    <div class="w-[60%] px-4 relative mx-auto">
      <div class="mx-auto">
        <div class="my-8">
          <h1 class="text-center text-4xl">
            Meet our <span class="text-sky-600">specialist</span>
          </h1>
        </div>
        <div class="grid grid-cols-4 gap-6 text-center">
          <DoctorCard
            v-for="doctor in doctors"
            :key="doctor.id"
            :doctor="doctor"
          />
        </div>
      </div>
      <div class="flex justify-center my-12">
        <!-- Previous Button -->
        <a
          href="#"
          @click.prevent="changePageDown"
          class="w-32 inline-flex justify-center items-center py-2 px-4 mr-3 text-sm font-medium text-sky-50 bg-sky-400 rounded-lg border border-sky-300 hover:bg-sky-500 hover:text-sky-100"
        >
          <i
            class="fi fi-rr-arrow-left mr-2 inline-flex justify-center items-center pt-0.5"
          ></i>
          Previous
        </a>
        <a
          href="#"
          @click.prevent="changePageUp"
          class="w-32 inline-flex justify-center items-center py-2 text-sm text-sky-50 bg-sky-400 rounded-lg border border-sky-300 hover:bg-sky-500 hover:text-sky-100"
        >
          Next
          <i
            class="fi fi-rr-arrow-right ml-2 inline-flex justify-center items-center pt-0.5"
          ></i>
        </a>
      </div>
    </div>
    <div class="h-full"></div>
  </section>
</template>
