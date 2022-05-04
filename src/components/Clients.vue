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
        <h1 class="mb-20 text-9xl font-new-paris-kingsize">Clients</h1>
        <div class="grid grid-cols-5 gap-12">
            <div class="flex items-center mx-auto" v-for="(client, ix)  in clients" :key="ix"><img :src="client.img"
                    :alt="client.alt">
            </div>
        </div>
    </div>
</template>