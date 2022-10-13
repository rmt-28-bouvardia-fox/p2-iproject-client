<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppointmentStore } from "../stores/appointment";

export default {
  name: "FormAppointment",
  computed: {
    ...mapWritableState(useAppointmentStore, ["symptoms", "specialists"]),
  },
  methods: {
    ...mapActions(useAppointmentStore, [
      "fetchSymptoms",
      "fetchSpecialists",
      "createAppointment",
      "fetchPatientDetails",
    ]),
    fetchSuggestion() {
      this.suggestionData = [];
      if (this.symptom != "") {
        this.suggestionData = this.symptoms.filter((el) => {
          if (el.Name.toLowerCase().includes(this.symptom)) {
            return el;
          }
        });
      }
    },
    selectedSymptom(symptom) {
      this.symptom = symptom.Name;
      this.appointmentData.symptom.push(symptom.ID);
      this.symptomList.push(symptom.Name);
      this.suggestionData = [];
    },
    removeSymptom(index) {
      this.symptomList.splice(index, 1);
    },
    getSpecialists() {
      this.fetchSpecialists(this.appointmentData.symptom);
    },
    async appointment() {
      await this.createAppointment(this.appointmentData);
      this.symptomList = [];
      this.appointmentData.symptom = [];
    },
  },
  data() {
    return {
      appointmentData: {
        chiefComplaint: "",
        symptom: [],
        appointmentDate: "",
        DoctorId: "",
      },
      symptom: "",
      suggestionData: [],
      symptomList: [],
    };
  },
  created() {
    this.fetchPatientDetails();
    this.fetchSymptoms();
  },
  unmounted() {
    this.appointmentData = {
      chiefComplaint: "",
      symptom: [],
      appointmentDate: "",
      DoctorId: "",
    };
    this.symptom = "";
    this.suggestionData = [];
    this.symptomList = [];
  },
};
</script>
<template>
  <section class="flex h-screen container mx-auto">
    <div
      class="flex w-[40%] max-h-[70%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10"
    >
      <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
        <div>
          <h1 class="text-3xl mb-4 text-center font-bold">
            Create appointment
          </h1>
        </div>
        <div>
          <form action="">
            <div class="mb-3">
              <label for="chiefComplaint">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Chief Complaint
                </span>
                <input
                  type="text"
                  id="chiefComplaint"
                  placeholder="Enter your chief complaint..."
                  v-model="appointmentData.chiefComplaint"
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="symptoms">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Symptoms
                </span>
                <div>
                  <input
                    type="text"
                    id="symptoms"
                    placeholder="Enter your symptoms..."
                    v-model="symptom"
                    @keyup="fetchSuggestion"
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                  />
                  <div v-if="suggestionData.length" class="relative">
                    <ul class="absolute w-full">
                      <li
                        class="bg-slate-50 hover:bg-slate-200 cursor-pointer border-b"
                        v-for="(symptom, index) in suggestionData"
                        :key="index"
                        @click="selectedSymptom(symptom)"
                      >
                        {{ symptom.Name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </label>
            </div>
            <div class="mt-5 text-neutral-900" v-if="symptomList.length">
              <p class="font-semibold">Symptom List:</p>
              <p class="text-sm text-slate-600">*Click to delete symptom</p>
              <ul class="mt-2">
                <li v-for="(symptom, index) in symptomList" :key="index">
                  <span
                    @click.prevent="removeSymptom(index)"
                    class="hover:text-rose-500 cursor-pointer"
                    >{{ index + 1 }}. {{ symptom }}</span
                  >
                </li>
              </ul>
            </div>
            <div class="mt-5 mb-3">
              <button
                type="submit"
                @click.prevent="getSpecialists"
                class="w-full bg-slate-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-slate-600 active:bg-slate-700 text-slate-100 active:text-slate-50"
              >
                Find doctors that suited with symptoms
              </button>
            </div>
            <div class="mb-3" v-show="specialists.length">
              <label for="appointmentDate">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Appointment Date
                </span>
                <input
                  type="date"
                  id="appointmentDate"
                  v-model="appointmentData.appointmentDate"
                  class="md:p-1 border rounded w-[50%] block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500"
                />
              </label>
            </div>
            <div class="mb-3" v-show="specialists.length">
              <label for="gender">
                <span class="block text-xs md:text-lg font-semibold mb-1">
                  Doctor
                </span>
                <select
                  name=""
                  id=""
                  class="h-7 text-slate-50 rounded-lg bg-slate-500 text-center"
                  v-model="appointmentData.DoctorId"
                >
                  <option
                    :value="specialist.id"
                    v-for="specialist in specialists"
                    :key="specialist.id"
                  >
                    {{ specialist.name }}, {{ specialist.specialist }}
                  </option>
                </select>
              </label>
            </div>
            <div class="mt-5">
              <button
                type="submit"
                @click.prevent="appointment"
                v-show="specialists.length"
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
