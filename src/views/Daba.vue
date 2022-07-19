<script setup>
import Navbar from '../components/Navbar.vue';
import HeaderInfo from '../components/HeaderInfo.vue';
import dabaCover from '../assets/daba/daba-home.png'

const info = {
    title: "daba",
    text: "Binging a world where daily investors both big and small have access to verified startups in the fastest growing investment continent on the planet",
    img: dabaCover,
    alt: "Xerxes",
    mainContent: "daba is a social alternative investing platform that allows investors of all levels and backgrounds to find and invest in vetted opportunities in Africa",
    subContent: "It gets to solve this by its provision of a social investing platform where verified startups are listed, investment tips and strategies are given to guide new and old investors, key insights, and most importantly social engagements of other investors that helps in giving further assurance.",
    role: "Product Design",
    client: "daba",
    duration: "3 month",
    year: "2021",
    website: "dabafinance.com"
}
</script>

<template>
    <main>
        <Navbar />
        <HeaderInfo :headerDetails="info" />
    </main>   
</template>