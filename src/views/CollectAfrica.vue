<script setup>
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
import CompetitionAnalysis from '../components/CompetitionAnalysis.vue'
import UserPersona from '../components/UserPersona.vue'
import OtherProjects from '../components/OtherProjects.vue'
import HeaderInfo from '../components/HeaderInfo.vue'
import LayoutOne from '../components/LayoutOne.vue'
import photo1 from '../assets/other-works/the-problem.png'
import photo2 from '../assets/other-works/the-goal.png'
import LayoutTwo from '../components/LayoutTwo.vue'
import Process from '../components/Process.vue'
import photo3 from '../assets/other-works/process-research.png'
import photo4 from '../assets/other-works/process-analysis.png'
import photo5 from '../assets/other-works/process-ideation.png'
import photo6 from '../assets/other-works/process-ideation.png'
import photo7 from '../assets/other-works/process-feedback.png'
import photo8 from '../assets/other-works/process-iteration.png'
import photo9 from '../assets/other-works/collectafrica-survey-photo-1.png'
import photo10 from '../assets/other-works/collectafrica-survey-photo-2.png'
import photo11 from '../assets/other-works/collectafrica-survey-photo-3.png'
import photo12 from '../assets/other-works/collectafrica-survey-photo-4.png'
import photo13 from '../assets/other-works/paypal.png'
import photo14 from '../assets/other-works/stripe.png'
import photo15 from '../assets/other-works/user-persona-3.png'
import photo16 from '../assets/other-works/user-persona-4.png'
import photo17 from '../assets/other-works/opportunities-graph-2.png'
import photo18 from '../assets/other-works/simplified-dashboard.png'
import photo19 from '../assets/other-works/customer-management.png'
import photo20 from '../assets/other-works/user-management.png'
import photo21 from '../assets/other-works/payment-link.png'
import photo22 from '../assets/other-works/collect-conclusion.png'
import photo23 from '../assets/other-works/collectafrica1.png'
import Navbar from '../components/Navbar.vue'
const cards = [
    {
        img: photo9
    },
    {
        img: photo10
    },
    {
        img: photo11
    },
    {
        img: photo12
    }
]
const cardsDark = [
    {
        imgName: "collectafrica-survey-photo-dark-1.png"
    },
    {
        imgName: "collectafrica-survey-photo-dark-2.png"
    },
    {
        imgName: "collectafrica-survey-photo-dark-3.png"
    },
    {
        imgName: "collectafrica-survey-photo-dark-4.png"
    }
]
const analysisArray = [
    {
        overview: 'Paystack Overview',
        overviewMessage: 'Paystack is a technology company solving payments problems for ambitious businesses. Our mission is to help businesses in Africa become profitable, envied, and loved.By providing global and local payments for businesses.',
        objectives: 'Key Objectives',
        objectivesItems: [
            "Providing worldwide payment services",
            "EEnabling payments methods integrated with all commerce services",
        ],
        advantages: 'Market Advantage',
        advantagesList: [
            'Structured themselves as a solution where you can get paid by customers from anywhere in the world',
        ],
        img: photo13,
        alt: 'Paypal',
        strength: 'Strength',
        strengthList: [
            "You can accept payments from internationally-issued cards or via Apple Pay.",
            "Ecommerce integrations to accept credit cards, debit cards, and money transfers.",
            "Ability to set a one-time or recurring payments service on the e-commerce app or website.",
            "Ability to Split Payments.",
            "High security."
        ],
        weakness: 'Weakness',
        weaknessList: [
            "Slightly Higher Transaction fees",
            "The private status of the company limits its growth.",
            "A poor mobile app that can increase the user base for small businesses and small stores.",
        ],
        opportunities: "Oppurtunities",
        opportunitiesList: [
            "Small markets and business owners that have just phones with a good and optimized app would be able to increase the userbase.",
        ],
        threats: 'Threats',
        threatsList: [
            "Unfavorable government regulations.",
            "Other competitors",
        ]
    },
    {
        overview: 'Stripe Overview',
        overviewMessage: 'Stripe brings together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.',
        objectives: 'Key Objectives',
        objectivesItems: [
            "Providing payment gateway for eCommerce platforms",
            "Providing billing and payments for SaaS businesses",
            "Help marketplaces receive payments using their custom-built API",
            "Provide Financial reporting"
        ],
        advantages: 'Market Strategy',
        advantagesList: [
            'Stripe ensures maintaining contact with the audience by organizing an annual event where the users are familiarised with the new launches of Stripe and the company listen to the feedback of the users',
            "Strengthening Brand Recognition and Loyalty with their blog and posts"
        ],
        img: photo14,
        alt: 'Stripe',
        strength: 'Strength',
        strengthList: [
            "Integration with eCommerce platforms",
            "Power payments for your store and marketplace with Stripes API",
            "Deliver exceptional customer experience.",
            "Issue of corporate cards and covers almost all financial services including billings and invoicing.",
            "Strong Partners’ Program:"
        ],
        weakness: 'Weakness',
        weaknessList: [
            "Their foreign currency conversion rate is 2% which is double that of some competitors.",
            "Global presence",
            "Integrations with open source API become a challenge to businesses and individuals who lack tech skills to develop and customize their products.",
        ],
        opportunities: "Oppurtunities",
        opportunitiesList: [
            "Global Expansion:",
            "Do not properly optimize/account for small businesses whose operations occur over the phone"
        ],
        threats: 'Threats',
        threatsList: [
            "Increasing Competition:",
            "Negative Reviews on Lack of Customer Support",
        ]
    }
]
const personasArray = [
    {
        img: photo15,
        alt: "User Persona",
        name: "Marvin Oluimde",
        info: "Marvin is a 32 year old business man in Lagos that runs a small business where he sells and delivers  wristwatches withing and out of Lagos from his little store at Obalende Market",
        goalsList: [
            "Marvin needs a medium to receive payments from his customers all over the country who order his watches",
            "Marvin is looking for a way to easily receive payments from other vendors who purchase similar from him regularly to resell",
            "Receive payments from customers who want to pay with card or cash and  without mixing business account with personal."
        ],
        frustration: "Frustrations",
        frustrationsList: [
            "Customers who come to the shop to pay, sometimes bank doesn't show the credit alert, thereby delaying the customer from leaving",
            "Inability to fully organize and handle his account.",
            "Finds it difficult to balance his account."
        ],
        behaviour: "Behaviours",
        behavioursList: [
            "Marvin usually send his account via WhatsApp to old customers who make orders and make the delivery when they pay, and always send when they need",
            "For customers who come to his store he either receives cash and or those who transfer he gives his bank account number and waits for an alert before selling."
        ]
    },
    {
        img: photo16,
        alt: "User Persona",
        name: "Jennson Mobiles",
        info: "Jennson mobile is an electronics company that deals in selling and repairs of all phones ranging from android to ios, they have over 50 staff and 20 outlets all over the country",
        goal: "Goals and needs",
        goalsList: [
            "Jennson mobile needs a medium to receive payments from customers all over the country who do business with them",
            "They are looking for a way to easily balance their accounts and reconcile payments in one place despite having stores all over the country",
            "Create invoices for services rendered",
            "Manage users roles"
        ],
        frustration: "Frustrations",
        frustrationsList: [
            "Customers cant purchase from his business website easily without the agents always having to send the account details for each payment",
            "Inability to manage financial accounts, leading to unbalanced records",
            "Finds it difficult to manage customers and maintain relationships",
        ],
        behaviour: "Behaviours",
        behavioursList: [
            "Jennson Mobiles staff usually just receive payments and because they need to receive alerts and not all can have company emails or phones to do so, each branch has an account where they control and receive alerts to confirm payments, and at the end of a period remit to the main company account."
        ]
    }
]
const details = {
    img: photo23,
    alt: "Collect Africa",
    title: "Collect Africa",
    shortDesc: "Reinventing payment systems and account management for both large and small scale businesses across Africa",
    LongDesc: "Collect is a Fintech solution solving payments problems for large and small scale businesses all over Africa, with goals to make businesses harness their potentials and achieve greater heights",
    paragraph: "Collect aims to build a technology to help Africa’s best and modern businesses achieve greater heights by making it easy for businesses to accept secure payments from multiple local and global payment channels, and then we give you the tools to ensure customer management and retention."
}
const problem = {
    title: "Understanding The Problem",
    paragraphs: [
        "A lot of businesses struggle with carrying out transactions seamlessly wherby receiving payments for services can be a bit burdensome when there is a delay validating the transaction especially when its a foreign payment.",
        "Businesses also find it difficult in documenting their transactions and keeping records of their account and properly balance it, it gets worse when you have multiple business outlets in various states and countries, having a unified accounting system in place becomes difficult. All these prevent companies and businesses from achieving their highest potentials"
    ],
    img: photo1,
    alt: "Problem fixing"
}
const goal = {
    title: "The Goal",
    paragraphs: [
        "The goal was to create a unique solution, focusing on businesses and having a one-stop product to help them manage their financial activities, make sending money to wherever in the world easy, and receiving money from customers in whatever country as seamless as possible.",
        "We aim to help businesses with several outlets, and instead of having to always go to the banks and have the whole signatory to account long procedure, we have a means whereby you have one product, and control all the financial activities, and account for all transactions in all the outlets in one space easily, to help you easily manage and balance your account, by so doing, expanding your business and taking it to greater heights",
        "Lastly, what's a business without customers, we aim to help you manage and establish relationships with your customers."
    ],
    img: photo2,
    alt: "Goal"
}
const processArr = [
    {
        img: photo3,
        alt: "Research",
        title: "Research",
        methods: ["Context study","User pain points", "Competitive audits"]
    },
    {
        img: photo4,
        alt: "Analysis",
        title: "Analysis",
        methods: ["Problem statements","Use cases", "Executive summary"]
    },
    {
        img: photo5,
        alt: "Ideation",
        title: "Ideation",
        methods: ["Feature narrative","Design Principles", "Brainstorming"]
    },
    {
        img: photo6,
        alt: "Design",
        title: "Design",
        methods: ["Userflow","High fidelity designs", "Interative Prototypes"]
    },
    {
        img: photo7,
        alt: "Feedback",
        title: "Feedback",
        methods: ["Stake holder reviews","Field testing", "Design critiques"]
    },
    {
        img: photo8,
        alt: "Iteration",
        title: "Iteration",
        methods: ["Iterations","Copywriting"]
    },
]
const headerFont = 'font-playfair text-4xl'
const volume = {
    title: "Estimated transaction volume of $8tn in 2025",
    paragraphs: [
        "With 10% of this tranascation relating with the African market, the opportunities available is endless"
    ],
    img: photo17,
    alt: "volume graph"
}
const dashboard = {
    title: "Simplified Dashboard",
    paragraphs: [
        "As a user, your first daily interaction is with the dashboard where you receive a summary of reports and lasted activities that have happened in your company as regards financial activities, hence the design of the dashboard had to be optimized to be easy to read, prioritize the data visualization to display info from the highest priority to the least and still give room to take major actions in the product."
    ],
    img: photo18,
    alt: "dashboard"
}
const customer = {
    title: "Customer Management",
    paragraphs: [
        "A good customer and business relationship improves the bonds customers have with businesses which in turn makes them stay longer with a business that relates with them better and the business would know how best to serve the customers as you can directly message the customers and they receive the messages in the mails and SMS and every reply you receive in the customer's thread on your dashboard",
        "You can add new customers, delete customers, place customers on services and even send them messages on events like popular holidays and birthdays to ensure an even greater bond."
    ],
    img: photo19,
    alt: "customer"
}
const user = {
    title: "User Management",
    paragraphs: [
        "Both large and small scale organizations usually have multiple people handling the affairs, it can be as little as two or as much as 1 thousand and for those who have branches all over the world makes it even bigger whereby you can have even more people for one role e.g Accountants. So to properly ensure the business is optimized, you can add members of your organization to your product and assign roles or create new ones, and customize the permissions available for each role and what actions exch role can carry out or data they can see"
    ],
    img: photo20,
    alt: "User"
}
const payment = {
    title: "Payment Link",
    paragraphs: [
        "A pay link is a one time link created by an organization that customers can use to make payments repetitive times or can be shared with multiple customers to make payments using several payment methods that the customer(s) feels comfortable with, this helps the business from always having to create invoices every time and saves time and stress. The business can decide to set the amount to be paid or that privilege can be left to the customer",
        "This is also used a lot and integrated with eCommerce systems where this would be used as a portal to make payment for purchased goods which would be integrated into the eCommerce platforms"
    ],
    img: photo21,
    alt: "payment"
}
const conclusion = {
    title: "Conclusion",
    paragraphs: [
        "It's hard enough to get a single person or business to trust you to help handle their finances when dealing with businesses and financial activities I have discovered that transparency and ease of use are of top priority in getting the best of results and user retention. And also the understanding of business goals to ensure the business makes a profit has to be placed as another priority hence a lot of calls with stakeholders and the aligning of design and business goals has to be established from the start.",
        "I enjoyed this project and I got to realize how we can help people who run businesses if they focus on the business itself they have more time and strategic juice to focus and take their organization to greater heights"
    ],
    img: photo22,
    alt: "conclusion"
}
const headerCenter = 'text-center font-playfair'
const bgColor = "light"
</script>

<template>
    <div class="bg-white text-brand-black-3">
        <Navbar />
        <HeaderInfo :headerDetails="details" />
        <section class="max-w-7xl mx-auto py-0 md:py-20 px-6 md:px-16 mb-10 md:mb-0">
            <div class="md:flex md:items-center text-xs">
                <div
                    class="flex-1 flex flex-col justify-center items-center py-8 md:py-0 border-b md:border-b-0 md:border-r border-brand-black-3"
                >
                    <h4 class="text-base md:text-lg font-bold">1 month</h4>
                    <p>Product Timeline</p>
                </div>
                <div
                    class="flex-1 flex flex-col justify-center items-center py-8 md:py-0 border-b md:border-b-0 md:border-r border-brand-black-3"
                >
                    <h4 class="text-base md:text-lg font-bold">Collect</h4>
                    <p>Client</p>
                </div>
                <div
                    class="flex-1 flex flex-col justify-center items-center py-8 md:py-0 border-b md:border-b-0 md:border-r border-brand-black-3"
                >
                    <h4 class="text-base md:text-lg font-bold">Figma, Miro</h4>
                    <p>Tools</p>
                </div>
                <div class="flex-1 flex flex-col justify-center items-center py-8 md:py-0">
                    <h4 class="text-base md:text-lg font-bold">UI and UX Research</h4>
                    <p>Role</p>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto pt-10 md:pt-20 px-6 md:px-16">
            <h2
                class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            >My Design Process</h2>
            <div class="hidden md:block">
                <img class="w-full" src="../assets/other-works/design-process.png" alt="Design Process" />
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden">
                <img class="w-full" src="../assets/other-works/design-process-mobile.png" alt="Timeline" />
            </div>
            <!-- End of Mobile version -->
        </section>
        <section class="max-w-7xl mx-auto px-6 md:px-16 text-sm md:text-base">
            <LayoutOne :page="problem" :headerFont="headerFont" />
            <div class="hidden md:block">
                <LayoutTwo :page="goal" :headerFont="headerFont" />
            </div>
            <!-- Mobile version -->
            <div class="block sm:hidden">
                <div class="mb-12">
                    <h2 class="mb-6 text-2xl font-bold font-playfair">The Goal</h2>
                    <p
                        class="mb-6"
                    >The goal was to create a unique solution, focusing on businesses and having a one-stop product to help them manage their financial activities, make sending money to wherever in the world easy, and receiving money from customers in whatever country as seamless as possible.</p>
                    <p
                        class="mb-6"
                    >We aim to help businesses with several outlets, and instead of having to always go to the banks and have the whole signatory to account long procedure, we have a means whereby you have one product, and control all the financial activities, and account for all transactions in all the outlets in one space easily, to help you easily manage and balance your account, by so doing, expanding your business and taking it to greater heights</p>
                    <p>Lastly, what's a business without customers, we aim to help you manage and establish relationships with your customers.</p>
                </div>
                <div class>
                    <img class="w-full" src="../assets/other-works/the-goal.png" alt="Phones" />
                </div>
            </div>
            <!-- End of mobile version -->
        </section>
        <Process :steps="processArr" />
        <section
            class="max-w-7xl mx-auto py-20 md:py-40 px-6 md:px-16 text-sm md:text-base"
        >
            <div class="mb-12">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Research time !!!</h1>
                <p>I conducted some research alongside the product manager to discover what we are building, despite having a brief given we conducted some research to validate, and have a deeper understanding of the pain points of the users and bridge it with the business goals. The UX phase began with getting to know the users and their behaviors and the research goal was aimed at getting a clear idea of the problem as it directly affects the users, and uncovering their needs and frustrations to better understand how to create a better experience for them. This enabled me to get a better understanding of the pain points of our users and empathize more. Research started with interviews to get some qualitative data and from the data gotten, we decided to work towards an MVP, and from the gotten pain points we needed some quantitative data to identify the most sorted solutions of our target market to properly roll out an MVP</p>
            </div>
            <div>
                <Carousel :cards="cards" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6 md:px-16 mb-10 md:mb-0 text-sm md:text-base">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="md:flex-1 mb-8 md:mb-0">
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Major Pain Point</h2>
                    <ul class="list-disc pl-6">
                        <li
                            class="mb-2"
                        >Difficulties in verifying payments from customers when there is a delay in banks sending in the alert, especially from foreign transfers</li>
                        <li
                            class="mb-2"
                        >Difficulties in balancing your company account and keeping proper records that can be accessed anytime</li>
                        <li
                            class="mb-2"
                        >Difficulties in easily managing one company account across several branches of the same business</li>
                        <li class="mb-2">Difficulties in receiving foreign payments</li>
                        <li
                            class="mb-2"
                        >Difficulties in managing your business customers and maintaining a relationship</li>
                        <li>Difficulties in receiving payments payments from users to business that operate eCommerce activities</li>
                    </ul>
                </div>
                <div class="md:flex-1">
                    <img class="w-full" src="../assets/other-works/pain-point.png" alt="Pain points" />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16">
            <div class>
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Brainstorming</h1>
                <p
                    class="md:w-2/3 mb-12 text-sm md:text-base"
                >In this stage, we came together to come up with the best possible approach. after brainstorming, I continued by sketching out some of the most promising ideas to distill sown the ideas and get feedback from the team. This phase was shored and it comprised of how might we questions, in which some mock-ups were drafted out</p>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-12">
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How might we allow businesses receive payments from foreign countries</div>
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How might we all businesses set up reocurring payments for customers</div>
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How might we help businesses manage their businesses</div>
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How might we help organize the business to account for branches</div>
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How might we let businesses maintaing proper financial records</div>
                    <div
                        class="p-6 bg-brand-gray-5 rounded-md"
                    >How can we let businesses balance account and reconcile payments</div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6 md:px-16 py-10 md:py-20 text-sm md:text-base">
            <div class="mb-12">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Competitor Analysis</h1>
                <p
                    class="mb-6"
                >Understanding our competitors on how they provide solutions for similar user needs has helped me define what creative solutions could be designed and improved for our product.</p>
            </div>
            <div v-for="(analysis, ix) in analysisArray" :key="ix">
                <CompetitionAnalysis :analysis="analysis" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16 text-sm">
            <div class="mb-12">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >User Personas</h1>
                <p
                    class="mb-6"
                >To empathize with users’ needs, to guide my decision-making process, I created user personas for two individuals based on research findings.</p>
            </div>
            <div v-for="(persona, ix) in personasArray" :key="ix">
                <UserPersona :persona="persona" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16 text-sm md:text-base">
            <div class="mb-12">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Business Opportunities</h1>
                <p
                    class="mb-20"
                >For every startup, the main goal is to make money, if not what's the use, so to be the next unicorn, you cannot design without accounting for what and where would fetch finances and the best ways of going about it that would still give value to the users.</p>
            </div>
            <div class="mb-10">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Opportunities</h2>
                <p>With over 245,000 companies and over 41.2 million small businesses all over Nigeria, in which 5million of them make and receive bank transfers, and with over 50 million businesses all over Africa taking their transaction digitally, the market is saturated for demand and the opportunities are enormous.</p>
            </div>
            <div class="md:flex md:space-x-10 mb-10">
                <div>
                    <img class="w-full" src="../assets/other-works/opportunities-1.png" alt="Opportunities" />
                </div>
                <div>
                    <img class="w-full" src="../assets/other-works/opportunities-2.png" alt="Opportunities" />
                </div>
            </div>
            <div class="mb-12">
                <p
                    class="mb-6"
                >With over $33billion in cumulative revenue of e-commerce transactions and with an increasing pace estimated at $48billion in 2025, if 5% of those transactions are handled by Collect in the first year of launch considering its newness to the market and striving for acceptance, that would result in 1.65million dollars, now with an estimate of 1% in transaction fee (by the way that the lowest ever) would result in $16.5 million dollars from eCommerce in the first launch</p>
                <p>Now who said anything about just commerce, Softwares are sprouting on a daily and subscriptions are made by their customers and this requires a portal to monitor payments, small businesses like gym, and even down to the laundry service that gives you a periodic service requires payments and this also is an opportunity base to harness.</p>
            </div>
            <LayoutOne :page="volume" :headerFont="headerFont" />
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16 text-sm md:text-base">
            <div class="mb-20">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Value Proposition - Customers</h1>
                <p
                    class="mb-14"
                >In the customer's profile you describe the job your customer is trying to get done by highlighting customers pains and gains, it's used to track users needs and position the company’s to know more about the customers needs to properly create value</p>
                <div>
                    <img
                        class="w-full"
                        src="../assets/other-works/value-proposition-customer.png"
                        alt="Value Proposition"
                    />
                </div>
            </div>
            <div class>
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Value Proposition - Business</h1>
                <p
                    class="mb-14"
                >Here you list the products and services your value proposition build on, describing in which way the product features and services are pain relievers an outline how they are gain creators</p>
                <div>
                    <img
                        class="w-full"
                        src="../assets/other-works/value-proposition-map.png"
                        alt="Value Proposition"
                    />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16">
            <h1
                class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
            >User Stories</h1>
            <p class="mb-10">Two of the major painpoints that some users faced are stated below</p>
            <ul class="list-disc pl-6 text-xs">
                <li
                    class="mb-2"
                >As a user i want to be able to receive payments from my customers so i can get paid for my services</li>
                <li
                    class="mb-2"
                >As a user i want to be able to set reocurring payments for my customers</li>
                <li
                    class="mb-2"
                >As a user i want to be able to create paylinks that my customers would be able to pay into</li>
                <li
                    class="mb-2"
                >As a user i want to be able to fund my wallet in order to carry out transactions</li>
                <li
                    class="mb-2"
                >As a user i want to be able to add customers to my organization and manage my customers in order to maintain a good relationship</li>
                <li
                    class="mb-2"
                >As a user i want to be able to receive payments in other curreencies so i can be able to run my business in other countries</li>
                <li
                    class="mb-2"
                >As a user i want to be able to add my staffs to my organization, so the team can properly manage activities</li>
                <li
                    class="mb-2"
                >As a user i want to be able to send payments out of my dashboard so i can be able to pay for services we might need</li>
                <li
                    class="mb-2"
                >As a user i want to be able toreconcile my account so i can have proper records of account</li>
                <li
                    class="mb-2"
                >As a user i want to be able to send invoices to my customers to make payments</li>
                <li
                    class="mb-2"
                >As a user i want to be able to receive payments with multiple payment methods so users would always have a means to pay from</li>
                <li>As a user i wan to be able to able to make refunds incase a customer complains about a service and requests</li>
            </ul>
        </section>
        <section>
            <div class="max-w-7xl mx-auto px-6 md:px-16 pt-10 md:pt-20 text-sm md:text-base">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >User flows</h1>
                <p
                    class="mb-8 md:mb-16"
                >User flows helped me pattern the flow of the users activities in the product from the entry point to the users decisions and the resulting actions to help account for every step of the users journey</p>
            </div>
            <div class="bg-brand-gray-7">
                <div class="max-w-7xl mx-auto mb-20">
                    <img src="../assets/other-works/user-flows.png" alt="User flows" />
                </div>
            </div>
        </section>
        <section>
            <div class="max-w-7xl mx-auto md:pt-20 px-6 md:px-16 text-sm md:text-base">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Sitemap</h1>
                <p
                    class="mb-8 md:mb-16"
                >Reviewing my personas and user journeys and having certain features in mind, I started to think about the structure of the app. I had a rough idea of keeping the structure simple with co-existing hierarchies, since there is a great deal of overlapping information and wanted my users to have easy access from one page to the other.</p>
            </div>
            <div class="bg-brand-gray-7">
                <div class="max-w-7xl mx-auto mb-20">
                    <img src="../assets/other-works/sitemap.png" alt="User flows" />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto pt-10 md:pt-20 px-6 md:px-16 text-sm md:text-base">
            <div class="mb-10 md:w-5/6 mx-auto text-center text-sm md:text-base">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >The solution</h1>
                <p
                    class="mb-4"
                >The solution had to have a mobile app and a dashboard and a mobile app, they both provide similar solutions but with little difference based on the target audience and what they have accessible to work with to better suit their needs</p>
            </div>
            <div>
                <img class="w-full" src="../assets/other-works/the-solution.png" alt="The solution" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto pt-10 md:pt-20 px-6 md:px-16 text-sm md:text-base">
            <div class="mb-20">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Onboarding Screens</h2>
                <p
                    class="mb-10"
                >The onboarding is properly tailored to be quick and seamless, to improve the user's experience by accounting for all business categories with including small scale, large scale, and freelancers. The sign-up aims to be short and quick so all unnecessary steps were removed to reduce the rate of drop-off by customers without necessary documents to finish the process. So after signup, you have restrictions to some transaction activities till you have provided the necessary documents, so we give you value at all times.</p>
                <div class="mb-16">
                    <img
                        class="w-full"
                        src="../assets/other-works/onboarding-screens-2.png"
                        alt="Onboarding screens"
                    />
                </div>
            </div>
            <LayoutOne :page="dashboard" :headerFont="headerFont" />
            <div class="hidden md:block">
                <LayoutTwo :page="customer" :headerFont="headerFont"/>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden mb-20">
                <div class="mb-10">
                    <h2 class="mb-6 text-2xl font-bold font-playfair">Customer Management</h2>
                    <p
                        class="mb-6"
                    >A good customer and business relationship improves the bonds customers have with businesses which in turn makes them stay longer with a business that relates with them better and the business would know how best to serve the customers as you can directly message the customers and they receive the messages in the mails and SMS and every reply you receive in the customer's thread on your dashboard</p>
                    <p>You can add new customers, delete customers, place customers on services and even send them messages on events like popular holidays and birthdays to ensure an even greater bond.</p>
                </div>
                <div class>
                    <img
                        class="w-full"
                        src="../assets/other-works/customer-management.png"
                        alt="Simplified dashboard"
                    />
                </div>
            </div>
            <!-- End of Mobile version -->
            <div class="md:py-20">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Payments & Transfer</h2>
                <p
                    class="mb-10"
                >Organizations that give recurring services that require timely payments now can simplify their processes and monitor their activities, here you get to see all the services rendered, the number of subscribers to each service, the customers/subscribers, and view each of their payment histories. also, you don't always have to remind them of every payment or send them the account to pay in again, all subscribers have their registration date and last reactivation date. so 1 week, 3days, and 1 day to every subscription the subscribers receive a custom message made by you about their renewal and the means of payment, and all this is done without you lifting a finger.</p>
                <div>
                    <img
                        class="w-full"
                        src="../assets/other-works/payment-transfer.png"
                        alt="Onboarding screens"
                    />
                </div>
            </div>
            <LayoutOne :page="user" :headerFont="headerFont" />
            <div class="hidden md:block">
                <LayoutTwo :page="payment" :headerFont="headerFont" />
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden my-10 md:py-20">
                <div class="mb-10">
                    <h2 class="mb-6 text-2xl font-bold font-playfair">Payment Link</h2>
                    <p
                        class="mb-6"
                    >A pay link is a one time link created by an organization that customers can use to make payments repetitive times or can be shared with multiple customers to make payments using several payment methods that the customer(s) feels comfortable with, this helps the business from always having to create invoices every time and saves time and stress. The business can decide to set the amount to be paid or that privilege can be left to the customer</p>
                    <p>This is also used a lot and integrated with eCommerce systems where this would be used as a portal to make payment for purchased goods which would be integrated into the eCommerce platforms</p>
                </div>
                <div class>
                    <img class="w-full" src="../assets/other-works/payment-link.png" alt="Payment link" />
                </div>
            </div>
            <!-- End of Mobile version -->
            <div class="py-10 md:py-20">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Account Reconciliation & Balancing</h2>
                <p
                    class="mb-10"
                >One of the foundations of every good business is a solid financial system, businesses that fail to have a proper account balance would fail to plan against the next month or year. We help businesses reconcile all payments to and from the business and can even link external accounts that the transitions affect the business. Cash payments play a major part in balancing so we give you the ability to register all cash payments made into your business account to serve as a record and the payment can be reconciled as well for a good business accounting system.</p>
                <div class="mb-16">
                    <img
                        class="w-full"
                        src="../assets/other-works/account-reconciliation.png"
                        alt="Account reconciliation and balancing"
                    />
                </div>
            </div>
            <div class="mb-10">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Mobile responsiveness</h2>
                <p>60% of the target users are mobile users and hence to maximize the experience of users, there needs to be a lot of attention paid to the mobile views of the dashboard as that might be the main entry point of most users</p>
            </div>
        </section>
        <section class="max-w-7xl mx-auto">
            <div class>
                <img class="w-full" src="../assets/other-works/collect-mobile.png" alt="More Features" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto pt-10 md:pt-20 px-6 md:px-16 text-sm md:text-base">
            <LayoutOne :page="conclusion" :headerFont="headerFont" />
        </section>
        <OtherProjects :headerCenter="headerCenter" />
        <Footer :bgColor="bgColor" />
    </div>
</template>