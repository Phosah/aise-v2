<script setup>
defineProps({
    projects: {
        type: Array, 
        required: true
    }
})
</script>

<template>
    <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
        <div class="grid md:grid-cols-2 gap-20 text-sm md:text-base">
            <div v-for="(project, index) in projects" :key="index"  class="p-10 bg-brand-gray-5 dark:bg-brand-black-5 shadow-sm rounded-xl">
                <div class="mb-8">
                    <img
                        class="p-4 rounded-2xl"
                        :class="project.bgColor"
                        :src="project.icon"
                        alt="Discover"
                    />
                </div>
                <h3 class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair">{{ project.title }}</h3>
                <p class="mb-6">{{ project.text }}</p>
                <div
                    v-for="(item, index) in project.items"
                    :key="index"
                    class="flex space-x-4 items-center mb-4"
                >
                    <div :class="project.bgColor" class="p-3 rounded-full">
                        <svg :class="project.tickColor" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p>{{ item }}</p>
                </div>
            </div>
        </div>
    </section>
</template>