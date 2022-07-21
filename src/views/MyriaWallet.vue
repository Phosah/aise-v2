<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue';
import myriaWalletCover from '../assets/myria/myria-home.png'
import photo1 from "../assets/myria/problem.png"

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
const problem = {
    title: "Problem Statement",
    paragraphs: [
        "Myria Finance is a blockchain solution that aims at enhancing the power of play through blockchain Myria is a decentralized Ethereum Layer 2, built to empower digital assets, NFT, and blockchain gaming., enabling more people to build, experience, and enjoy the benefits of blockchain and the metaverse.",
        "Myria will be launching a browser-based wallet to complement our new L2 Blockchain solution. The wallet will hold both Tokens and NFTs. The goal of the wallet is to easily facilitate player transactions and to keep track of balances. Please create a browser-based wallet experience (not a browser extension like metamask), using Myria's current design language from myria.com."
    ],
    img: photo1,
    alt: "Problem",
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="problem" />
        </section>
    </main>   
</template>