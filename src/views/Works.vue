<script setup>
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
        content: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users"
    },
    {
        img: aistakeCover,
        alt: "Aistake Finance",
        title: "Aistake Finance",
        content: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators"
    },
    {
        img: pegasusCover,
        alt: "Pegasus",
        title: "Pegasus",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token"
    },
    {
        img: xerxesCover,
        alt: "Xerxes",
        title: "Xerxes",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice"
    },
]
</script>

<template>
    <div>
        <div class="flex items-center max-w-7xl mx-auto mt-20 px-6">
            <h1 class="w-2/3 text-9xl font-new-paris-kingsize">Web3</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <!-- <div>
            <div><img src="../assets/web3-photo-1.png" alt="Web3 Project"></div>
            <div><img src="../assets/web3-photo-2.png" alt="Web3 Project"></div>
            <div><img src="../assets/web3-photo-3.png" alt="Web3 Project"></div>
            <div><img src="../assets/web3-photo-4.png" alt="Web3 Project"></div>
        </div> -->
        <Work :works="worksArr" />
        <BookAppointment />
    </div>
</template>