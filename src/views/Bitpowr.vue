<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import bitpowrCover from '../assets/bitpowr/bitpowr-home.png'
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import photo1 from '../assets/bitpowr/blockchain.png'
import photo2 from '../assets/bitpowr/role.png'
import photo3 from '../assets/bitpowr/review.png'
import photo4 from '../assets/bitpowr/competitors.png'

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
const background = {
    title: "Background",
    paragraphs: [
        "It is no longer news that with the rise in the crypto and web3 space, there have been a lot of businesses wanting to have their businesses tap into this technology and build upon it. Building on the blockchain requires a lot of funds, advanced technological strengths in staff, and takes a lot of time and this has been the major blocker in a lot of companies tapping into this space and scaling their businesses.",
        "We provide the building blocks for businesses and individuals globally to take advantage of blockchain to access the global digital economy and Build the future of crypto and web3",
        "With Bitpowr blockchain infrastructure and cloud API, you can start building on the blockchain and incorporate all the necessary functionalities for your digital asset, both for monitoring, multi-sig approvals,  receiving payments for commerce users, multi-chain, and multi-functional crypto-wallets and instant fiat settlements."
    ],
    img: photo1,
    alt: "background"
}
const approach = {
    title: "My Role & Approach",
    paragraphs: [
        "My role in Bitpowr was to be the product lead that would be in charge of everything UI related for the project to cater to the design process from research to the high-fidelity prototypes",
        "While joining the team, there was an existing project that quoting the CEOs and stakeholders felt was selling the values of the company well, had a poor UX, and was not standard enough for them to be recognized as a world-class company, so I was tasked with taking the project to the next level and making it one that is to be recognized in the space",
        "The team was a small team that comprised a Product manager, business analysts, content writers, Engineers, and marketing"
    ],
    img: photo2,
    alt: "approach"
}
const analysis = {
    title: "Review and Analysis of The existing Design",
    paragraphs: [
        "The first course of action was to go through the existing design that had a poor UX and didn't sell the values of the company well, I took the design file and began my study.",
        "But just like most designers the temptation to try your hands on changing the design immediately especially when the visuals feel they can be improved was the order of the day but I had to prioritize the users hence I ran some testings on the current product with 2 stakeholders and 4 current users of the product to hear first hand how they felt using the product and carrying out tasks, their limitations and pain poi8nts, from there I was able to identify the points in the user flow",
        "I had them also use the products live and speak out as frequently as possible so I can experience them better using the product and this gave insights on things that  are needed to improve the UX"
    ],
    img: photo3,
    alt: "analysis"
}
const competitors = {
    title: "Research on competitors",
    paragraphs: [
        "After carrying out a series of interviews the next step was carrying out research on competitors a few of them which include Fireblocks, Bitgo, Bittrex, etc",
        "This was a bit difficult as these competitors had limited materials out there to know how their businesses work and very few demos done on youtube to watch and study so I had to resort to scheduling a demo session with them. Cheesy move yep 🙈, but I needed to know how they work not to steal but to have an idea of how users are being served and what could be done better",
        "After scheduling some demos with the companies i analysed the products with the best flows and those with good solutions and this was used as an initial benchmark to surpass and improve upon for the next phase of bitpowr"
    ],
    img: photo4,
    alt: "competitors"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="background"/>
        </section>
        <section class="my-20 px-6">
            <div class="">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">My Goals</h3>
                <div>
                    <ul class="pl-6 list-disc">
                        <li>Create and manage wallets, balances, addresses, and contracts.</li>
                        <li>Monitor transactions on the blockchain</li>
                        <li>Multiple layer of approvals for transactions</li>
                        <li>Receive payments for your businesses in crypto and easily liquidate to your local bank account.</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="approach"/>
            <LayoutTwo :page="analysis" />
            <div class="my-20 bg-red-200">Research Process</div>
            <LayoutOne :page="competitors" />
        </section>
    </main>   
</template>