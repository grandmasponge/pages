<template>
  <div class="backgroundDiv">
    <TheHeader/>
    <div class="fontDiv">
      <div class="absolute flex-row mt-96 ml-96">
        <p class=" text-white  hover:text-slate-400 hover:underline underline-2"><a href="index.vue" class=" text-2xl">Click
          Here!</a></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'IntroPage'
}
import header from "~/components/TheHeader";
</script>

<style>
@font-face {
  font-family: 'jb-mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/JetBrainsMono-Regular.woff2') format('woff2');

}

.fontDiv {
  font-family: jb-mono;

}

.backgroundDiv {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 150vh;
  width: 100%;;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }


}


</style>

