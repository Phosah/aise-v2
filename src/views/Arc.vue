<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import arcCover from '../assets/arc/arc-home.png'

const info = {
    title: "ARC",
    text: "ARC makes the entire crypto market available from the palm of your hand. We're redefining the status quo by refining all of DeFi.",
    img: arcCover,
    alt: "bento",
    mainContent: "ARC is a web 3 solution that makes the manage your entire crypto market from the palm of your hand, through connecting the world of DEX, CEX and NFT on multiple blockchains effortlessly ",
    //Incorrect text here =========
    subContent: "People by bento get to provide this solution by giving an easy-to-use interface that comprises various nodules needed for proper employee management, this includes modules like time management, Employee management, Appraisal, Onboarding, and offboarding management.",
    role: "Product Design",
    client: "arc",
    duration: "2 months",
    year: "2020",
    website: "arc.market"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
    </main>   
</template>