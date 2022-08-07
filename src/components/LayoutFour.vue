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
        <h3 class="mb-12 font-new-paris-kingsize text-xl md:text-3xl lg:text-4xl font-bold">{{ page.title }}</h3>
        <div class="mb-12 md:flex md:space-x-12">
            <div class="flex-1 mb-6 md:mb-0"><img class="w-full" :src="page.img1" :alt="page.alt" /></div>
            <div class="flex-1"><img class="w-full" :src="page.img2" :alt="page.alt" /></div>
        </div>
        <h4 class="mb-6 text-2xl font-new-paris-kingsize font-bold">Changes Made</h4>
        <div v-for="(change, ix) in page.changes" :key="ix">
            <div class="mb-6">
                <h4 class="text-lg font-new-paris-kingsize font-bold">{{change.title}}</h4>
                <p>{{ change.text }}</p>
            </div>
        </div>
    </div>
</template>