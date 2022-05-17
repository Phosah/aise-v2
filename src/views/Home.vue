<script setup>
import BookAppointment from '../components/BookAppointment.vue';
import Clients from '../components/Clients.vue';
import Testimonials from '../components/Testimonials.vue'
import logo1 from "../assets/arc-logo.png"
import logo2 from "../assets/cadoo-logo.png"
import logo3 from "../assets/kufuta-logo.png"
import logo4 from "../assets/fundmylaptop-logo.png"
import logo5 from "../assets/revent-logo.png"
import logo6 from "../assets/daba-logo.png"
import logo7 from "../assets/bento-logo.png"
import logo8 from "../assets/artcryption-logo.png"
import logo9 from "../assets/bitpowr-logo.png"
import logo10 from "../assets/collect-logo.png"
import logo11 from "../assets/bitpowr-logo-2.png"
import logo12 from "../assets/haastrup-logo.png"
import logo13 from "../assets/fambase-logo.png"
import logo14 from "../assets/trustbreed-logo.png"
import logo15 from "../assets/momo-logo.png"
import testimonials1 from "../assets/testimonials-1.png"
import { ref } from 'vue';

const clientsArr = [
  {
    img: logo1,
    alt: "Arc"
  },
  {
    img: logo2,
    alt: "cadoo"
  },
  {
    img: logo3,
    alt: "kufuta"
  },
  {
    img: logo4,
    alt: "fundmylaptop"
  },
  {
    img: logo5,
    alt: "revert"
  },
  {
    img: logo6,
    alt: "daba"
  },
  {
    img: logo7,
    alt: "bento"
  },
  {
    img: logo8,
    alt: "artcryption"
  },
  {
    img: logo9,
    alt: "bitpowr"
  },
  {
    img: logo10,
    alt: "collect"
  },
  {
    img: logo11,
    alt: "bitpowr"
  },
  {
    img: logo12,
    alt: "haastrup"
  },
  {
    img: logo13,
    alt: "fambase"
  },
  {
    img: logo14,
    alt: "trustbreed"
  },
  {
    img: logo15,
    alt: "momo"
  },
]
const testimonialsArr = [
  {
    img: testimonials1,
    name: "Anthony Miclet",
    title: "Co-Founder Daba",
    comment: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum."
  },
  {
    img: testimonials1,
    name: "Sarah Angelo",
    title: "Co-Founder Daba",
    comment: " Eget turpis urna maecenas cras. Nisl dictum. Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu."
  },
  {
    img: testimonials1,
    name: "Anthony Miclet",
    title: "Co-Founder Daba",
    comment: "Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum. Ultricies massa malesuada viverra cras lobortis. "
  },
]
const sum = testimonialsArr.length -1;
const num = ref(0)
const next = () => {
  if(num.value < sum) {num.value++;} else {num.value = 0}
}
const prev = () => {
  if(num.value <= 0){ num.value = sum} else {num.value--}
}
</script>

<template>
  <main class="text-brand-black-2">
    <section class="my-40">
      <div class="md:flex md:items-center max-w-7xl mx-auto mt-20 px-6">
        <h1 class="md:flex-1 text-6xl md:text-10xl font-new-paris-kingsize text-center">Product</h1>
        <p class="md:w-1/3 leading-relaxed text-brand-gray-2">Hello There! I am Aise, a Product designer in the web3
          space
          focused on
          maximizing business
          need and user satisfaction through the creation of simple digital experiences.</p>
      </div>
      <div class="flex justify-center max-w-7xl mx-auto mt-20 px-6">
        <h1 class="text-6xl md:text-10xl font-new-paris-kingsize">Designer</h1>
      </div>
      <div class="max-w-7xl mx-auto mt-20">
        <div class="md:flex justify-end">
          <div class="hidden md:block md:w-1/2 pl-12"><img class="w-32 h-32" src="../assets/random1.png"
              alt="Random img"></div>
          <div class="md:w-1/2"><img class="w-full" src="../assets/aise-photo-1.png" alt="Aise photo"></div>
        </div>
      </div>
    </section>
    <div class="md:flex max-w-7xl mx-auto px-6">
      <div class="md:w-1/2 px-12">
        <h2 class="mb-6 text-4xl font-new-paris-kingsize">What I do</h2>
        <p class="pl-6 border-l-2 border-brand-black-2 border-opacity-30 leading-relaxed">I am a Web3 designer who
          simplifies complex
          problems, through Research, Empathy and Data-driven insights. I help companies build teams and digital
          products. With experience in over 12 niches of design ranging from Web3 to fintech, SAAS, Enterprise designs,
          Managemnt tools etc.
        </p>
      </div>
      <div class="hidden md:w-1/2 md:flex md:justify-end"><img class="w-32 h-32" src="../assets/random1.png"
          alt="Random img"></div>
    </div>
    <section class="max-w-7xl mx-auto my-40 px-6">
      <div class="md:flex md:items-start md:space-x-12">
        <div class="md:flex-1 flex flex-col mb-8 p-8 bg-black text-white rounded-md">
          <h2 class="text-6xl font-new-paris-kingsize">Web 3</h2>
          <h2 class="mb-8 text-6xl font-new-paris-kingsize">Projects</h2>
          <div class="mb-8">Explore</div>
          <img src="../assets/gif1.gif" alt="Web 3 Projects">
        </div>
        <div class="md:flex-1 p-8 bg-white rounded-md">
          <h2 class="text-6xl font-new-paris-kingsize">Other</h2>
          <h2 class="mb-8 text-6xl font-new-paris-kingsize">Projects</h2>
          <div class="mb-8">Explore</div>
          <img class="w-full" src="../assets/gif2.gif" alt="Other Projects">
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto my-40 px-6">
      <div class="md:flex md:items-center md:space-x-12">
        <div class="md:flex-1 mb-8 md:mb-0">
          <h3 class="font-new-paris-kingsize mb-6 text-5xl font-new-paris-kingsize">Over 100 <span
              class="font-new-paris-kingsize-regular">Design Shots</span></h3>
          <div class="mb-4">
            <p class="pr-16 leading-relaxed">Explore a showcase of visuals designs from a wide range of design niches
              done for projects and clients
              all over the world ranging from web designs to mobile designs.</p>
          </div>
          <button class="my-6 px-10 py-3 border border-brand-black-1 rounded-md">Dribble</button>
        </div>
        <div class="md:flex-1"><img class="w-full" src="../assets/gif3.gif" alt="Designs"></div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto my-40 px-6">
      <Clients :clients="clientsArr" />
    </section>
    <Testimonials :stories="testimonialsArr" :num="num" @showNext="next" @showPrev="prev"/>
    <BookAppointment />
  </main>
</template>
