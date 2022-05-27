<script setup>
defineProps({
    personas: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section v-for="(persona, ix) in personas" :key="ix" class="hidden md:block max-w-7xl mx-auto py-10 md:py-20 px-16">
        <div class="flex items-center justify-between space-x-10 mb-16">
            <div class="w-1/3">
                <img class="w-full" :src="persona.img" :alt="persona.alt" />
            </div>
            <div class="w-2/3">
                <h2 class="mb-4 text-3xl lg:text-4xl font-bold font-playfair">{{persona.name}}</h2>
                <p
                    class
                >{{persona.info}}</p>
            </div>
        </div>
        <div class="flex justify-between space-x-10">
            <div class="w-1/3 pl-12">
                <p class="mb-2">
                    <span class="text-lg font-bold">Age:</span> {{persona.age}} years old
                </p>
                <p class="mb-2">
                    <span class="text-lg font-bold">Occupation:</span> {{persona.profession}}
                </p>
                <p class="mb-2">
                    <span class="text-lg font-bold">Status:</span> {{persona.maritalStatus}}
                </p>
            </div>
            <div class="flex space-x-6 w-2/3">
                <div>
                    <h4 class="text-lg font-bold mb-4">Goals and needs</h4>
                    <p
                        class="text-sm"
                    >{{persona.goals}}</p>
                </div>
                <div>
                    <h4 class="text-lg font-bold mb-4">Pain points</h4>
                    <p
                        class="text-sm"
                    >{{persona.points}}</p>
                </div>
            </div>
        </div>
    </section>
</template>