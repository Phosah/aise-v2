<script setup>
defineProps({
    headerInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <header class="mt-10 mb-20">
        <div class="max-w-4xl mx-auto pb-10 px-6 text-center">
            <h1 class="font-new-paris-kingsize mb-6 text-6xl">{{ headerInfo.title }}</h1>
            <p>{{ headerInfo.text }}</p>
        </div>
        <div><img class="w-full" :src="headerInfo.img" :alt="headerInfo.alt"></div>
        <section class="max-w-7xl mx-auto my-20 px-6 flex space-x-32">
            <div class="w-3/4">
                <h2 class="mb-16 pl-10 text-3xl font-bold border-l-4 border-brand-black-3">{{ headerInfo.mainContent }}
                </h2>
                <p class="text-xl">{{ headerInfo.subContent }}</p>
            </div>
            <div class="w-1/4 text-sm">
                <div class="mb-10">
                    <h4 class="mb-2 text-xl font-bold font-playfair">Role</h4>
                    <p>{{ headerInfo.role }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-2 text-xl font-bold font-playfair">Client</h4>
                    <p>{{ headerInfo.client }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-2 text-xl font-bold font-playfair">Duration</h4>
                    <p>{{ headerInfo.duration }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-2 text-xl font-bold font-playfair">Year</h4>
                    <p>{{ headerInfo.year }}</p>
                </div>
            </div>
        </section>
    </header>
</template>