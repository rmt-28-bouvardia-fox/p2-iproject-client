<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  computed: {
    ...mapState(useUserStore, ['coach'])
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
