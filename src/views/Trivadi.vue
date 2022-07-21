<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue'
import trivadiCover from '../assets/trivadi/trivadi-home.png'
import background from "../assets/trivadi/background.png"
import photo1 from '../assets/trivadi/research.png'
import CreatePersonas from '../components/CreatePersonas.vue';
import persona1 from '../assets/trivadi/persona-1.png'
import persona2 from "../assets/trivadi/persona-2.png"

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
        <section class="my-20 px-6">
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
        <section class="my-20 px-6">
             <div class="mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Surveys</h3>
                <p>The next step of the process i carried out was creating a survey document to be able to gather as much quantitative data to be able to have even deeper insights for the project</p>
            </div>
            <div class="grid grid-cols-3 gap-6">
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
        <section class="my-20 px-6">
            <div>
                <img src="../assets/trivadi/user-map.png" alt="User map" />
            </div>
        </section>
        <section class="my-20 px-6">
             <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Creating Personas</h3>
                <p>The personas created were aim at having a mental picture of the type of users wwe would have in order to be able to properly empathize with the users</p>
            </div>
            <CreatePersonas :personas="personasArr" />
        </section>
    </main>   
</template>