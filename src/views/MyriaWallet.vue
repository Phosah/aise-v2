<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue';
import LayoutThree from '../components/LayoutThree.vue';
import Footer from '../components/Footer.vue';
import OtherProjectsWeb3 from '../components/OtherProjectsWeb3.vue';
import CreatePersonas from '../components/CreatePersonas.vue';
import myriaWalletCover from '../assets/myria/myria-home.png'
import persona1 from "../assets/myria/persona-1.png"
import photo1 from "../assets/myria/dashboard.png"
import photo2 from "../assets/myria/nft.png"
import photo3 from "../assets/myria/transaction.png"
import photo4 from "../assets/myria/renting-protocol-1.png"
import photo5 from "../assets/myria/renting-protocol-2.png"
import photo11 from "../assets/myria/problem.png"

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
    img: photo11,
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
const dashboard = {
    title: "Simplified Dashboard",
    paragraphs: [
        "The first step was to create a simplified and user-friendly dashboard experience that was both functional and aesthetic to ease the user into the product From the dashboard you can view all your assets that are accessible to you in the wallet, and view all your NFT’s by switching a tab also at the same time you can view all transaction activities at a glance without having to click any button",
        "Last but not the least you can easily see your account balance and access other functions like sending, receiving, buying, and exchange (bridge and swapping) your tokens"
    ],
    img: photo1,
    alt: "Dashboard",
}
const nft = {
    title: "Manage NFT",
    paragraphs: [
        "Have the ability to see all my NFT assets on the platform and also import assets from other marketplaces to my wallet dashboard so I can be able to manage all my assets at once. Also, you can send NFTs from your wallet to any other address easily.",
        "When sending your NFT unlike regular tokens, you  get to see the preview of the NFT to be sent as a lot of users have NFTs that are similar in look and this can make them select a wrong NFT when picking them from the thumbnail lists so a larger preview would enable them see better and reduce mistakes"
    ],
    img: photo2,
    alt: "nft",
}
const transaction = {
    title: "Transactions",
    paragraphs: [
        "During transactions, the majority of users know they have sent but do not know the status of their transactions, yes expert users can go to ether scan to view the transaction status but only a handful of people do it Also, this gets to take them away from the wallet and makes them go through extra stress to find their answers, so giving a details page that shows the transaction status with as many details that both newbies and experts can understand and not find overwhelming would improve the user experience, also providing a view more for expert users to see some advanced details on the places like etherscan is also put in place Also, the use of Progress bars and time estimate on the transaction card reduces the user's curiosity as to what happens next, and how long before completion"
    ],    
    img: photo3,
    alt: "transaction",
}
const connect1 = {
    title: "Connect to Renting Protocols",
    paragraphs: [
        "Traditional wallets like Trustwallet gives users the ability to connect to other dApps or DeFi protocols to be able to carry out transactions like swaps and bridges that can not be carried out on the wallet itself Likewise, users need a way to borrow game assets that would improve their gameplay and also have a way to rent out their assets to get incentives so we provide a way for you to be able to connect to protocols like rentNFT and Pegaxy and others that would give you that ability right from your wallet seamlessly."
    ],    
    img: photo4,
    alt: "protocols",
}
const connect2 = {
    title: "Connect to Renting Protocols",
    paragraphs: [
        "You can easily access all your assets on their respective blockchain as we aim to achieve a multi-chain system so you can see all the assets and also switch chins for a more filtered search. By selecting a token you can see the QR code to scan payment and the address that can be copied and pasted Also, the design is structured in such a way that you do not need to have multiple clicks to get another tokens address just one click on the asset and the QR code changes and its respective address"
    ],    
    img: photo5,
    alt: "protocols",
}
const themeMode = "light"
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="problem" />
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-6 text-2xl md:text-3xl font-bold">Background</h3>
            <p class="mb-4">Crypto is the future of games and with an ever-growing aspect of life there is bound to be evolution and this influences how we bring solutions to solve the needs that arise from the change.
            This evolution introduced gamefi. This is still similar to the online and gaming console gaming experience in which we get entertained by overcoming challenges but now on the blockchain, there is an even greater value proposition where players get rewarded for their engagement with the games, and these rewards unlike conventional gaming experience these rewards can be converted to real-world value with both fungible and non-fungible tokens.
            With a lot of GameFi in the ecosystems there remains a problem of interoperability between these game ecosystems and this is due to the little or limited transactional interactions between such games, players, and their resources.  
            As solutions keep rising to help mitigate this problem we have a few notable ones these include; 
            The ability of players to join guilds and have access to gaming assets that they could not afford or have access to enables them to play better and earn more.
            The ability of players to rent game assets they don't have resources to get or the skill level necessary to attain and gamers rent their game assets to other gamers temporarily.</p>
            <p class="mb-4">But all these solutions still have one foundation that it heavily depends on  and that is the ability of gamers to seamlessly transfer these assets and their token rewards from one person to another or from one address to another</p>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
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
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Research Process</h3>
            <p class="mb-4">During the research phase, I engaged with users in the gamefi space, traditional wallet solutions, and the regular gaming spaces to get deeper insights into how players transact with one another and monitor their transactions were asked 
            After listening carefully to a couple of users in I was able to identify users who needed a way to stay up to date on their transaction status, a lot of wallets allow you to send tokens but you just get to wait for sometimes hours till the transaction is successful or failed without extra feedback on why the transaction is taking that long
            Also, not all gameFi protocols are built on the same network hence transferring assets from various networks needs to be provided for a seamless transaction.
            Lastly, 75% of the users needed a way for them to connect their wallets directly to external protocols where they can borrow and rent the assets that would help their gameplay</p>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h3 class="md:w-1/2 font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Insigts from User Interviews</h3>
            <div class="flex items-center justify-center space-x-6">
                <div class="w-1/3">
                    <div class="p-6 bg-white rounded-2xl">I want a way to be able to send tokens from one chain in my wallet to another</div>
                </div>
                <div><img src="../assets/myria/user1.png" alt="user" /></div>
            </div>
            <div class="flex items-center justify-center space-x-6">
                <div><img src="../assets/myria/user2.png" alt="user" /></div>
                <div class="w-1/3">
                    <div class="p-6 bg-white rounded-2xl">I want to be able to send NFTs from my wallet to another wallet of either mine or a friend's account</div>
                </div>
            </div>
            <div class="flex items-center justify-center space-x-6">
                <div class="w-1/3">
                    <div class="p-6 bg-white rounded-2xl">I want to be able to rent NFTs that can be used to improve my gaming experience</div>
                </div>
                <div><img src="../assets/myria/user3.png" alt="user" /></div>
            </div>
            <div class="flex items-center justify-center space-x-6">
                <div><img src="../assets/myria/user4.png" alt="user" /></div>
                <div class="w-1/3">
                    <div class="p-6 bg-white rounded-2xl">I want to be able to rent NFTs that can be used to improve my gaming experience</div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
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
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Market Validation</h3>
            <div class="mb-16">
                <p class="mb-4">The blockchain market has been one that has been one of the fastest-growing space in the last 5 years with a tremendous increase in the number of active blockchain wallet users this coupled with the game environment which has over 1m active game users on the blockchain and over 3.03bn gamers in general, holds tremendous market base for Myria</p>
                <p>2022 Gaming market revenue : <span class="font-bold">$300bn</span></p>
            </div>
            <div>
                <div class="flex space-x-10 mb-6 font-new-paris-kingsize text-xl md:text-2xl font-bold">
                    <h4 class="flex-1 font-new-paris-kingsize text-xl md:text-2xl font-bold">No of  blockchain wallets</h4>
                    <h4 class="flex-1 font-new-paris-kingsize text-xl md:text-2xl font-bold">ActiveOnline  Gamers</h4>
                </div>
                <div class="flex space-x-10 mb-6">
                    <div class="flex-1"><img src="../assets/myria/validation-1.png" alt="" /></div>
                    <div class="flex-1"><img src="../assets/myria/validation-2.png" alt="" /></div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">User Persona</h3>
            <p class="mb-6">Based on the generative user research I conducted, I created user personas that capture the essence of my target group. Jasmine helped me to always keep the needs of the users at the forefront.</p>
            <CreatePersonas :personas="personasArr"/>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1
                class="mb-6 text-2xl md:text-3xl font-semibold font-new-paris-kingsize"
            >User Stories</h1>
            <p class="mb-10">User stories helped me to identify necessary flows that needed to be accounted for in the design and this helped guide the solutions in general</p>
            <ul class="list-disc pl-6">
                <li
                    class="mb-2"
                >As a user, i want to be able to transfer crypto-assets from one address to another so I can use the tokens for other purposes</li>
                <li
                    class="mb-2"
                >As a user, i want to be able to transfer NFT assets from one address to another so i can give to friends that want to play or use them myself in another game that I am connected to with a new wallet</li>
                <li
                    class="mb-2"
                >As a user, i want to be able to transfer my NFT and crypto-assets across multiple chains so I can use my assets on any network</li>
                <li
                    class="mb-2"
                >As a user, i want to be able to borrow game assets so it can help me play better</li>
                <li
                    class="mb-2"
                >As a user, i want to be able to see my account balance so I know my financial status of that wallet</li>
            </ul>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h1 class="mb-4 text-6xl font-new-paris-kingsize">Design Decisions</h1>
            <p class="md:w-1/2 mb-6">After carefully analyzing the data and working with an MVP and time constraints, the following solutions were designed below</p>
            <div>
                <LayoutThree :page="dashboard" />
                <LayoutThree :page="nft" />
                <LayoutThree :page="transaction" />
                <LayoutThree :page="connect1" />
                <LayoutThree :page="connect2" />
            </div>
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h3 class="mb-8 text-2xl md:text-3xl font-bold font-new-paris-kingsize">More Design Screens</h3>
            </div>
            <div><img class="w-full" src="../assets/myria/design-screens.png" alt="design screens" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div>
                <h2 class="mb-6 text-3xl md:text-5xl font-bold font-new-paris-kingsize">Conclusion</h2>
                <p class="mb-6">There are a lot of solutions that can be provided to ease the lives of users using wallets and this in turn improves the user experience of the web3 space in general as wallets are the foundational blocks to the web3 ecosystem.</p>
                <p class="mb-6">The ability for users to easily manage their NFT’s their assets across multiple networks, and protocols from one space and the ability for users to be guided and kept in sync with their transaction activities would improve clarity and inturn trust for users</p>
                <p>Also, the ability for better transactions would improve interoperability of the web3 space and this, in turn, improves the entire ecosystem Thanks</p>
            </div>
        </section>
        <OtherProjectsWeb3 />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>