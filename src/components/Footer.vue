<template>
    <section class="px-6 pt-40 pb-10" :class="bgColor">
        <div class="flex flex-col items-center max-w-7xl mx-auto">
            <div v-if="bgColor === 'light'" class="mb-24">
                <img src="../assets/project-talk-dark.png" alt="Project talk" />
            </div>
            <div v-else class="mb-24">
                <img src="../assets/project-talk.png" alt="Project talk" />
            </div>
            <div class="md:w-5/6 mx-auto">
                <h3
                    class="font-new-paris-kingsize mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold">
                    Let's
                    talk about your project</h3>
                <p class="mb-16 md:text-xl font-euclid-circular-light text-center">
                    It takes any designer to design a product, but it takes creative
                    <span class="font-euclid-circular-bold">identification of users needs and business goals to design
                        the
                        future</span>
                </p>
            </div>
            <div class="md:flex md:items-center md:justify-center md:space-x-8 w-full">
                <a href="mailto://aiseosauyiidahor@gmail.com">
                    <div :class="mode === light ? 'border-brand-black-3 hover:border-white hover:bg-brand-black-3 hover:text-white bg:border-brand-black-3' : 'border-white hover:border-brand-black-3 hover:bg-white hover:text-brand-black-1'"
                    class="mb-8 md:mb-0 px-8 py-5 text-center font-bold rounded-sm bg-transparent border transition-all">Send
                    an
                    Email
                    </div>
                </a>
                <!-- Calendly link widget begin -->
                <a :class="mode === light ? 'bg-brand-black-3 text-white hover:bg-white hover:text-brand-black-1 hover:border-brand-black-3' : 'bg-white text-brand-black-1 hover:border hover:border-white hover:bg-transparent hover:text-white'" class="block px-8 py-5 text-center font-bold rounded-sm cursor-pointer border transition-all"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aiseidahor'});return false;">Book an
                    appointment</a>
                <!-- Calendly link widget end -->               
            </div>
        </div>
        <Links :mode="LinksMode" />
    </section>
</template>

<script>
import Links from "./Links.vue";
export default {
    name: "Footer",
    components: { Links },
    props: {
        bgColor: {
            type: String,
            default: ""
        },
        mode: {
            type: String,
            required: true
        },
        LinksMode: {
            type: String,
            required: true
        }
    },
}
</script>