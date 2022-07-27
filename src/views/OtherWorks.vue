<script setup>
import OtherWork from '../components/OtherWork.vue';
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
const worksArr = [
    {
        alt: "Trigle",
        title: "Trigle",
        content: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        link: "/trigle"
    },
    {
        alt: "bento",
        title: "People by Bento",
        content: "Taking away the complexities and the work overload that comes with managing an organizations workforce with spreasheets and multiple files",
        link: "/bento"
    },
    {
        alt: "Trivadi",
        title: "Trivadi",
        content: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
        link: "/trivadi"
    },
    {
        alt: "Trustbreed",
        title: "Trustbreed",
        content: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
        link: "/trustbreed"
    },
    {
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
        <div class="flex items-center max-w-7xl mx-auto md:mt-20 px-6">
            <h1 class="w-2/3 text-6xl md:text-9xl font-new-paris-kingsize">Other</h1>
        </div>
        <div class="flex justify-center max-w-7xl mx-auto mt-10 mb-20">
            <h1 class="text-6xl md:text-9xl font-new-paris-kingsize">Projects</h1>
        </div>
        <OtherWork :works="worksArr" />
    </div>
    <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
</template>