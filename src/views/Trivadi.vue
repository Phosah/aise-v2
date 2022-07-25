<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue'
import trivadiCover from '../assets/trivadi/trivadi-home.png'
import background from "../assets/trivadi/background.png"
import CreatePersonas from '../components/CreatePersonas.vue';
import Footer from '../components/Footer.vue';
import OtherProjects from '../components/OtherProjects.vue';
import persona1 from '../assets/trivadi/persona-1.png'
import persona2 from "../assets/trivadi/persona-2.png"
import LayoutTwo from '../components/LayoutTwo.vue';
import LayoutThree from '../components/LayoutThree.vue';
import photo1 from '../assets/trivadi/research.png'
import photo2 from "../assets/trivadi/home.png"
import photo3 from "../assets/trivadi/discover.png"
import photo4 from "../assets/trivadi/shipment.png"
import photo5 from "../assets/trivadi/trip.png"
import photo6 from "../assets/trivadi/create-trip.png"
import photo7 from "../assets/trivadi/booking.png"
import photo8 from "../assets/trivadi/tour.png"
import photo9 from "../assets/trivadi/game.png"
import photo10 from "../assets/trivadi/speech.png"
import photo11 from "../assets/trivadi/account.png"
import photo12 from "../assets/trivadi/research.png"

const info = {
    title: "Trivadi",
    text: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
    img: trivadiCover,
    alt: "bento",
    mainContent: "Trivadi is an augmented reality mobile app. that helps both individuals and families willing to explore new countries both for visitation purposes and for relocation.",
    subContent: "Trivadi gets to provide a way for people to be able to properly plan their travels, from creating a travel checklist to shopping for necessary items. It also gives you access to events, hot spots, and tourist sites in new locations as well as travel experiences to help guide your decision on where to go to. Trivadi helps you move your items to the countries you want to go to especially those who plan to relocate",
    role: "Product Design",
    client: "trivadi",
    duration: "1 month",
    year: "2022",
}
const overview = {
    title: "Background",
    paragraphs: [
        "Trivadi is an augmented reality mobile app. that helps both individuals and families willing to explore new countries both for visitation purposes and for relocation.",
        "As the growth of travelers increases there is the need of having a good medium to ship items for travel, get the best travel insights and have the best travel experiences by exploring events, places and maximizing what the new location has to offer",
    ],
    img: background,
    alt: "background"
}
const research = {
    title: "Background",
    paragraphs: [
        "The first step of the research phase was finding out information about Itinerant families traveling and what they face, the next step was to carry out interviews to gain more insights from users who travel frequently and what has been their experiences",
        "The interview stage was comprised of 7 candidates which encompassed singles, families, and travel professionals / agents.",
    ],
    img: photo1,
    alt: "research"
}
const personasArr = [
    {
        img: persona1,
        alt: "Susan",
        about: "Susan is a 22-year-old 3D designer that stays in Abuja. She loves to travel and it has been one of her major desires to travel the world after graduating. She travels twice a year although tied to certain occasions she does these trips with her spouse",
        points: [
            "Some of the countries she would love to go to are non-English speaking so it's difficult to relate with the natives.",
            "She needs a way to find good restaurants that are close to the meals she eats at home as she doesn't love trying new foods.",
        ],
        goals: [
            "Susan needs a way to get the best places to go to so she has the most fun in her travels",
            "She needs a way to get a comfortable apartment for her long stays",
            "She needs a way to meet new people and explore new places"
        ]
    },
    {
        img: persona2,
        alt: "Raphael",
        about: "Raphael is a 25-year-old Product designer that stays in Lagos, Nigeria. He works two full-time jobs so he rarely has time for trips although he travels for events and important occasions, his last major travel this year was due to work relocation",
        points: [
            "Difficulties in finding a good logistics and packaging firm to help with moving his items",
            "Difficulties inn finding good and reasonably priced accommodation for a long term stayer",
        ],
        goals: [
            "Rapheal needs to be able to plan a travel for relocation easily so he can have the best experience",
            "He needs a way to move his items to the new country he is going to",
            "He needs a way to track the items ",
        ]
    },
]
const account = {
    title: "Account Creation",
    paragraphs: [
        "The account creation was designed to be simple and intuitive where the user can set up his account with just his user name and profile then select his country and set his location so his initial discovery feed would be well-tailored to his locality. The user also gets to save his country of interests as this affects the discovery experiences he would see",
    ],
    img: photo11,
    alt: "account"
}
const home = {
    title: "Home Page",
    paragraphs: [
        "The home page is simple and straight to the point as it gives you access to the major thing the app has to offer. With the most prominent thing on the screen be the track shipment which is very necessary to know the current location and status of your packages being sent out",
        "Also, you have access to other key features in the product, your shipment history, and popular travel locations"
    ],
    img: photo2,
    alt: "home"
}
const discovery = {
    title: "Discovery",
    paragraphs: [
        "The discovery page is tailored to account for all travelers needs and help travelers get the best experience in whatever country you go to",
        "In the discovery you can get to see stores for clothes to buy in whatever location, see restaurants and filter down to your taste and, you get to see events created by people around you that you can attend, travel guides and more the goal is to help you optimize your experience,  in the country of choice, feel among and have a meaningful travel"
    ],
    img: photo3,
    alt: "discover"
}
const shipment = {
    title: "Create Shipment",
    paragraphs: [
        "The create shipment is one of the pillars of the product as shipping items to be used in the new country is one of the pain points for users, so the create shipment has been designed in such a way to ease the stress of users in figuring out the exact dimensions and packing with the right boxes, with  the use of AR we can scan ur package and estimate with 100% accuracy the size and the box dimensions so we would have the boxes readily available for shipping "
    ],
    img: photo4,
    alt: "discover"
}
const trip = {
    title: "My Trips",
    paragraphs: [
        "My trips serve as a collection of events and memories that i could capture withing the entire trip and have it properly arranged for me to access anytime"
    ],
    img: photo5,
    alt: "trips"
}
const create = {
    title: "Create Trip",
    paragraphs: [
        "The create trip is designed to help uses on the overall experience of a trip from accounting for all the relevant info or document needed for the travel to shipping of items to the country of your choice and setting up booking accommodation reminders "
    ],
    img: photo6,
    alt: "create"
}
const booking = {
    title: "Booking",
    paragraphs: [
        "Booking accommodation is split into two parts, one is hotels and which are usually for short-time stayers and the second is apartments and this is for travelers who would stay longer and the renting of an apartment would provide cheaper accommodation. So on Trivadi you get to see varieties of apartments, their amenities, and this can be seen in AR for better experience"
    ],
    img: photo7,
    alt: "trips"
}
const tour = {
    title: "Tour Guide",
    paragraphs: [
        "The tour guide feature is designed to help travelers who would love to explore the city, especially one, not familiar to them in conditions like language, culture, etc and this guides can be selected on the platform and you can see their reviews, about the, their likes so you can pick who relates a bit to you as you most likely would spend some time with them"
    ],
    img: photo8,
    alt: "tour"
}
const task = {
    title: "Gamified Tasks",
    paragraphs: [
        "Most travelers during trips set out to do things they want to accomplish, and from some interviews, these are not always completed, occasionally due to procrastination and sometimes laziness.",
        "So the gamified tasks help users set up tasks with spouses or friends that are traveling together and for every task completed you earn points that can be used for shopping, apartment renting, or food purchase on the app"
    ],
    img: photo9,
    alt: "Gamified Tasks"
}
const speech = {
    title: "Speech Translator & Translator From Image",
    paragraphs: [
        "The translator solution is designed for travelers going to countries with languages different from the local languages they are used to. This helps them communicate with locals in such countries so they can have the maximum experience of the travel",
        "So most travelers especially in countries in countries that they do not understand their language relate with a lot of things, not just the people who speak, these things can range from signposts to restaurant menus, etc. This feature allows users to be able to scan an image and the app helps highlight the texts and translates them to your desired language. Due to the fact that the image scanner might not capture all the words so you can always edit the text of the scanned words"
    ],
    img: photo10,
    alt: "Gamified Tasks"
}
const step = {
    title: "Research",
    paragraphs: [
        "The first step of the research phase was finding out information about Itinerant families traveling and what they face, the next step was to carry out interviews to gain more insights from users who travel frequently and what has been their experiences",
        "The interview stage was comprised of 7 candidates which encompassed singles, families, and travel professionals / agents."
    ],
    img: photo12,
    alt: "research"
}
const themeMode = "light"
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <div class="block">
                <LayoutOne :page="overview" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div class="mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">My Role & Approach</h3>
                <p>Based on the data gotten from the research gotten before joiAs the only UX/UI designer on the project, I was responsible for the overall process of the design of the product which included the research, sketches, and final high-fidelity design. My process encompassed 4 stages</p>
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Discovey</h4>
                    <ul class="pl-6 list-disc">
                        <li class="mb-1">Problem Findings</li>
                        <li class="mb-1">User research</li>
                        <li class="mb-1">Surveys</li>
                        <li>User Personas</li>
                    </ul>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Define</h4>
                    <ul class="pl-6 list-disc">
                        <li class="mb-1"> Data analysis</li>
                        <li class="mb-1">Empathy map</li>
                    </ul>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Ideation</h4>
                    <ul class="pl-6 list-disc">
                        <li class="mb-1">User flow</li>
                        <li class="mb-1">How might we</li>
                        <li class="mb-1">User Journey map</li>
                        <li class="mb-1">Sitemap</li>
                    </ul>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Design</h4>
                    <ul class="pl-6 list-disc">
                        <li class="mb-1">Visual design</li>
                        <li class="mb-1">Design Kit</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <LayoutOne :page="step"/>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
             <div class="mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Surveys</h3>
                <p>The next step of the process i carried out was creating a survey document to be able to gather as much quantitative data to be able to have even deeper insights for the project</p>
            </div>
            <div class="grid grid-cols-2 gap-6">
                <div><img src="../assets/trivadi/survey-1.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-2.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-3.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-4.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-5.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-6.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-7.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-8.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-9.png" alt="Survey" /></div>
                <div><img src="../assets/trivadi/survey-10.png" alt="Survey" /></div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <div>
                <img src="../assets/trivadi/user-map.png" alt="User map" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
             <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Creating Personas</h3>
                <p>The personas created were aim at having a mental picture of the type of users wwe would have in order to be able to properly empathize with the users</p>
            </div>
            <CreatePersonas :personas="personasArr" />
        </section>
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="account" />
            <LayoutTwo :page="home" />
            <LayoutOne :page="discovery" />
            <LayoutTwo :page="shipment" />
            <LayoutOne :page="trip" />
            <LayoutTwo :page="create" />
            <LayoutOne :page="booking" />
            <LayoutTwo :page="tour" />
            <LayoutOne :page="task" />
            <div class="md:mt-48">
                <LayoutThree :page="speech" />
            </div>
        </section>
         <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-12 text-3xl md:text-5xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Learnings</h2>
                <p class="mb-6">The project was fun to work on and I took my time to understand how travelers think and operate it made me properly identify the pain points of users and think of possible solutions both that could help their pain points and also provide an extra solution to provide more value</p>
            </div>
            <div class=" text-2xl md:text-3xl font-bold font-new-paris-kingsize">Thank you</div>
        </section>
        <OtherProjects />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>