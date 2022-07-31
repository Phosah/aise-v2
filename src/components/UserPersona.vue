<template>
    <div
        class="md:flex md:space-x-6 md:items-center mb-24 md:mb-8 text-brand-black-1 md:pr-4"
    >
        <div class="md:w-1/3 mb-10 md:mb-0">
            <img class="w-full" :src="persona.img" :alt="persona.alt" />
        </div>
        <div class="md:w-2/3">
            <div class="mb-8">
                <h4
                    class="mb-3 text-lg md:text-xl lg:text-2xl font-bold font-playfair"
                >{{ persona.name }}</h4>
                <p>{{ persona.info }}</p>
            </div>
            <div class="md:flex md:space-x-6">
                <div class="md:flex-1 mb-8 md:mb-0">
                    <h5 class="mb-3 text-base font-bold">Goals and Needs</h5>
                    <ul v-for="(item, ix) in persona.goalsList" :key="ix">
                        <li class="mb-3">{{ item }}</li>
                    </ul>
                </div>
                <div class="md:flex-1 mb-8 md:mb-0">
                    <h5 class="mb-3 text-base font-bold">Frustrations</h5>
                    <ul v-for="(item, ix) in persona.frustrationsList" :key="ix">
                        <li class="mb-3">{{ item }}</li>
                    </ul>
                </div>
                <div class="md:flex-1">
                    <h5 class="mb-3 text-base font-bold">Behaviours</h5>
                    <ul v-for="(item, ix) in persona.behavioursList" :key="ix">
                        <li class="mb-3">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserPersona",
    props: {
        persona: {
            type: Object
        }
    }
}
</script>