<script setup>
import  {computed, ref}  from "vue";
const props = defineProps({
  stories: {
    type: Array,
    required: true
  },
  num: {
    type: Number, 
    required: true
  },
  ix: {
    type: Number, 
    required: true
  }
})
const emit = defineEmits(['showNext', 'showPrev'])
const prev = () => {
  emit('showPrev')
}

</script>

<template>
    <section class="max-w-7xl mx-auto my-20 md:mt-40 md:mb-52 px-6">
      <h1 class="mb-20 text-5xl md:text-9xl font-new-paris-kingsize">Testimonials</h1>
      <div class="md:flex md:items-center md:justify-between mb-14">
        <div class="flex items-center space-x-8">
          <img :src="stories[num].img" :alt="stories[num].alt">
          <div>
            <h3 class="font-euclid-circular-medium text-xl">{{stories[num].name}}</h3>
            <p>{{stories[num].title}}</p>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-12">
          <div @click="prev" class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full hover:bg-slate-300"><img
              src="../assets/left-arrow.png" alt="Left arrow"></div>
          <div>{{ix}}/{{stories.length}}</div>
          <div @click="$emit('showNext')" class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full hover:bg-slate-300"><img
              src="../assets/right-arrow.png" alt="Right arrow"></div>
        </div>
      </div>
      <p class="text-xl md:text-5xl text-brand-gray-2 md:leading-snug">{{stories[num].comment}}</p>
    </section>
</template>