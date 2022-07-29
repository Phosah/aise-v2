<script setup>
defineProps({
    headerDetails: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <header>
        <div class="max-w-4xl mx-auto pb-10 px-6 text-center">
            <h1 class="font-playfair mb-6 text-6xl">{{ headerDetails.title }}</h1>
            <p>{{ headerDetails.shortDesc }}</p>
        </div>
        <div><img class="w-full" :src="headerDetails.img" :alt="headerDetails.alt"></div>
    </header>
    <main class="max-w-7xl mx-auto py-20 px-6">
        <div class="max-w-5xl mx-auto md:px-16">
            <div
                class="mb-14 md:w-10/12 pl-6 border-l-4 border-brand-black-3 dark:border-white text-xl md:text-2xl lg:text-4xl font-bold lg:leading-normal"
            >{{headerDetails.LongDesc}}</div>
            <p
                class="md:w-4/5 lg:w-5/6 md:text-lg lg:text-xl md:leading-8"
            >{{headerDetails.paragraph}}</p>
        </div>
    </main>
</template>