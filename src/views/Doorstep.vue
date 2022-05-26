<script setup>
// import Works from '../components/Works'
import ProjectResponsibility from '../components/ProjectResponsibility.vue'
import BookAppointment from '../components/BookAppointment.vue'
import OtherProjects from '../components/OtherProjects.vue'
import HeaderInfo from '../components/HeaderInfo.vue'
import icon1 from "../assets/other-works/discover-icon.png"
import icon2 from "../assets/other-works/define-icon.png"
import icon3 from "../assets/other-works/ideate-icon.png"
import icon4 from "../assets/other-works/visual-design-icon.png"
import photo1 from "../assets/other-works/project-photo.png"
import photo2 from "../assets/other-works/problem-photo.png"
import photo3 from "../assets/other-works/trigle-research.png"
import photo4 from "../assets/other-works/research-photo.png"
import LayoutOne from '../components/LayoutOne.vue'
import LayoutTwo from '../components/LayoutTwo.vue'
import ProjectPersona from "../components/ProjectPersona.vue"
import photo5 from "../assets/other-works/personas-1.png"
import photo6 from "../assets/other-works/personas-2.png"

const projects = [
    {
        icon: icon1,
        title: "Discover",
        text: "Discovery was the first phase in the UX-design process that involved",
        bgColor: "bg-brand-purple-4 bg-opacity-10",
        tickColor: "text-brand-purple-4",
        items: [
            "Design strategy",
            "Stakeholder interview",
            "Market strategy",
            "Competitor analysis"
        ]
    },
    {
        icon: icon2,
        title: "Define",
        text: "Defining a product is a phase in the UX-design process that involves",
        bgColor: "bg-brand-blue-6 bg-opacity-10",
        tickColor: "text-brand-blue-6",
        items: [
            "User Research",
            "User personas",
            "Data Gathering",
            "Empathy mapping"
        ]
    },
    {
        icon: icon3,
        title: "Ideate",
        text: "This part of the design process was where the product structure to shape",
        bgColor: "bg-brand-yellow-1 bg-opacity-10",
        tickColor: "text-brand-yellow-1",
        items: [
            "Brainstorming",
            "User flow",
            "Information architecture",
            "Card sorting"
        ]
    },
    {
        icon: icon4,
        title: "Visual Design",
        text: "The research and structuring was brought to life visually to solve the problem",
        bgColor: "bg-brand-red-4 bg-opacity-10",
        tickColor: "text-brand-red-4",
        items: [
            "Wireframe",
            "Style guide generation",
            "High fidelity design",
            "Prototype"
        ]
    }
]
const details = {
    title: "Doorstep Logistics",
    shortDesc: "The fastest way to ship your packages and parcels around the world",
    LongDesc: "Doorstep is a solution that helps to simplify logistics and shipping services to ensure quick delivery of packages in a simplified processes",
    paragraph: "Sending of documents and parcels have been in high demand as a result of expanding businesses and inter country trading. It gets to solve this by its provision of an integration sync with the tracking ID of the platform to constantly keep you in the loop."
}
const headerFont = "font-playfair text-4xl"
const responsibilities = {
    title: "Project responsibilities",
    paragraphs: [
        "During the course of this project i was incharge of the ux and ui process which occasionally involved stakeholder interviews and surveys"
    ],
    img: photo1,
    alt: "Project"
}
const problem = {
    title: "The Problem",
    paragraphs: [
        "The difficulty of knowing how to send a package and knowing the dimensions and and weights of packages and parcels which are usually a major criteria in creating a shipping request. Also a major problem was tracking each major milestone in the packages journey"
    ],
    img: photo2,
    alt: "Problem"
}
const interviews = {
    title: "User Interview",
    paragraphs: [
        "Interviews & surveys are aimed at getting an indepth approach of how our targeted users would engage the product, determine their pain points, challenges, what they would love to have on the platform and structure all to get the best solution for their problems.",
        "I gathered the data from the interviews and structured out their pains and needs to have a structure for an empathy mapping"
    ],
    img: photo3,
    alt: "users"
}
const research = {
    title: "Quantitative research result",
    paragraphs: [
        "From the findings of our survey and interviews carried out along with an online research of users complaints from users of competitors products, the largest pain was the identifying of the dimensions of the package to be sent which is usually a requirement to detemine shipment cost",
    ],
    img: photo4,
    alt: "quantitative research"
}
const personasArr = [
    {
        img: photo5,
        name: "Jonathan Ini",
        profession: "Accountant",
        info: "Rarely use logistics services",
        about: "Jonathan is an Accountant with over 3 years working experience, he is a graduate of the Convenant university Ota. He is a calm, inquisitive, career driven and a lover of family",
        age: 27,
        address: "Lagos, Nigeria",
        maritalStatus: "Single",
        goals: "A means to be able to send packages to his siblings abroad and be aware of everything going on along the delivery",
        points: "Its really difficult to know the exact or approximate dimensions of your shipments due to the fact i dont know alot about dimensioning"
    },
    {
        img: photo6,
        name: "Damilola Peters",
        profession: "Businessman",
        info: "Very frequency in using logistics services",
        about: "Damilola is an Entrepreneur into fabric exportation. He has been into the exportation business for 8 years and wishes to expand his business from just Asia to Europe aswell",
        age: 32,
        address: "Kenya, Nairobi",
        maritalStatus: "Married",
        goals: "A means to be able to send my goods to to my business partners at flexible timings based on urgency",
        points: "The fact that i would have to wait sometimes for days befor the container gets filled with other peoples products so all can be shipped together slows my business down"
    },
]
</script>

<template>
    <div class="dark:bg-brand-black-1 bg-white text-brand-black-3 dark:text-white">
        <header class="max-w-7xl mx-auto md:px-16 pt-16 md:pt-4">
            <!-- <Works :work="this.$store.state.worksArr[4]" hideLink /> -->
        </header>
        <HeaderInfo :headerDetails="details" />
        <section class="max-w-7xl mx-auto px-4 md:px-16">
            <LayoutOne :page="responsibilities" :headerFont="headerFont" />
            <!-- Mobile version -->
            <div class="block md:hidden">
                <div class="mb-10">
                    <img class="w-full" src="../assets/other-works/project-photo.png" alt="Project" />
                </div>
                <div class="text-sm">
                    <h2 class="mb-6 text-2xl font-bold font-playfair">Project responsibilities</h2>
                    <p>During the course of this project i was incharge of the ux and ui process which occasionally involved stakeholder interviews and surveys</p>
                </div>
            </div>
            <!-- End of mobile version -->
        </section>
        <ProjectResponsibility :projects="projects" />
        <section class="max-w-7xl mx-auto px-4 md:px-16">
            <LayoutOne :page="problem" :headerFont="headerFont" />
        </section>
        <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
            <div class="mb-16 md:w-5/6 mx-auto text-center text-sm md:text-base">
                <h1
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Project Timeline</h1>
                <p
                    class="mb-4"
                >Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
                <p>
                    Project timeline:
                    <span class="font-bold">4 weeks</span>
                </p>
            </div>
            <div
                class="md:flex md:flex-wrap md:justify-center md:space-x-4 text-white font-semibold"
            >
                <div
                    class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-blue-2 via-brand-blue-3 to-brand-blue-4"
                >Week 1: Interviews</div>
                <div
                    class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-orange-2 to-brand-orange-3"
                >Week 2: Research</div>
                <div
                    class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-purple-1 to-brand-purple-2"
                >Week 3: Brainstorming & IA</div>
                <div
                    class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-red-1 to-brand-red-2"
                >Week 4: Visual design</div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-4 md:px-16">
            <LayoutTwo :page="interviews" :headerFont="headerFont"/>
            <!-- Mobile version -->
            <div class="block md:hidden text-sm md:text-base">
                <div class="mb-12">
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >User Interviews</h2>
                    <p
                        class="mb-6"
                    >Interviews & surveys are aimed at getting an indepth approach of how our targeted users would engage the product, determine their pain points, challenges, what they would love to have on the platform and structure all to get the best solution for their problems.</p>
                    <p>I gathered the data from the interviews and structured out their pains and needs to have a structure for an empathy mapping</p>
                </div>
                <div class>
                    <img class="w-full" src="../assets/other-works/trigle-research.png" alt="Research" />
                </div>
            </div>
            <!-- End of Mobile version -->
        </section>
        <section class="max-w-7xl mx-auto px-4 md:px-16">
            <LayoutTwo :page="research" :headerFont="headerFont"/>
            <!-- Mobile version -->
            <div class="block md:hidden text-sm md:text-base">
                <div class="mb-12">
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Quantitative research result</h2>
                    <p>From the findings of our survey and interviews carried out along with an online research of users complaints from users of competitors products, the largest pain was the identifying of the dimensions of the package to be sent which is usually a requirement to detemine shipment cost</p>
                </div>
                <div class>
                    <img
                        v-if="themeColor === 'light'"
                        class="w-full"
                        src="../assets/other-works/research-photo.png"
                        alt="Quantitative research"
                    />
                    <img
                        v-else
                        class="w-full"
                        src="../assets/other-works/research-photo-dark.png"
                        alt="Quantitative research"
                    />
                </div>
            </div>
            <!-- End of Mobile version -->
        </section>
        <ProjectPersona :personas="personasArr" />
        <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
            <div class="hidden sm:flex items-center space-x-12 text-sm md:text-base">
                <div class="flex-1 grid grid-cols-3 gap-4">
                    <div>
                        <img
                            v-if="themeColor === 'light'"
                            src="../assets/other-works/fedex.png"
                            alt="FedEx"
                        />
                        <img v-else src="../assets/other-works/fedex.png" alt="FedEx" />
                    </div>
                    <div>
                        <img v-if="themeColor === 'light'" src="../assets/other-works/dhl.png" alt="DHL" />
                        <img v-else src="../assets/other-works/dhl.png" alt="DHL" />
                    </div>
                    <div>
                        <img v-if="themeColor === 'light'" src="../assets/other-works/ups.png" alt="UPS" />
                        <img v-else src="../assets/other-works/ups.png" alt="UPS" />
                    </div>
                    <div>
                        <img
                            v-if="themeColor === 'light'"
                            src="../assets/other-works/xpologistics.png"
                            alt="XPOLogistics"
                        />
                        <img v-else src="../assets/other-works/xpologistics.png" alt="XPOLogistics" />
                    </div>
                    <div>
                        <img
                            v-if="themeColor === 'light'"
                            src="../assets/other-works/expeditors.png"
                            alt="Expeditors"
                        />
                        <img v-else src="../assets/other-works/expeditors.png" alt="Expeditors" />
                    </div>
                    <div>
                        <img v-if="themeColor === 'light'" src="../assets/other-works/gig.png" alt="Gig" />
                        <img v-else src="../assets/other-works/gig.png" alt="Gig" />
                    </div>
                </div>
                <div class="flex-1">
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Competitor analysis</h2>
                    <p>In order to understand the market, i conducted a SWOT analysis on the clients top competitors. Here i investigated the in’s and out’s of the companies, their strengths and weakness, opportunities and potential threats</p>
                </div>
            </div>
            <!-- Mobile version -->
            <div class="block sm:hidden">
                <div class="mb-12 text-sm">
                    <h3 class="mb-6 text-2xl font-bold font-playfair">Competitor analysis</h3>
                    <p>In order to understand the market, i conducted a SWOT analysis on the clients top competitors. Here i investigated the in’s and out’s of the companies, their strengths and weakness, opportunities and potential threats</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <img src="../assets/other-works/fedex.png" alt="FedEx" />
                    </div>
                    <div>
                        <img src="../assets/other-works/dhl.png" alt="DHL" />
                    </div>
                    <div>
                        <img src="../assets/other-works/ups.png" alt="UPS" />
                    </div>
                    <div>
                        <img src="../assets/other-works/xpologistics.png" alt="XPOLogistics" />
                    </div>
                    <div>
                        <img src="../assets/other-works/expeditors.png" alt="Expeditors" />
                    </div>
                    <div>
                        <img src="../assets/other-works/gig.png" alt="Gig" />
                    </div>
                </div>
            </div>
            <!-- End of mobile version -->
        </section>
        <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
            <div class="mb-20 md:w-5/6 mx-auto text-center text-sm md:text-base">
                <h2
                    class="mb-8 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Design strategy</h2>
                <p>My design strategy comprised of integrated planning processes that examined the relationships between how the design and business may complement one another, in simple terms finding a balance between business objectives and creative solutions</p>
            </div>
            <div class="flex justify-center mb-20">
                <img class="mx-auto" src="../assets/other-works/strategy.png" alt="Design strategy" />
            </div>
            <div class="md:flex md:space-x-6 text-sm md:text-base">
                <div class="md:flex-1 mb-12 md:mb-0">
                    <div class="flex items-center mb-10">
                        <div class="w-16 h-16 rounded-full bg-brand-green-3"></div>
                        <h3
                            class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Business goal</h3>
                    </div>
                    <div class="flex space-x-5 mb-6">
                        <div class>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p
                            class="flex-1"
                        >To enable smooth integrations with 3rd party companies to ease delivery, minimize cost</p>
                    </div>
                    <div class="flex space-x-5">
                        <div>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p>Increase users retention</p>
                    </div>
                </div>
                <div class="md:flex-1 mb-12 md:mb-0">
                    <div class="flex items-center mb-10">
                        <div class="w-16 h-16 rounded-full bg-brand-green-3"></div>
                        <h3
                            class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Target users</h3>
                    </div>
                    <div class="flex space-x-5 mb-6">
                        <div>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p>Businesses with foreign customers</p>
                    </div>
                    <div class="flex space-x-5">
                        <div>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p>People with family and friends abroad</p>
                    </div>
                </div>
                <div class="md:flex-1 mb-12 md:mb-0">
                    <div class="flex items-center mb-10">
                        <div class="w-16 h-16 rounded-full bg-brand-green-3"></div>
                        <h3
                            class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Platforms</h3>
                    </div>
                    <div class="flex space-x-5 mb-6">
                        <div>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p>Web Application</p>
                    </div>
                    <div class="flex space-x-5">
                        <div>
                            <img
                                class="p-2 rounded-full bg-brand-green-3"
                                src="../assets/other-works/tick-white.png"
                                alt="Tick"
                            />
                        </div>
                        <p>Mobile App - IOS & Android</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-sm md:text-base">
            <div class="mb-12 md:mb-16 md:w-2/3 mx-auto text-center">
                <h2
                    class="mb-6 text-3xl md:text-6xl font-semibold font-playfair text-center"
                >The Solution</h2>
                <p>Below shows a few of the screens that portrayed the soltions to the stated problem in the most user friendly manner</p>
            </div>
            <div class="hidden md:flex items-center justify-between space-x-12 py-20">
                <div class="flex-1">
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Main dashboard</h2>
                    <p>This shows the dashboard of the users showing all their shipments analysis and various activities in a simplified manner that presents the informations to you at a glance</p>
                </div>
                <div class="flex-1">
                    <img class="w-full" src="../assets/other-works/solution-1.png" alt="Solution" />
                </div>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden mb-24">
                <div class="mb-12">
                    <img class="w-full" src="../assets/other-works/solution-1.png" alt="Solution" />
                </div>
                <div class="text-center">
                    <h2 class="mb-4 text-2xl font-bold font-playfair">Main dashboard</h2>
                    <p
                        class
                    >This shows the dashboard of the users showing all their shipments analysis and various activities in a simplified manner that presents the informations to you at a glance</p>
                </div>
            </div>
            <!--  -->
            <div
                class="md:flex md:items-center md:justify-between md:space-x-12 mb-24 md:mb-0 md:py-20"
            >
                <div class="md:flex-1 mb-12 md:mb-0">
                    <img class="w-full" src="../assets/other-works/solution-2.png" alt="Solution" />
                </div>
                <div class="md:flex-1 text-center md:text-left">
                    <h2
                        class="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Tracking page</h2>
                    <p
                        class
                    >This page is where shipmensts are searched for and tracked in a simplified manner displaying to you the status of your shipment and the expected delivery date shown first as the most important things, then if you want to get more info, a table with the various listings of every location or update is shown</p>
                </div>
            </div>
            <div class="hidden md:flex items-center justify-between space-x-12 py-20">
                <div class="flex-1">
                    <h2
                        class="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Create shipments</h2>
                    <p>Based on the users research on their pain points, the shipment creation process starts from a page to upload your shipment and from your upload, it is scanned and the dimensions is estimated for you with little artificial intelligence, that solves the problem of getting stuck on dimensions</p>
                </div>
                <div class="flex-1">
                    <img class="w-full" src="../assets/other-works/solution-3.png" alt="Solution" />
                </div>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden">
                <div class="mb-12">
                    <img class="w-full" src="../assets/other-works/solution-3.png" alt="Solution" />
                </div>
                <div class="text-center md:text-left">
                    <h2
                        class="mb-4 text-2xl lg:text-5xl font-bold font-playfair"
                    >Create shipments</h2>
                    <p>Based on the users research on their pain points, the shipment creation process starts from a page to upload your shipment and from your upload, it is scanned and the dimensions is estimated for you with little artificial intelligence, that solves the problem of getting stuck on dimensions</p>
                </div>
            </div>
            <!-- End of Mobile version -->
        </section>
        <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-sm md:text-base">
            <div class="mb-20 md:w-5/6 mx-auto text-center">
                <h2
                    class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Conclusion</h2>
                <p>The experience of this project was an insightful one, the aim to simplify the process even further is in progress and results from feedback of V1 would be used to make the users experience better and solve the problems better for the users</p>
            </div>
            <div class="flex justify-center">
                <img src="../assets/other-works/conclusion.png" alt="Conclusion" />
            </div>
        </section>
        <OtherProjects />
        <BookAppointment />
    </div>
</template>

<style>
div {
    font-family: "Euclid Circular A", sans-serif;
}
</style>