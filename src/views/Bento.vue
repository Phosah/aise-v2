<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import bentoCover from '../assets/bento/bento-home.png'

const info = {
    title: "People by Bento",
    text: "Taking away the complexities and the work overload that comes with managing an organizations workforce with spreasheets and multiple files",
    img: bentoCover,
    alt: "bento",
    mainContent: "People by Bento is an HR tool to help manage employees from hiring to onboarding, to talent management, to appraisals, to leave management, to separation, and much more...",
    subContent: "People by bento get to provide this solution by giving an easy-to-use interface that comprises various nodules needed for proper employee management, this includes modules like time management, Employee management, Appraisal, Onboarding, and offboarding management.",
    role: "Product Design",
    client: "bento africa",
    duration: "3 month",
    year: "2020",
    website: "bento.africa"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
    </main>   
</template>