<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  computed: {
    ...mapState(useUserStore, ['coach'])
  },
  methods: {
    playHandler() {
      this.$router.push('/match')
    }
  }
}
</script>

<template>
  <div id="home" class="">
    <div id="players" class="">
      <img style="" width="800" src="../assets/trio.png" alt="">
    </div>
  </div>
  <div id="welcome-coach" class="py-2 rounded-pill d-flex justify-content-center" >
    <h1>Welcome Coach {{coach}}!</h1>
  </div>
  <div style="margin-left: 120px;" class="mt-3 d-flex justify-content-center">
    <button @click="playHandler" style="border: 4px solid black; background-color: darkred; width: 200px; height: 50px;" class="btn text-light">Play a Match</button>
  </div>
</template>

<style scoped>
#main{

}
#players{
  margin-left: 27%;
}
#welcome-coach{
  background-color: #1746A2;
  width: 66%; 
  margin-left: 23%; 
  height: 12vh;
  border: 5px solid black;
  z-index: 20;
  color: white;
}
</style>
