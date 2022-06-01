<script setup>
defineProps({
    animes: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
        <h2 class="mb-8 text-4xl md:text-6xl lg:text-7xl font-new-paris-kingsize">My Favourite Animes</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(anime, ix) in animes" :key="ix">
                <div class="mb-4"><img class="w-full" :src="anime.img" :alt="anime.alt"></div>
                <p class="text-xl">{{ anime.title }}</p>
            </div>
        </div>
    </section>
</template>