<script setup>
import BookAppointment from '../components/BookAppointment.vue';
</script>

<template>
  <main>
    <div class="max-w-7xl mx-auto mt-20 flex items-center">
      <h1 class="w-2/3 text-9xl">Product</h1>
      <p class="w-1/3">Hello There! I am Aise, a User Experience designer focused on maximizing business need and user
        satisfaction through the creation of simple digital experiences.</p>
    </div>
    <div class="max-w-7xl mx-auto flex justify-center mt-10">
      <h1 class="text-9xl">Designer</h1>
    </div>
    <div class="max-w-7xl mx-auto mt-10">
      <div class="flex justify-end">
        <img class="w-1/2" src="../assets/aise-photo-1.png" alt="Aise photo">
      </div>
    </div>
    <div class="max-w-7xl mx-auto flex">
      <div class="w-1/2">
        <h2 class="mb-6 text-4xl">What I do</h2>
        <p class="pl-6 border-l-2 border-brand-black-2 border-opacity-50">Hello There! I am Aise, a User Experience
          designer
          focused on maximizing business need and user satisfaction through the creation of simple digital experiences.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto my-20">
      <div class="flex items-center space-x-12">
        <div class="p-8 bg-black text-white rounded-md">
          <h2 class="text-6xl">Web 3</h2>
          <h2 class="mb-8 text-6xl">Projects</h2>
          <div class="mb-8">Explore</div>
          <img src="../assets/web3-projects.png" alt="Web 3 Projects">
        </div>
        <div class="p-8 bg-white rounded-md">
          <h2 class="text-6xl">Other</h2>
          <h2 class="mb-8 text-6xl">Projects</h2>
          <div class="mb-8">Explore</div>
          <img src="../assets/other-projects.png" alt="Other Projects">
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto my-20">
      <h1 class="mb-20 text-9xl">Clients</h1>
      <div class="flex items-center justify-between mb-20">
        <div><img src="../assets/jumia.png" alt="jumia"></div>
        <div><img src="../assets/andela.png" alt="andela"></div>
        <div><img src="../assets/wiflix.png" alt="wiflix"></div>
        <div><img src="../assets/flutterwave.png" alt="flutterwave"></div>
        <div><img src="../assets/sokowatch.png" alt="sokowatch"></div>
      </div>
      <div class="flex items-center justify-between mb-20">
        <div><img src="../assets/jumia.png" alt="jumia"></div>
        <div><img src="../assets/andela.png" alt="andela"></div>
        <div><img src="../assets/wiflix.png" alt="wiflix"></div>
        <div><img src="../assets/flutterwave.png" alt="flutterwave"></div>
        <div><img src="../assets/sokowatch.png" alt="sokowatch"></div>
      </div>
      <div class="flex items-center justify-between mb-20">
        <div><img src="../assets/jumia.png" alt="jumia"></div>
        <div><img src="../assets/andela.png" alt="andela"></div>
        <div><img src="../assets/wiflix.png" alt="wiflix"></div>
        <div><img src="../assets/flutterwave.png" alt="flutterwave"></div>
        <div><img src="../assets/sokowatch.png" alt="sokowatch"></div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-20 mb-52">
      <h1 class="mb-20 text-9xl">Testimonials</h1>
      <div class="flex items-center justify-between mb-14">
        <div class="flex items-center space-x-8">
          <img src="../assets/testimonials-1.png" alt="Testimonials">
          <div>
            <h3>Anthony Miclet</h3>
            <p>Co-Founder Daba</p>
          </div>
        </div>
        <div class="flex items-center space-x-12">
          <div class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full"><img
              src="../assets/left-arrow.png" alt="Left arrow"></div>
          <div>1/8</div>
          <div class="flex items-center justify-center w-20 h-20 border border-brand-black-2 rounded-full"><img
              src="../assets/right-arrow.png" alt="Right arrow"></div>
        </div>
      </div>
      <p class="text-6xl leading-snug">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula
        dapibus
        mauris sit ut
        eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
    </div>
    <BookAppointment />
  </main>
</template>
