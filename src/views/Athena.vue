<script setup>
import Header from '@/components/Header.vue'
import athenaCover from "../assets/athena2.png"
import LayoutOne from '../components/LayoutOne.vue';
import photo1 from "../assets/athena-photo-1.png"
import Persona from "../components/Persona.vue"
import persona3 from "../assets/persona-3.png"
import persona4 from "../assets/persona-4.png"
import LayoutThree from '../components/LayoutThree.vue';
import photo2 from "../assets/athena-photo-3.png"
import photo3 from "../assets/athena-photo-4.png"
import photo4 from "../assets/athena-photo-5.png"
import photo5 from "../assets/athena-photo-6.png"
import photo6 from "../assets/athena-photo-7.png"
import photo7 from "../assets/athena-photo-8.png"
import OtherProjects from "../components/OtherProjects.vue"
import Footer from "../components/Footer.vue"
import Navbar from '../components/Navbar.vue';
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
const problems = {
    title: "Problems associated with Decentralized Exchanges",
    paragraphs: [
        "With the fast growth of crypto and its adoption growing massively daily, which keeps us in constant search for the best opportunities, and with the lack of trust in centralized exchanges, the goal own and is in control of your crypto investments and at the same time enjoy the benefits given on centralized exchanges",
        "With the increased adoption of Decentralized exchanges, there still remains the problem of liquidity which in turn affects the speed of transaction settlement and transparency in the elements of cost and pricing",
        "Another setback is on participating in trading on DEXs. The ability to carry out simple selling orders or advanced functionalities for trading such as lending, stop losses, and margin trading on the majority of decentralized exchanges"
    ],
    img: photo1,
    alt: "Athena Photo"
}
const user1 = {
    img: persona3,
    alt: "Persona",
    about: "Kenny is an 18yrs old Environmental Science student in the university of Atlanta who has been hearing of investing with Decentralized Exchanges from his friends on campus but hasnt really settled to get started because of how complex it feels",
    goals: [
        "Kenny needs a way to earn passive income from his crypto tokesn, so far he has a couple of stable coins just sitting in centralized exchanges and he wants a way to invest them",
        "He needs to be able to buy new tokens that are not listed on centralized exchanges to enjoy the benefits of early buyers",
    ],
    points: [
        "The products looks complex to understand what is going on in the interface",
        "I have no where to get answers to the questions i have"
    ]
}
const user2 = {
    img: persona4,
    alt: "Persona",
    about: "Paul is a 32yrs old biologist that lives in Australia. During the day and a crypto trader at night. he does a lot of Futures trading on binance and has been investing in cryptocurrencies since 2018, he is a sucker for new tokens becasue he has made his most profits",
    goals: [
        "Paul needs a way to get hold on new tokens before they are listed",
        "Paul needs a way to monitor his investments easily",
        "Paul needs a way to stay up to date on news in the crypto ecosystem as it helps him make better trading predictions",
        "Paul needs a way to trade with at least the basics of open orders and setting of stop limits on a decentralized exchange as the have more tokens that can be traded"
    ],
    points: [
        "Slow transaction time",
        "Ignorant of new tokens that come into the market and this makes him miss out on some trading opportunities",
        "Ignorant of tokens making waves in the market on most DeFi protocols hence the need to go find that information elsewhere"
    ]
}
const dashboard = {
    title: "Dashboard Overview",
    paragraphs: [
        "The dashboard overview was designed to solve the issues with monitoring your transactions and your earnings. With the dashboard overview as well, you have access to the trending news today in the crypto space to help you stay up to date on crypto events and also et to see the top Gainers and the top losers in the market and use these data to guide your trading decisions. You also have access to the protocols statistics in data like their market-cap, price, current index, etc to use to validate the token of the protocol and also invest in them"
    ],
    img: photo2,
    alt: "Dashboard"
}
const swapBridge = {
    title: "Swap & Bridge",
    paragraphs: [
        "A simplified way to send converts crypto from one asset to another on the same blockchain (Swap) or different blockchains (Bridge)",
        "Initially, I designed to merge the two into one action since they both have the same purpose but perform similar but slightly different actions as the bridge sent between multiple tokens in which you can select a sending token and a receiving token (the same or different) and can be on the same or different blockchain",
        "The decision to keep them separately is due to the fact that a lot of users kept searching for the bridge in AB testing so we decided to separate for now and merge them later in future versions"
    ],
    img: photo3,
    alt: "Swap and Bridge"
}
const pools = {
    title: "Pools",
    paragraphs: [
        "The pools in Athena are a collection of assets of various pairs in which you could add liquidity or remove the liquidity from the home page without having to go into to see more details, in which the major details that are needed by the user to decide on what pool to invest in has been displayed already so this is to reduce the number of clicks before successfully investing in a pool",
        "Also, you have full control of the remove liquidity section, where you can either  control the percentage with a slider or you signify the amount of LP you want to remove or the number of a particular asset "
    ],
    img: photo4,
    alt: "Pools"
}
const farms = {
    title: "Farms",
    paragraphs: [
        "The farm gives you the ability to invest in the farming opportunities of the protocol with your LP tokens",
        "We would take out of the LP tokens you have staked in pools in the platform or from any pool you have invested in other protocols and we use that LP to invest in the Farm and you earn the native token of the protocol, and all this can be done directly from the dashboard"
    ],
    img: photo5,
    alt: "Farms"
}
const funding = {
    title: "Futures Trading Portal",
    paragraphs: [
        "The trading portal is one problem that a lot of users f the DeFi space do not have access to due to the fast-paced nature it requires steady and available liquidity",
        "Whatever amount is traded is saved as trading funds and we support trades from pools that are currently available on the platform, whereby the funds in the pool are what would be used to facilitate the tradings from the, and the fees generated would be distributed to the LP holders, hence more money to them"
    ],
    img: photo6,
    alt: "Funding"
}
const launchpad = {
    title: "Launchpad Screen",
    paragraphs: [
        "The Athena launchpad gives you the ability to invest in new tokens or protocols and earn the rewards of early investors. And in the crypto space, this is vital in maximizing profits. So we would be a hub for vetting new protocols that come up daily and ensure just credible protocols are listed and only holders or the ATN tokens would be able to invest in the listed protocols. Because there might be a lot of investors who might be above the tokens set by the protocol listed, we would split the tokens equally based on their investment strength",
    ],
}
const launchpool = {
    title: "Launchpool Screens",
    paragraphs: [
        "Athena Launchpool is a platform that lets users stake ATN to earn newly listed tokens for free. The number of tokens you earn is relative to the number of tokens you stake into the pool. Launchpool users stake their $ATN tokens into the project staking pools. The AME runs for a week to allow everyone to “mine” their allocation. The deposit window opens for payment of your mined allocation in $ATN. Users at the end of the staking period which is approximately 30 days would be given back their tokens and the new token as a reward, which helps them become early investors in a new, promising, and vetted project and also diversify their portfolio.",
    ],
    img: photo7,
    alt: "Launchpool"
}
const themeMode = 'light'
</script>

<template>
    <div>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto my-20 px-6">
            <LayoutOne :page="problems" />
            <div class="md:flex md:items-center md:space-x-12 my-20">
                <div class="md:flex-1 mb-8 md:mb-0"><img class="w-full" src="../assets/athena-photo-2.png"
                        alt="Athena Photo"></div>
                <div class="md:flex-1">
                    <h3 class="mb-6 text-3xl font-new-paris-kingsize">What Does Athena aim to Achieve?</h3>
                    <div>
                        <p class="mb-4">Athena hopes to bring a solution that allows users to easily carry out
                            transactions in the shortest time possible, with transparent and predictable pricing coupled
                            with a simplified experience to remove the complexity attached to a DEX.</p>
                        <p>With the growing need for a more stable or larger liquidity volume to facilitate a better
                            transaction between token pairs and other investment opportunities, there are some
                            limitations
                            that Decentralized exchanges so far fail to achieve and this has prevented users from
                            optimizing
                            their experience with regard;</p>
                        <ul class="pl-6 list-disc">
                            <li>Cheaper trading fees.</li>
                            <li> Faster Trading Time.</li>
                            <li>More Investment Opportunities.</li>
                            <li>Trading abilities due to the fast nature of Trades.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Research Began</h1>
            <p class="mb-4">After listening carefully to stakeholders and the product owners, since they are the first
                source of information source as they were the ones with the project idea and brief and have to an extent
                gotten down a bit of research of their own, I began with the UX phase which started with series of
                intense research.</p>
            <p class="mb-4">I went ahead to speak with a couple of crypto investors and interested investors, there were
                some
                differences found in the pain points faced by the users with each category of users having similar
                issues while the other category having another. But there was one major similarity we learned they all
                struggle with a fundamental issue: faster transactions.</p>
            <p class="mb-4">In this process, user's needs were identified and understood in an in-depth manner, and from
                this personas were
                generated to be able to personalize the pain points, challenges and identify the core requirements of
                users</p>
            <p>Trying out firsthand experiences with some of the available DEXes like Sushiswap, Uniswap, Pancakeswap,
                1inch,
                and SpiritSwap was one of the mediums in which we carried out competitive analysis coupled with going
                through
                each of the protocol's white papers and their comment section on Coinmarket cap, we were able to
                understand the
                processes of the existing market and how to improve the value we would serve to the users.</p>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Research Findings</h1>
            <p class="mb-6">After the research was done below were the findings and validations of some assumptions had
                earlier on</p>
            <ul class="pl-6 list-disc">
                <li class="mb-3">The most prominent pain point was Users want faster transactions</li>
                <li class="mb-3">Another pain point was users want cheaper transaction fees</li>
                <li class="mb-3">The need to explain unfamiliar Defi terms to new users, despite the fact of
                    inconsistent use of terminologies across Defi protocols, the existing users could still understand
                    the context</li>
                <li class="mb-3">Users needed a way to stay up to date with news and events surrounding their
                    tokens/investment</li>
                <li class="mb-3">A lot of users have questions about the Protocol they are investing in and find it
                    difficult to get answers.</li>
                <li class="mb-3">A lot of times they get overwhelmed by the docs</li>
                <li class="mb-3">Experienced users wanted to know the strength and stability of the protocol before
                    investing with them</li>
                <li class="mb-3">A couple of users prefer to keep their money in popular coins like Ethereum and Bitcoin
                </li>
                <li>Some users feel shy to ask their questions in the communities like Discord which is widely used by
                    most
                    protocols</li>
            </ul>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">User Personas</h1>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the
                essence of
                both user categories so its easier to personalize the experience to addressing the users pain points</p>
            <Persona :persona="user1" />
            <Persona :persona="user2" />
        </section>
        <section class="my-20 md:my-40 px-6">
            <div class="max-w-7xl mx-auto">
                <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-10">At this stage I had to put together all the information I gathered so I could generate
                    some How might we questions that guides the ideation process, which helps us to do with thinking of
                    a solution based on the identified problem</p>
            </div>
            <div><img class="w-full" src="../assets/proposition-1.png" alt="Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Value Proposition - Customers</h1>
            <p class="mb-10 text-base">In the customer's profile, you describe the job your customer is trying to get
                done by
                highlighting customers pains and gains, it's used to track users needs and position the company’s to
                know more about the customers needs to properly create value</p>
            <div><img class="w-full" src="../assets/value-proposition-customers.png" alt="Value Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Value Proposition - Business</h1>
            <p class="mb-10 text-base">Here you list the products and services your value proposition is built on,
                describing in
                which way the product features and services are pain relievers and outline how they are gain creators
            </p>
            <div><img class="w-full" src="../assets/value-proposition-business.png" alt="Value Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-8 text-4xl md:text-6xl font-bold font-new-paris-kingsize">User Journey Map</h1>
            <p class="mb-12">This same journey is similar to that of farms but we would be taking pool into account as
                that was the first test we made in the MVP that held the foundation of the product. This helped us
                analyze the user's experience and improve the product.</p>
            <div><img class="w-full" src="../assets/user-map.png" alt="User Map"></div>
        </section>
        <section class="my-40 px-6 bg-brand-gray-4 text-white">
            <div class="max-w-7xl mx-auto py-20 px-6">
                <div class="my-20 md:my-40">
                    <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Design Decisions</h1>
                    <p class="mb-4">From the research carried out, the data analysis from responses, and brainstorming
                        session with those analyses, a design was carried out t properly account for every problem and
                        pain
                        points faced by the users in an inclusive manner and the design was split into two aspects both
                        can
                        stand as individuals products but merged into one to improve value to users</p>
                    <div class="flex items-center space-x-10">
                        <div class="flex items-center space-x-4">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                            <p>DEX</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                            <p>Launchpad</p>
                        </div>
                    </div>
                </div>
                <div class="my-20 md:my-40">
                    <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">DEX Screens</h1>
                    <LayoutThree :page="dashboard" />
                    <LayoutThree :page="swapBridge" />
                    <LayoutThree :page="pools" />
                    <LayoutThree :page="farms" />
                    <LayoutOne :page="funding" />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Launchpad & Launchpool</h1>
            <LayoutThree :page="launchpad" />
            <div class="flex items-center space-x-12 my-20">
                <div class="flex-1"><img class="w-full" src="../assets/athena-photo-9.png" alt="Launchpad"></div>
                <div class="flex-1"><img class="w-full" src="../assets/athena-photo-10.png" alt="Launchpad"></div>
            </div>
            <LayoutThree :page="launchpool" />
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="mb-8 text-4xl md:text-6xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-12">At this stage I had to put together all the information I gathered so I could generate
                    some How might we questions that guides the ideation process, which helps us to do with thinking of
                    a solution based on the identified problem</p>
            </div>
            <div><img class="w-full" src="../assets/athena-photo-11.png" alt="Mobile responsiveness"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-4 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <p class="mb-4">Decentralization is undoubtedly a major trend in financial markets all over the world. The
                arrival of DeFi
                has changed the way people and institutions perceive finance. We have been witnessing many radical
                improvements in financial technology. The understanding of risks associated with decentralized exchanges
                can
                provide vital insights for identifying possibilities for improvement.</p>
            <p>I enjoyed this project and the loads of learning attached to it, the psychology in bridging the world of
                experts and novices together to a unified value proposition was the peak of my experience</p>
        </section>
        <OtherProjects />
        <Footer :bgColor="themeMode"/>
    </div>
</template>