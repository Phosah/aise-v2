<script setup>
import { computed, ref } from 'vue'
import photo1 from '../assets/other-projects/doorstep.png'
import photo2 from '../assets/other-projects/bento.png'
import photo3 from '../assets/other-projects/trivadi.png'
import photo4 from '../assets/other-projects/trigle.png'
import photo5 from '../assets/other-projects/trustbreed.png'

defineProps({
    headerCenter: {
        type: String,
    }
})
const projects = ref([
    {
        title: "Doorstep",
        text: "The fastest way to ship your packages and parcels around the world",
        img: photo1,
        alt: "Doorstep",
        route: "/doorstep",
    },
    {
        title: "People by Bento",
        text: "Taking away the complexities and the work overload that comes with managing an organizations workforce with spreasheets and multiple files",
        img: photo2,
        alt: "People by Bento",
        route: "/bento",
    },
    {
        title: "Trivadi",
        text: "Helping businesses build on a crypto infrastructure with top notch wallet infrastructure, investment and Fiat settlement",
        img: photo3,
        alt: "Trivadi",
        route: "/trivadi",
    },
    {
        title: "Trigle",
        text: "Bringing simplicity and flexibility to having your meals",
        img: photo4,
        alt: "Trigle",
        route: "/trigle",
    },
    {
        title: "Trustbreed",
        text: "As a customer, have your voice heard and get the best of services from the companies / products that serve you.",
        img: photo5,
        alt: "Trustbreed",
        route: "/trustbreed",
    },
])
const shuffledProjects = computed(() => {
    return shuffle(projects.value)
})

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    console.log("Array length is " + currentIndex);
    while (currentIndex != 0) {
        console.log(`current index is :${currentIndex}`);
        randomIndex = Math.floor(Math.random() * currentIndex) + 1;
        console.log(`Random index is :${randomIndex}`);
        currentIndex--;
        console.log(`Random index after substraction is :${randomIndex}`);
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
</script>

<template>
    <h1 :class="headerCenter" class="max-w-7xl mx-auto mb-4 px-6 text-4xl md:text-6xl font-bold font-new-paris-kingsize">Other Projects</h1>
    <div class="md:flex md:items-start md:space-x-12 max-w-7xl mx-auto my-10 px-6">
        <div class="md:flex-1 mb-16 md:mb-0">
            <router-link :to="shuffledProjects[1].route">
                <img class="mb-4 w-full h-96" :src="shuffledProjects[1].img" :alt="shuffledProjects[1].alt"/>
                <div>
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[1].title}}</h3>
                    <p>{{shuffledProjects[1].text}}</p>
                </div>
            </router-link>
        </div>
        <div class="md:flex-1">
            <router-link :to="shuffledProjects[0].route">
                <img class="mb-4 w-full h-96" :src="shuffledProjects[0].img" :alt="shuffledProjects[0].alt" />
                <div>
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl font-bold">{{shuffledProjects[0].title}}</h3>
                    <p>{{shuffledProjects[0].text}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>