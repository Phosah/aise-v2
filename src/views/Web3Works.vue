<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import Work from '../components/Work.vue';

const worksArr = [
    {
        alt: "Aistake Finance",
        title: "Aistake Finance",
        content: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
        link: "/aistakefinance"
    },
    {
        alt: "Athena",
        title: "Athena",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        link: "/athena"
    },
    {
        alt: "Arc",
        title: "Arc",
        content: "ARC makes the entire crypto market available from the palm of your hand. We're redefining the status quo by refining all of DeFi.",
        link: "/arc"
    },
    {
        alt: "Bitpowr",
        title: "Bitpowr",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        link: "/bitpowr"
    },
    {
        alt: "Xerxes",
        title: "Xerxes",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        link: "/xerxes"
    },
    {
        alt: "Pegasus",
        title: "Pegasus",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
        link: "/pegasus"
    },
    {
        alt: "Myria",
        title: "Myria",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
        link: "/myria"
    },
]
const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
</script>

<template>
    <div>
        <Navbar />
        <div class="flex items-center max-w-7xl mx-auto mt-20 px-6">
            <h1 class="w-2/3 text-6xl md:text-9xl font-new-paris-kingsize">Web3</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-6xl md:text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <Work :works="worksArr" />
        <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
    </div>
</template>