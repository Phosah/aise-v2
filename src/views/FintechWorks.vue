<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import FintechWork from '../components/FintechWork.vue';

const worksArr = [
    {
        alt: "Collect Africa",
        title: "Collect Africa",
        content: "Reinventing payment systems and account management for both large and small scale businesses across Africa",
        link: "/collectafrica"
    },
    {
        alt: "Daba",
        title: "Daba",
        content: "Binging a world where daily investors both big and small have access to verified startups in the fastest growing investment continent on the planet",
        link: "/daba"
    },
    {
        alt: "Powr Finance",
        title: "Powr Finance",
        content: "The growth and expansion of businesses and services are heavily dependent on seamless intercontinental financial transactions",
        link: "/powrfinance"
    },
]
const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
</script>

<template>
    <div>
        <Navbar />
        <div class="flex items-center max-w-7xl mx-auto mt-20 px-6">
            <h1 class="w-2/3 text-6xl md:text-9xl font-new-paris-kingsize">Fintech</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-6xl md:text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <FintechWork :works="worksArr" />
        <Footer :class="bgColor" :mode="themeMode" :linksMode="themeMode" />
    </div>
</template>