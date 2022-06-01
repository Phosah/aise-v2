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
        <div class="md:flex-1 mb-12 md:mb-0">
            <h3 :class="headerFont ? headerFont : 'font-new-paris-kingsize text-2xl md:text-4xl'" class="mb-6 font-bold">{{ page.title }}</h3>
            <div class="mb-4" v-for="(para, ix) in page.paragraphs" :key="ix">
                <p>{{ para }}</p>
            </div>
        </div>
        <div class="md:flex-1"><img class="w-full" :src="page.img" :alt="page.alt"></div>
    </div>
</template>