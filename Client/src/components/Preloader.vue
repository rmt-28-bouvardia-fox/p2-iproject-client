<template>

<div class="loadingBox">

    <div class="lds-facebook">
        <div></div><div></div><div>
        </div>
    </div>
</div>
</template>

<style scoped>

.loadingBox{
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgb(0, 0, 0);
    opacity: 0.7;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
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