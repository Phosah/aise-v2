<script setup>
defineProps({
    personas: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div
        v-for="(persona, ix) in personas" :key="ix"
        class="md:flex md:items-center md:space-x-12 mb-20">
        <div class="md:w-1/3 mb-8 md:mb-0 rounded-md"><img class="rounded-md" :src="persona.img" :alt="persona.alt">
        </div>
        <div class="md:w-2/3">
            <div class="mb-8">
                <h3 class="mb-4 text-2xl font-new-paris-kingsize">About</h3>
                <p>{{ persona.about }}</p>
            </div>
            <div class="mb-8">
                <h3 class="mb-4 text-2xl font-new-paris-kingsize">Pain Points & Hesitations</h3>
                <ul class="pl-6 list-disc" v-for="(point, ix) in persona.points" :key="ix">
                    <li>{{ point }}</li>
                </ul>
            </div>
            <!-- Using an additional div that displays for only certain components-->
            <div class="mb-8">
                <h3 class="mb-4 text-2xl font-new-paris-kingsize">{{persona.needTitle}}</h3>
                <ul class="pl-6 list-disc" v-for="(need, ix) in persona.needs" :key="ix">
                    <li>{{ need }}</li>
                </ul>
            </div>
            <!-- end of Using an additional div that displays for only certain components-->
            <div class="mb-8">
                <h3 class="mb-4 text-2xl font-new-paris-kingsize">Goals & Needs</h3>
                <ul class="pl-6 list-disc" v-for="(goal, ix) in persona.goals" :key="ix">
                    <li>{{ goal }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>