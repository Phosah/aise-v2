<script setup>
defineProps({
    page: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="flex items-center space-x-12 my-20">
        <div class="flex-1">
            <h3 class="mb-6 text-3xl font-bold">{{ page.title }}</h3>
            <div class="mb-4" v-for="(para, ix) in page.paragraphs" :key="ix">
                <p>{{ para }}</p>
            </div>
        </div>
        <div class="flex-1"><img class="w-full" :src="page.img" :alt="page.alt"></div>
    </div>
</template>