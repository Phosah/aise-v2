<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import FintechWork from '../components/FintechWork.vue';

const worksArr = [
    {
        alt: "Collect",
        title: "Collect",
        content: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
        link: "/collectafrica"
    },
    {
        alt: "Daba",
        title: "Daba",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        link: "/daba"
    },
    {
        alt: "Powr Finance",
        title: "Powr Finance",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
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
        <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
    </div>
</template>