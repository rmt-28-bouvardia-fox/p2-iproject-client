<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}

</script>

<template>
  <div class="w-full h-full bg-gradient-to-br from-white to-sky-100">
    <NavBar />
    <section class="hidden">
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
            <img src="./assets/HomePage1.png" alt="" style="object-position: 0 80%"
              class="w-full h-full object-cover object-center rounded-xl" />
          </div>
        </div>
        <div class="flex w-[90%] h-[28rem] mx-auto mt-16">
          <div class="flex w-[40%] pl-12 pr-16">
            <img src="./assets/HomePage2.jpg" alt="" class="w-full h-full object-cover object-top rounded-xl" />
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
    <!--Login Page-->
    <section class="flex container max-w-full max-h-screen hidden">
      <div class="w-[45%] flex">
        <img src="./assets/LoginPage.jpg" alt="" style="object-position: 0 75%"
          class="w-full h-full object-bottom object-cover" />
      </div>
      <div class="w-[55%] flex mx-auto justify-center text-sky-900">
        <div
          class="p-2 rounded-xl w-[80%] h-[80%] lg:w-[65%] xl:w-[50%] border shadow-xl bg-sky-300 bg-opacity-50 place-self-center md:p-5 xl:p-16">
          <div class="text-center text-md md:text-2xl font-semibold md:mb-8">
            <h1>Login</h1>
          </div>
          <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-4">
            <h2>
              If you are already have an account, please enter your login
              information.
            </h2>
          </div>
          <form class="lg:mb-4">
            <div class="mb-4">
              <label for="email">
                <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-red-500">
                  Email
                </span>
                <input type="email" id="email" placeholder="Enter your email..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500" />
              </label>
            </div>
            <div class="mb-3">
              <label for="password">
                <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-red-500">
                  Password
                </span>
                <input type="password" id="password" placeholder="Enter your password..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500" />
              </label>
            </div>
            <div class="mt-5">
              <button type="submit" @click.prevent="login"
                class="w-full bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300">
                Login
              </button>
            </div>
          </form>
          <div class="text-center text-md font-semibold md:mb-4">
            <h1>Or Sign In with Google</h1>
          </div>
          <div class="mb-4 justify-center">
            <GoogleButton />
          </div>
          <div class="text-center text-md md:text-2xl font-semibold md:mb-2">
            <h1>New Patient</h1>
          </div>
          <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-2">
            <h2>
              Create your account to make appointments with our professional doctors.
            </h2>
          </div>
          <RouterLink to="/register">
            <div
              class="mt-5 bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300">
              Create new Account
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <!--Register Page-->
    <section class="flex container max-w-full max-h-screen hidden">
      <div class="w-[45%] flex ">
        <img src="./assets/RegisterPage.jpg" alt="" style="object-position: 0 75%"
          class="w-full h-full object-bottom object-cover" />
      </div>
      <div class="w-[55%] flex mx-auto justify-center text-sky-900">
        <div
          class="p-2 rounded-xl w-[80%] h-[80%] lg:w-[65%] xl:w-[50%] border shadow-xl bg-sky-300 bg-opacity-50 place-self-center md:p-5 xl:px-16">
          <div class="text-center text-md md:text-2xl font-semibold md:mb-8">
            <h1>Register</h1>
          </div>
          <div class="text-center text-xs sm:text-md md:text-lg font-thin mb-4">
            <h2>Please complete form below to register new acccount.</h2>
          </div>
          <form class="lg:mb-20">
            <div class="mb-4">
              <label for="email">
                <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-rose-500">
                  Email
                </span>
                <input type="email" id="email" placeholder="Enter your email..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
              </label>
            </div>
            <div class="mb-3">
              <label for="password">
                <span class="block text-xs md:text-lg font-semibold mb-1 after:content-['*'] after:text-rose-500">
                  Password
                </span>
                <input type="password" id="password" placeholder="Enter your password..."
                  class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
              </label>
            </div>
            <div class="mt-5">
              <button type="submit" @click.prevent="register"
                class="w-full bg-sky-500 rounded-lg py-1 px-2 font-semibold text-center hover:bg-sky-600 active:bg-sky-700 active:text-sky-300">
                Register
              </button>
            </div>
            <RouterLink to="/login">
              <div
                class="container mt-5 w-full bg-rose-200 rounded-lg py-1 px-2 font-semibold text-center hover:bg-rose-300 active:bg-rose-400 active:text-sky-300">
                Cancel
              </div>
            </RouterLink>
          </form>
        </div>
      </div>
    </section>
    <!--Patient Detail-->
    <section class="hidden">
      <div class="container h-screen mx-auto mt-20">
        <div class="flex w-[60%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto">
          <div class="p-20 text-sky-900">
            <div class="flex border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Name:</h2><span class="text-2xl text-thin ml-4">Achmad Fahmi</span>
            </div>
            <div class="flex mt-4 border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Birth Date:</h2><span class="text-2xl text-thin ml-4">08/06/1997</span>
            </div>
            <div class="flex mt-4 border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Address:</h2><span class="text-2xl text-thin ml-4">Jalan Merdeka
                No.17</span>
            </div>
            <div class="flex mt-4 border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Gender:</h2><span class="text-2xl text-thin ml-4">Male</span>
            </div>
            <div class="flex mt-4 border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Blood type:</h2><span class="text-2xl text-thin ml-4">B</span>
            </div>
            <div class="flex mt-4 border-b border-sky-900">
              <h2 class="text-2xl font-semibold">Disease history:</h2><span class="text-2xl text-thin ml-4">Not
                submitted</span>
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
    <!--Create Patient Detail-->
    <section class="flex container mx-auto h-screen hidden">
      <div class="flex w-[40%] h-[80%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10">
        <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
          <div>
            <h1 class="text-3xl mb-3">Create patient detail</h1>
          </div>
          <div>
            <form action="">
              <div class="mb-3">
                <label for="name">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Name
                  </span>
                  <input type="text" id="name" placeholder="Enter your name..."
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
                </label>
              </div>
              <div class="mb-3">
                <label for="birthDate">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Birth Date
                  </span>
                  <input type="date" id="birthDate"
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
                </label>
              </div>
              <div class="mb-3">
                <label for="address">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Address
                  </span>
                  <input type="text" id="address" placeholder="Enter your address..."
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
                </label>
              </div>
              <div class="mb-3">
                <label for="gender">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Gender
                  </span>
                  <select name="" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div class="mb-3">
                <label for="bloodType">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Blood type
                  </span>
                  <select name="" id="">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="ab">AB</option>
                    <option value="o">O</option>
                  </select>
                </label>
              </div>
              <div class="mb-3">
                <label for="diseaseHistory">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Disease History
                  </span>
                  <textarea id="diseaseHistory" placeholder="Enter your disease history..." cols="10" rows="5"
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
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
    <!--Create Appointment-->
    <section class="flex container mx-auto h-screen hidden">
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
    <!--Create Consultation Report-->
    <section class="flex container mx-auto h-screen hidden">
      <div class="flex w-[40%] max-h-[70%] border rounded-lg shadow-2xl bg-sky-200 bg-opacity-70 mx-auto mt-10">
        <div class="w-[80%] p-2 mt-4 text-sky-900 mx-auto">
          <div>
            <h1 class="text-3xl mb-3">Consultation Report</h1>
          </div>
          <div>
            <form action="">
              <div class="mb-3">
                <label for="diagnosis">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Diagnosis
                  </span>
                  <input type="text" id="diagnosis" placeholder="Enter your diagnosis..."
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
                </label>
              </div>
              <div class="mb-3">
                <label for="needSurgicalAction">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Need surgical action
                  </span>
                  <select name="needSurgicalAction" id="needSurgicalAction">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
              </div>
              <div class="mb-3">
                <label for="needMedicalDrug">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Need medical drug
                  </span>
                  <select name="needMedicalDrug" id="needMedicalDrug">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
              </div>
              <div class="mb-3">
                <label for="cost">
                  <span class="block text-xs md:text-lg font-semibold mb-1">
                    Cost
                  </span>
                  <input type="text" id="cost" placeholder="Enter cost for appointment..."
                    class="md:p-1 border rounded w-full block text-sm text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 invalid:text-rose-500 invalid:focus:ring-rose-500 invalid:focus:border-rose-500" />
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
    <!--List Appointment Doctor-->
    <section class="flex container mx-auto h-screen hidden">
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
  </div>
</template>

<style scoped>

</style>
