<template>
  <div class="bigFatDiv">
    <div class=" text-6xl text-white font-semibold">
      <vue-typed-js :strings="['The Darkest RP server', 'your new favourite server', 'capitalism','lmao' ]" :typeSpeed="100" loop="true" >
        <p>Welcome to <span class="typing"></span></p>
      </vue-typed-js>

    </div>

  </div>

</template>

<script>
export default {
  name: "loading"
}
import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs);
</script>

<style>
.bigFatDiv {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 200vh;
  width: 100%;
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
