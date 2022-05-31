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
        <div id="parallex" class="bg-gradient-to-tr from-slate-300 to-slate-600">
            <div id="par" v-for="(work, ix) in works" :key="ix" class="relative h-screen flex justify-center items-center">
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
    background-image: url('../assets/athena-cover.png'); 
    background-size: cover;
    height: 100vh;
}

#parallex div:nth-child(2) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(27, 18, 18, 0.5)),
                  url('../assets/aistake-cover.png');
    background-attachment: fixed;
}

#parallex div:nth-child(3) {
    background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(8, 8, 8, 0.5)), 
                url('../assets/pegasus-cover.png');
    background-size: cover;
}

#parallex div:nth-child(4) {
    background-attachment: fixed;
    background-image: linear-gradient(to top right, rgba(0, 0, 0, 0.5), rgba(8, 8, 8, 0.5)), url('../assets/xerxes-cover.png');
    background-size: cover;
}
</style>