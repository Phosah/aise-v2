<script setup>
defineProps({
    works: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section>
        <div class="bg-gradient-to-tr from-slate-300 to-slate-600">
            <div v-for="(work, ix) in works" :key="ix" class="relative h-screen flex justify-center items-center">
                <div class="absolute inset-0 mix-blend-multiply"><img class="object-cover w-full h-full sticky top-0" :src="work.img"
                        :alt="work.alt">
                </div>
                <div class="w-2/3 flex items-center justify-center absolute z-50">
                    <div class="text-center text-white">
                        <h1 class="mb-6 text-5xl font-new-paris-kingsize">{{ work.title }}</h1>
                        <p class="mb-8">{{ work.content }}</p>
                        <button class="px-10 py-3 rounded-md border border-white bg-transparent cursor-pointer">
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
</style>