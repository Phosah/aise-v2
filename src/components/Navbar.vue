<script setup>
import { ref } from "vue";

let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos)
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
  console.log(currentScrollPos)
}
</script>

<template>
    <div id="navbar" class="bg-white top-0 right-0 left-0">
        <div class="md:flex md:items-center md:justify-between max-w-7xl mx-auto py-10 px-6 bg-transparent">
            <div class="mb-8 md:mb-0">
                <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
            </div>
            <div class="flex items-center justify-between text-brand-gray-2">
                <div class="md:flex md:items-center md:space-x-12">
                    <div class="mb-8 md:mb-0">
                        <router-link to="/works">Web 3 Works</router-link>
                    </div>
                    <div class="mb-8 md:mb-0">
                        <router-link to="/otherworks">Other Works</router-link>
                    </div>
                    <div class="mb-8 md:mb-0">
                        <router-link to="/about">About me</router-link>
                    </div>
                    <div class="mb-8 md:mb-0">
                        <router-link to="/works">Visual Shots</router-link>
                    </div>
                </div>
            </div>
            <button
                class="py-3 px-16 rounded-md border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold">Lets
                Talk</button>
        </div>
    </div>
</template>
