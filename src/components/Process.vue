<script setup>
defineProps({
    steps: {
        type: Array, 
        required: true
    }
})
</script>

<template>
    <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
        <div class="mb-16 md:w-5/6 mx-auto text-center text-sm md:text-base">
            <h1
                class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
            >The Process</h1>
            <p
                class="mb-4"
            >Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
        </div>
        <div
            class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white text-sm md:text-base"
        >
            <div v-for="(step, ix) in steps" :key="ix" class="p-8 rounded-lg bg-brand-gray-light-2 text-brand-black-2">
                <div class="min-h-64 bg-contain bg-center bg-no-repeat">
                    <div>
                        <img
                            class="w-full"
                            :src="step.img"
                            :alt="step.alt"
                        />
                    </div>
                    <h3
                        class="text-lg md:text-xl lg:text-2xl mb-6 font-bold font-playfair"
                    >{{step.title}}</h3>
                    <ul v-for="(point, ix) in step.methods" :key="ix" class="list-disc pl-6">
                        <li class="mb-3">{{point}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>