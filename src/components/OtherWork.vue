<script setup>
import { onMounted } from "@vue/runtime-core";

defineProps({
    works: {
        type: Array,
        required: true
    }
})
onMounted(() => {
    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        par.style.backgroundPositionY = offset * 0.7 + "px";
        console.log(offset);   
    });
    const par = document.querySelector("#par");
    console.log(par)
})
</script>

<template>
    <section>
        <div id="par" class="bg-gradient-to-tr from-slate-300 to-slate-600">
            <div v-for="(work, ix) in works" :key="ix" class="relative h-screen flex justify-center items-center">
                <!-- <div class="absolute inset-0 mix-blend-multiply"><img class="object-cover w-full h-full sticky top-0" :src="work.img"
                        :alt="work.alt">
                </div> -->
                <div class="w-2/3 flex items-center justify-center absolute z-50">
                    <div class="text-center text-white">
                        <h1 class="mb-6 text-5xl font-new-paris-kingsize">{{ work.title }}</h1>
                        <p class="mb-8 text-lg">{{ work.content }}</p>
                        <button class="px-10 py-3 rounded-md border border-white bg-transparent cursor-pointer hover:bg-slate-400">
                            <router-link :to="work.link">View Case
                                Study</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#par {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(27, 18, 18, 0.5)), url('../assets/other-works/collectafrica1.png'); 
    background-size: contain;
}

#par div:nth-child(2) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(27, 18, 18, 0.5)),
                  url('../assets/other-works/trigle1.png');
    background-attachment: fixed;
    background-size: cover;
}

#par div:nth-child(3) {
    background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(8, 8, 8, 0.5)), 
                url('../assets/other-works/powrfinance1.png');
    background-size: cover;
}

#par div:nth-child(4) {
    background-attachment: fixed;
    background-image: linear-gradient(to top right, rgba(0, 0, 0, 0.5), rgba(8, 8, 8, 0.5)), url('../assets/other-works/trustbreed1.png');
    background-size: cover;
}
#par div:nth-child(5) {
    background-attachment: fixed;
    background-image: linear-gradient(to top right, rgba(0, 0, 0, 0.5), rgba(8, 8, 8, 0.5)), url('../assets/other-works/doorstep1.png');
    background-size: cover;
}
</style>