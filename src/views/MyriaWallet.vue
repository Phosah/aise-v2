<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue';
import myriaWalletCover from '../assets/myria/myria-home.png'
import photo1 from "../assets/myria/problem.png"
import CreatePersonas from '../components/CreatePersonas.vue';
import persona1 from "../assets/myria/persona-1.png"

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
const personasArr = [
    {
        img: persona1,
        alt: "Gamer",
        about: "A 24-year -old online gamer based in Texas, United States. She has been running her online playing online games for the last 4 years and started gamefi for over 11 months, she loves the conquests and plays for hours non-stop",
        goals: [
            "Jasmine needs a way to make transactions of her rewarded tokens from one address to another or even an external wallet",
            "Jasmine occasionally transfers NFTs to her fellow guild members",
        ],
        points: [
            "Unable to transfer her assets to friends or other addresses",
            "Unable to properly know the state of her crypto transactions when she sends them form other wallets",
            "Have to wait long hours for some transactions"
        ],
        needTitle: "Need",
        needs: [
            "She needs the means to transfer NFT assets",
            "She needs a way to rent assets that she currently doesn't have but needs to play better"
        ]
    },
]
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="problem" />
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Background</h3>
            <p class="mb-4">Crypto is the future of games and with an ever-growing aspect of life there is bound to be evolution and this influences how we bring solutions to solve the needs that arise from the change.
            This evolution introduced gamefi. This is still similar to the online and gaming console gaming experience in which we get entertained by overcoming challenges but now on the blockchain, there is an even greater value proposition where players get rewarded for their engagement with the games, and these rewards unlike conventional gaming experience these rewards can be converted to real-world value with both fungible and non-fungible tokens.
            With a lot of GameFi in the ecosystems there remains a problem of interoperability between these game ecosystems and this is due to the little or limited transactional interactions between such games, players, and their resources.  
            As solutions keep rising to help mitigate this problem we have a few notable ones these include; 
            The ability of players to join guilds and have access to gaming assets that they could not afford or have access to enables them to play better and earn more.
            The ability of players to rent game assets they don't have resources to get or the skill level necessary to attain and gamers rent their game assets to other gamers temporarily.</p>
            <p class="mb-4">But all these solutions still have one foundation that it heavily depends on  and that is the ability of gamers to seamlessly transfer these assets and their token rewards from one person to another or from one address to another</p>
        </section>
        <section class="my-20 px-6">
            <div class="mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Kick-Off & Design Process</h3>
                <p>To design the project properly, i had to carry out a series of activities which started with a call with the product owners the vision was clearly explained and which was a benchmark for the research and interviews; below are the activities carried out in steps</p>
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Research</h4>
                    <p>During the design process i carried out research about the problem and the market base to guide my design solutions from the users and business perspectives</p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Interviews</h4>
                    <p>Interviews of about 4 users of blockchain wallets and gamefi were done to ensure the design was in sync with users needs and empathize with their pain points</p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">UI Design</h4>
                    <p>After carefully research and accumulating sufficient data the design was done in an agile manner with little paper sketches and quickly into high fidelity prototypes</p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Review</h4>
                    <p>After the design was done a quick test was done to see how easy it was for users to identify their tasks and this helped in the final solutions</p>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Background</h3>
            <p class="mb-4">During the research phase, I engaged with users in the gamefi space, traditional wallet solutions, and the regular gaming spaces to get deeper insights into how players transact with one another and monitor their transactions were asked 
            After listening carefully to a couple of users in I was able to identify users who needed a way to stay up to date on their transaction status, a lot of wallets allow you to send tokens but you just get to wait for sometimes hours till the transaction is successful or failed without extra feedback on why the transaction is taking that long
            Also, not all gameFi protocols are built on the same network hence transferring assets from various networks needs to be provided for a seamless transaction.
            Lastly, 75% of the users needed a way for them to connect their wallets directly to external protocols where they can borrow and rent the assets that would help their gameplay</p>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="md:w-1/2 font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Insigts from User Interviews</h3>
            <div class="flex items-center space-x-6">
                <div>
                    <div class="p-6 bg-white rounded-md">I want a way to be able to send tokens from one chain in my wallet to another</div>
                </div>
                <div><img src="../assets/myria/user1.png" alt="user" /></div>
            </div>
            <div class="flex items-center space-x-6">
                <div><img src="../assets/myria/user2.png" alt="user" /></div>
                <div>
                    <div class="p-6 bg-red-100 rounded-md">I want to be able to send NFTs from my wallet to another wallet of either mine or a friend's account</div>
                </div>
            </div>
            <div class="flex items-center space-x-6">
                <div>
                    <div class="p-6 bg-white rounded-md">I want to be able to rent NFTs that can be used to improve my gaming experience</div>
                </div>
                <div><img src="../assets/myria/user3.png" alt="user" /></div>
            </div>
            <div class="flex items-center space-x-6">
                <div><img src="../assets/myria/user4.png" alt="user" /></div>
                <div>
                    <div class="p-6 bg-red-100 rounded-md">I want to be able to rent NFTs that can be used to improve my gaming experience</div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Competitive Analysis</h3>
            <p class="mb-4">Understanding competitors who are providing similar solutions in the space on how they provide solutions for similar user needs has helped me define what creative solutions could be designed and improved for our product. </p>
            <div class="flex items-center space-x-6">
                <div><img src="../assets/myria/logo1.png" alt="Logo" /></div>
                <div><img src="../assets/myria/logo2.png" alt="Logo" /></div>
                <div><img src="../assets/myria/logo3.png" alt="Logo" /></div>
                <div><img src="../assets/myria/logo4.png" alt="Logo" /></div>
                <div><img src="../assets/myria/logo5.png" alt="Logo" /></div>
                <div><img src="../assets/myria/logo6.png" alt="Logo" /></div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Market Validation</h3>
            <p class="mb-12">The blockchain market has been one that has been one of the fastest-growing space in the last 5 years with a tremendous increase in the number of active blockchain wallet users this coupled with the game environment which has over 1m active game users on the blockchain and over 3.03bn gamers in general, holds tremendous market base for Myria</p>
            <p>2022 Gaming market revenue : $300bn</p>
            <div>
                <div class="flex space-x-10 mb-6 font-new-paris-kingsize text-xl md:text-2xl font-bold">
                    <h4 class="flex-1">No of  blockchain wallets</h4>
                    <h4 class="flex-1">ActiveOnline  Gamers</h4>
                </div>
                <div class="flex space-x-10 mb-6">
                    <div class="flex-1"><img src="../assets/myria/validation-1.png" alt="" /></div>
                    <div class="flex-1"><img src="../assets/myria/validation-2.png" alt="" /></div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">User Persona</h3>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the essence of my target group. Jasmine helped me to always keep the needs of the users at the forefront.</p>
            <CreatePersonas :personas="personasArr"/>
        </section>
    </main>   
</template>