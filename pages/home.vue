<template>
  <div class="bigFatDiv">
    <TheHeader/>
    <div class="fontDiv">
      <div class="flex py-10 px-20 select-none">
        <vue-typed-js
          :strings="[' Grandmasponge.',' a Div.',' a boy.','man?',' up past my bed time?',' Felix<span>&apos;</span>s play thing.','Full time Gaemer.', ]"
          :loop="true">
          <h1 class="text-white text-6xl "> Hey I<span>&apos;</span>m,<span class="typing"></span></h1>
        </vue-typed-js>
      </div>
      <div class="relative mt-32 ml-20">
        <vue-typed-js
          :strings="['hi im grandmas sponge and it seems you have stumbled across this site u may leave but wheres the fun in that.']"
          :typeSpeed="50">
          <p class="text-white text-2xl"><span class="typing"></span></p>
        </vue-typed-js>
      </div>
      <img src="~/assets/arrow-down-bangi.gif" class="h-10 w-10 ml-96 mt-64">
    </div>
    <div class="fontDiv">
      <div class=" flex flex-col px-20 py-20 text-white text-md">
        <a id="contact">
        <vue-typed-js :strings="['p-chan#2233']" :loop="false">
          <a href="https://discord.gg/bqYVnmnK" class="py-6">discord:<span class="typing"></span> </a>
        </vue-typed-js>
        <vue-typed-js :strings="['sassywadiyatalkibeet']" :loop="false">
          <a href="https://www.instagram.com/sassywadiyatalkibeet/" class="py-6"> instagram:<span class="typing"></span>
          </a>
        </vue-typed-js>
        <vue-typed-js :strings="['grandmasponge']" :loop="false">
          <a href="https://github.com/grandmasponge" class="py-6"> Github:<span class="typing"></span></a>
        </vue-typed-js>
        <vue-typed-js :strings="['grandmasponge420@gmail.com']" :loop="false">
          <a href="https://mail.google.com/mail/u/1/#inbox" class="py-6"> Email:<span class="typing"></span></a>
        </vue-typed-js>
        </a>
      </div>
    </div>
    <div class="fontDiv">
      <footer class="text-white text-md "><a href="https://github.com/FelixKLG"> FelixKLG is a geeza so please check him out and if u need a front end dev
        just use him hes the best</a>
      </footer>
    </div>
  </div>

</template>

<script>

export default {
  name: 'IndexPage',
}

import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs);
</script>
<link rel="stylesheet" href="vue-typed-js/dist/vue-typed-js.css"/>
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

