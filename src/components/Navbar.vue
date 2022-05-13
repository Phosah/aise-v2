<script setup>
</script>

<template>
    <div class="md:flex md:items-center md:justify-between max-w-7xl mx-auto py-10 px-6">
        <div class="mb-8 md:mb-0">
            <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
        </div>
        <div class="flex items-center justify-between text-brand-gray-2">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="mb-8 md:mb-0">
                    <router-link to="/works">Web 3 Works</router-link>
                </div>
                <div class="mb-8 md:mb-0">
                    <router-link to="/">Other Works</router-link>
                </div>
                <div class="mb-8 md:mb-0">
                    <router-link to="/about">About me</router-link>
                </div>
                <div class="mb-8 md:mb-0">
                    <router-link to="/works">Visual Shots</router-link>
                </div>
            </div>
        </div>
        <button
            class="py-3 px-16 rounded-sm border border-brand-black-1 text-brand-black-1 font-euclid-circular-bold">Lets
            Talk</button>
    </div>
</template>
