<script setup>
import { onMounted, ref } from "vue"
import BookAppointment from '../components/BookAppointment.vue';
import Work from '../components/Work.vue';
import athenaCover from "../assets/athena-cover.png"
import aistakeCover from "../assets/aistake-finance-cover.png"
import pegasusCover from "../assets/pegasus-cover.png"
import xerxesCover from "../assets/xerxes-cover-2.png"

const worksArr = [
    {
        img: athenaCover,
        alt: "Athena",
        title: "Athena",
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        link: "/athena"
    },
    {
        img: aistakeCover,
        alt: "Aistake Finance",
        title: "Aistake Finance",
        content: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
        link: "/aistakefinance"
    },
    {
        img: pegasusCover,
        alt: "Pegasus",
        title: "Pegasus",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
        link: "/pegasus"
    },
    {
        img: xerxesCover,
        alt: "Xerxes",
        title: "Xerxes",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        link: "/xerxes"
    },
]
const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
const root = ref(null)
onMounted(() => {
    console.log(root.value)
})
</script>

<template>
    <div>
        <div class="flex items-center max-w-7xl mx-auto mt-20 px-6">
            <h1 class="w-2/3 text-6xl md:text-9xl font-new-paris-kingsize">Web3</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-6xl md:text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <Work :works="worksArr" />
        <BookAppointment :class="bgColor" :mode="themeMode" :footerMode="themeMode" />
    </div>
</template>