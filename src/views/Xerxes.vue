<script setup>
import OtherProjects from "../components/OtherProjects.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import xerxesCover from "../assets/xerxes-cover.png";
import LayoutOne from "../components/LayoutOne.vue";
import photo1 from "../assets/xerxes-photo-1.png"
import photo2 from "../assets/xerxes-photo-2.png"
import LayoutTwo from "../components/LayoutTwo.vue"
import LayoutThree from "../components/LayoutThree.vue"
import photo3 from "../assets/dashboard.png"
import photo4 from "../assets/borrow-market.png"
import photo5 from "../assets/supply-market.png"
import photo6 from "../assets/liquidation-notification.png"
import photo7 from "../assets/repay-loan.png"
import Persona from "../components/Persona.vue"
import persona1 from "../assets/persona-1.png"
import persona2 from "../assets/persona-2.png"
import Navbar from "../components/Navbar.vue";

const info = {
    title: "Xerxes",
    text: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
    img: xerxesCover,
    alt: "Xerxes",
    mainContent: "Xerxes is a lending protocol strategy product on the web3 Ecosystemn that enables crypto users to borrow and or lend their crypto assets",
    subContent: "Xerxes gets to solve the issue of crypto lending and create a financial support system for crypto holders and traders who have some financial needs and don't want to liquidate their assets and still have access to funds for their needs or investment purposes.",
    role: "Product Design",
    client: "Xerxes",
    duration: "1 month",
    year: "2021"
}
const problems = {
    title: "Problems Faced by Users",
    paragraphs: [
        "For every crypto investor, there has been one major statement we get advised with before we being and that is “Don't put in more than you can lose”. But this is one piece of advice we know but like me, a lot of users fail to uphold.",
        "The frequent dips in cryptocurrencies have been that of major benefits and also losses on a lot of users which often places users in a tight spot especially those who have a dire need for their investments.",
        "A lot of users tend to embrace the HODL stance and keep their funds for two major reasons; The faith in the tokens to rise back based on its historical proofs and the pain of selling now and incurring all the loss.",
        "This has kept a lot of users facing serious financial problems, those who have to starve or lack some basic amenities because their funds are tied up suffer from it."
    ],
    img: photo1,
    alt: "Xerxes",
}
const aims = {
    title: "What Does Xerxes aim to Achieve?",
    paragraphs: [
        "Crypto Investments do not need to be one that financially cripples you, the goal is financial liberation both short and long term.",
        "Xerxes hopes to bring a solution that allows users access to lending systems whereby you can borrow tokens either stable coins or others with the collateralization of your crypto investments and sort out whatever financial needs, you don't need to tell us without ever having to sell and be on the losing side of the dip",
        "Also what is a DeFi Protocol without investment opportunities, so we aim to make the system embrace the decentralized nature of web3, hence we aim to facilitate a peer-peer lending system where the borrowers would be incentivized with profit for borrowing their extra cash to those who need it in a secured nature.",
    ],
    img: photo2,
    alt: "Xerxes",
}
const dashboard = {
    title: "Dashboard",
    paragraphs: [
        "From the dashboard, you get to see your stand in the protocol with your NET APY the most obvious showing you the earnings all your investments (lending and borrowing) are yielding you at the end of the year. You also get to see the state of your bowwi = owing limit which is a major factor as the borrowing limit determines if the assets would be liquidated to pay off the debt when the token price borrowed is getting greater than the collateralized amount",
        "From the dashboard, you get to see  your supply and borrow market and can be accessed with a toggle from one to the other",
        "We also aim to bring clarity to terminologies used so we introduced tooltips to do major explanations."
    ],
    img: photo3,
    alt: "Dashboard"
}
const borrowMarket = {
    title: "Borrow Market",
    paragraphs: [
        "All users can borrow any crypto asset of their choice from the listings provided by the protocol but with the provision of collateral of another token",
        "Now we decided to make this as seamless as possible whereby normally you can get to lend to the protocol and this lent amount can be converted into collateral for any borrow transaction. But that requires the lending step. So now you can provide collateral directly from your wallet with the available assets and this would stand in as collateral for you.",
        "You can use multiple assets based of your available balance and the amount requested to borrow as collateral for just one asset",
        "We also provide you with analysis and metrics of that borrow pools activities and standings so you get to see your repayment APY and the strength of that borrow pool"
    ],
    img: photo4,
    alt: "Borrow Market"
}
const supplyMarket = {
    title: "Supply Market",
    paragraphs: [
        "Here you get to select out of the assets stated on the protocol for supply or lending and you can lend/supply your tokens to earn APY",
        "Now if you see a supply that you want to invest in and you don't have that token, with our instant swap feature you can supply any asset of your choice and this gets converted to the token that is to be supplied and you can partake in that supply market with just one transaction fee no matter the quantity of the assets supplied with.",
    ],
    img: photo5,
    alt: "Supply Market"
}
const liquidation = {
    title: "Liquidation Notification",
    paragraphs: [
        "One of the biggest risks with Lending protocols is that your assets can be liquidated if the collateralized amount goes below a safe point that the protocol determines most times 80% in value and this is to ensure the protocol doesn't lose or incur a permanent loss",
        "But we aim to keep the users in the loop at all times for a better experience. Liquidation is greatly affected by how the supplied collateral tokens are performing. there can be a dip in the asset which would affect the value of token talk and reduce the collateralized value and this can cause liquidation.",
        "We are aware of all this and decided to go the extra mile to remind our users, and since this is a web3 decentralized application, we have few ways of contacting the user so we ask the users to provide their email and phone number, not for login but solely for reminder purposes of when liquidation point is close so they can either repay their loans and salvage their collateral or top up their collateral and maintain a safe liquidation point."
    ],
    img: photo6,
    alt: "Liquidation Notification"
}
const repay = {
    title: "Repay Loan",
    paragraphs: [
        "You can decide to repay your loan when you are ready with assets from your wallet or with your collateralized amount, by doing this, your collateral is used to pay the loan and the balance is converted to the assets used to invest in if it was multiple assets or if it was from your supply market, the percentage distribution of the supplied tokens would determine the amount that goes to what assets.",
    ],
    img: photo7,
    alt: "Repay Loan"
}
const user1 = {
    img: persona1,
    alt: "Persona",
    about: "Wade Warren is a 26yrs old Human Resource manager who invests a lot in crypto, he isn't so experienced with trading and other forms of investments so he buys to hold long term, most of his holdings are in Ethereum and Doge",
    goals: [
        "Wade needs a way to have funds to use for another personal run around and at the same time HODL his tokens because he doesn't want to lose out on any Rise",
        "Wade also needs a way to borrow and be sure of the terms he is getting into based on bank lending schemes he is a bit untrusting",
        "Wade needs a way to earn passive income with his tokens as he  is holding long term"
    ],
    points: [
        "Not knowing how to get cash to spend so he ends up borrowing funds from friends to meet personal needs and sometimes the friends might not have the funds so he is stuck."
    ]
}
const user2 = {
    img: persona2,
    alt: "Persona",
    about: "Rebecca Richards is a 29yrs old Sales agent at Chipper Cash she stays in Amsterdam. She is more of a take-profit seller and holds short-term until the token has yielded a substantial profit. She controls a diversified portfolio to maximize her luck",
    goals: [
        "Rebecca needs a way to borrow funds when in need of cash and at the same time not risk her chances of a potential profit",
        "Rebecca wants a way to borrow funds when they are high with a more stable token when she predicts the tokens will dip so she can leverage off the dip and earn profit as well",
        "Rebecca needs a way to earn passive income with his tokens as he  is holding long term"
    ],
    points: [
        "Overpriced interest placed on loans",
        "Often when the price of a token collateralized falls in the market your collateralization limit might cross the safe point without her being aware and she might lose her collateral due to the protocol of liquidating it to avoid loss."
    ]
}
const themeMode = 'light'
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto my-20 px-6">
            <LayoutOne :page="problems" />
            <LayoutTwo :page="aims" />
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">Research Time</h1>
            <p class="mb-4">During the research phase, we engaged with a lot of users in the web2 space and also the
                web3 space
                because the goal of the project is to understand the psychology of users wanting to borrow funds and
                leverage off lending protocols, and due to this technology being utilized in the web2 space already we
                needed to understand from a solutions perspective. But we understand that the methods of the approach of
                lending in web3 are different because of the peer-peer fashion we also needed to understand how similar
                protocols in the web3 space carry out lending and borrowing.</p>

            <p>After listening carefully to a couple of users in some one on one interviews scheduled on google meet,
                and some sharing the vision session with the product owners I was able to identify some business needs
                and at the same time identify the pain points of the users and able to come up with some deductions.</p>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">Deductions</h1>
            <p class="mb-6">The research has shown that it was crucial for the success of the project to identify the
                painpoints and translate them into solutions</p>
            <ul class="pl-6 list-disc">
                <li class="mb-3">Users needed a way to borrow money without necessarily supplying first</li>
                <li class="mb-3">Customizable Loan Terms</li>
                <li class="mb-3">Repayments flexibility, I can decide to clear my loans once or set recurring payments
                    connected to
                    my wallet</li>
                <li class="mb-3">Transparent risk assessment</li>
                <li class="mb-3">The ability to multiple tokens from the wallet to borrow one asset on the platform</li>
                <li class="mb-3">Repayment terms and answered questions</li>
                <li class="mb-3"> Clarity on terms used in the lending/borrowing cycle</li>
            </ul>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">User Personas</h1>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the
                essence of
                both user categories so its easier to personalize the experience to addressing the users pain points</p>
            <Persona :persona="user1" />
            <Persona :persona="user2" />
        </section>
        <section class="my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="mb-8 text-6xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-12">At this stage I had to put together all the information I gathered so I could generate
                    some How might we questions that guides the ideation process, which helps us to do with thinking of
                    a solution based on the identified problem</p>
            </div>
            <div><img class="w-full" src="../assets/proposition.png" alt="Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">Value Proposition - Customers</h1>
            <p class="mb-10 text-base">In the customer's profile, you describe the job your customer is trying to get
                done by
                highlighting customers pains and gains, it's used to track users needs and position the company’s to
                know more about the customers needs to properly create value</p>
            <div><img class="w-full" src="../assets/value-proposition-customers.png" alt="Value Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">Value Proposition - Business</h1>
            <p class="mb-10 text-base">Here you list the products and services your value proposition is built on,
                describing in
                which way the product features and services are pain relievers and outline how they are gain creators
            </p>
            <div><img class="w-full" src="../assets/value-proposition-business.png" alt="Value Proposition"></div>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-8 text-6xl font-bold font-new-paris-kingsize">User Journey Map</h1>
            <p class="mb-12">This same journey is similar to that of farms but we would be taking pool into account as
                that was the first test we made in the MVP that held the foundation of the product. This helped us
                analyze the user's experience and improve the product.</p>
            <div><img class="w-full" src="../assets/user-map.png" alt="User Map"></div>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-4 text-6xl font-bold font-new-paris-kingsize">Design Decisions</h1>
            <p class="mb-12">From the research carried out, the data analysis from responses, and brainstorming session
                with those analyses, a design was carried out t properly account for every problem and pain points faced
                by the users in an inclusive manner and the design was split into two aspects both can stand as
                individuals products but merged into one to improve value to users</p>
            <LayoutThree :page="dashboard" />
            <LayoutThree :page="borrowMarket" />
            <LayoutThree :page="supplyMarket" />
            <LayoutTwo :page="repay" />
            <LayoutThree :page="liquidation" />
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-4 text-6xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
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
    </main>
</template>