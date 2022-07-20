<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import bentoCover from '../assets/bento/bento-home.png'
import LayoutOne from '../components/LayoutOne.vue';
import photo1 from "../assets/bento/background.png"
import LayoutThree from '../components/LayoutThree.vue';
import photo2 from '../assets/bento/interview.png'

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
const overview = {
    title: "Background",
    paragraphs: [
        "Managing people within an organization has always been a nightmare for a lot of organizations. Starting from loads of paperwork, boring excel sheets, and keeping track of employee activities. All of these activities can be a burden to organizations and make running a company stressful",
        "People by Bento was built to fix all the problems faced with employee management, performance, and welfare. We give employers an all-in-one HR experience to both help manage their employees and also take their company to the next level. From hiring to onboarding, to talent management, to appraisals, to leave management, to separation, and much more."
    ],
    img: photo1,
    alt: "background"
}
const role = {
    title: "Role and Approach",
    paragraphs: [
        "My role in the team was that of a lead Product designer of the project, Bento is a large organization that has multiple projects, so when I was hired my job was to be the designer in the People project and report to the Product Lead and Head of Products of Bento",
        "I was responsible for all forms of research, analysis, communication with the Product heads, syncing up meetings with the CEO to brainstorm on the project direction, and presentation of final drafts of the designs for feedback and approvals.",
        "I was also responsible for the Handoff of the projects to the developers to ensure the design decisions are communicated and ensure implementation is done properly."
    ],
}
const interview = {
    title: "Started with Interviews",
    paragraphs: [
        "One of the major reasons why the vision came about was some subtle complaints from businesses that Bento payroll software handles were the issues of managing employees aside from payroll management. So to get the main pain points I scheduled 5 interviews of 30min each with some of the companies who made requests and those who showed similar interests.",
        "These sessions were recorded so I could have documentation to fall back on that would be kept in the company's google drive",
    ],
    
    img: photo2,
    alt: "Interview"
}
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="overview" />
            <LayoutThree :page="role" />
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">The briefings began</h3>
            <p class="mb-4">During the first week of joining the team and the People by Bento project I was briefed about the overall scope of what Bento as a brand was trying to solve and what led to the vision of People</p>
            <p class="mb-4">The next step was to have scheduled calls with people from the sales team as they are the ones that have been on the field and gotten direct hints on the feedback of some of the customers who use the Bento Payroll product for their organization and had issues managing their organization as well.</p>
            <p class="mb-4">The next few days were a series of calls with the support team and support team lead and this was to get insights on issues that have been reported as bento runs open support and feedback channel that takes user's requests and issues to process so the support team has had direct info on the user's pain points</p>
            <p>The final days were calls with the engineering team to also get insights from them and the size of the team so I could properly align business goals, user needs, and Engineering strengths in the design process.</p>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <LayoutOne :page="interview" />
        </section>
        <section class="max-w-7xl mx-auto md:my-40 my-20 px-6">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="md:flex-1 mb-12 md:mb-0">
                    <h3 class="mb-6 text-2xl md:text-4xl font-bold font-new-paris-kingsize">Sneak peak on Competitors</h3>
                    <p class="mb-4"> After successful interviews I decided to take a peek at what competitors were doing, sadly there was no competitor in the Nigerian space to see how the solutions were structured for the current market and identify the lapses so the competitive analysis was focused on foreign companies.</p>
                    <p>Even tho the psychology and the mode of operations of the business in various countries differ as this would affect the way HR works, it was still goo room to understand the core functionalities needed for an HR/ employee management software the flows and value proposition</p>
                </div>
                <div class="md:flex-1">
                    <div class="grid col-span-2 gap-6">
                        <div>
                            <img src="../assets/bento/logo1.svg" alt="logo"/>
                        </div>
                        <div>
                            <img src="../assets/bento/logo2.svg" alt="logo" />
                        </div>
                        <div>
                            <img src="../assets/bento/logo3.svg" alt="logo" />
                        </div>
                        <div>
                            <img src="../assets/bento/logo1.svg" alt="logos" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>   
</template>