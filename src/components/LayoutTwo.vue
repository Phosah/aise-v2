<script setup>
defineProps({
    page: {
        type: Object,
        required: true
    },
     headerFont: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="md:flex md:items-center md:space-x-12 md:my-40 my-20">
        <div class="md:flex-1 md:mb-0"><img class="w-full" :src="page.img" :alt="page.alt"></div>
        <div class="md:flex-1">
            <h3 :class="headerFont ? headerFont : 'font-new-paris-kingsize'" class="mt-12 mb-6 text-2xl md:text-3xl font-bold">{{ page.title }}</h3>
            <div class="mb-4" v-for="(para, ix) in page.paragraphs" :key="ix">
                <p>{{ para }}</p>
            </div>
        </div>
    </div>
</template>