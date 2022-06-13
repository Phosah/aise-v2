<template>
    <div :class="mode === light ? 'text-brand-black-3' : 'text-white'" class="hidden md:flex md:justify-between max-w-7xl mx-auto px-6 mt-20 py-3">
        <a :class="mode === light ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4"
            href="https://www.linkedin.com/in/aise-idahor-4353b1188/" target="_blank">LinkedIn</a>
        <a :class="mode === light ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4"
            href="https://www.behance.net/coderadar" target="_blank">Behance</a>
        <a :class="mode === light ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4"
            href="https://dribbble.com/Aise_Idahor" target="_blank">Dribbble</a>
        <a :class="mode === light ? 'text-brand-black-3 hover:border-brand-black-3' : 'text-white hover:border-white' " class="block pb-2 text-xl border-b-4 border-transparent hover:border-b-4"
            href="https://twitter.com/Aise_Idahor" target="_blank">Twitter</a>
    </div>
    <div class="md:hidden flex items-center justify-between space-x-6 max-w-7xl mx-auto px-6 mt-20 py-3">
        <a href=""><img src="../assets/linkedin-dark.png" alt=""></a>
        <a href=""><img src="../assets/behance-dark.png" alt=""></a>
        <a href=""><img src="../assets/dribbble-dark.png" alt=""></a>
        <a href=""><img src="../assets/twitter-dark.png" alt=""></a>
    </div>
    <div class="md:hidden flex items-center justify-center space-x-4 max-w-7xl mx-auto px-6 mt-20 py-3">
        <a href=""><img src="../assets/social-media-1.jpeg" alt=""></a>
        <a href=""><img src="../assets/social-media-2.jpeg" alt=""></a>
        <a href=""><img src="../assets/social-media-3.jpeg" alt=""></a>
        <a href=""><img src="../assets/social-media-4.jpeg" alt=""></a>
        <a href=""><img src="../assets/social-media-5.jpeg" alt=""></a>
    </div>
</template>

<script>
export default {
    name: 'Links',
    props: {
        mode: {
            type: String, 
            required: true,
        }
    }
}
</script>