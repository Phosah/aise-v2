<template>
    <section class="bg-brand-black-2 py-20">
        <div class="flex flex-col items-center max-w-7xl mx-auto py-40 md:py-20 md:px-16 text-white">
            <div class="mb-24">
                <!-- <img src="../assets/project-talk.png" alt="Project talk-dark" /> -->
                <img src="../assets/project-talk.png" alt="Project talk" />
            </div>
            <div class="md:w-5/6 mx-auto px-16 md:px-0">
                <h3 class="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold font-playfair">
                    Let's
                    talk about your project</h3>
                <p class="mb-16 md:text-xl font-light text-center">
                    It takes any designer to design a product, but it takes creative
                    <span class="font-bold">identification of users needs, and business goals to design the
                        future</span>
                </p>
            </div>
            <div class="flex items-center space-x-8">

                <div class="px-8 py-5 font-bold rounded-sm text-white bg-transparent border border-white">Send an
                    Email</div>
                <!-- Calendly link widget begin -->
                <a class="px-8 py-5 font-bold rounded-sm text-brand-black-1 bg-white"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aiseidahor'});return false;">Book an
                    appointment</a>
                <!-- Calendly link widget end -->
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
import Footer from "./Footer.vue";
export default {
    name: "BookAppointment",
    computed: {
        // themeColor() {
        //     return this.$store.state.themeColor;
        // }
    },
    components: { Footer }
}
</script>