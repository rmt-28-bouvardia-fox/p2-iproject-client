<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { mapActions, mapWritableState } from "pinia";
import { useAppointmentStore } from "../stores/appointment";
export default {
  name: "NavBar",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  methods: {
    ...mapActions(useAppointmentStore, ["logoutHandler"]),
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["isLogin", "role"]),
  },
};
</script>
<template>
  <section class="container mx-auto pt-2">
    <div class="flex justify-between h-10 rounded-b-sm">
      <div class="flex mx-auto ">
        <img
          src="../assets/pngegg3.png"
          alt="Logo"
        />
        <span class="text-sm sm:text-lg lg:text-2xl font-semibold rounded-sm p-1 text-sky-600 italic">YULJE Medical Center</span> 
      </div>
      <div class="mx-auto flex items-center pr-5">
        <div
          class="mx-4 text-sm sm:text-xl font-semibold text-sky-600 hover:underline decoration-slate-400 rounded-sm p-1"
        >
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div
          class="mx-4 text-sm sm:text-xl font-semibold text-sky-900 hover:underline decoration-slate-400 rounded-sm p-1"
        >
          <RouterLink to="/doctors">Doctors</RouterLink>
        </div>
        <div
          v-if="!isLogin"
          class="mx-4 text-sm sm:text-xl font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1"
        >
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <!--Dropdown Patient-->
        <div v-if="isLogin && role === 'Patient'">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center mx-1 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1"
              >
                Account
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <RouterLink
                      to="/patients"
                      href="#"
                      :class="[
                        active ? 'bg-sky-50 text-slate-900' : 'text-slate-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Patient Detail</RouterLink
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <RouterLink
                      to="/appointments"
                      href="#"
                      :class="[
                        active ? 'bg-sky-50 text-slate-900' : 'text-slate-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Make an Appointment</RouterLink
                    >
                  </MenuItem>
                  <form method="POST" action="#">
                    <MenuItem v-slot="{ active }">
                      <button
                        type="submit"
                        @click.prevent="logoutHandler"
                        :class="[
                          active
                            ? 'bg-sky-50 text-slate-900'
                            : 'text-slate-700',
                          'block w-full px-4 py-2 text-left text-sm',
                        ]"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <!--Dropdown Doctor-->
        <div v-if="isLogin && role === 'Doctor'">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center mx-1 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1"
              >
                Account
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <RouterLink
                      to="/doctorAppointments"
                      href="#"
                      :class="[
                        active ? 'bg-sky-50 text-slate-900' : 'text-slate-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Appointment List</RouterLink
                    >
                  </MenuItem>
                  <form method="POST" action="#">
                    <MenuItem v-slot="{ active }">
                      <button
                        type="submit"
                        @click.prevent="logoutHandler"
                        :class="[
                          active
                            ? 'bg-sky-50 text-slate-900'
                            : 'text-slate-700',
                          'block w-full px-4 py-2 text-left text-sm',
                        ]"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </section>
</template>
