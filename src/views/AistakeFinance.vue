<script setup>
import Header from '../components/Header.vue'
import aistakeCover from "../assets/aistake2.png"
import LayoutOne from '../components/LayoutOne.vue';
import photo1 from '../assets/aistake-photo-1.png';
import photo2 from '../assets/aistake-photo-2.png';
import LayoutTwo from '../components/LayoutTwo.vue';
import Persona from "../components/Persona.vue"
import persona5 from "../assets/persona-5.png"
import persona6 from "../assets/persona-6.png"
import photo3 from "../assets/aistake-photo-3.png"
import LayoutThree from '../components/LayoutThree.vue';
import photo4 from '../assets/aistake-photo-4.png'
import photo5 from '../assets/aistake-photo-5.png'
import photo6 from '../assets/aistake-photo-6.png'
import photo7 from '../assets/aistake-photo-7.png'
import photo8 from '../assets/aistake-photo-8.png'
import photo9 from "../assets/aistake-photo-9.png"
import photo10 from "../assets/aistake-photo-10.png"
import OtherProjects from "../components/OtherProjects.vue"
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
const info = {
    title: "Aistake Finance",
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
const user1 = {
    img: persona5,
    alt: "Persona",
    about: "Savannah Nguyen is a 29-year-old District Lawyer in the united state, he is a former pro basketballer and loves cooking, he has been investing in crypto for 3 years now and is looking for a way to earn passively through staking not sure of what validators to work with",
    goals: [
        "Savannah needs a way to stake his funds and earn passive income",
        "Savannah also needs a way to have available validators for him to pick the validator to work with",
        "Savannah needs a way to determine how good a validator is for him to pick"
    ],
    points: [
        "Not knowing how to identid=fy the best validator to stake with",
        "Not knowing some of the terminologies used in the other platforms he has worked with"
    ]
}
const user2 = {
    img: persona6,
    alt: "Persona",
    about: "Eleanor Pena is a 19-year-old dancer in Cario, Egypt, she hopes to further her studies in the UK later on. She has a few trust issues so she only invests in companies that have good social validations and reviews.",
    goals: [
        "Eleanor needs a way to earn extra funds that she can use in saving up for her fees",
        "Eleanor wants a way to convert her tokens from one asset to another especially other tokens to Solana for staking",
        "Eleanor needs a way to skake with multiple validators at the same time"
    ],
    points: [
        "Most validation platforms do not have a way to swap tokens so I have to go to other protocols to swap before staking in the platform",
        "She has no way of staking multiple times so she has to repeat the staking process multiple times when she wants to invest because she believes in diversification"
    ]
}
const dashboard = {
    title: "Dynamic Dashboard",
    paragraphs: [
        "The dashboard is the first point of contact for the user of the platform and it is designed to be friendly to the eyes and engaging. From the dashboard, you can have access to all the key metrics of the platform for that particular user including the Total Sol staked, the next EPOCH time, and his investment statuses",
        "Also, you get to see an overview of how the protocol is performing  in terms of trading volume and Liquidity to guide your investment decisions"
    ],
    img: photo3,
    alt: "Aistake"
}
const staking = {
    title: "Solana Staking",
    paragraphs: [
        "For the Solana staking, this is the main value proposition of the product, as everything else is centered around this. The staking page has a brief explanation of what the Solana staking is all about and a video presentation to explain it in more detail for users who prefer visual learning. You also have an explanation to what EPOCH is as its one major determinant for in staking window and a lot of users especially new ones do not know what it means",
        "On the staking page you get to see your balance, Total sol staked and earnings, and the ability to invest/stake with a listed validator or a collection",
        "Lastly, we also give you access to your staking history to see your current staking status with validators selected and previous staking to see what was invested how much was made and when withdrawal was made. Finally when staking you have the ability to calculate your estimated earnings if you staked with the validators"
    ],
    img: photo4,
    alt: "Aistake"
}
const validatorListiing = {
    title: "Validator Listing",
    paragraphs: [
        "So here we provide you with a list of all the best and top validators to stake with. Now the major problem is knowing how to pick a validator, so we got you covered by ac you with learning articles and video explanations on how to select a validator",
        "A validator in simple terms is a party/person who you entrust with your Solana to use to strengthen his voting power to validate transactions on the blockchain and get rewarded for validating entries on the blockchain",
        "Also keeping users in mind during the design process we noticed users were getting the URL link for the third party library that provides validator services just like Etherscan which shows transactions on the ERC activities. So the design provides the major parameters needed to make a decision and the link to the third party site if you want more info"
    ],
    img: photo5,
    alt: "Aistake"
}
const validatorCollection = {
    title: "Validator Collection",
    paragraphs: [
        "We realized a lot of users loved community engagements before doing things, it goes with the psychological principle that states that people love doing what others are doing, so we decided to create a way to bring that into the validator selection decision process, so here users get to create a collection of validators that they feel are the best and you can stake with and those are made into collections. people can see the collections and stake with them, and also people can react to them. Give a thumbs up, now the collections with more thumbs up would naturally get the attention of more users to use the collection",
        "The beauty about it is that the more people use your collection, you get rewarded a portion of the fees paid to the validators and hence more money for you, so its a way to incentivize guys who are good at validator selection to help create collections which would help newbie investors",
        "Finally, you can invest in multiple validators in the collection at once and specify the portion of the stated amount that goes to which validator."
    ],
    img: photo6,
    alt: "Aistake"
}
const swapBridge = {
    title: "Swaps / Bridge Tokens",
    paragraphs: [
        "Just like most protocols, the swapping feature is seen as a foundational feature and also was a major part of Aistake. The swap allows you to swap tokens of any blockchain to the same blockchain but a different asset",
        "The bridge on the other hand allows you to swap a particular token from one blockchain to another. ",
        "This is sustained by the liquidity pools of the platform which also serves as an extra investment point for users"
    ],
    img: photo7,
    alt: "Aistake"
}
const farming = {
    title: "Farming Investmemnts",
    paragraphs: [
        "The farming allows you to earn more from your pool investments by staking a portion of the entire amount of your LP tokens in any of the pools listed on the protocol and you earn from it. This doesn't affect the liquidity volume of the pool for swap and bridges and the investments would still be in the pool but we would create a receipt that would serve as your LP Investment power that can be used in the Farms to maintain Liquidity and also provide you extra investment."
    ],
    img: photo8,
    alt: "Aistake"
}
const pool = {
    title: "Liquidity Pool",
    paragraphs: [
        "In the liquidity pool, users are provided with ranges of pool investments usually tokens that are being swapped or bridged on the protocol and you get to invest in them and earn a reward in APY.  You also can start a new pool and create a pool with a token combination of your choice. If the pool you are about to create already exists we would add you to the existing pool and you become one of the pool LP holders."
    ],
    img: photo9,
    alt: "Aistake"
}
const themeMode = 'light'
</script>

<template>
    <div>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <LayoutOne :page="problems" />
            <LayoutTwo :page="aim" />
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Research Time</h1>
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
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Goals From research</h1>
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
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">User Personas</h1>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the
                essence of
                both user categories so its easier to personalize the experience to addressing the users pain points</p>
            <Persona :persona="user1" />
            <Persona :persona="user2" />
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="mb-8 text-4xl md:text-6xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-12">At this stage I had to put together all the information I gathered so I could generate
                    some How might we questions that guides the ideation process, which helps us to do with thinking of
                    a solution based on the identified problem</p>
            </div>
            <div><img class="w-full" src="../assets/proposition.png" alt="Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Value Proposition</h1>
            <p class="mb-10 text-base">In the customer's profile, you describe the job your customer is trying to get
                done by
                highlighting customers pains and gains, it's used to track users needs and position the company’s to
                know more about the customers needs to properly create value</p>
            <div><img class="w-full" src="../assets/value-proposition-customers.png" alt="Value Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-8 text-4xl md:text-6xl font-bold font-new-paris-kingsize">User Journey Map</h1>
            <p class="mb-12">This same journey is similar to that of farms but we would be taking pool into account as
                that was the first test we made in the MVP that held the foundation of the product. This helped us
                analyze the user's experience and improve the product.</p>
            <div><img class="w-full" src="../assets/user-map.png" alt="User Map"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-4 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Design Decisions</h1>
            <p class="mb-12">Below show some of the screens that are a visual representation of the thought process that
                was carried out throughout the research phase and the brainstorming phase with both stakeholders and
                investors.</p>
            <LayoutOne :page="dashboard" />
            <LayoutThree :page="staking" />
            <LayoutThree :page="validatorListiing" />
            <LayoutOne :page="swapBridge" />
            <LayoutTwo :page="farming" />
            <LayoutThree :page="pool" />
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="mb-8 text-4xl md:text-6xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-12">At this stage I had to put together all the information I gathered so I could generate
                    some How might we questions that guides the ideation process, which helps us to do with thinking of
                    a solution based on the identified problem</p>
            </div>
            <div><img class="w-full" src="../assets/aistake-photo-10.png" alt="Mobile responsiveness"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-4 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <p class="mb-4">Decentralization is undoubtedly a major trend in financial markets all over the world. The
                arrival of DeFi has changed the way people and institutions perceive finance. We have been witnessing
                many radical improvements in financial technology. The understanding of risks associated with
                decentralized exchanges can provide vital insights for identifying possibilities for improvement.</p>
            <p>I enjoyed this project and the loads of learning attached to it, the psychology in bridging the world of
                experts and novices together to a unified value proposition was the peak of my experience</p>
        </section>
        <OtherProjects />
        <Footer :bgColor="themeMode"/>
    </div>
</template>