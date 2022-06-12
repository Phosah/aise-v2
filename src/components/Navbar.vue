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
    store.dispatch("OpenMenu");
    console.log("clicked")
    console.log(menu_is_active.value);
})
</script>

<template>
    <div id="navbar" class="top-0 right-0 left-0">
        <div @click="openMenu" class="flex justify-end md:hidden mb-16 px-2"><img class="w-12 h-12" src="../assets/menu-icon-dark.png" alt="Hamburger icon"></div>
        <div class="hidden md:block max-w-7xl mx-auto py-10 px-6">
            <div class="flex items-center justify-between">
                <div class="mb-8 md:mb-0">
                    <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
                </div>
                <div class="flex items-center justify-between text-brand-gray-2">
                    <div class="md:flex md:items-center md:space-x-6 lg:space-x-12">
                        <div class="mb-8 md:mb-0 hover:text-brand-gray-3">
                            <router-link to="/works">Web 3 Works</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-brand-gray-3">
                            <router-link to="/otherworks">Other Works</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-brand-gray-3">
                            <router-link to="/about">About me</router-link>
                        </div>
                        <div class="mb-8 md:mb-0 hover:text-brand-gray-3">
                            <a href="https://dribbble.com/Aise_Idahor" target="_blank">Visual Shots</a>
                        </div>
                    </div>
                </div>
                <button
                    class="py-3 px-16 rounded-md border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold hover:bg-brand-gray-3">Lets
                    Talk</button>
            </div>
        </div>
    </div>
</template>