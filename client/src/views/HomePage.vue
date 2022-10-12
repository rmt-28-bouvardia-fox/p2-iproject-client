<script>
export default {
  name: "HomePage"
}
</script>
<template>
  <section>
    <div class="container mx-auto">
      <div class="flex w-full h-80">
        <div class="flex flex-col-reverse w-[35%] p-12">
          <h1 class="xl:text-6xl lg:text-5xl text-2xl font-semibold tracking-wide">YOUR <span
              class="text-sky-600 text-justify">HEALTH</span> IS OUR TOP
            PRIORITY</h1>
        </div>
        <div class="flex flex-col-reverse w-[65%] p-12">
          <h1 class="lg:text-2xl text-lg font-medium tracking-wide">Check how your families health is by professional
            team doctor
            with complete and modern facilities services</h1>
        </div>
      </div>
      <div class="flex w-full h-[30rem] pt-10">
        <div class="w-[40%] px-12">
          <div>
            <h1 class="lg:text-4xl text-xl text-sky-600">Our Advantages</h1>
          </div>
          <div class="pt-4">
            <ul class="lg:text-2xl text:lg">
              <li class="pb-4">
                <i class="fi fi-rr-calendar-clock"></i>
                <span>
                  Make an appointment
                </span>
              </li>
              <li class="pb-4">
                <i class="fi fi-rr-time-twenty-four"></i>
                <span>
                  Emergency services
                </span>
              </li>
              <li class="pb-4">
                <i class="fi fi-rr-stethoscope"></i>
                <span>
                  Team of professional doctor
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex w-[60%]">
          <img src="../assets/HomePage1.png" alt="" style="object-position: 0 80%"
            class="w-full h-full object-cover object-center rounded-xl" />
        </div>
      </div>
      <div class="flex w-[90%] h-[28rem] mx-auto mt-16">
        <div class="flex w-[40%] pl-12 pr-16">
          <img src="../assets/HomePage2.jpg" alt="" class="w-full h-full object-cover object-top rounded-xl" />
        </div>
        <div class="w-[60%]">
          <div class="w-[60%] text-justify">
            <p class="text-sky-700 text-lg font-semibold">Quick Solution</p>
            <h1 class="text-3xl mt-2">Easy <span class="text-sky-600">Next-day</span> Appointments</h1>
            <p class="text-slate-500 text-lg font-semibold mt-4">Easily make appointment with our best doctor for your
              families in next day</p>
            <div class="mt-6">
              <ul class="lg:text-2xl text:lg">
                <li class="pb-4">
                  <i class="fi fi-rr-calendar-clock text-sky-600"></i>
                  <span>
                    Easy online booking here
                  </span>
                </li>
                <li class="pb-4">
                  <i class="fi fi-rr-hand-holding-heart text-sky-600"></i>
                  <span>
                    Best quality appointment services
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-4">
            <button class="bg-sky-600 p-2 rounded-lg shadow-lg">
              <span class="text-white">Make an Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>