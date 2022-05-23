<template>
    <section
        :class="work.bgColor"
        class="works-box relative md:flex md:items-center md:justify-between mb-5 md:mb-20 py-10 lg:py-20 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover text-white overflow-hidden"
    >
        <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">{{ work.title }}</h2>
                <p class="mb-12 text-xl lg:text-3xl font-light">{{ work.subtitle }}</p>
                <router-link
                    v-if="work.routeName && !hideLink"
                    :to="work.route"
                    class="inline-block pb-1 text-xl lg:text-2xl font-semibold hover:border-white border-transparent border-b-2"
                >{{ work.routeName }}</router-link>
            </div>
        </div>
        <div class="flex-1">
            <img :class="work.imgPosition" :src="work.img" :alt="work.alt" />
        </div>
    </section>
</template>

<script>
export default {
    name: "Works",
    props: {
        work: Object,
        hideLink: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.works-header {
    color: #000;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0e0f14;
}
.works-header-dark {
    color: #fff;
    -webkit-text-fill-color: #0e0f14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
/* Mobile version*/
@media screen and (max-width: 500px) {
    .works-box {
        height: 550px;
    }
}
@media screen and (min-width: 500px) {
    .works-box {
        height: 700px;
    }
}
/* End of Mobile version*/
@media screen and (min-width: 768px) {
    .works-box {
        height: 500px;
    }
}
@media screen and (min-width: 1024px) {
    .works-box {
        height: 600px;
    }
}
</style>