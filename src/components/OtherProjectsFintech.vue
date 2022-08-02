<script setup>
import { computed, onMounted, ref } from 'vue'
import photo1 from '../assets/other-projects/collect-africa.png'
import photo2 from '../assets/other-projects/daba.png'
import photo3 from '../assets/other-projects/powrfinance.png'
defineProps({
    headerCenter: {
        type: String,
    },
    marginWidth: {
        type: String
    }
})
const projects = ref([
    {
        title: "Collect Africa",
        text: "Reinventing payment systems and account management for both large and small scale businesses across Africa",
        img: photo1,
        alt: "Collect Africa",
        route: "/collectafrica",
    },
    {
        title: "daba",
        text: "Binging a world where daily investors both big and small have access to verified startups in the fastest growing investment continent on the planet",
        img: photo2,
        alt: "daba",
        route: "/daba",
    },
    {
        title: "Powr Finance",
        text: "The growth and expansion of businesses and services are heavily dependent on seamless intercontinental financial transactions",
        img: photo3,
        alt: "Powr Finance",
        route: "/powrfinance",
    },
])
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const shuffledProjects = computed(() => {
    return shuffleArray(projects.value)
})
</script>

<template>
    <main :class="marginWidth" class="max-w-7xl mx-auto px-6">
        <h1 :class="headerCenter" class="max-w-7xl mx-auto mb-4 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Other Projects</h1>
        <div class="md:flex md:items-start md:space-x-12 my-10">
            <div class="md:flex-1 mb-16 md:mb-0">
                <router-link :to="shuffledProjects[1].route">
                    <img class="mb-4 w-full lg:h-96" :src="shuffledProjects[1].img" :alt="shuffledProjects[1].alt"/>
                    <div>
                        <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[1].title}}</h3>
                        <p>{{shuffledProjects[1].text}}</p>
                    </div>
                </router-link>
            </div>
            <div class="md:flex-1">
                <router-link :to="shuffledProjects[0].route">
                    <img class="mb-4 w-full lg:h-96" :src="shuffledProjects[0].img" :alt="shuffledProjects[0].alt" />
                    <div>
                        <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[0].title}}</h3>
                        <p>{{shuffledProjects[0].text}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
</template>