<script setup>
import { computed, ref } from "vue"
import { useStore } from "vuex"

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }
const store = useStore();
const menu_is_active = computed(() => store.state.menu_is_active)
const openMenu = computed(() => {
    store.commit("TOGGLE_MENU");
})
</script>

<template>
    <div id="navbar" class="top-0 right-0 left-0">
        <div class="flex items-center justify-between md:hidden mb-20">
            <div class="">
                <router-link to="/"><img src="../assets/logo.svg" alt="" /></router-link>
            </div>
            <div @click="openMenu" class="px-2"><img class="w-12 h-12" src="../assets/menu-icon.svg" alt="Hamburger icon"></div>
        </div>
        <div class="hidden md:block max-w-7xl mx-auto py-10 px-6">
            <div class="flex items-center justify-between">
                <div class="mb-8 md:mb-0">
                    <router-link to="/"><img src="../assets/logo.svg" alt="" /></router-link>
                </div>
                <div class="flex items-center justify-between text-brand-gray-2">
                    <div class="md:flex md:items-center md:space-x-6 lg:space-x-12">
                        <div class="mb-8 md:mb-0 hover:text-gray-400 hover:transform hover:-translate-y-0.5 transition-all">
                            <router-link to="/web3">Web 3</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-gray-400 hover:transform hover:-translate-y-0.5 transition-all">
                            <router-link to="/fintech">Fintech</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-gray-400 hover:transform hover:-translate-y-0.5 transition-all">
                            <router-link to="/otherworks">Others</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-gray-400 hover:transform hover:-translate-y-0.5 transition-all">
                            <router-link to="/about">About</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-gray-400 hover:transform hover:-translate-y-1 transition-all">
                            <a href="https://dribbble.com/Aise_Idahor" target="_blank">Visual Shots</a>
                        </div>
                    </div>
                </div>
                <a href="#talk">
                    <button
                        class="py-3 px-16 rounded-md border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold hover:bg-gray-400 transition-all">Lets
                        Talk</button>
                </a>
            </div>
        </div>
    </div>
</template>