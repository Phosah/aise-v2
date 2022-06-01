<script setup>
defineProps({
    clients: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <h1 class="mb-20 text-6xl md:text-9xl font-new-paris-kingsize">Clients</h1>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-28">
            <div class="flex items-center mx-auto" v-for="(client, ix)  in clients" :key="ix"><img :src="client.img"
                    :alt="client.alt">
            </div>
        </div>
    </div>
</template>