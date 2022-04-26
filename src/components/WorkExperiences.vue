<script setup>
const props = defineProps({
    works: {
        type: Array
    }
})
</script>

<template>
    <!-- <div class="grid grid-cols-2 gap-x-14">
        <div class="" v-for="(work, ix) in works" :key="ix">
            <div class="flex items-center space-x-4">
                <img :src="work.img" :alt="work.alt">
                <div>
                    <p class="mb-2">{{ work.duration }}</p>
                    <h1 class="mb-2">{{ work.name }}</h1>
                    <p>{{ work.position }}</p>
                </div>
            </div>
        </div>
    </div> -->
    <div class="grid grid-cols-2 gap-x-12">
        <div v-for="(work, ix) in works" :key="ix" :class="{ 'border-r border-brand-gray-3': ix % 2 === 0 }"
            class="pb-8">
            <div class="flex items-center space-x-4">
                <img :src="work.img" :alt="work.alt">
                <div>
                    <p class="mb-2">{{ work.duration }}</p>
                    <h1 class="mb-2">{{ work.name }}</h1>
                    <p>{{ work.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>