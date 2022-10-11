<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { usePlayerStore } from '../stores/player';
import { useUserStore } from '../stores/user';

export default {
  computed: {
    ...mapWritableState(useUserStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useUserStore, ['logoutAction']),
      ...mapActions(usePlayerStore, ['buyPlayer'])
  },
}

</script>
<template>
<header v-if="isLogin" class="navbar sticky-top p-2 d-flex justify-content-evenly" style="height: 70px;" id="navbar">
  <div style="width: 25%; margin: 0 10%;" >
    <RouterLink to="/home" class="nav-button btn">Home</RouterLink>
    <RouterLink to="/" class="nav-button btn">Live Score</RouterLink>
  </div>
  <div style="width: 8%; margin-left: 30%;">
    <button @click="logoutAction" class="signout-button btn">Sign Out</button>
  </div>
</header>
</template>
<style scoped>

#navbar {
    background-color: #2192FF;
    box-shadow: 2px 2px 6px 1px black;
}

.nav-button {
    height: 40px;
    color: white;
    background-color: black;
    border-radius: 20%;
    width: 40%;
    margin: 0 16px;
}

.nav-button:hover{
    background-color: white;
    transition: 600ms;
}

.signout-button {
    height: 40px;
    color: black;
    background-color: white;
    border-radius: 20%;
}
.signout-button:hover{
    background-color: black;
    color: white;
    transition: 600ms;
}

.sign-button{
  border-radius: 20%;
  height: 40px;
  width: 100%;
}
</style>