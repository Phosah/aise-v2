<script setup>
defineProps({
    page: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="my-20">
        <h3 class="mb-4 text-4xl font-bold">{{ page.title }}</h3>
        <div v-for="(para, ix) in page.paragraphs" :key="ix">
            <p class="mb-4">{{ para }}</p>
        </div>
        <div class="my-8"><img class="w-full" :src="page.img" :alt="page.alt"></div>
    </div>
</template>