<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const menu_is_active = computed(() => store.state.menu_is_active)
const toggleMenu = computed(() => {
    store.dispatch("ToggleMenu");
    console.log(menu_is_active.value)
})
onMounted(() => {
    console.log(menu_is_active.value)
})
</script>

<template>
    <div @click="toggleMenu" :class="`block md:hidden menu-toggle relative z-50 ${menu_is_active ? 'is_active': ''}`">
        <div class="hamburger">
            <span></span>
        </div>
    </div>
    <aside :class="`flex flex-col fixed top-0 left-0 min-h-screen z-40 pt-16 px-4 w-full max-w-xs transform duration-300 bg-[#EFEFEF] text-[#121212] ${menu_is_active ? 'translate-x-0': '-translate-x-full'}`">
        <div class="flex-1">
            <div class="mb-8">
                <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
            </div>
            <div class="text-brand-gray-2">
                <div class="mb-8 hover:text-brand-gray-3">
                    <router-link to="/works">Web 3 Works</router-link>
                </div>
                <div class="mb-8 hover:text-brand-gray-3">
                    <router-link to="/otherworks">Other Works</router-link>
                </div>
                <div class="mb-8 hover:text-brand-gray-3">
                    <router-link to="/about">About me</router-link>
                </div>
                <div class="mb-8 hover:text-brand-gray-3">
                    <a href="https://dribbble.com/Aise_Idahor" target="_blank">Visual Shots</a>
                </div>
            </div>
        </div>
        <button
            class="w-full mb-10 py-3 px-8 rounded-md border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold hover:bg-brand-gray-3">Lets
            Talk</button>
    </aside>
</template>

<style scoped>
.menu-toggle {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 32px;
    height: 32px;
    cursor: pointer;
}
.hamburger {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
}
.hamburger span {
    top: 50%;
    transform: translateY(-50%);
}
.hamburger span,
.hamburger span:before,
.hamburger span:after {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 99px;
    background-color: #181818;
    transition: all 0.3s ease-in-out;
}
.hamburger span:before,
.hamburger span:after {
    content: '';
}
.hamburger span:before {
    top: -8px;
}
.hamburger span:after {
    top: 8px;
}
.menu-toggle.is_active .hamburger > span {
    transform: rotate(45deg);
}
.menu-toggle.is_active .hamburger > span:before {
    top: 0;
    transform: rotate(0deg);
}
.menu-toggle.is_active .hamburger > span:after {
    top: 0;
    transform: rotate(90deg);
}
</style>