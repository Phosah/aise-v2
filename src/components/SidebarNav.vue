<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const menu_is_active = computed(() => store.state.menu_is_active)
const closeMenu = computed(() => {
    store.dispatch("CloseMenu");
    console.log("clicked")
    console.log(menu_is_active.value);
})
</script>

<template>
    <aside :class="`flex flex-col fixed inset-0 h-screen z-50 px-4 w-full transition duration-500 bg-[#EFEFEF] text-[#121212] ${menu_is_active ? 'translate-x-0': '-translate-x-full'}`">
        <div class="flex-1">
            <div class="flex items-center justify-between mb-16">
                <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
                <div @click="closeMenu" class="">
                    <button>
                        <svg
                            class="text-brand-black-1 dark:text-white w-12 h-12"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>             
            </div>
            <div class="text-brand-gray-2">
                <div class="mb-12 hover:text-brand-gray-3">
                    <router-link to="/works">Web 3 Works</router-link>
                </div>
                <div class="mb-12 hover:text-brand-gray-3">
                    <router-link to="/otherworks">Other Works</router-link>
                </div>
                <div class="mb-12 hover:text-brand-gray-3">
                    <router-link to="/about">About me</router-link>
                </div>
                <div class="mb-12 hover:text-brand-gray-3">
                    <a href="https://dribbble.com/Aise_Idahor" target="_blank">Visual Shots</a>
                </div>
            </div>
        </div>
        <button
            class="w-full mb-10 py-3 px-8 rounded-md border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold hover:bg-brand-gray-3">Lets
            Talk</button>
    </aside>
</template>