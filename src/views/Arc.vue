<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import LayoutThree from '../components/LayoutThree.vue';
import CreatePersonas from '../components/CreatePersonas.vue';
import OtherProjectsWeb3 from '../components/OtherProjectsWeb3.vue';
import arcCover from '../assets/arc/hero.png'
import persona1 from "../assets/arc/persona-1.png"
import persona2 from "../assets/arc/persona-2.png"
import photo1 from "../assets/arc/background.png"
import photo2 from "../assets/arc/role.png"
import photo3 from "../assets/arc/briefing.png"
import photo4 from "../assets/arc/research.png"
import photo5 from "../assets/arc/dashboard.png"
import photo6 from "../assets/arc/bridge.png"
import photo7 from "../assets/arc/swap.png"
import photo8 from "../assets/arc/trade.png"
import photo9 from "../assets/arc/fiat.png"
import photo10 from "../assets/arc/pools.png"
import photo11 from "../assets/arc/aggregate.png"
import photo12 from "../assets/arc/lend.png"
import photo13 from "../assets/arc/arbitrage.png"

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
    alt: "briefing",
}
const research = {
    title: "Problem Statement",
    paragraphs: [
        "I came into Arc as the only designer on the project to handle the research, brainstorming with the CEO who was the major visionair of the project and take those ideas, improve on them and create high fidelity mockups that would be tested and implemented. ",
        "I was shortly joined by another designer that would work directly under me in the cordination of the 2 initial projects that comprosed of arc these include the web3 aggregator and the NFT marketplace",
    ],
    img: photo4,
    alt: "role",
}
const personasArr = [
    {
        img: persona1,
        alt: "Christopher",
        about: "Christopher Muller is a 24-year-old crypto trader and a final year student in Human Kinetics at the university of NewYork, he has been investing in crypto for 3 years and that has been his main source for financing his education ",
        points: [
            "So far he has not been able to trade and due to the fact he lost access to his CEX account, thereby losing his lifetime savings in 2020 he isn't ready to rik using a Centralised exchange",
            "He also finds it difficult to know what exchange sells an asset and the one that seels that set at a high price so he can yield arbitrage",
        ],
        goals: [
            "Christopher needs a way to manage the crypto assets that he has scattered across multiple protocols",
            "Christopher also needs a way to trade in futures of his assets without using a centralized exchange",
            "He also needs to know the best assets to buy from the cheapest source so he yields arbitrage"
        ]
    },
    {
        img: persona2,
        alt: "Christabell",
        about: "Christabell Adesuwa is a 22-year-old Digital marketer that lives in Portland, she loves hiking and strolling in the park. She is new to the crypto space with major investments in NFT that she both collected in free mints and those she bought in marketplaces",
        points: [
            "Suwa needs a way to be able to buy crypto assets Suwa also needs a way to convert one token to another at the least possible transaction fee as that scares her a lot",
            "Suwa needs a way to manage her NFTs in one place that is on several protocols",
        ],
        goals: [
            "She has been yet to find a way to manage he=r NFT portfolio easily",
            "She finds it difficult to trade so she needs an easy way to invest her tokens and still yield profits",
        ]
    },
]
const dashboard = {
    title: "Dashboard",
    paragraphs: [
        "The dashboard is structured in such a way that you both get an overview of your investment holdings, at the same time you can toggle to view the individual holdings,  view your earnings, and interact with your other exchanges. Here you can see your CEX holdings and investments and interact with them, likewise your DEX investments and also interact with them like stake and unstake, also bridge and other forms of trading",
    ],
    img: photo5,
    alt: "dashboard",
}
const bridge = {
    title: "Bridge",
    paragraphs: [
        "The bridge Arc gives was designed to be able to keep a record of all the activities and at the same time give you a clean and easy way to move both the same asset from different blockchains. We also take it a step forward by swapping different tokens between different chains",
    ],
    img: photo6,
    alt: "bridge",
}
const swap = {
    title: "Swap with multiple routes",
    paragraphs: [
        "The swap interface was designed to allow the conversion of one token to another on the same blockchain, and at the same time we give users the ability to import tokens from any blockchain by pulling data from sources like DEX tools, Coingecko, Coinmarketcap, etc you can swap any token in the world for any token on Arc and we give you the best routes where we aggregate all protocols with such tokens and we select the best for you",
    ],
    img: photo7,
    alt: "swap",
}
const trade = {
    title: "Trade",
    paragraphs: [
        "Trading s one feature that has been very difficult to DEX due to its fast-paced nature and needs for high liquidity, with Arc as an aggregator we connect to the pools of multiple DEXs and access their treasury pools and this gives more than enough to handle instant trading for both spot and futures trading. This gives the CEX exchange in a decentralized space 🚀",
    ],
    img: photo8,
    alt: "trade",
}
const fiat = {
    title: "Fiat On Ramp",
    paragraphs: [
        "One of the biggest needs for most users of DEX is how to buy tokens, yes we can manipulate the tokens from one form to another and invest when we have them, but getting it initially is the issue. SO Arc integrates Wert a tool that allows the purchase of several tokens from payments with your card or bank account, and this allows you to purchase crypto that can be traded or swapped at will",
    ],
    img: photo9,
    alt: "trade",
}
const pools = {
    title: "Pools & Farms",
    paragraphs: [
        "Pools and Farms are investment opportunities given for non trading investors to stake their tokens and earn passive income, and by so doing they would be contributing to the protocols treasure which helps the speed of transactions in general. All pools and farms generate rewards that can be claimed at anytime",
    ],
    img: photo10,
    alt: "trade",
}
const aggregate = {
    title: "Aggregated NFT Markeplace",
    paragraphs: [
        "The NFT space is one in which a lot of users have investments, so Arc was designed to aim at simplifying the experience of having to go to multiple marketplaces to interact with your NFTs. With Arc, you can connect all your marketplaces in one product and get to interact with your assets from there, accept bid offers and sell NFTs at the same time",
    ],
    img: photo11,
    alt: "aggregate",
}
const lend = {
    title: "Lend NFT",
    paragraphs: [
        "Utilization of NFT especially in the gameFi space has been one that has been of major adoption in the recent times in which to participate and perform well in some games you need good gear and weapons (these are usually NFTs) to play well, now guild try to provide support to its members, but Arc tends to take it a notch and give users the ability to borrow NFT’s for your use during a given time and return during a given time",
    ],
    img: photo12,
    alt: "lend",
}
const arbitrage = {
    title: "Arbitrage",
    paragraphs: [
        "Arbitrage trading is one that a lot of traders can capitalize on and earn a lot of profit, it's buying from the cheapest protocol and selling at the highest price. As simple as it sounds its very difficult to find, so the design was structured to give you all you need for Arbitrage trading, those ar the access to important News, access t Twitter News as that's where most protocols announce and  we give Arbitrage opportunities refreshed every 10min based of the prices of assets we aggregate from protocols we help you find the ones that can be an arbitrage opportunity",
    ],
    img: photo13,
    alt: "arbitrage",
}
const themeMode = "light"
const marginSize = 'my-20'
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="background" :marginSize="marginSize" />
            <LayoutTwo :page="role" :marginSize="marginSize" />
            <LayoutOne :page="briefing" :marginSize="marginSize" />
            <LayoutTwo :page="research" :marginSize="marginSize" />
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Creating Personas</h3>
                <p>The personas created were aim at having a mental picture of the type of users wwe would have in order to be able to properly empathize with the users</p>
            </div>
            <CreatePersonas :personas="personasArr" />
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div class="md:w-1/2">
                <h1 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Brainstorming with  HMW (How might we).</h1>
                <p class="mb-12">Taking further steps to refine the problems with how might we help to see think the solutions from the user's pain points and find the best ways to offer value and solutions to the users. More simple and flexible flows</p>
            </div>
            <div><img class="w-full" src="../assets/arc/hmw.png" alt="Notes" /></div>
        </section>
         <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div class="w-1/2">
                <h1 class="mb-6 text-6xl font-new-paris-kingsize">Design Decisions</h1>
                <p class="mb-4">After carefully analyzing the data and working with an MVP and time constraints, the following solutions were designed below</p>
            </div>
            <LayoutThree :page="dashboard" />
            <LayoutThree :page="bridge" />
            <LayoutThree :page="swap" />
            <LayoutThree :page="trade" />
            <LayoutThree :page="fiat" />
            <LayoutThree :page="pools" />
            <LayoutThree :page="aggregate" />
            <LayoutThree :page="lend" />
            <LayoutThree :page="arbitrage" />
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h3 class="mb-4 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Mobile Views</h3>
                <p class="mb-12">Majority of Arc’s users were mobile users from the research so high priority had to be placed on the mobile designs to optimize the experience</p>
            </div>
            <div><img class="w-full" src="../assets/arc/mobile-views.png" alt="Mobile screens" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-12 text-3xl md:text-5xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Learnings</h2>
                <p class="mb-6">This is by far one of the most interesting web3 projects I have worked on and it allowed me to understand more in-depth the complexities of the DeFi and NFT space, it also allowed me to prioritize user needs and provide simplicity to their burdensome activities to give maximum value.</p>
                <p>The web3 space holds a lot of treasures and ways to keep changing lives and I am glad to have impacted thousands for now on this one 😁. </p>              
            </div>
            <div>
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Conclusion</h2>
                <p class="mb-6">Arc is a solution that is set to bring about financial freedom to millions and affect a lot of lives so the ease of the processes and the clarity of the tasks makes it easier to drive adoption and by so doing invite more people that can benefit of the amazing product</p>
            </div>
        </section>
        <OtherProjectsWeb3 />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>