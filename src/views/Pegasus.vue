<script setup>
import Header from '../components/Header.vue'
import pegasusCover from "../assets/pegasusCover.png"
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import photo1 from "../assets/pegasus-photo-2.png"
import Persona from "../components/Persona.vue"
import persona7 from "../assets/persona-7.png"
import persona8 from "../assets/persona-8.png"
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
const goals = {
    title: "Pegasus Goals",
    paragraphs: [
        "In traditional finance,  we have abstractions like the  American stock market indices that represent hundreds or thousands of individual stocks.",
        "Likewise, we aim to achieve similar for cryptocurrencies, we can envision a single token representing a basket or portfolio of its underlying tokens and this allows for diversification, and other problems we aim to solve namely;",
        "Save gas: Acquiring and transferring multiple tokens requires paying transaction fees on transfers of each token.  Users only need to pay transaction fees on a single transaction for the tokens they represent.",
        "Rebalancing: As the price of the underlying assets fluctuates, traditional market indices would rebalance by adjusting the collection of assets that  are included in the index.",
        "Investment: The ability to invest an asset to get more APY has been the goal of the DeFi space, so we provide a way to invest your index Mega tokens to even provide more earnings for you"
    ],
    img: photo1,
    alt: "Pegasus"
}
const user1 = {
    img: persona7,
    alt: "Persona",
    about: "Paulo is a 42yrs old Ex-military of London officer and a professional accountant for the past 17 years. He is a professional crypto investor in crypto and so far buys tokens that he predicts would do well in the market",
    goals: [
        "Paulo needs a way to purchase an index token",
        "He needs to be able to know what the index is about and the tokens it would be comprised of",
        "He needs a way to tell people about some tokens he feels would do well"
    ],
    points: [
        "Difficulties in knowing where to purchase from",
        "He has no way to inform people and convince them about his portfolio choice in crypto tokens for others to earn like him"
    ]
}
const user2 = {
    img: persona8,
    alt: "Persona",
    about: "Berniece is a 24yrs old secretary that lives in Dublin. She is very familiar with indexes in the stock side of things and hopes to enjoy that same benefit in crypto because she finds it difficult to catch up with crypto investments as new tokens come up every day",
    goals: [
        "Berniece needs a way to invest and hold on to new/good tokens",
        "Berniece needs a way to purchase a crypto index",
        "Berniece needs a way to stay up to date on news in the crypto ecosystem as it helps her make better trading predictions",
        "Berniece needs a way to invest her index as she has bought it just like she does a regular token to earn more APY"
    ],
    points: [
        "Not knowing where to get an index from",
        "Not knowing the tokens in a particular index and what index to buy",
        "Not heard of a good investment package for indexes"
    ]



}
</script>

<template>
    <div>
        <Header :headerInfo="info" />
        <section class="flex items-center space-x-12 max-w-7xl mx-auto my-20">
            <div class="flex-1">
                <h3 class="mb-6 text-3xl font-bold">Problems associated</h3>
                <p class="mb-4">With the creation of Bitcoin, thousands of other tokens have been created and they a lot
                    of them have been seen to pose great investment opportunities. As of April 2019, there are 2,100
                    tokens listed on CoinMarketCap that represent over $160 billion in value.</p>
                <p>There is increasing complexity in dealing with an ever-growing number of tokens, users find it to
                    knowing what assets to invest intend to miss out on opportunities and other issues namely;</p>
                <ul class="mb-4 pl-6 list-disc">
                    <li>Transaction Costs for the purchase of each of the tokens</li>
                    <li>Not knowing what the best token to buy</li>
                    <li>The ability to monitor all your assets</li>
                    <li>Standard active portfolio management practices such as rebalancing are one major issue crypto
                        investors face</li>
                </ul>
                <p>These inconveniences even have financial repercussions when one considers how fees accumulate as a
                    result of token-by-token exchange trades and withdrawals.</p>
            </div>
            <div class="flex-1"><img src="../assets/pegasus-photo-1.png" alt="Pegasus"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <LayoutTwo :page="goals" />
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <h1 class="mb-4 text-6xl font-bold">Research Began</h1>
            <p class="mb-4">A series of research was done as related to indexes in which several analogous inspirations
                were used especially from the web2 space as this was a product feature known to industries about the
                stock market and insurance already. This was finally backed up with competitive research on DeFi
                protocols like Tokenset and Zerion.</p>
            <p>During the research, a couple of interviews were done after the initial research, and these questions
                were used to drive the interview questions this further helped me in creating surveys ad this was used
                to validate the data for quantitative analysis. Below holds some of the questions and the collated
                results.</p>
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <h1 class="mb-4 text-6xl font-bold">Research Findings</h1>
            <p class="mb-4">After the research was done below were the findings and validations of some assumptions had
                earlier on</p>
            <ul class="pl-6 list-disc">
                <li>The most prominent pain point was Users find it difficult in identifying the best token to buy</li>
                <li>Users want a way to have a diversified portfolio as you can never tell the token that would cause a
                    major breakthrough</li>
                <li>Users needed a way to invest in multiple tokens easily</li>
                <li>Users need a way to stay in touch with crypto news affecting their investments</li>
                <li>Experienced users wanted to know the strength and stability of the protocol before investing with
                    them</li>
                <li>The pain of paying transaction fees for every asset you have or want to invest in is a lot as
                    sometimes the fees are almost as much as I am investing and that done multiple times is a lot to
                    deal with</li>
                <li>Users also need a way to keep their money long term and properly have a way to manage their assets
                    to yield more profit</li>
            </ul>
        </section>
        <section class="max-w-7xl mx-auto my-20">
            <h1 class="mb-6 text-6xl font-bold">User Personas</h1>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the
                essence of
                both user categories so its easier to personalize the experience to addressing the users pain points</p>
            <Persona :persona="user1" />
            <Persona :persona="user2" />
        </section>
    </div>
</template>