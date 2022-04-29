<script setup>
import Header from '../components/Header.vue'
import pegasusCover from "../assets/pegasusCover.png"
const info = {
    title: "Pegasus",
    text: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token",
    img: pegasusCover,
    alt: "Pegasus",
    mainContent: "Pegasus is a decentralized finance (DeFi) that gives you the ability to have a diversified crypto portfolio just by holding one token.",
    subContent: "Pegasus gets to solve the issue of the pains that come due to the ever-increasing tokens in the blockchain space and struggling with difficulties with investments. Pegasus gives you a Mega token, a single token representing a basket or portfolio of its underlying tokens.",
    role: "Product Design",
    client: "Pegasus",
    duration: "1 month",
    year: "2021"
}
</script>
<template>
    <div>
        <Header :headerInfo="info" />
    </div>
</template>