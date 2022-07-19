<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import LayoutOne from '../components/LayoutOne.vue'
import dabaCover from '../assets/daba/daba-home.png'
import background from '../assets/daba/background.png'
import LayoutThree from '../components/LayoutThree.vue';

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
    </main>   
</template>