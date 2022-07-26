<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Clients from '../components/Clients.vue';
import Testimonials from '../components/Testimonials.vue'
import Projects from '../components/Projects.vue'
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
import gif1 from "../assets/gif1.gif"
import gif2 from "../assets/gif2.gif"
import gif3 from "../assets/gif4.gif"
import testimonials1 from "../assets/testimonials-1.png"
import testimonials2 from "../assets/testimonials-2.jpeg"
import testimonials3 from "../assets/testimonials-3.jpeg"
import testimonials4 from "../assets/testimonials-4.jpeg"

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
    comment: "I hired Aise 3 years ago to help take my startup to the next level among 3 other designers and while working with Aise he had amazing leadership qualities and the ability to transform any thought and idea even when the team deems them as vague into amazing solution, This made me call him the \"Magician\" in the team. Working with him was a pleasurable one"
  },
  {
    img: testimonials4,
    name: "Colm Hayden",
    title: "CEO Cadoo",
    comment: "I worked with Aise on a contract basis for our new landing page and while working with him he blew my mind away with his design skills, he gave me the best first draft of any design I have ever done, and his attention to detail was impeccable even going as far as to providing designs for all breakpoints made implementation a whole lot easier. I look forward to working with him on more interesting projects in the future"
  },
]
const projectsArr = [
  {
    title: "Web3 Projects",
    text: "Explore up to 8 web3 projects ranging from DeFi, DAO, Staking Protocols and NFT marketplaces",
    gif: gif1,
    url: "/web3"
  },
  {
    title: "Fintech Projects",
    text: "Explore various fintech solutions simplifying complex problems for users around the world.",
    gif: gif3,
    url: "/fintech"
  },
  {
    title: "Other Projects",
    text: "Have a wide range of project solutions in various niches of design from Logistics to commerce.",
    gif: gif2,
    url: "/otherworks"
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
    <section class="mb-20 md:mt-40">
      <div class="md:flex md:items-center max-w-7xl mx-auto md:mb-0 md:mt-20 px-6">
        <h1 class="md:flex-1 mb-2 md:mb-0 text-6xl sm:text-8xl md:text-10xl font-new-paris-kingsize text-left">Product</h1>
        <p class="hidden md:block md:w-1/3 leading-relaxed text-brand-gray-2">Hello There! I am Aise, a Product designer in the web3
          space
          focused on
          maximizing business
          need and user satisfaction through the creation of simple digital experiences.</p>
      </div>
      <div class="md:flex md:justify-center max-w-7xl mx-auto md:mt-20 px-6">
        <h1 class="z-10 text-6xl sm:text-8xl md:text-10xl font-new-paris-kingsize text-right">Designer</h1>
      </div>
      <!-- Mobile version -->
      <div class="max-w-7xl mx-auto mt-10 px-6">
        <p class="block md:hidden leading-relaxed text-brand-gray-2">Hello There! I am Aise, a Product designer in the web3 space focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</p>
      </div>
      <!-- end of Mobile version -->
      <div class="md:flex justify-end max-w-7xl mx-auto mt-20 md:px-6">
        <div class="hidden md:block md:flex-1">
          <img class="animate-bounce w-32 h-32" src="../assets/random1.png" alt="Scroll down" />
        </div>
        <div class="md:flex-1 md:transform md:-translate-y-40">
          <img src="../assets/aise-photo-1.png" alt="Aise photo" />
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
      <div class="hidden md:w-1/2 md:flex md:justify-end"><img class="animate-bounce w-32 h-32" src="../assets/random1.png"
          alt="Random img" /></div>
    </div>
    <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
      <Projects :projects="projectsArr" />
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
          <a href="https://dribbble.com/Aise_Idahor" class="inline-block my-6 px-10 py-3 border border-brand-black-1 rounded-md hover:bg-brand-gray-3 transition-all">View Dribbble</a>
        </div>
        <div class="md:flex-1">
          <div class="flex items-center space-x-6 space-y-6">
            <div class="flex-1">
              <img class="w-full" src="../assets/gif3.gif" alt="Designs" />
            </div>
            <div class="flex-1">
              <img class="w-full" src="../assets/svg/design-shot-1.svg" alt="Designs" />
            </div>
          </div>
          <div class="flex items-center space-x-6 space-y-6">
            <div class="flex-1">
              <img class="w-full" src="../assets/svg/design-shot-2.svg" alt="Designs" />
            </div>
            <div class="flex-1">
              <img class="w-full" src="../assets/svg/design-shot-3.svg" alt="Designs" />
            </div>
          </div>        
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto my-32 md:my-52 px-6">
      <Clients :clients="clientsArr" />
    </section>
    <Testimonials :stories="testimonialsArr" :num="num" @showNext="next" @showPrev="prev" :ix="elemIdx"/>
  </main>
  <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
</template>
