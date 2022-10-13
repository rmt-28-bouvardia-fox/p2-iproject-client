<template>

  <div class="loadingBox">
  <img style="z-index: 9999; margin-left:600px; display:inline; margin-top: 100px"  width="600" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/22/10/wembley.jpg?quality=75&width=1200&auto=webp" alt="">
  <div id="text-loader" class="text-center">
    <h1 class="text">Match in progress</h1>
  </div>
    
</div>
</template>

<style scoped>

#text-loader{
  margin-left: 650px;
  margin-right: -120px;
  color: white;
  border: 5px solid black;
  background-color: rgb(218, 4, 4);
  padding: 4px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.loadingBox{
    position: fixed;
    left: 0;
    width: 70%;
    height: 100%;
    z-index: 999;
    margin-left: -60px;
}
.lds-facebook {
  background-color: red;
  display: inline-block;
  position: relative;
  left: 10%;
  top: 10%;
  width: 10px;
  height: 10px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 10px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>