<script setup>
import Header from '../components/Header.vue'
import aistakeCover from "../assets/aistake-cover.png"
import LayoutOne from '../components/LayoutOne.vue';
import photo1 from '../assets/aistake-photo-1.png';
import photo2 from '../assets/aistake-photo-2.png';
import LayoutTwo from '../components/LayoutTwo.vue';
const info = {
    title: "Aistake Finanace",
    text: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
    img: aistakeCover,
    alt: "Aistake Finance",
    mainContent: "Aistake is a protocol built to support the decentralization of stake on the Solana network. The goal is to allows users to manage stake delegations across multiple validators simultaneously. ",
    subContent: "Aistake gets to solve the issue of limited liquidity by the utilization of AMM whereby liquidity providers simply deposit a pair of tokens and an algorithm automatically makes markets for the token pair and investment opportunities on the platform which in turn increases the supply of tokens in the treasury for trading activities.",
    role: "Product Design",
    client: "Aistake",
    duration: "2 month",
    year: "2022"
}
const problems = {
    title: "Problems",
    paragraphs: [
        "Blockchains such as Bitcoin batch baskets of transactions into blocks, which are then confirmed and added to the chain. This process of confirming transactions is relatively slow and this led t the rise of faster solutions like Solana that introduced a system of Proof of history rather than the old Proof of work",
        "This POH created the need for validators to vote on entities into the blockchain to confirm if these entries are valid and they are rewarded for it",
        "This brought about some financial opportunities because you can stake your Solana by delegating your tokens to validators to help increase these validator’s voting weight, but this led to a lot of users bearing losses as You risk losing tokens when staking through a malicious Validator",
        "A lot of users want to delegate multiple validators to improve their investment opportunities but this isn't available except with those that require advanced command-line knowledge."
    ],
    img: photo1,
    alt: "Aistake photo"
}
const aim = {
    title: "What Does Aistake aim to Achieve?",
    paragraphs: [
        "Aistake aims to bring a solution that allows users access to a secure medium for staking your SOL tokens with verified Validators in which your assets are used you help secure the network and you get to earn rewards while doing so.",
        "Aistake system aims to build a protocol that helps you identify the best validators and in return punish misbehaving validators.",
        "Our top priority is in the creation of an easy-to-use user interface that allows users to manage stake delegations across multiple validators simultaneously.",
        "Also what is a DeFi Protocol without investment opportunities, so we aim to make the system embrace the decentralized nature of web3, hence Aiswap gives the ability to carry out DeFi investment opportunities such as Farms and Pools to reward users with their native tokens and in turn strengthen the value of the protocol"
    ],
    img: photo2,
    alt: "Aistake photo"
}
</script>

<template>
    <div>
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto my-20">
            <LayoutOne :page="problems" />
            <LayoutTwo :page="aim" />
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <h1 class="mb-6 text-6xl font-bold">Research Time</h1>
            <p class="mb-4">During the research phase, there was little information I could get from a lot of users, but
                the major concern was the ability to delegate tokens to multiple validators at the same time to improve
                investment strategy and yield.</p>
            <p class="mb-4">The second phase of the research was walking through all the existing staking platforms on
                both Solana and its competitor Fantom and I realized that there were a lot of unknown terminologies and
                parameters involved to stake with a validator, as some folks don't even know how to check for a
                validator</p>
            <p class="mb-4">Finally, some users feel comfortable delegating their tokens with a validator to invest,
                while some others prefer the conventional staking of Solana with a token pair in a pool as it's more
                controlled by the protocol and less prone to malicious Validators.</p>
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <h1 class="mb-6 text-6xl font-bold">Goals From research</h1>
            <p class="mb-4">The research has shown that it was crucial for the success of the project to identify the
                painpoints and translate them into solutions</p>
            <ul class="pl-6 list-disc">
                <li class="mb-3">Provide users the ability to stake SOL to multiple validators through a click
                    easy-to-use solution.</li>
                <li class="mb-3">Provide users the ability to select which validators to delegate to depending on a list
                    of user-defined criteria.</li>
                <li class="mb-3">Give users the ability to learn about how to delegate and Choose validators on the
                    platform.</li>
                <li class="mb-3">Provide users the ability to see which validators they’ve delegated to, how much
                    they’ve delegated, and how much they’ve accrued in rewards.</li>
                <li class="mb-3">Give users who want to stake the regular way in a Pool and Farm that opportunity to
                    also invest in the protocols offerings</li>
                <li class="mb-3">The interface should be as simple and intuitive as delegating to a single validator.
                </li>
            </ul>
        </section>
    </div>
</template>