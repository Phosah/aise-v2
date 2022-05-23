<script setup>
import Header from '../components/Header.vue'
import pegasusCover from "../assets/pegasusCover.png"
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import photo1 from "../assets/pegasus-photo-2.png"
import Persona from "../components/Persona.vue"
import persona7 from "../assets/persona-7.png"
import persona8 from "../assets/persona-8.png"
import photo2 from "../assets/pegasus-photo-3.png"
import LayoutThree from '../components/LayoutThree.vue';
import photo3 from "../assets/pegasus-photo-6.png"
import photo4 from "../assets/pegasus-photo-7.png"
import photo5 from "../assets/pegasus-photo-8.png"
import photo6 from "../assets/pegasus-photo-9.png"
import OtherProjects from "../components/OtherProjects.vue"
import BookAppointment from '../components/BookAppointment.vue';
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
const dashboard = {
    title: "Dynamic Dashboard",
    paragraphs: [
        "On the dashboard the goal is to guide the users through their investment positions and the ability to make more investment decisions, so we provided the users with the latest and trending news in the crypto space that they can consume daily as this is very vital in every trader lives to stay in touch with his tokens and others making waves",
        "Also, we give you a quick visual representation of your investment stand and amount you have."
    ],
    img: photo2,
    alt: "Pegasus"
}
const investments = {
    title: "Index Investments",
    paragraphs: [
        "The users are provided with the index investment screens. An index investment is a way to invest in multiple coins or tokens by just investing in one",
        "So here we provide the user with the ability to invest in an index just like he wants to invest in any protocol, he gets to have a glance at how the index is doing and the possible tokens involved.",
        "the top section is to give you a glimpse of the top indexes to fasten your decision",
        "The index details page shows all the data associated with the index, the tokens associated, and the growth overtime"
    ],
}
const community = {
    title: "Community Index",
    paragraphs: [
        "We have a team of financial advisors but we also believe in the power of the community and want them also to benefit so we also give the ability for community contributions, where users are allowed to create their portfolio which would be turned into an index token that other users can see how well that index has grown and can decide to invest in it",
        "The index value would be determined by all the underlying assets' value and their percentage composition.",
        "And this index would be available for anyone to buy but would not be given the verified tag."
    ],
    img: photo3,
    alt: "Pegasus"
}
const vault = {
    title: "Vault",
    paragraphs: [
        "The vault is a way for you to gain extra income. Here you can lock up your investment in form of an index mainly and other tokens and those tokens based on the strategies set up in the protocol for that particular vault would be used to generate extra earnings for those who locked up their tokens.",
        "You can deposit to the vault and also withdraw your locked up funds at anytime",
        "We give you the ability to monitor the vault activities to help build a room for trust and transparency in the protocols activities"
    ],
    img: photo4,
    alt: "Pegasus"
}
const poolInvestment = {
    title: "Pool Investment",
    paragraphs: [
        "In the liquidity pool, users are provided with ranges of pool investments usually tokens that are being swapped or bridged on the protocol and you get to invest in them and earn a reward in APY.  You also can start a new pool and create a pool with a token combination of your choice.",
        "If the pool you are about to create already exists we would add you to the existing pool and you become one of the pool LP holders.",
    ],
    img: photo5,
    alt: "Pegasus"
}
const transactionHistory = {
    title: "Transaction History",
    paragraphs: [
        "Most users on other protocols fail to have a good record of all the activities carried out by them or by the protocol with their assets and this makes it difficult to track financial activities. Hence we provide a one-place view of all the activities carried out on the protocol by you or the protocol with your tokens. You see all the swap activities, the earnings from the pool and the vault, etc",
        "This can also be used as a form of bank statement for those who plan to travel as most crypto holders find it difficult to provide one when requested as their funds are not easily accessible for track record purposes on the protocols they engage with"
    ],
    img: photo6,
    alt: "Pegasus"
}
</script>

<template>
    <div>
        <Header :headerInfo="info" />
        <section class="md:flex md:items-center md:space-x-12 max-w-7xl mx-auto my-40 px-6">
            <div class="md:flex-1">
                <h3 class="mb-6 text-3xl font-bold font-new-paris-kingsize">Problems associated</h3>
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
            <div class="md:flex-1"><img src="../assets/pegasus-photo-1.png" alt="Pegasus"></div>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <LayoutTwo :page="goals" />
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-4 text-6xl font-bold font-new-paris-kingsize">Research Began</h1>
            <p class="mb-4">A series of research was done as related to indexes in which several analogous inspirations
                were used especially from the web2 space as this was a product feature known to industries about the
                stock market and insurance already. This was finally backed up with competitive research on DeFi
                protocols like Tokenset and Zerion.</p>
            <p>During the research, a couple of interviews were done after the initial research, and these questions
                were used to drive the interview questions this further helped me in creating surveys ad this was used
                to validate the data for quantitative analysis. Below holds some of the questions and the collated
                results.</p>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-4 text-6xl font-bold font-new-paris-kingsize">Research Findings</h1>
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
            <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">User Journey Map</h1>
            <p class="mb-10 text-base">The user journey map for the purchasing of an index as the core of the product
                was the first
                to be done as it would help us identify the users experience within the process for us to create the
                best experience and product</p>
            <div><img class="w-full" src="../assets/value-proposition-customers.png" alt="Value Proposition"></div>
        </section>
        <section class="my-20 px-6 bg-brand-blue-1 text-white">
            <div class="max-w-7xl mx-auto py-40">
                <h1 class="mb-6 text-6xl font-bold font-new-paris-kingsize">Design Decisions</h1>
                <p class="mb-4">From the research carried out, the data analysis from responses, and brainstorming
                    session with those analyses, a design was carried out t properly account for every problem and
                    pain
                    points faced by the users in an inclusive manner and the design was split into two aspects both
                    can
                    stand as individuals products but merged into one to improve value to users</p>
                <LayoutOne :page="dashboard" />
                <LayoutThree :page="investments" />
                <div class="flex items-center space-x-12 my-20">
                    <div class="flex-1"><img class="w-full" src="../assets/pegasus-photo-4.png" alt="Pegasus"></div>
                    <div class="flex-1"><img class="w-full" src="../assets/pegasus-photo-5.png" alt="Pegasus"></div>
                </div>
                <LayoutThree :page="community" />
                <LayoutThree :page="vault" />
                <LayoutOne :page="poolInvestment" />
                <LayoutOne :page="transactionHistory" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-40 px-6">
            <h1 class="mb-4 text-6xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <p>Because we are still very early days in the development of Pegasus and it's an MVP, there are still many
                outstanding areas and features that we plan on developing. There are plans to take the index
                opportunities to another step by introducing features including;</p>
            <ul class="mb-4 pl-6 list-disc">
                <li>Lending Module</li>
                <li>Asset Vaults smart contract can be lent out for any purpose in a flash loan.</li>
                <li>DAO to vote on token makeup and distribution</li>
            </ul>
            <p>This was an interesting project that helped me connect more with utilizing human psychology skills to
                understand users better in order to provide an inclusive solution that meets both user's needs and
                business goals</p>
        </section>
        <OtherProjects />
        <BookAppointment />
    </div>
</template>