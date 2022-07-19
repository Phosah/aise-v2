<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import bitpowrCover from '../assets/bitpowr/bitpowr-home.png'

const info = {
    title: "Bitpowr",
    text: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
    img: bitpowrCover,
    alt: "bento",
    mainContent: "Bitpowr is a blockchain infrastructure that helps businesses both large and small working with digital assets and wallet services to build on the blockchain with easy-to-use API and wallet SDK",
    subContent: "Bitpowr is a blockchain solution that was designed to scale and grow businesses willing to build on the blockchain by providing themsecure wallet infrastructure, advanced API services, multi signatory accounts, checkout facilities and investment opportunities on various DeFi protocols",
    role: "Product Design",
    client: "bitpowr",
    duration: "3 month",
    year: "2020",
    website: "bitpowr.com"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
    </main>   
</template>