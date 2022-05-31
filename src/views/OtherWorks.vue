<script setup>
import OtherWork from '../components/OtherWork.vue';
import athenaCover from "../assets/athena-cover.png"
import aistakeCover from "../assets/aistake-finance-cover.png"
import pegasusCover from "../assets/pegasus-cover.png"
import xerxesCover from "../assets/xerxes-cover-2.png"
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
const worksArr = [
    {
        // img: xerxesCover,
        alt: "collect africa",
        title: "Collect Africa",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        link: "/collectafrica"
    },
     {
        // img: pegasusCover,
        alt: "Trigle",
        title: "Trigle",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        link: "/trigle"
    },
    {
        // img: aistakeCover,
        alt: "PowrFinance",
        title: "PowrFinance",
        content: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
        link: "/powrfinance"
    },
    {
        // img: pegasusCover,
        alt: "Trustbreed",
        title: "Trustbreed",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
        link: "/trustbreed"
    },
    {
        // img: athenaCover,
        alt: "Doorstep Logistics",
        title: "Doorstep Logistics",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        link: "/doorstep"
    },
]
</script>

<template>
    <Navbar />
    <div>
        <div class="flex items-center max-w-7xl mx-auto mt-20 px-6">
            <h1 class="w-2/3 text-6xl md:text-9xl font-new-paris-kingsize">Other</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-6xl md:text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <OtherWork :works="worksArr" />
        <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
    </div>
</template>