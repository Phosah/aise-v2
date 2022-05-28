<script setup>
defineProps({
    personas: {
        type: Array, 
        required: true
    }
})
</script>
<template>
    <section class="max-w-7xl mx-auto py-10 md:py-20 md:px-16 text-sm md:text-base">
        <div class="mb-8 px-4">
            <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">User Personas</h2>
            <p>Based on the generative user research I conducted, I created user personas that capture the
                essence of my target group. Jasmine and Richard helped me to always keep the needs of the users
                at the forefront.</p>
        </div>
        <div v-for="(persona, ix) in personas" :key="ix" class="md:flex md:space-x-12 md:items-end mb-28 last:mb-0">
            <div class="md:w-1/3 self-stretch flex flex-col justify-end relative h-110 md:h-auto mb-8 md:mb-0">
                <img class="w-full h-full absolute inset-0 object-cover object-top"
                    :src="persona.img" :alt="persona.alt" />
                <div class="pl-6 pb-8 text-white z-10">
                    <h2 class="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair">{{persona.name}}
                    </h2>
                    <p class="mb-4">Age: {{persona.age}} years old</p>
                    <p class="mb-4">Occupation: {{persona.profession}}</p>
                    <p class>Status: {{persona.maritalStatus}}</p>
                </div>
            </div>
            <div class="md:w-2/3 px-4 pb-8 md:pb-0">
                <h3 class="mb-3 text-lg md:text-xl lg:text-2xl font-bold font-playfair">About</h3>
                <p class="mb-8">{{persona.about}}</p>
                <h3 class="mb-3 text-lg md:text-xl lg:text-2xl font-bold font-playfair">Behaviour & Attitude
                </h3>
                <p class="mb-8">{{persona.behaviour}}</p>
                <h3 class="mb-3 text-lg md:text-xl lg:text-2xl font-bold font-playfair">Goals</h3>
                <p class="mb-8">{{persona.goals}}</p>
                <h3 class="mb-3 text-lg md:text-xl lg:text-2xl font-bold font-playfair">Concerns</h3>
                <p class>{{persona.concerns}}</p>
            </div>
        </div>
    </section>
</template>