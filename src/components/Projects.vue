<script setup>
defineProps({
    projects: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="" v-for="(project, ix) in projects" :key="ix">
        <div class="border-t-2 border-brand-gray-2"></div>
        <router-link :to="project.url">
            <div class="flex items-center space-x-12 py-20">
                <div class="flex-1">
                    <h2 class="mb-8 text-6xl font-new-paris-kingsize text-black">{{project.title}}</h2>
                    <p class="mb-8 text-black">{{project.text}}</p>
                    <router-link :to="project.url">
                        <div class="flex items-center gap-x-8 mb-8">
                        <div class="text-xl">Explore</div>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                    </router-link>
                </div>
                <div class="flex-1"><img :src="project.gif" alt="Web 3 Projects" /></div>
            </div>
        </router-link>
    </div>
</template>