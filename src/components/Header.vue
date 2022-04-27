<script setup>
defineProps({
    headerInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <header>
        <div class="max-w-4xl mx-auto mb-12 text-center">
            <h1 class="mb-6 text-6xl">{{ headerInfo.title }}</h1>
            <p>{{ headerInfo.text }}</p>
        </div>
        <div><img :src="headerInfo.img" :alt="headerInfo.alt"></div>
        <section class="max-w-7xl mx-auto my-20 flex space-x-16">
            <div class="w-3/4">
                <h2 class="mb-16 pl-10 text-3xl font-bold border-l-4 border-brand-black-3">{{ headerInfo.mainContent }}
                </h2>
                <p class="text-xl">{{ headerInfo.subContent }}</p>
            </div>
            <div>
                <div class="mb-10">
                    <h4 class="mb-3 text-2xl font-bold">Role</h4>
                    <p>{{ headerInfo.role }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-3 text-2xl font-bold">Client</h4>
                    <p>{{ headerInfo.client }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-3 text-2xl font-bold">Duration</h4>
                    <p>{{ headerInfo.duration }}</p>
                </div>
                <div class="mb-10">
                    <h4 class="mb-3 text-2xl font-bold">Year</h4>
                    <p>{{ headerInfo.year }}</p>
                </div>
            </div>
        </section>
    </header>
</template>