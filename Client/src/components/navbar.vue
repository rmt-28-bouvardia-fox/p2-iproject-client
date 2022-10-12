<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { usePlayerStore } from '../stores/player';
import { useUserStore } from '../stores/user';

export default {
  computed: {
    ...mapWritableState(useUserStore, ['isLogin']),
    ...mapState(useUserStore, ['myTeam'])
  },
  methods: {
    ...mapActions(useUserStore, ['logoutAction', 'fetchTeam']),
  },
  created() {
    this.fetchTeam()
  }
}

</script>
<template>
<header v-if="isLogin" class="navbar sticky-top p-2 d-flex justify-content-between" style="height: 70px;" id="navbar">
  <div style="margin-left: 20px;" class="d-flex">
    <img src="../assets/eFootball.jpg" width="40" alt="">
    <h4 class="mx-3 mt-1 text-light">Dream Football</h4>
  </div>
  <div class="d-flex text-light" style="width: 50%; margin-left: 100px;" >
    <RouterLink to="/home" class="nav-button btn">Home</RouterLink>
  </div>
  <div style="width: 7%;">
    <button @click="logoutAction" class="signout-button btn">Sign Out</button>
  </div>
</header>
</template>
<style scoped>

#navbar {
    background-color: #620038;
    box-shadow: 2px 2px 6px 1px black;
}

.nav-button {
    height: 40px;
    background-color: rgb(255, 255, 255);
    border-radius: 20%;
    width: 150px;
    margin: 0 200px;
}

.nav-button:hover{
    background-color: white;
    transition: 600ms;
}

h4{
  margin-right: 30px;
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