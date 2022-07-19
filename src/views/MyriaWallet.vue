<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import myriaWalletCover from '../assets/myria/myria-home.png'

const info = {
    title: "Myria Wallet",
    text: "Bridging the world of NFT and gaming assets and token rewards to gamers making it easy to interrelate with one another",
    img: myriaWalletCover,
    alt: "bento",
    mainContent: "Myria wallet  is a blockchain wallet solution that aims at enhancing the power of play through blockchain by giving users the ability to transfer both crypto assets and NFT’s amongs crypto addresses and GameFi users",
    subContent: "Myria wallet is a wallet solution that allows gamers to be able to interract with NFT assets and other crypto assets that could be in form of reward tokens from the respective gamefi and such token can be traded by means of swap bridge and even gift sending",
    role: "Product Design",
    client: "Myria",
    duration: "2 weeks",
    year: "2022",
    website: "myria.com"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
    </main>   
</template>