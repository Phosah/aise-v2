<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import arcCover from '../assets/arc/arc-home.png'
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import photo1 from "../assets/arc/background.png"
import photo2 from "../assets/arc/role.png"
import photo3 from "../assets/arc/briefings.png"
import photo4 from "../assets/arc/research.png"

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
const background = {
    title: "Problem Statement",
    paragraphs: [
        "The world of crypto has been in existence since 2009 but didn't get a lot of limelight till the introduction of the Defi space in 2015. The Defi space got a bigger boom in 2017 with the rise of a lot of both Centralized Exchanges like Binance and Decentralized Exchanges like Uniswap.",
        "MWith the rise of crypto, new tokens get listed daily and a lot of these tokens are found more on DEXs with the likes of Pancakeswap, Uniswap, Zapper, etc being a hub to list and interact with them connected to your wallet e.g Trustwallet. This made people have investments scattered across multiple platforms, making it difficult to manage your investments properly and estimate your worth.",
        "Arc was devised to be the solution to the unifying of the crypt space including all CEX, DEX and even NFT investments to make the lives of crypto investors easier"
    ],
    img: photo1,
    alt: "background",
}
const role = {
    title: "My Role",
    paragraphs: [
        "I came into Arc as the only designer on the project to handle the research, brainstorming with the CEO who was the major visionair of the project and take those ideas, improve on them and create high fidelity mockups that would be tested and implemented. ",
        "I was shortly joined by another designer that would work directly under me in the cordination of the 2 initial projects that comprosed of arc these include the web3 aggregator and the NFT marketplace",
    ],
    img: photo2,
    alt: "role",
}
const briefing = {
    title: "The briefings began",
    paragraphs: [
        "When I joined the team, there was an old design file that was designed by the previous designer so my first act was to ask for feedback on the product and why the dashboard was to be redesigned, so I started with meetings with the CEO as it was his idea to redesign the project. Some calls were scheduled in which his opinions on the current project were shared and how he felt the project don't fully reflect his vision",
        "But as a professional designer, my goal is to align business goals and users' needs together so I went on ahead to test the existing product with a few members from the discord community to get the pain points from the user's perspectives as well and this was used to draft out the new designs",
    ],
    img: photo3,
    alt: "role",
}
const research = {
    title: "Problem Statement",
    paragraphs: [
        "I came into Arc as the only designer on the project to handle the research, brainstorming with the CEO who was the major visionair of the project and take those ideas, improve on them and create high fidelity mockups that would be tested and implemented. ",
        "I was shortly joined by another designer that would work directly under me in the cordination of the 2 initial projects that comprosed of arc these include the web3 aggregator and the NFT marketplace",
    ],
    img: photo2,
    alt: "role",
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="background" />
            <LayoutTwo :page="role" />
            <LayoutOne :page="briefing" />
            <LayoutTwo :page="research" />
        </section>
    </main>   
</template>