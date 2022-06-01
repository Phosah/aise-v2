<script setup>
defineProps({
    page: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="mt-20 mb-24 md:mb-48">
        <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">{{ page.title }}</h3>
        <div v-for="(para, ix) in page.paragraphs" :key="ix">
            <p class="mb-4">{{ para }}</p>
        </div>
        <div class="my-12"><img class="w-full" :src="page.img" :alt="page.alt"></div>
    </div>
</template>