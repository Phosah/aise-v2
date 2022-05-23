<script setup>
defineProps({
    headerDetails: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <main class="max-w-7xl mx-auto py-20 px-16">
        <div class="max-w-5xl mx-auto md:px-16">
            <h1
                class="mb-4 lg:mb-7 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
            >{{headerDetails.title}}</h1>
            <p
                class="mb-14 md:text-lg lg:text-xl"
            >{{headerDetails.shortDesc}}</p>
            <div
                class="mb-14 md:w-10/12 pl-6 border-l-4 border-brand-black-3 dark:border-white text-xl md:text-2xl lg:text-4xl font-bold leading-normal lg:leading-normal"
            >{{headerDetails.LongDesc}}</div>
            <p
                class="md:w-4/5 lg:w-5/6 md:text-lg lg:text-xl md:leading-8"
            >{{headerDetails.paragraph}}</p>
        </div>
    </main>
</template>