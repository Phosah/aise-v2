<script setup>
defineProps({
    personas: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-white bg-brand-black-3">
            <h2
                class="mb-16 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
            >Personas</h2>
            <div class="lg:flex lg:space-x-14 lg:justify-center text-xs">
                <div v-for="(persona, ix) in personas" :key="ix"  class="sm:flex sm:space-x-6 mb-12 lg:mb-0">
                    <div class="sm:flex-1">
                        <div class="flex space-x-4 items-center mb-6">
                            <div>
                                <img :src="persona.img" :alt="persona.alt" />
                            </div>
                            <div>
                                <h4 class="mb-2 font-bold text-sm">{{persona.name}}</h4>
                                <p class>{{persona.profession}}</p>
                            </div>
                        </div>
                        <div
                            class="lg:w-52 mb-6 p-6 rounded-md bg-brand-gray-7"
                        >{{persona.info}}</div>
                        <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-gray-7">
                            <h4 class="mb-4 font-bold text-sm">About {{persona.name}}</h4>
                            <p class>
                                {{persona.about}}
                            </p>
                        </div>
                    </div>
                    <div class="sm:flex-1">
                        <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-gray-7">
                            <h4 class="mb-4 font-bold text-sm">Demographics</h4>
                            <p class>{{persona.age}}</p>
                            <p class>Lives in {{persona.address}}</p>
                            <p class>{{persona.maritalStatus}}</p>
                        </div>
                        <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-gray-7">
                            <h4 class="mb-4 font-bold text-sm">Goals and needs</h4>
                            <p
                                class
                            >{{persona.goals}}</p>
                        </div>
                        <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-gray-7">
                            <h4 class="mb-4 font-bold text-sm">Pain points</h4>
                            <p
                                class
                            >{{persona.points}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>