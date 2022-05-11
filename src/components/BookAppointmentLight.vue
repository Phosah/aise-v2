<template>
    <section class="py-20 px-6 text-brand-black-3" :class="bgColor">
        <div class="flex flex-col items-center max-w-7xl mx-auto py-40 md:py-20 md:px-16">
            <div class="mb-24">
                <!-- <img src="../assets/project-talk.png" alt="Project talk-dark" /> -->
                <img src="../assets/project-talk-dark.png" alt="Project talk" />
            </div>
            <div class="md:w-5/6 mx-auto px-16 md:px-0">
                <h3
                    class="font-new-paris-kingsize mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold">
                    Let's
                    talk about your project</h3>
                <p class="mb-16 md:text-xl font-euclid-circular-light text-center">
                    It takes any designer to design a product, but it takes creative
                    <span class="font-euclid-circular-bold">identification of users needs, and business goals to design
                        the
                        future</span>
                </p>
            </div>
            <div class="md:flex md:items-center md:space-x-8">

                <div
                    class="mb-8 md:mb-0 px-8 py-5 text-center font-bold rounded-sm bg-transparent border border-brand-black-3">
                    Send
                    an
                    Email</div>
                <!-- Calendly link widget begin -->
                <a class="block px-8 py-5 font-bold rounded-sm bg-brand-black-3 text-white"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aiseidahor'});return false;">Book an
                    appointment</a>
                <!-- Calendly link widget end -->
            </div>
        </div>
        <FooterLight />
    </section>
</template>

<script>
import FooterLight from "./FooterLight.vue";
export default {
    name: "BookAppointment",
    components: { FooterLight },
    props: {
        bgColor: {
            type: String,
            default: ""
        }
    }
}
</script>