<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// import MenuItem from "./MenuItem.vue";

const store = useStore();
const menu_is_active = computed(() => {
    return store.state.menu_is_active
})
</script>

<template>
    <aside :class="`fixed top-0 left-0 min-h-screen pt-16 z-40 w-full max-w-xs transform duration-300 bg-gray-600 ${menu_is_active ? 'translate-x-0': '-translate-x-full'}`">
        <div class="p-4">
            <div class="-mx-4">
                <!-- <MenuItem to="/">
                    <span class="material-icons mr-2">home</span>Home
                </MenuItem>
                <MenuItem to="/authors">
                    <span class="material-icons mr-2">groups</span>Authors
                </MenuItem> -->
                <div class="px-4">
                    <div class="mb-8 md:mb-0">
                        <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
                    </div>
                    <div class="text-brand-gray-2">
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
    </aside>

</template>