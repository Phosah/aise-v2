<script setup>
defineProps({
    page: {
        type: Object,
        required: true
    }, 
    paraWidth: {
        type: String
    },
    headerFont: {
        type: String,
    },
})
</script>
<template>
    <div class="my-20">
        <h2 :class="headerFont ? headerFont : 'font-new-paris-kingsize'" class="mt-12 mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">{{ page.title }}</h2>
        <div v-for="(para, ix) in page.paragraphs" :key="ix">
            <p :class="paraWidth" class="mb-4">{{ para }}</p>
        </div>
        <div class="my-12"><img class="w-full" :src="page.img" :alt="page.alt"></div>
    </div>
</template>