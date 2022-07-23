<template>
    <div class="bg-brand-black-1 text-white">
      <div class="max-w-7xl mx-auto px-4 md:px-20 py-20 md:py-40">
        <h2 class="mb-20 text-4xl md:text-6xl lg:text-7xl text-white font-new-paris-kingsize-regular">MY DESIGN
          GUIDELINES</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <template v-for="(guideline, index) in guidelines" :key="index">
            <div class="mb-3 md:mb-6 px-6 py-6 bg-brand-blue-1 shadow-sm hover:transform hover:-translate-y-1 hover:scale-105 transition-all" :class="guideline.border">
                <div class="mb-8"><img :src="guideline.img" :alt="guideline.alt"></div>
                <h4 class="mb-6 text-2xl lg:text-3xl font-semibold font-playfair">{{ guideline.title }}</h4>
                <p>{{ guideline.text }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'DesignGuidelines',
    props: {
        guidelines: {
            type: Array,
        }
    }
}
</script>