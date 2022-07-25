<script setup>
import { computed, onMounted, ref } from 'vue'
import photo1 from '../assets/other-projects/aistake.png'
import photo2 from '../assets/other-projects/pegasus.png'
import photo3 from '../assets/other-projects/xerxes.png'
import photo4 from '../assets/other-projects/athena.png'
import photo5 from '../assets/other-projects/bitpowr.png'
import photo6 from '../assets/other-projects/myria.png'
defineProps({
    headerCenter: {
        type: String,
    }
})
const projects = ref([
    {
        title: "Pegasus",
        text: "The easiest way for you to gain access to multiple token holdings at once by the purchase of one super token ",
        img: photo2,
        alt: "Pegasus",
        route: "/pegasus",
    },
    {
        title: "Aistake Finance",
        text: "Staking with multiple validators on the Solana network at the same time while still having the ability to stake with the community using the best validators",
        img: photo1,
        alt: "Aistake Finance",
        route: "/aistakefinance",
    },
    {
        title: "Xerxes",
        text: "A decentralized Lending and Borrowing Protocol, providing income to Lenders and Loaning opportunities for borrowers with need any crypto asset of your choice",
        img: photo3,
        alt: "Xerxes",
        route: "/xerxes",
    },
    {
        title: "Athena",
        text: "Providing investment opportunities, real-time trading activities and launchpad opportunities for investing in new tokens before the are listed to users",
        img: photo4,
        alt: "Athena",
        route: "/athena",
    },
    {
        title: "Bitpowr",
        text: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
        img: photo5,
        alt: "Bitpowr",
        route: "/bitpowr",
    },
    {
        title: "Myria",
        text: "Bridging the world of NFT and gaming assets and token rewards to gamers making it easy to interrelate with one another",
        img: photo6,
        alt: "Myria",
        route: "/myria",
    },
])
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex) + 1;
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
const shuffledProjects = computed(() => {
    console.log(projects.value)
    return shuffle(projects.value)
})
</script>

<template>
    <h1 :class="headerCenter" class="max-w-7xl mx-auto mb-4 px-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Other Projects</h1>
    <div class="md:flex md:items-start md:space-x-12 max-w-7xl mx-auto my-10 px-6">
        <div class="md:flex-1 mb-16 md:mb-0">
            <router-link :to="shuffledProjects[0].route">
                <img class="mb-4 w-full h-96" :src="shuffledProjects[0].img" :alt="shuffledProjects[0].alt "/>
                <div>
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[0].title}}</h3>
                    <p>{{shuffledProjects[0].text}}</p>
                </div>
            </router-link>
        </div>
        <div class="md:flex-1">
            <router-link :to="shuffledProjects[1].route">
                <img class="mb-4 w-full h-96" :src="shuffledProjects[1].img" :alt="shuffledProjects[1].alt" />
                <div>
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[1].title}}</h3>
                    <p>{{shuffledProjects[1].text}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>