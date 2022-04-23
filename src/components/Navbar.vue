<script setup>
</script>

<template>
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="w-1/4"><img src="../assets/logo.png" alt="" /></div>
        <div class="flex-1 flex items-center justify-between">
            <div class="flex items-center space-x-12">
                <div>
                    <router-link to="/works">Works</router-link>
                </div>
                <div>
                    <router-link to="/about">About me</router-link>
                </div>
                <div>
                    <router-link to="/works">Resume</router-link>
                </div>
                <div>
                    <router-link to="/works">Visual Shots</router-link>
                </div>
            </div>
            <button class="py-3 px-10 rounded-sm border border-brand-black-1 text-brand-black-1">Lets Talk</button>
        </div>
    </div>
</template>
