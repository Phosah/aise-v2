<script setup>
import Footer from '../components/Footer.vue'
import CompetitionAnalysis from '../components/CompetitionAnalysis.vue'
import UserPersona from '../components/UserPersona.vue'
import OtherProjectsFintech from '../components/OtherProjectsFintech.vue'
import HeaderInfo from '../components/HeaderInfo.vue'
import LayoutTwo from '../components/LayoutTwo.vue'
import LayoutOne from '../components/LayoutOne.vue'
import LayoutThree from '../components/LayoutThree.vue'
import Navbar from '../components/Navbar.vue'
import hero from '../assets/powrfinance/hero.png'
import photo1 from '../assets/powrfinance/wise.png'
import photo2 from '../assets/powrfinance/payoneer.png'
import photo3 from '../assets/powrfinance/paypal.png'
import photo4 from '../assets/powrfinance/persona-1.png'
import photo5 from '../assets/powrfinance/persona-2.png'
import photo6 from '../assets/powrfinance/transactions.png'
import photo7 from '../assets/powrfinance/transaction-volume.png'
import photo8 from '../assets/powrfinance/onboarding.png'
import photo9 from '../assets/powrfinance/create-account.png'
import photo10 from '../assets/powrfinance/transfer.png'
import photo11 from '../assets/powrfinance/crypto-payment.png'
import photo12 from '../assets/powrfinance/lending.png'
import photo13 from '../assets/powrfinance/dollar-card.png'
import photo14 from '../assets/powrfinance/offline-transactions.png'

const details = {
    img: hero,
    alt: "Powr Finance",
    title: "Powr Finance",
    shortDesc: "The growth and expansion of businesses and services are heavily dependent on seamless intercontinental financial transactions",
    LongDesc: "Power Finance is a solution that enables Businesses and Freelancers send and receive money from any country of your choice seamlessly",
    paragraph: "Powr finance is a fintech app that was designed to scale and grow African businesses by providing them by providing seamless transaction services while catering for other solutions needed to grow like, savings, lending, and currency conversion services, which involve crypto settlements.."
}
const analysisArray = [
    {
        title: "Wise",
        overview: 'Overview',
        overviewMessage: 'The heart of Wise is: helping people manage their money internationally more cheaply, quickly, and transparently. This are done by giving their users the ability to: Receive money from any country, Spend money in the city and transfer money to any country of your choice.',
        objectives: 'Key Objectives',
        objectivesItems: [
            "Providing services at cheap prices",
            "Enabling usage of funds both online and offline in any country"
        ],
        advantages: 'Market Advantage',
        advantagesList: [
            'Built a high level of trust with low fees and transparency',
        ],
        position: 'Market Positioning',
        positioningList: [
            "Display of trust compared to conventional banks",
            "Leverage big online and offline publications.",
            "Collaborated affiliations with other brands",
            "SEO Optimization",
            "UX and Design",
            "Social media & Referrals"
        ],
        img: photo1,
        alt: 'Wise',
        strength: 'Strength',
        strengthList: [
            "Available in over 60 countries, increasing its userbase.",
            "Strong financial health with a net worth of above $5 billion, which shows the market’s trust in it.",
            "Low cost and transaction fees"
        ],
        weakness: 'Weakness',
        weaknessList: [
            "With approximately 8 million users worldwide, it has the potential to be much higher. If the company markets properly",
            "The private status of the company limits its growth."
        ],
        opportunities: "Opportunities",
        opportunitiesList: [
            "Exploiting blockchain technology to improve its payment process",
            "Globalization",
            "Going public",
            "Constant evolution by frequently analyzing customers needs."
        ],
        threats: 'Threats',
        threatsList: [
            "New competitors can easily enter the market and challenge them",
            "ffline transfer systems like Western Union and Moneygram pose a threat as well."
        ]
    },
    {
        title: "Payoneer",
        overview: 'Overview',
        overviewMessage: 'Payoneer is the world’s go-to partner for digital commerce, everywhere. From borderless payments to boundless growth, Payoneer promises any business, in any market, the technology, connections, and confidence to participate and flourish in the new global economy. ',
        objectives: 'Key Objectives',
        objectivesItems: [
            "Providing borderless payment",
            "Facilitate digital commerce"
        ],
        advantages: 'Market Advantage',
        advantagesList: [
            'Solid customer support',
            "Payment portal for most E-commerce vendors"
        ],
        position: 'Market Positioning',
        positioningList: [
            "Display of trust with solid customer service",
            "Merchant service payment plan",
            "Ease of bill payment.",
            "Collaborated affiliations with other brands",
            "Clean and usable Design",
            "Global Expansion"
        ],
        img: photo2,
        alt: 'Payoneer',
        strength: 'Strength',
        strengthList: [
            "Payoneer provides services to both developed economies and developing countries, increasing its userbase to over 4m",
            "They have over 300 employees for the customer service, assisting the users in more than 70 different languages",
            "A diverse range of financial services",
            "The computer interface of Payoneer is user-friendly, simple, and easy to use.",
            "It allows users to integrate their Payoneer account with the major freelancing platforms like Fiverr, Freelancer, Upwork, People Per Hour, and many other platforms and this increases userbase."
        ],
        weakness: 'Weakness',
        weaknessList: [
            "Strict Approval Policies",
            "Payoneer also has the control to require extra from the users, to freeze their account, and stop sending or receiving payments.",
            "No transaction can be done without the internet which is an issue in developing countries.",
            "Payoneer only allows users to make payments either to the bank accounts or to other users.",
            "High fee structure.",
            "Payoneer has a minimum monthly payment requirement of $20,000"
        ],
        opportunities: "Opportunities",
        opportunitiesList: [
            "Exploiting new technology advancements like blockchain to improve its processes and speed transfer",
            "The fast expansion of internet services across the world.",
            "Going public",
            "Constant evolution by frequently analyzing customers needs",
            "Improved marketing campaigns to increase the userbase"

        ],
        threats: 'Threats',
        threatsList: [
            "The customer prefers a local provider rather than an international service provider.",
            "New competitors can easily enter the market and challenge them.",
            "Financial fraud and account hacking activities have also increased in recent years.",
            "Unfavorable international regulations",
            "Payoneer has a high amount of investment capital, making it vulnerable to loosing investors if the economy declines",
        ]
    },
    {
        title: "Paypal",
        overview: 'Overview',
        overviewMessage: 'The heart of Wise is: helping people manage their money internationally more cheaply, quickly, and transparently. This are done by giving their users the ability to: Receive money from any country, Spend money in the city and transfer money to any country of your choice.',
        objectives: 'Key Objectives',
        objectivesItems: [
            "Providing services at cheap prices",
            "Enabling usage of funds both online and offline in any country",


        ],
        advantages: 'Market Advantage',
        advantagesList: [
            'Established a house hold name for e-commerce activities which has improved trust in the product',
        ],
        position: 'Market Positioning',
        positioningList: [
            "Portrays as the only online global payment system in the world",
            "Old and reliable.",
            "Large userbase signifying trust in the market",
            "Ecommerce payment portal",
        ],
        img: photo3,
        alt: 'Paypal',
        strength: 'Strength',
        strengthList: [
            "PayPal doesn’t charge an annual maintenance fee to use its Mastercard.",
            "Global Presence",
            "Large customer base",
            "High business alliance of PayPal with companies like Facebook to handle all its payment transactions",
            "You don’t need to register an account to use PayPal",
            "Selection of who pays the fees from PayPal charges"
        ],
        weakness: 'Weakness',
        weaknessList: [
            "PayPal is not using a database-driven ordering system",
            "Bad communication between PayPal and its customer",
            "PayPal has been accused of Withheld funds, freezing and termination of PayPal accounts",
            "Dependent on internet connections",
        ],
        opportunities: "Opportunities",
        opportunitiesList: [
            "The acquisition is one of the opportunities for PayPal as it can bring more customers to PayPal especially with a company that also run IT business",
            "Move towards Cashless or fewer cash Economies",
            "Digital currency and technological advancement",
        ],
        threats: 'Threats',
        threatsList: [
            "PayPal does not invest in advertising on the internet causes the brand image of PayPal is not very well. So it also needs to strengthen its brand through the Web",
            "In the image of the public, PayPal’s brand is closely associated with smaller merchants, low-cost auctions, and P2P money transfers. As a result, some larger firms might not want their brands associated with PayPal brand image",
            "Hacking and Fraud threats",
            "Unfavorable international regulations",
        ]
    }
]
const personasArray = [
    {
        img: photo4,
        alt: "User Persona",
        name: "Anabelle Richie",
        info: "Anabelle is a 25-year-old front-end developer that stays in Nigeria and has been freelancing for a living for the past 3 years with over 120 clients from all over the world including America, Europe, and Asia.",
        goal: "Goals and needs",
        goalsList: [
            "Anabelle freelances and wants to expand her reach to higher-paying countries for her talents and skills, hence she is seeking the most secure means of receiving funds from abroad",
            "She is also looking for a way to save her money, occasionally as a freelancer when she gets paid in whatever currency but she leverages on crypto  for long term savings",
        ],
        frustration: "Frustrations",
        frustrationsList: [
            "Extremely high rates that her DOm account provided by banks charge her",
            "Her Bank converts her pay at a lesser amount that she would get on the black market or other platforms",
            "Payments might take days to deliver."
        ],
        behaviour: "Behaviours",
        behavioursList: [
            "Kate spends most of her time using the laptop for coding. She uses it for her jobs and communication purposes",
            "She gets paid based on the hours of work she does and keeps track of her payment and expenses on her bank mobile app"
        ]
    },
    {
        img: photo5,
        alt: "User Persona",
        name: "Austine Chidozie",
        info: "Austine is a 32-year-old importer who imports spare parts of top automobiles in the world to be used for repair purposes in West Africa. Spends most of his time in Ghana where he lives with his wife and daughter.",
        goal: "Goals and needs",
        goalsList: [
            "Austine is a businessman that constantly makes purchases from China and Germany for spare parts and needs a way to make payment to his overseas business partners.",
            "He also makes send money to some friends and family both in Nigeria and other countries hence need a way to separate his business account and his personal",
            "He needs to have access to generating invoices and also applying for loans."
        ],
        frustration: "Frustrations",
        frustrationsList: [
            "One of his major pains is having multiple accounts that is being controlled by different apps, one for personal and one for business and he needs a way to have his accounts in one app and easy to switch in one space",
            "There are times when I need to make some orders and I just see some massive business opportunities that are above my budget, I need a way to have quick leverage for that purchase that I can payback"
        ],
        behaviour: "Behaviours",
        behavioursList: [
            "Austine is a busy person, he does not like his time being wasted, so he needs to be able to maximize his time, since time is money, hence he needs to be able to make payments on the go and"
        ]
    }
]
const transaction = {
    title: "45.6 Billion in total transactions in Africa",
    paragraphs: [
        "Our first targets would be the top 5 countries with the highest remittance valueNigeria, Kenya and Ghana."
    ],
    img: photo6,
    alt: "transaction graph"
}
const volume = {
    title: "Estimated transaction volume of $8tn in 2025",
    paragraphs: [
        "With 10% of this tranascation relating with the African market, the opportunities available is endless"
    ],
    img: photo7,
    alt: "volume graph"
}
const onboarding = {
    title: "Onboarding Screens",
    paragraphs: [
        "The onboarding is the first point of contact of the user to the product, so it has to seamlessly convey the message and value proposition of the product cleanly and simply, and to ensure onboarding is fast, we take just the bare minimum to open a local account with a limited transaction limit to ensure transactions can be carried out, then to make higher transactions a KYC process has to be carried out."
    ],
    img: photo8,
    alt: "onboarding screens"
}
const bank = {
    title: "Create Bank Accounts",
    paragraphs: [
        "Have access to creating a bank account for all the major currencies in the world, these bank accounts would be used to receive money from foreign clients by just sending them the account number"
    ],
    img: photo9,
    alt: "Create account"
}
const send = {
    title: "Send Money",
    paragraphs: [
        "You can send money to one person or multiple people at a time by selecting the person or people, specifying the transfer amount and currency, and inputting the various bank details. When you send all currencies are converted to USDT as a stable coin and that USDT can be liquidated into any currency of the receiver, hence making transfers done in minutes instead of days"
    ],
    img: photo10,
    alt: "Send money"
}
const payment = {
    title: "Crypto Payment",
    paragraphs: [
        "Send major cryptocurrencies as payments to clients who desire such and also receive crypto payments into your wallet which can be stored and held for long or short term, and can be liquidated easily or converted from the coin to any other coin or any desired account both on Powr finance and locally"
    ],
    img: photo11,
    alt: "Crypto payment"
}
const lending = {
    title: "Lending / Leveraging",
    paragraphs: [
        "Every user has a credit capacity/ credit score and that is decided by the platform, in which the credit score is decided from your transaction history carried out on Powr finance. These credits can be used to make purchases or run businesses but are disbursed only with proof of utilization."
    ],
    img: photo12,
    alt: "Lending"
}
const dollar = {
    title: "Dollar Master Cards",
    paragraphs: [
        "Every user gets a master dollar card that would be delivered to his/her address and can be used in any ATM to withdraw cash in any country at the bank exchange rates, and the details can also be used for online payments on any eCommerce store"
    ],
    img: photo13,
    alt: "Dollar"
}
const offline = {
    title: "Offline Transactions",
    paragraphs: [
        "With offline transactions, we have station points with our field agents in various stores scattered around the country whereby you can walk in like a bank with your cash and the agent helps you make the transfer, this is beneficial for businesses who deal a lot with cash and would need to go to the bank first to deposit before crediting their Powr finance account. When using an agent, you provide your user id so the payment record would be sent to your app so it can be recorded in the account statement"
    ],
    img: photo14,
    alt: "transactions"
}
const headerFont = "font-playfair text-4xl"
const bgColor = "light"
const headerCenter = 'font-playfair'
</script>

<template>
    <div class="bg-white text-brand-black-3">
        <Navbar />
        <HeaderInfo :headerDetails="details" />
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16 text-sm md:text-base">
            <div class="mb-20">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Scope of work and Timeline</h2>
                <p>My responsibilities for the design of Powr finance included user research which included online and in-person interviews, concept ideation, business research, aligning key stakeholders on product goals and decisions, designing user flows, visual design, prototyping, user testing, incorporating user feedback into design iterations, and monitoring of the implementation of the product to ensure the design decisions and visuals are accurately implemented</p>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6 md:px-16">
            <div class="hidden md:block">
                <img class="w-full" src="../assets/powrfinance/timeline.png" alt="Timeline" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto md:pt-40 px-6 md:px-16">
            <h2
                class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            >My Design Process</h2>
            <div>
                <img class="w-full" src="../assets/powrfinance/design-process.png" alt="Design Process" />
            </div>
        </section>
        <section class="text-sm md:text-base">
            <div class="max-w-7xl mx-auto py-20 px-6 md:px-16">
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Understanding the Problem</h2>
                <p
                    class="mb-6"
                >Every good product is built upon solving a problem, and the root of every problem lies with understanding the pain points of users and when none is visible, understanding the limitations users are both aware and unaware of to bring a solution to make life better for them.</p>
                <p>Over a couple of years, there has been a massive growth of service providers extending their services globally and vice versa, whereby making transactions was the main issue. Sending money abroad prevented vendors from purchasing the necessary pieces of equipment needed for their businesses and receiving payments made it hard to carry out good business. Likewise, for the freelancers, a lot could not offer their services to foreign clients because receiving payments was getting difficult, and using banks, the processes to getting a DOM account was a lot of stress and the bank charges were outrageous</p>
            </div>
            <div
                class="relative flex items-center justify-center h-screen text-4xl md:text-6xl lg:text-7xl font-semibold bg-cover bg-analysis bg-center bg-no-repeat text-white"
            >
                <img class="w-full h-full absolute inset-0 object-cover" src="../assets/powrfinance/competitive-analysis.png" alt="Analysis" />
                <h1 class="z-10 text-white">Competitive analysis</h1>
            </div>
        </section>
        <section class="max-w-7xl mx-auto md:pt-40 py-20 px-6 md:px-16 text-sm md:text-base">
            <h2
                class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            >Understanding the business goals and Competitor</h2>
            <p>Understanding our competitors on how they solve problems of similar products that provide solutions for similar user needs has helped me as a designer define what creative solutions could be designed and improved for our product. The three main primary competitors are Wise, Payoneer, & PayPal.</p>
        </section>
        <section class="max-w-7xl mx-auto md:px-16 text-sm md:text-base">
            <div v-for="(analysis, ix) in analysisArray" :key="ix">
                <CompetitionAnalysis :analysis="analysis" />
            </div>
        </section>
        <section class="md:py-20">
            <div
                class="bg-image flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white"
            >
                <div class="w-2/3 mx-auto text-center md:text-base">
                    <h1 class="mb-8 text-4xl md:text-6xl lg:text-7xl font-semibold">User Personas</h1>
                    <p>Based on the generative user research I conducted, I created user personas that capture the essence of my target group. Jasmine and Richard helped me to always keep the needs of the users at the forefront.</p>
                </div>
            </div>
        </section>
        <section>
            <div class="max-w-7xl mx-auto pt-10 md:py-20 px-6 md:px-16 text-sm">
                <div v-for="(persona, ix) in personasArray" :key="ix">
                    <UserPersona :persona="persona" />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto pb-10 md:py-20 px-6 md:px-16 text-sm md:text-base">
            <h2
                class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            >Surveys & user interviews</h2>
            <p
                class="mb-6"
            >Assessing who my user audiences are has helped me understand who I’m designing for, behaviors, and familiarities so that I can better align and approach design to capture the defined user audiences. Based on the results, I gathered data to back up my design decisions to maximize value for the users.</p>
            <div class="md:flex md:space-x-6 mb-20 text-sm">
                <div
                    class="flex-1 mb-8 md:mb-0 pr-4 border-dashed border-b md:border-b-0 md:border-r border-brand-black-3 dark:border-white"
                >
                    <h3 class="mb-3 text-4xl md:text-5xl lg:text-7xl font-bold">70%</h3>
                    <p class="mb-1 font-bold">Of business men</p>
                    <p
                        class="mb-6 md:mb-0"
                    >Send money abroad to their clients using banks or 3rd party agents</p>
                </div>
                <div
                    class="flex-1 mb-8 md:mb-0 pr-4 border-dashed border-b md:border-b-0 md:border-r border-brand-black-3 dark:border-white"
                >
                    <h3 class="mb-3 text-4xl md:text-5xl lg:text-7xl font-bold">55%</h3>
                    <p class="mb-1 font-bold">Of business men</p>
                    <p
                        class="mb-6 md:mb-0"
                    >Prefer receiving their payment in cryptocurrency from clients</p>
                </div>
                <div class="flex-1 pr-4 border-brand-black-3">
                    <h3 class="mb-3 text-4xl md:text-5xl lg:text-7xl font-bold">63%</h3>
                    <p class="mb-1 font-bold">Of business men</p>
                    <p>Receive cash from customers and need a way to transfer cash abroad</p>
                </div>
            </div>
            <div>
                <h2
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Major Pain Point</h2>
                <p
                    class="mb-8"
                >Two of the major painpoints that some users faced are stated below</p>
                <div class="mb-8">
                    <ul class="md:flex md:space-x-6 pl-8 mb-4 list-disc">
                        <li
                            class="flex-1 mb-4 md:mb-0"
                        >You can only pay by bank transfer, debit card, or credit card — you can’t fund your transfer with cash or a cheque.</li>
                        <li
                            class="flex-1"
                        >Most apps don’t support all currencies or provide transfers into all countries.</li>
                    </ul>
                    <ul class="md:flex md:space-x-6 pl-8 list-disc">
                        <li
                            class="flex-1 mb-4 md:mb-0"
                        >Inability to make offline transactions for business that have just cash, i would have to go to the bank to first credit my account</li>
                        <li
                            class="flex-1"
                        >Sometimes i might need some cash leverage on some purcases i want to make that i do not have enough funds for</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="md:py-20">
            <div
                class="hidden md:flex items-center justify-center h-screen text-4xl md:text-6xl lg:text-7xl font-semibold bg-business bg-cover bg-center bg-no-repeat text-white"
            >
                <h1 class="text-center">Business Opportunities</h1>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-16 text-sm md:text-base">
            <h2
                class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            >Opportunities in Africa</h2>
            <p
                class="mb-6"
            >With over 1.216 billion population 20% under 30 population of the growing economy., each one mobile tech savvy has at one point or another had reasons to make transfer or receive transfers from foreign parties</p>
            <p
                class="mb-6"
            >Retailers, Individuals & MSMEs want more. The majority of consumers are underserved.</p>
            <ul class="mb-10 list-disc pl-7">
                <li>They need cheaper services.</li>
                <li>An improved user experience.</li>
                <li>An advanced product value proposition.</li>
            </ul>
            <div class="hidden md:block">
                <LayoutTwo :page="transaction" :headerFont="headerFont"/>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden my-20 dark:text-white">
                <div class="mb-12">
                    <h2
                        class="mb-4 text-2xl font-bold font-playfair"
                    >45.6 Billion in total transactions in Africa</h2>
                    <p>Our first targets would be the top 5 countries with the highest remittance valueNigeria, Kenya and Ghana.</p>
                </div>
                <div><img src="../assets/powrfinance/transactions.png" alt="" /></div>
            </div>
            <!-- End of Mobile version -->
            <p
                class="mb-10 md:mb-20"
            >With the pain points of users requesting payment in crypto currency, it opens up a new market to explore and that would mean another fast growing resource to tap into</p>
            <div>
                <LayoutOne :page="volume" :headerFont="headerFont" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6 md:px-16 pb-10 md:pb-20 text-sm md:text-base">
            <div class="mb-20 md:mb-40">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Risk</h2>
                <p
                    class="mb-6"
                >The primary risk is that our app might struggle with initial adoption because of previously established competition and the reluctance of individuals and businesses who carry out transactions to switch from their current and trusted means of sending and receiving money.</p>
                <p
                    class="mb-6"
                >A major factor that influences the utilization of a fintech platform especially those you entrust to handle your cash requires a high level of trust on the part of the users to the product, and that takes time to build and a high level of transparency.</p>
                <p
                    class="mb-6"
                >With that in mind, there are possibilities to take a market and stand out as a competent and reliable product through the utilization of trust elements which includes testimonials and endorsements from top businesses/companies and freelancers. Also leveraging on the positive effect of social media.</p>
                <p>The focus would be on controlling 10% of the total transaction volume of both inflow and outflow between Africa and foreign countries, and it starts from gaining trust and displaying credibility</p>
            </div>
            <div class="mb-20">
                <h4
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Value Proposition - Customers Profile</h4>
                <p
                    class="mb-14"
                >In the customer's profile you describe the job your customer is trying to get done by highlighting customers pains and gains, it's used to track users needs and position the company’s to know more about the customers needs to properly create value</p>
                <div>
                    <img
                        class="w-full"
                        src="../assets/powrfinance/value-proposition-customer.png"
                        alt="Value Proposition"
                    />
                </div>
            </div>
            <div class="mb-10">
                <h4
                    class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                >Value Proposition - Value Map</h4>
                <p
                    class="mb-14"
                >Here you list the products and services your value proposition build on, describing in which way the product features and services are pain relievers an outline how they are gain creators</p>
                <div>
                    <img
                        class="w-full"
                        src="../assets/powrfinance/value-proposition-business.png"
                        alt="Value Proposition"
                    />
                </div>
            </div>
        </section>
        <section>
            <div
                class="flex items-center justify-center h-screen text-4xl md:text-6xl lg:text-7xl font-semibold bg-solutions bg-cover bg-center bg-no-repeat text-white"
            >
                <h1 class="text-center">The Solutions</h1>
            </div>
        </section>
        <section class="max-w-7xl mx-auto md:py-20 px-6 md:px-16 text-sm md:text-base">
            <LayoutThree :page="onboarding" :headerFont="headerFont" />
            <LayoutOne :page="bank" :headerFont="headerFont"/>
            <LayoutThree :page="send" :headerFont="headerFont" />
            <div class="hidden md:block">
                <LayoutTwo :page="payment" :headerFont="headerFont"/>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden mb-16 md:mb-32">
                <div class>
                    <h2
                        class="mb-6 text-2xl font-bold font-playfair"
                    >Crypto Payments</h2>
                    <p
                        class="mb-16"
                    >Send major cryptocurrencies as payments to clients who desire such and also receive crypto payments into your wallet which can be stored and held for long or short term, and can be liquidated easily or converted from the coin to any other coin or any desired account both on Powr finance and locally</p>
                    <div class="flex-1">
                        <img
                            class="w-full"
                            src="../assets/powrfinance/crypto-payment.png"
                            alt="Crypto payments"
                        />
                    </div>
                </div>
            </div>
            <!-- End of Mobile version -->
            <LayoutOne :page="lending" :headerFont="headerFont" />
            <div class="hidden md:block">
                <LayoutTwo :page="dollar" :headerFont="headerFont"/>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden mb-16">
                <div class>
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Dollar Master Cards</h2>
                    <p
                        class="mb-16"
                    >Every user gets a master dollar card that would be delivered to his/her address and can be used in any ATM to withdraw cash in any country at the bank exchange rates, and the details can also be used for online payments on any eCommerce store</p>
                </div>
                <div class>
                    <img
                        class="w-full"
                        src="../assets/powrfinance/dollar-card.png"
                        alt="Dollar master card"
                    />
                </div>
            </div>
            <!-- End of Mobile version -->
            <LayoutOne :page="offline" :headerFont="headerFont" />
        </section>           
        <section class="">
            <div class="max-w-7xl mx-auto px-6 md:px-16">
                <h3 class="mb-4 text-2xl md:text-4xl font-bold font-new-paris-kingsize">More Features</h3>
                <p class="mb-12">Below holds a couple more solution screens which include, requesting for invoice and bank statements for a particular duration, invite a friend to increase marketing and business growth, customer support and conversion of funds from one currency to another and to crypto</p>
            </div>
            <div><img class="w-full" src="../assets/powrfinance/more-screens.png" alt="Mobile screens" /></div>
        </section>
        <section class="max-w-7xl mx-auto py-24 md:py-40 px-6 md:px-16">
            <h2 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">Conclusion</h2>
            <p>This project is open to massive expansion and growth, the product aims to expand to cover sectors like payroll whereby organizations with employees working in multiple countries can all be registered and payments can be disbursed once and payroll run with each of them receiving their cash in their local currency or crypto if selected</p>
        </section>
        <OtherProjectsFintech :headerCenter="headerCenter"/>
        <Footer :bgColor="bgColor" />
    </div>
</template>

<style>
.bg-image {
    background-image: linear-gradient(
        rgba(18, 18, 18, 0.7),
        rgba(18, 18, 18, 0.7)
    ),
    url("../assets/powrfinance/user-persona.png");
}
</style>