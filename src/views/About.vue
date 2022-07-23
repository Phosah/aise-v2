<template>
  <Navbar />
  <main class="text-brand-black-2">
    <div class="flex flex-col items-center justify-center max-w-7xl mx-auto my-20 px-6 ">
      <h1 class="mb-10 text-6xl md:text-9xl font-new-paris-kingsize">About Me</h1>
      <p class="md:w-2/3 text-center text-brand-gray-2">I am a Product designer based in Nigeria who simplifies complex
        problems, loves to
        travel, play video games (i'm kinda like the Fifa Champion) and oh yes i love good ANIME</p>
    </div>
    <div class="flex items-center justify-center max-w-7xl mx-auto my-20 px-6 transition-all ease-in-out">
      <img class="animate-bounce" src="../assets/random1.png" alt="Scroll img">
    </div>
    <ImageGallery />
    <div class="max-w-6xl mx-auto my-20 md:my-40 px-6 text-2xl md:text-5xl text-brand-gray-2 md:leading-snug">I design digital
      products and
      websites for startups,
      brands and entrepreneurs
      with cool projects. Let's turn the boring to awesome with some slick upgrades. I am currently the Senior product
      Designer at ARC a web3 aggregator where i change lives in the web3 space through Research, Empathy and Data-driven
      insights. I help companies build teams and digital products.I design digital products and websites for startups,
      brands, and entrepreneurs with cool projects.</div>
      <DesignGuidelines :guidelines="guidelinesArr" />
    <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
      <div class="md:flex md:items-center md:justify-between mb-8">
        <h2 class="mb-6 md:mb-0 text-4xl md:text-6xl lg:text-7xl font-new-paris-kingsize">Work Experience</h2>
        <a href="../../Aise-Idahor.pdf" download="Aise-Idahor-CV.pdf" target="_blank" 
          class="hidden md:block py-3 px-16 rounded-md border border-brand-black-1 text-brand-black-1 hover:bg-gray-400 transition-all  font-euclid-circular-bold">Download
          Resume</a>
      </div>
      <div class="md:flex md:items-center md:space-x-16 mb-20">
        <h3 class="md:flex-1 mb-8 md:mb-0 text-2xl md:text-3xl font-new-paris-kingsize-regular">A glimpse at my
          professional
          journey, asides
          freelance</h3>
        <p class="md:flex-1">Aise is a designer focused on simplifying digital experiences. With every single project worked on, i bring forth a deep passion for creative problem solving which is what I deliver in the form of custom and memorable experiences.</p>
        <a href="../../Aise-Idahor.pdf" download="Aise-Idahor-CV.pdf" target="_blank" 
          class="block md:hidden mt-12 py-3 rounded-md border border-brand-black-1 text-center text-brand-black-1 hover:bg-gray-400 transition-all font-euclid-circular-bold">Download
          Resume</a>
      </div>
      <WorkExperiences :works="worksArr" />
    </section>
    <Anime :animes="animesArr" />
    <Footer :class="bgColor" :mode="themeMode" :LinksMode="themeMode" />
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import DesignGuidelines from '@/components/DesignGuidelines.vue'
import img1 from '@/assets/empower.png'
import img2 from '@/assets/respectful.png'
import img3 from '@/assets/business-goals.png'
import img4 from "../assets/empathy.png"
import img5 from "../assets/inclusivity.png"
import img6 from "../assets/transparent.png"
import Footer from '../components/Footer.vue'
import WorkExperiences from '../components/WorkExperiences.vue'
import arcLogo from '@/assets/arc.png'
import dabaLogo from '@/assets/daba.png'
import bentoLogo from '@/assets/bento.png'
import bitpowrLogo from '@/assets/bitpowr.png'
import collectAfricaLogo from '@/assets/collect-africa.png'
import kufutaLogo from '@/assets/kufuta.png'
import Anime from "../components/Anime.vue"
import naruto from "../assets/naruto.png"
import attackTitan from "../assets/attack-on-titan.png"
import onePiece from "../assets/one-piece.png"
import bleach from "../assets/bleach.png"
import ImageGallery from '../components/ImageGallery.vue'
export default {
  name: "About",
  components: { Navbar, DesignGuidelines, Footer, WorkExperiences, Anime, ImageGallery },
  data() {
    return {
      bgColor: "bg-brand-black-1 text-white",
      themeMode: "dark",
      guidelinesArr: [
        {
          img: img1,
          alt: "Empower icon",
          title: "Empowering",
          text: "Empowering design ensures products center on the value they provide to people over the revenue it can generate.",
          border: "border-t-4 rounded-md"
        },
        {
          img: img2,
          alt: "Respect icon",
          title: "Respectful",
          text: "Respectful design prioritizes people’s time, attention and overall digital well-being.",
          border: "rounded-md"
        },
        {
          img: img3,
          alt: "Business icon",
          title: "Business Goals",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur congue tempor, ",
          border: "border-t-4 rounded-md"
        },
        {
          img: img4,
          alt: "Empathy icon",
          title: "Empathy",
          text: "Finite design maximizes the overall quality of time spent by bounding the experience and prioritizing meaningful and relevant content.",
          border: "rounded-md"
        },
        {
          img: img5,
          alt: "Inclusivity icon",
          title: "Inclusivity",
          text: "Inclusive design is a methodology that enables and draws on the full range of human diversity.",
          border: "border-t-4 rounded-md"
        },
        {
          img: img6,
          alt: "Transparent icon",
          title: "Transparent",
          text: "Transparent design is clear about intentions, honest in actions and free of dark patterns.",
          border: "rounded-md"
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
      ],
      animesArr: [
        {
          img: naruto,
          alt: "Naruto",
          title: "Naruto"
        },
        {
          img: attackTitan,
          alt: "Attack On Titan",
          title: "Attack On Titan"
        },
        {
          img: onePiece,
          alt: "One Piece",
          title: "One Piece"
        },
        {
          img: bleach,
          alt: "Bleach",
          title: "Bleach"
        },
      ],
    }
  }
}
</script>
