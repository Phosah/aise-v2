<script setup>
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
import testimonials2 from "../assets/testimonials-2.jpeg"
import testimonials3 from "../assets/testimonials-3.jpeg"
import testimonials4 from "../assets/testimonials-4.jpeg"
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

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
    comment: "Aise is the most amazing designer I have worked with, his response to problems and the way he is always calm in finding creative solutions made it so easy to work with him. It was an amazing experience working with him"
  },
  {
    img: testimonials2,
    name: "Vandana Taxali",
    title: "Founder of Artcryption",
    comment: "Aise is a brilliant designer, we started as a contract that was intended to be a 1hr UX review but after the first one hour I had to keep him for longer and one hour turned into one week, and that too more till we parted ways in the project that’s how good he is. He is also the nicest, most patient and smartest person I have ever worked with"
  },
  {
    img: testimonials3,
    name: "Mario Faria Da Cruz",
    title: "CEO Kufuta",
    comment: "Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum. Ultricies massa malesuada viverra cras lobortis. "
  },
  {
    img: testimonials4,
    name: "Colm Hayden",
    title: "CEO Cadoo",
    comment: "Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum. Ultricies massa malesuada viverra cras lobortis. "
  },
]
const bgColor = "bg-brand-black-2 text-white"
const themeMode =  "dark"
const sum = testimonialsArr.length - 1;
const num = ref(0)
const elemIdx = ref(1);
const next = () => {
  if(num.value < sum) {
    num.value++;
    elemIdx.value++;
  } else {
    num.value = 0
    elemIdx.value = 1;
  }
}
const prev = () => {
  if(num.value <= 0){
    num.value = sum
    elemIdx.value = sum + 1;
  } else {
    num.value--;
    elemIdx.value--;
  }
}
</script>

<template>
  <Navbar />
  <main class="text-brand-black-2">
    <section class="my-20 md:mt-40">
      <div class="md:flex md:items-center max-w-7xl mx-auto mb-10 md:mb-0 md:mt-20 px-6">
        <h1 class="md:flex-1 mb-10 md:mb-0 text-6xl md:text-10xl font-new-paris-kingsize text-center">Product</h1>
        <p class="hidden md:block md:w-1/3 leading-relaxed text-brand-gray-2">Hello There! I am Aise, a Product designer in the web3
          space
          focused on
          maximizing business
          need and user satisfaction through the creation of simple digital experiences.</p>
      </div>
      <div class="flex justify-center max-w-7xl mx-auto md:mt-20 px-6">
        <h1 class="z-10 text-6xl md:text-10xl font-new-paris-kingsize">Designer</h1>
      </div>
      <!-- Mobile version -->
      <div class="max-w-7xl mx-auto mt-10 px-6">
        <p class="block md:hidden leading-relaxed text-brand-gray-2">Hello There! I am Aise, a Product designer in the web3 space focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</p>
      </div>
      <!-- end of Mobile version -->
      <div class="md:flex justify-end max-w-7xl mx-auto mt-20 md:px-6">
        <div class="hidden md:block md:flex-1">
          <img class="w-32 h-32" src="../assets/random1.png" alt="Scroll down">
        </div>
        <div class="md:flex-1 md:transform md:-translate-y-40">
          <img src="../assets/aise-photo-1.png" alt="Aise photo">
        </div>
      </div>
    </section>
    <div class="md:flex max-w-7xl mx-auto px-6">
      <div class="md:w-1/2 px-6 md:px-12">
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
    <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
      <div class="md:flex md:items-start md:space-x-12">
        <div>
          <router-link to="/works">
            <div class="md:flex-1 flex flex-col mb-8 p-8 bg-black text-white rounded-md">
              <h2 class="text-6xl font-new-paris-kingsize">Web 3</h2>
              <h2 class="mb-8 text-6xl font-new-paris-kingsize">Projects</h2>
                <div class="flex items-center gap-x-8 mb-8">
                  <div class="text-xl">Explore</div>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              <img src="../assets/gif1.gif" alt="Web 3 Projects">
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/otherworks">
            <div class="md:flex-1 p-8 bg-white rounded-md mb-8">
              <h2 class="text-6xl font-new-paris-kingsize">Other</h2>
              <h2 class="mb-8 text-6xl font-new-paris-kingsize">Projects</h2>
                <div class="flex items-center gap-x-8 mb-8">
                  <div class="text-xl">Explore</div>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              <img class="w-full" src="../assets/gif2.gif" alt="Other Projects">
            </div>
          </router-link>
        </div>        
      </div>
    </section>
    <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
      <div class="md:flex md:items-center md:space-x-12">
        <div class="md:flex-1 mb-8 md:mb-0">
          <h3 class="font-new-paris-kingsize mb-6 text-5xl font-new-paris-kingsize">Over 100 <span
              class="font-new-paris-kingsize-regular">Design Shots</span></h3>
          <div class="mb-4">
            <p class="pr-16 leading-relaxed">Explore a showcase of visuals designs from a wide range of design niches
              done for projects and clients
              all over the world ranging from web designs to mobile designs.</p>
          </div>
          <a href="https://dribbble.com/Aise_Idahor" class="inline-block my-6 px-10 py-3 border border-brand-black-1 rounded-md">View Dribbble</a>
        </div>
        <div class="md:flex-1"><img class="w-full" src="../assets/gif3.gif" alt="Designs"></div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto my-32 md:my-52 px-6">
      <Clients :clients="clientsArr" />
    </section>
    <Testimonials :stories="testimonialsArr" :num="num" @showNext="next" @showPrev="prev" :ix="elemIdx"/>
  </main>
  <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
</template>
