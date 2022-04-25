<template>
  <main>
    <div class="max-w-7xl mx-auto my-20 flex flex-col items-center justify-center">
      <h1 class="mb-10 text-9xl">About Me</h1>
      <p class="w-2/3 text-center">I am a Product designer based in Nigeria who simplifies complex problems, loves to
        travel, play video games (im kinda like the Fifa Champion) and oh yes i love good ANIME</p>
    </div>
    <div class="max-w-7xl mx-auto my-20 text-5xl leading-snug">I design digital products and websites for startups,
      brands, and entrepreneurs
      with cool projects. Let's turn the boring to awesome with some slick upgrades. I am currently the Senior product
      Designer at ARC a web3 aggregator where i change lives in the web3 space through Research, Empathy and Data-driven
      insights. I help companies build teams and digital products.I design digital products and websites for startups,
      brands, and entrepreneurs with cool projects. Let's turn the boring to awesome with some slick upgrades. I am
      currently the Senior product Designer at ARC a web3 aggregator where i change lives in the web3 space through
      Research, Empathy and Data-driven insights. I help companies build teams and digital products.</div>
    <div class="bg-brand-black-1 text-white">
      <div class="max-w-7xl mx-auto px-4 md:px-16 py-20">
        <h2 class="mb-16 text-4xl md:text-6xl lg:text-7xl text-white">MY DESIGN
          GUIDELINES</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <template v-for="(guideline, index) in guidelines" :key="index">
            <DesignGuidelines :imageUrl="guideline.imageUrl" :title="guideline.title" :text="guideline.text"
              :altText="guideline.altText" :class="guideline.border" />
          </template>
        </div>
      </div>
    </div>
    <section class="max-w-7xl mx-auto my-20">
      <h2 class="mb-8 text-4xl md:text-6xl lg:text-7xl">Work Experience</h2>
      <div class="flex items-center space-x-16 mb-20">
        <h3 class="flex-1 text-3xl">A glimpse at my professional journey, asides freelance</h3>
        <p class="flex-1">Aise is a design practice focused on digital experiences. With every single one of our
          clients, we bring
          forth a deep passion for creative problem solving — which is what we deliver in the form of custom and
          memorable experiences.</p>
      </div>
      <WorkExperiences :works="worksArr" />
    </section>
    <section class="max-w-7xl mx-auto my-32">
      <h2 class="mb-8 text-4xl md:text-6xl lg:text-7xl">My Favourite Animes</h2>
      <div class="grid grid-cols-4 gap-x-6">
        <div><img class="w-full" src="../assets/naruto.png" alt="Naruto"></div>
        <div><img class="w-full" src="../assets/attack-on-titan.png" alt="Attack on titan"></div>
        <div><img class="w-full" src="../assets/one-piece.png" alt="One Piece"></div>
        <div><img class="w-full" src="../assets/bleach.png" alt="Bleach"></div>
      </div>
    </section>
    <BookAppointment />
  </main>
</template>

<script>
import DesignGuidelines from '@/components/DesignGuidelines.vue'
import img1 from '@/assets/empower.png'
import img2 from '@/assets/respectful.png'
import img3 from '@/assets/business-goals.png'
import BookAppointment from '../components/BookAppointment.vue'
import WorkExperiences from '../components/WorkExperiences.vue'
import arcLogo from '@/assets/arc.png'
import dabaLogo from '@/assets/daba.png'
import bentoLogo from '@/assets/bento.png'
import bitpowrLogo from '@/assets/bitpowr.png'
import collectAfricaLogo from '@/assets/collect-africa.png'
import kufutaLogo from '@/assets/kufuta.png'
export default {
  name: "About",
  components: { DesignGuidelines, BookAppointment, WorkExperiences },
  data() {
    return {
      guidelines: [
        {
          imageUrl: img1,
          altText: "Empower icon",
          title: "Empowering",
          text: "Empowering design ensures products center on the value they provide to people over the revenue it can generate.",
          border: "border-t-4 rounded-md"
        },
        {
          imageUrl: img2,
          altText: "Respect icon",
          title: "Respectful",
          text: "Respectful design prioritizes people’s time, attention and overall digital well-being.",
          border: "border-t-4 rounded-md"
        },
        {
          imageUrl: img3,
          altText: "Business icon",
          title: "Business Goals",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur congue tempor, ",
          border: "border-t-4 rounded-md"
        },
        {
          imageUrl: img1,
          altText: "Empathy icon",
          title: "Empathy",
          text: "Finite design maximizes the overall quality of time spent by bounding the experience and prioritizing meaningful and relevant content.",
          border: "border-t-4 rounded-md"
        },
        {
          imageUrl: img2,
          altText: "Inclusivity icon",
          title: "Inclusivity",
          text: "Inclusive design is a methodology that enables and draws on the full range of human diversity.",
          border: "border-t-4 rounded-md"
        },
        {
          imageUrl: img3,
          altText: "Transparent icon",
          title: "Transparent",
          text: "Transparent design is clear about intentions, honest in actions and free of dark patterns.",
          border: "border-t-4 rounded-md"
        },
      ],
      worksArr: [
        {
          img: arcLogo,
          alt: "Arc",
          duration: "Jul 2021 - Present",
          name: "Arc",
          position: "Senior Product Designer | Web3"
        },
        {
          img: dabaLogo,
          alt: "Daba",
          duration: "Aug 2021 - Present",
          name: "Daba",
          position: "Senior Product Designer | Fintech"
        },
        {
          img: bentoLogo,
          alt: "Bento Africa",
          duration: "Sep 2021 - Feb 2022",
          name: "Bento Africa",
          position: "Product Designer | SAAS, Fintech"
        },
        {
          img: bitpowrLogo,
          alt: "Bitpowr",
          duration: "Feb 2021 - Feb 2022",
          name: "Bitpowr",
          position: "Senior Product Designer | Web3"
        },
        {
          img: collectAfricaLogo,
          alt: "Collect Africa",
          duration: "Jan 2021 - Jul 2021",
          name: "Collect Africa",
          position: "Design Consultant | Fintech"
        },
        {
          img: kufutaLogo,
          alt: "Kufuta",
          duration: "Jun 2020 - Jan 2021",
          name: "Kufuta",
          position: "Product Designer | Ecommerce"
        },
      ]

    }
  }
}
</script>

<style>
</style>
