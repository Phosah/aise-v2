<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue'
import dabaCover from '../assets/daba/daba-home.png'
import background from '../assets/daba/background.png'
import LayoutThree from '../components/LayoutThree.vue';
import CreatePersonas from '../components/CreatePersonas.vue';
import persona1 from "../assets/daba/persona-1.png"
import persona2 from "../assets/daba/persona-2.png"

const info = {
    title: "daba",
    text: "Binging a world where daily investors both big and small have access to verified startups in the fastest growing investment continent on the planet",
    img: dabaCover,
    alt: "daba",
    mainContent: "daba is a social alternative investing platform that allows investors of all levels and backgrounds to find and invest in vetted opportunities in Africa",
    subContent: "It gets to solve this by its provision of a social investing platform where verified startups are listed, investment tips and strategies are given to guide new and old investors, key insights, and most importantly social engagements of other investors that helps in giving further assurance.",
    role: "Product Design",
    client: "daba",
    duration: "3 month",
    year: "2021",
    website: "dabafinance.com"
}
const overview = {
    title: "Background",
    paragraphs: [
        "Over the last 10 years, Africa has had a massive growth in the number of emerging startups and this growth had its highest peak between 2020 and 2021 with African startups seen to have raised a total of over $4.3 billion in funding.",
        "As the growth increases Africa’s tech ecosystem becomes more of an untapped goldmine for investors to tap into and yield a lot of returns",
        "Also with the growth of the tech ecosystem in Africa, there has been the desire for thousands of entrepreneurs to join the train of entrepreneurship but have limited funding for their startups and this has stunted the rise of thousands of startups across all of Africa."
    ],
    img: background,
    alt: "background"
}
const role = {
    title: "Role and Approach",
    paragraphs: [
        "Over the last 10 years, Africa has had a massive growth in the number of emerging startups and this growth had its highest peak between 2020 and 2021 with African startups seen to have raised a total of over $4.3 billion in funding.",
        "As the growth increases Africa’s tech ecosystem becomes more of an untapped goldmine for investors to tap into and yield a lot of returns",
        "Also with the growth of the tech ecosystem in Africa, there has been the desire for thousands of entrepreneurs to join the train of entrepreneurship but have limited funding for their startups and this has stunted the rise of thousands of startups across all of Africa."
    ],
}
const personasArr = [
    {
        img: persona1,
        alt: "Ola",
        about: "Ola an African living in the united states, is a self-motivated investor who started investing when she understood the effects of compound interest. Her motivation for investing is to build wealth and ultimately reach financial freedom so she doesn’t have to rely on a 9-5 job. She is an overall long-term holder",
        points: [
            "Startups she has invested in were because she was connected to the founders. It can get frustrating when founders stop giving updates which is a bad sign",
            "Hesitant with investing in startups because of political issues in Africa and inexperienced founders.",
        ],
        goals: [
            "Slow and steady wins the race. But does add risk to her portfolio so she's  looking for safe investments",
            "Stay up to date on investing in Africa since she is from there Healthy return on interest"
        ]
    },
    {
        img: persona2,
        alt: "Emma",
        about: "Emma is an African American born in Chicago. He got introduced to investing when he heard how much his friend makes and this served as a big source of motivation for him. He is willing to sell investments after a good return has been gained but is overall a long-term holder",
        points: [
            "Hesitant to invest in Africa because of news of corruption in certain countries. Lack of understanding of the ecosystem",
            "The word risk comes frequently when she talks about Africa He doesn't know where to start from",
        ],
        goals: [
            "Get investing opportunities in Africa",
            "Get investment information regarding African investments so he can stay up to date",
            "Prioritize social impact when investing",
            "Health ROI would be nice"
        ]
    },
]
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <div class="hidden md:block">
                <LayoutOne :page="overview" />
                <LayoutThree :page="role" />
            </div>
        </section>
        <section class=" my-20 px-6">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="md:flex-1">
                    <h3 class="mb-6 text-3xl font-new-paris-kingsize">Research</h3>
                    <div>
                        <p class="mb-4">Prequel to joining the team as a product designer, there was an ongoing interview session of about 32 candidates over google meet. The candidates comprised of expert investors, YC investors, Venture capital investors, and novices and I opted to join this interview process as it was my first step in having a closer connection to the users of the product</p>
                        <p class="mb-4">The research questions were created from the survey data analysis on the research documentation and this served as a guide for the questions asked and gave allowance for open-ended questions triggered by the interviewee's responses</p>
                        <p>The major findings from the interviews were</p>
                        <ul class="pl-6 list-disc">
                            <li>Users were scared of investing in Africa as a result of the scary news about corruption in Africa</li>
                            <li>Users had very limited access to African news and what's going on to be able to make investment decisions as this was a major requirement from expert investors who start their days with a cup of coffee and the daily news</li>
                            <li>Users needed a way to access vetted African startups for investing</li>
                        </ul>
                    </div>
                </div>
                <div class="md:flex-1">
                    <p class="bg-red-200">Images go here...........</p>
                </div>
            </div>
        </section>
        <section class="my-20 px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Checking out what competitors are up to</h3>
                <p>The competitor analysis was aimed at providing strategic insights into the features, functions, flows, and feelings evoked by the solutions of the competitors. Red circles are the areas that need improvement</p>
            </div>
            <div><img src="../assets/daba/competitors.png" alt="competitors"></div>
        </section>
        <section class="my-20 px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Insights from the Research & Interviews </h3>
                <p>Based on the data gotten from the research gotten before joining and the research carried by myself after joining, which comprised of User interview, competitive analysis, checking of feedback on competitors.</p>
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Long Term Holding</h4>
                    <p>63% of the investors interviewed are long-term holders of stocks and startup shares </p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Portfolio management</h4>
                    <p>72.4% of the investors manage their portfolio themselves while the remaining 27.6% make use of investment apps </p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Investment Decisions</h4>
                    <p>The top 3 ways mentioned by the interviewees on how they decided to invest were Word of mouth, News, and Investment Apps</p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Trust Issues</h4>
                    <p>The major words from the investors about African investing were Risk, Political issues and Lots of opportunities</p>
                </div>
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