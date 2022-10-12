<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { mapActions, mapWritableState } from 'pinia';
import { useAppointmentStore } from '../stores/appointment';
export default {
  name: "NavBar",
  components: {
    Menu, MenuButton, MenuItem, MenuItems
  },
  methods: {
    ...mapActions(useAppointmentStore, ["logoutHandler"])
  },
  computed: {
    ...mapWritableState(useAppointmentStore, ["isLogin"])
  }
}
</script>
<template>
  <section class="container mx-auto">
    <div class="flex justify-between h-10 rounded-b-sm">
      <div class="mx-auto flex flex-1 max-w-10">
        <img src="../assets/givenchy-4.svg" alt="Logo" style="max-width: 150px" class="px-2" />
      </div>
      <div class="mx-auto flex items-center pr-5">
  
        <div
          class="mx-4 text-sm sm:text-lg font-semibold text-sky-600 hover:underline decoration-slate-400 rounded-sm p-1">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div
          class="mx-4 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1">
          <RouterLink to="/">Doctors</RouterLink>
        </div>
        <div v-if="!isLogin"
          class="mx-4 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1">
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <!--Dropdown-->
        <div>
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center mx-1 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1">
                Account
              </MenuButton>
            </div>
  
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem>
                  <div class="flex mx-auto justify-center pb-4 pt-3 border-b">
                    <p class="text-sm font-semibold">dummyemail@gmail.com</p>
                  </div>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <RouterLink to="/patients" href="#"
                    :class="[active ? 'bg-sky-50 text-slate-900' : 'text-slate-700', 'block px-4 py-2 text-sm']">Patient Detail</RouterLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-sky-50 text-slate-900' : 'text-slate-700', 'block px-4 py-2 text-sm']">Support</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-sky-50 text-slate-900' : 'text-slate-700', 'block px-4 py-2 text-sm']">License</a>
                  </MenuItem>
                  <form method="POST" action="#">
                    <MenuItem v-slot="{ active }">
                    <button type="submit"
                      :class="[active ? 'bg-sky-50 text-slate-900' : 'text-slate-700', 'block w-full px-4 py-2 text-left text-sm']">Sign
                      out</button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div v-if="isLogin"
          class="mx-4 text-sm sm:text-lg font-semibold text-slate-700 hover:underline decoration-slate-400 rounded-sm p-1">
          <a href="" @click.prevent="logoutHandler">Logout</a>
        </div>
      </div>
    </div>
  </section>
</template>