<template>
    <div class="mb-3 md:mb-6 px-6 py-6 bg-brand-blue-1 shadow-sm hover:transform hover:-translate-y-3 transition-all" :class="border">
        <div class="mb-8"><img :src="imageUrl" :alt="altText"></div>
        <h4 class="mb-6 text-2xl lg:text-3xl font-semibold font-playfair">{{ title }}</h4>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'DesignGuidelines',
    props: {
        imageUrl: {
            type: String,
            default: ""
        },
        altText: {
            type: String,
            default: "An alt text"
        },
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        border: {
            type: String,
            default: "border-t-0 rounded-none"
        }
    }
}
</script>