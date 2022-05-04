<script setup>
</script>

<template>
    <div class="flex items-center justify-between max-w-7xl mx-auto py-10 px-6">
        <div class=""><img src="../assets/logo.png" alt="" /></div>
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-12">
                <div>
                    <router-link to="/works">Web 3 Works</router-link>
                </div>
                <div>
                    <router-link to="/works">Other Works</router-link>
                </div>
                <div>
                    <router-link to="/about">About me</router-link>
                </div>
                <div>
                    <router-link to="/works">Visual Shots</router-link>
                </div>
            </div>
        </div>
        <button class="py-3 px-16 rounded-sm border border-brand-black-1 text-brand-black-1">Lets Talk</button>
    </div>
</template>
