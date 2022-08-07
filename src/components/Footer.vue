<script>
export default {
    name: "Footer",
    props: {
        bgColor: {
            type: String,
        },
        mode: {
            type: String,
        },
        linksMode: {
            type: String,
        }
    },
}
</script>

<template>
    <section class="px-6 pt-20 md:pt-40 pb-10">
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
        <!--lINKS-->
        <div :class="linksMode !== 'dark' ? 'text-brand-black-3' : 'text-white'" class="hidden md:flex md:justify-between max-w-7xl mx-auto px-6 mt-20 py-3 transition-all">
            <a :class="linksMode !== 'dark' ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4 transition-all"
                href="https://www.linkedin.com/in/aise-idahor-4353b1188/" target="_blank">LinkedIn</a>
            <a :class="linksMode !== 'dark' ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4 transition-all"
                href="https://www.behance.net/coderadar" target="_blank">Behance</a>
            <a :class="linksMode !== 'dark' ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4 transition-all"
                href="https://dribbble.com/Aise_Idahor" target="_blank">Dribbble</a>
            <a :class="linksMode !== 'dark' ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4 transition-all"
                href="https://twitter.com/Aise_Idahor" target="_blank">Twitter</a>
        </div>
        <div :class="linksMode !== 'dark'" class="md:hidden flex items-center justify-between space-x-6 max-w-7xl mx-auto px-6 mt-20 py-3 transition-all">
            <a href="https://www.linkedin.com/in/aise-idahor-4353b1188/">
                <img v-if="linksMode !== 'dark'" src="../assets/linkedin-dark.png" alt="" />
                <img v-else src="../assets/linkedin-white.png" alt="" />
            </a>
            <a href="https://www.behance.net/coderadar">
                <img v-if="linksMode !== 'dark'" src="../assets/behance-dark.png" alt="" />
                <img v-else src="../assets/behance-white.png" alt="" />
            </a>
            <a href="https://dribbble.com/Aise_Idahor">
                <img v-if="linksMode !== 'dark'" src="../assets/dribbble-dark.png" alt="" />
                <img v-else src="../assets/dribbble-white.png" alt="" />
            </a>
            <a href="">
                <img v-if="linksMode !== 'dark'" src="../assets/twitter-dark.png" alt="" />
                <img v-else src="../assets/twitter-white.png" alt="https://twitter.com/Aise_Idahor" />
            </a>
        </div>
    </section>
</template>