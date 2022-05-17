<script setup>
import  {ref}  from "vue";

const props = defineProps({
    stories: {
        type: Array,
        required: true
    }
})
const num = ref(0)
function next() {
    if(num.value <= 2) {
      num.value ++;
    } else {
      num.value = 0
    }
    console.log(num.value)
}
function prev() {
    if(num.value < 0) {
      num.value = 2
      } else {
      num.value--;
    }
    console.log(num.value)
}
</script>

<template>
    <section class="max-w-7xl mx-auto mt-40 mb-52 px-6">
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
          <div @click="prev" class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full"><img
              src="../assets/left-arrow.png" alt="Left arrow"></div>
          <div>1/8</div>
          <div @click="next" class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full"><img
              src="../assets/right-arrow.png" alt="Right arrow"></div>
        </div>
      </div>
      <p class="text-xl md:text-5xl text-brand-gray-2 md:leading-snug">{{stories[num].comment}}</p>
    </section>
</template>