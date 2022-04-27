<script setup>
defineProps({
    persona: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="flex items-center space-x-12 mb-20">
        <div class="w-1/3"><img :src="persona.img" :alt="persona.alt"></div>
        <div class="w-2/3">
            <div class="mb-6">
                <h3 class="mb-4 text-3xl">About</h3>
                <p>{{ persona.about }}</p>
            </div>
            <div class="mb-6">
                <h3 class="mb-4 text-3xl">Goals</h3>
                <ul class="pl-6 list-disc" v-for="(goal, ix) in persona.goals" :key="ix">
                    <li>{{ goal }}</li>
                </ul>
            </div>
            <div class="mb-6">
                <h3 class="mb-4 text-3xl">Pain Points</h3>
                <ul class="pl-6 list-disc" v-for="(point, ix) in persona.points" :key="ix">
                    <li>{{ point }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>