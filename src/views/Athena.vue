<script setup>
import Header from '@/components/Header.vue'
import athenaCover from "../assets/athena-cover.png"
const info = {
    title: "Athena",
    text: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
    img: athenaCover,
    alt: "Athena",
    mainContent: "Athena is a decentralized exchange (DEX) on the Ethereum. Athena’s Exchange design is based on automated market maker (AMM)",
    subContent: "Athena gets to solve the issue of limited liquidity by the utilization of AMM whereby liquidity providers simply deposit a pair of tokens and an algorithm automatically makes markets for the token pair and investment opportunities on the platform which in turn increases the supply of tokens in the treasury for trading activities.",
    role: "Product Design",
    client: "Xerxes",
    duration: "1 month",
    year: "2021"
}
</script>
<template>
    <div>
        <Header :headerInfo="info" />
    </div>
</template>