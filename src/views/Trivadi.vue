<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import trivadiCover from '../assets/trivadi/trivadi-home.png'

const info = {
    title: "Trivadi",
    text: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
    img: trivadiCover,
    alt: "bento",
    mainContent: "Trivadi is an augmented reality mobile app. that helps both individuals and families willing to explore new countries both for visitation purposes and for relocation.",
    subContent: "Trivadi gets to provide a way for people to be able to properly plan their travels, from creating a travel checklist to shopping for necessary items. It also gives you access to events, hot spots, and tourist sites in new locations as well as travel experiences to help guide your decision on where to go to. Trivadi helps you move your items to the countries you want to go to especially those who plan to relocate",
    role: "Product Design",
    client: "trivadi",
    duration: "1 month",
    year: "2022",
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
    </main>   
</template>