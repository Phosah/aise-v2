<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import bitpowrCover from '../assets/bitpowr/bitpowr-home.png'
import LayoutOne from '../components/LayoutOne.vue';
import LayoutTwo from '../components/LayoutTwo.vue';
import LayoutFour from '../components/LayoutFour.vue'
import LayoutThree from '../components/LayoutThree.vue';
import Footer from "../components/Footer.vue"
import OtherProjectsWeb3 from "../components/OtherProjectsWeb3.vue"
import photo1 from '../assets/bitpowr/blockchain.png'
import photo2 from '../assets/bitpowr/role.png'
import photo3 from '../assets/bitpowr/review.png'
import photo4 from '../assets/bitpowr/competitors.png'
import photo5 from '../assets/bitpowr/signup-old.png'
import photo6 from '../assets/bitpowr/signup-new.png'
import photo7 from '../assets/bitpowr/dashboard-old.png'
import photo8 from '../assets/bitpowr/dashboard-new.png'
import photo9 from '../assets/bitpowr/transaction-old.png'
import photo10 from '../assets/bitpowr/transaction-new.png'
import photo11 from '../assets/bitpowr/account-old.png'
import photo12 from '../assets/bitpowr/account-new.png'
import photo13 from '../assets/bitpowr/exchange.png'
import photo14 from '../assets/bitpowr/policy.png'
import photo15 from '../assets/bitpowr/payment.png'
import photo16 from '../assets/bitpowr/checkout.png'
import photo17 from '../assets/bitpowr/defi-wallet-1.png'
import photo18 from '../assets/bitpowr/defi-wallet-2.png'
import photo19 from '../assets/bitpowr/monitoring.png'

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
const signup = {
    title: "Sign Up process",
    changes: [
        {
            title: "Simplifying the Flow",
            text: "The old sign up page was one that was really confusing to alot of users and it made the simple task look more tedious, so the first thing i did was break the long form into smaller steps"
        },
        {
            title: "Making the signup actions grouped",
            text: "For various needed details in the sign up process can be grouped either as personal info, business info, wallet creation or KYC verification and all these broken down and grouped made the new onboarding seamless"
        }
    ],
    img1: photo5,
    img2: photo6,
    alt: "signup"
}
const dashboard = {
    title: "Dashboard",
    changes: [
        {
            title: "Emphasize on key Metrics",
            text: "The dashboard is one that an individual or an organization comes into and immediately can tell where he stands, so the first thig was to introduce a chart that would display the current balance and this is filterable by date and accounts"
        },
        {
            title: "Carry out Actions",
            text: "The second step was to give users the ability to carry out the core actions for the platform and that is sending and receiving crypto and this was introduced into the dashboard to simplify the operators expeience"
        }
    ],
    img1: photo7,
    img2: photo8,
    alt: "dashboard"
}
const transaction = {
    title: "Transactions",
    changes: [
        {
            title: "Give more details",
            text: "The previous transaction page just gave a list of transactions to go threough, this makes it difficult to know a summary or an overview of what has been carried out as that is key for a transaction page. So i introduces the summary cards to show the details of the received transactions and sent transactions"
        },
        {
            title: "Give room for approvers",
            text: "Bitpowr is a multi-sig platform hence there are transactions that would need multiple approvals. I introduced the approvers to the table so you can see who has approved and who is left and how many approvals does the transaction need to be successful"
        }
    ],  
    img1: photo9,
    img2: photo10,
    alt: "transaction"
}
const account = {
    title: "Account",
    changes: [
        {
            title: "Gave more Explanation",
            text: "The old account represented accounts in cards and this limited the details to be just for BTC which doesnt make it scale or give more details on what the account holds. So i expanded the design and introduced the accounts in a table that the overview can be seen at a glimpse and more details can be accessed when going deeper."
        },
        {
            title: "Introdcuing Fiat and Exchanged",
            text: "Although this was not an improvement more like a new feature but from the account you can switch between your crypto accounts to your CEX and Fiat balances and the assets inside them would be displayed aswell"
        }
    ],  
    img1: photo11,
    img2: photo12,
    alt: "account"
}
const exchange = {
    title: "Exchange and FIAT Connection",
    paragraphs: [
        "With Bitpowr you can connect your CEX accounts via API and be able to interact with the assets there, and transfer and monitor them from your dashboard. Also due to the policy from the government, we still needed a way to enable bank settlements, so now you can connect to your Fintech choice and your assets can be sent there and converted to local currency to be spent or sent to bank",
    ],
    
    img: photo13,
    alt: "exchange"
}
const policy = {
    title: "Account Policy",
    paragraphs: [
        "With Bitpowr you can connect your CEX accounts via API and be able to interact with the assets there, and transfer and monitor them from your dashboard. Also due to the policy from the government, we still needed a way to enable bank settlements, so now you can connect to your Fintech choice and your assets can be sent there and converted to local currency to be spent or sent to the bank",
    ],
    
    img: photo14,
    alt: "policy"
}
const payment = {
    title: "Receive Payment",
    paragraphs: [
        "With Bitpowtr you can generate a QR code or a payment link that the amount to be paid can be preset and this can be sent to anyone to request payments to your account",
    ],
    
    img: photo15,
    alt: "policy"
}
const checkout = {
    title: "Checkout",
    paragraphs: [
        "The checkout is to help eCommerce users who need to integrate payment solutions to their platforms to be able to receive payments straight to their Bitpowr dashboard from any token",
    ],
    
    img: photo16,
    alt: "policy"
}
const wallet1 = {
    title: "DeFi Investment Wallet",
    paragraphs: [
        "The introduction of a Defi wallet is to allow users who want to invest their assets and earn passive income can do that. Bitpowr connects you to a large range of protocols, all you need to do is select a protocol and indicate your investment amount, that's all 😌",
    ],
    
    img: photo17,
    alt: "wallet"
}
const wallet2 = {
    title: "DeFi Investment Wallet",
    paragraphs: [
        "The introduction of a Defi wallet is to allow users who want to invest their assets and earn passive income can do that. Bitpowr connects you to a large range of protocols, all you need to do is select a protocol and indicate your investment amount, that's all 😌",
    ],
    
    img: photo18,
    alt: "wallet"
}
const monitoring = {
    title: "Transaction Monitoring",
    paragraphs: [
        "The introduction of a Defi wallet is to allow users who want to invest their assets and earn passive income can do that. Bitpowr connects you to a large range of protocols, all you need to do is select a protocol and indicate your investment amount, that's all 😌",
    ],
    
    img: photo19,
    alt: "monitoring"
}
const themeMode = "light"
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="background"/>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
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
            <div class="flex space-x-2 my-20">
                <div class="flex-1">
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Research Process</h3>
                    <p class="mb-4">The next phase was to carry out interviews with potential users of the products and people who build on the blockchain to identify their pain-points and how they carry out their activities without the solution bitpowr would give them</p>
                    <p>This was helpful to get the views of fresh users as their opinions and needs would be unbias of emotional sentiments and attachments as the aim of the redesign was not just to improve the experience of existing users but to also bring and retain new users</p>
                </div>
                <div class="flex-1"><img src="../assets/bento/research-process.png" alt=""></div>
            </div>
            <LayoutOne :page="competitors" />
        </section>
        <section class="max-w-7xl mx-auto px-6 my-20 md:my-40">
            <div class="">
                <h1 class="mb-6 text-3xl md:text-3xl font-bold font-new-paris-kingsize">How might we</h1>
                <p class="mb-12">The next phase was to gather the insights gotten from the research phase and bring these to the CEO, PM, CTO and the marketing team the idea was to have an inhouse brainstorming session with the Product visionaries and others to get the best ideas out through some How Might We questions</p>
            </div>
            <div><img class="w-full" src="../assets/bitpowr/notes.png" alt="Notes" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div class="">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Well defined goals.</h3>
                <p class="mb-12">When we were done with the brainstorming session, I compiled all that has been discussed and gathered all the data that was mentioned to get the best ideas out there with this I scheduled a session with the CEO and, we went over all the data and decided on goals for the redesign increase platform value, grow the customer base and increase conversion and reduce bounce rate. Below are the targets we set and plans that were agreed upon</p>
                <div class="mb-10">
                    <h4 class="mb-6 text-xl font-new-paris-kingsize">Increase Conversion</h4>
                    <p class="mb-1">a. Create a cleaner and more user-friendly interface </p>
                    <p class="mb-1">b. The new platform should convert leads from Demo bookings to signups</p>
                    <p class="mb-1">c. The new platform should reduce churn/bounce rates</p>
                </div>
                <div class="">
                    <h4 class="mb-6 text-xl font-new-paris-kingsize">Improve Customer Satisfaction</h4>
                    <p class="mb-1">a. Easier to finish a task with fewer breakpoints</p>
                    <p class="mb-1">b. Reduce User frustrations/confusion</p>
                    <p class="mb-1">c. More simple and flexible flows</p>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-6 text-6xl font-new-paris-kingsize">High Fidelity Designs</h1>
            <LayoutFour :page="signup"/>
            <LayoutFour :page="dashboard"/>
            <LayoutFour :page="transaction"/>
            <LayoutFour :page="account"/>
        </section>
        <section class="max-w-7xl mx-auto px-6">
            <LayoutThree :page="exchange" />
            <LayoutThree :page="policy" />
            <LayoutThree :page="payment" />
            <LayoutThree :page="checkout" />
            <LayoutThree :page="wallet1" />
            <LayoutThree :page="wallet2" />
            <LayoutThree :page="monitoring" />
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h3 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Mobile Responsive Screens</h3>
                <p class="mb-12">With the mindset that a lot of users might want to carry out transactions while they commute attention had to be placed on the mobile interfaces to account for all users and their scenarios</p>
            </div>
            <div><img class="w-full" src="../assets/bitpowr/mobile-screens.png" alt="Mobile screens" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-12 text-2xl md:text-5xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Learnings and More</h2>
                <p class="mb-6">I enjoyed working on bitpowr as it was my first exposure to web3 asides from the conventional Centralized exchanges. I got to learn the dynamics of the blockchain and how it can be used in real-life activities, and learned how to be transparent in task flows s this is a project that deals in financial transactions so the slightest mistake can cost a lot, and unlike traditional banks that cash can be reversed from a wrong address it's not so easy for such on the blockchain so every action carried out has to be clear and precise</p>
                <p>Working on a web3 product that is both an Enterprise product and a B2C product gets you to think about a wide range of users and ensure the solutions meets their needs and this helped in improving my skills as User Experience designer and design thinker</p>               
            </div>
            <div>
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Key Metrics</h2>
                <p class="mb-6">These metrics were gotten 3 months after the redesign phase to test the success of the project</p>
                <div class="flex space-x-6 mb-12">
                    <div class="flex-1 p-6 bg-[#F4ECDF] text-[#775D4E] rounded-br-2xl">
                        <h4 class="mb-3 text-lg font-bold font-new-paris-kingsize">Before Redesign</h4>
                        <ul class="pl-6 list-disc">
                            <li>Average monthly users was 24</li>
                            <li>Monthly new users was 4</li>
                            <li>Demo conversion rate was 23%</li>
                            <li>Churn rate was between 51.2% - 62.3%</li>
                        </ul>
                    </div>
                    <div class="flex-1 p-6 bg-[#DFF4E7] text-[#4E7768] rounded-br-2xl">
                        <h4 class="mb-3 text-lg font-bold font-new-paris-kingsize">After Redesign</h4>
                        <ul class="pl-6 list-disc">
                            <li>Average monthly users grew by 80%</li>
                            <li>Monthly new users grew by 73.59%</li>
                            <li>Demo conversion rate became 89%</li>
                            <li>Churn rate reduced to 1.72%</li>
                        </ul>
                    </div>
                </div>
                <p>Explore the live project: <a class="border-b border-black" href="https://www.dabafinance.com">https://www.dabafinance.com</a></p>
            </div>
        </section>
        <OtherProjectsWeb3 />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>