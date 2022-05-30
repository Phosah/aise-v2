<script setup>
// import Works from '@/components/Works'
import Carousel from '@/components/Carousel.vue'
import Footer from '../components/Footer.vue'
import OtherProjects from '../components/OtherProjects.vue'
import HeaderInfo from '../components/HeaderInfo.vue'
import LayoutOne from '../components/LayoutOne.vue';
import UserFigure from '../components/UserFigure.vue';
import photo1 from "../assets/other-works/problem-statement-photo.png"
import photo2 from "../assets/other-works/trustbreed-survey-photo-1.png"
import photo3 from "../assets/other-works/trustbreed-survey-photo-2.png"
import photo4 from "../assets/other-works/trustbreed-survey-photo-3.png"
import photo5 from "../assets/other-works/trustbreed-survey-photo-4.png"
import photo6 from "../assets/other-works/trustbreed-survey-photo-5.png"
import photo7 from "../assets/other-works/user-personas-1.png"
import photo8 from "../assets/other-works/user-personas-2.png"
import photo9 from "../assets/other-works/complaint-screen.png"
import Navbar from '../components/Navbar.vue';

const work = {
    bgColor: "bg-brand-red-5",
    title: "Trustbreed",
    subtitle: "Customer Service, B2C",
    imgPosition: "lg:w-2/3 absolute md:-bottom-40 md:-right-60 lg:-bottom-24 lg:-right-24",
    // img: require("../assets/trustbreed-home.png"),
    alt: "Trustbreed",
}
const cards = [
    {
        title: "1. Have you ever been dissapointed with the services provided to you by any company",
        img: photo2
    },
    {
        title: "2. What do you do when you have a poor service",
        img: photo3
    },
    {
        title: "3. How frequently does the company solve your problem when you complain",
        img: photo4
    },
    {
        title: "4. On a scale of 1-5 how difficult is it to pick the best service providers",
        img: photo5
    },
    {
        title: "5. What source do you trust when deciding to try a new company",
        img: photo6
    }
]
const cardsDark = [
    {
        title: "1. Have you ever been dissapointed with the services provided to you by any company",
        imgName: "trustbreed-survey-photo-dark-1.png"
    },
    {
        title: "2. What do you do when you have a poor service",
        imgName: "trustbreed-survey-photo-dark-2.png"
    },
    {
        title: "3. How frequently does the company solve your problem when you complain",
        imgName: "trustbreed-survey-photo-dark-3.png"
    },
    {
        title: "4. On a scale of 1-5 how difficult is it to pick the best service providers",
        imgName: "trustbreed-survey-photo-dark-4.png"
    },
    {
        title: "5. What source do you trust when deciding to try a new company",
        imgName: "trustbreed-survey-photo-dark-5.png"
    }
]
const details = {
    title: "TrustBreed",
    shortDesc: "As a customer, have your voice heard and get the best of services from the companies / products that serve you.",
    LongDesc: "Trustbreed is a customer support tool to help users of any and every product get the best of services from their respective providers",
    paragraph: "Trustbreed was born to help users/customers as a result of users being tired of receiving sub-standard services for their hard-earned money from products/companies they patronize to serve them."
}
const problem = {
    title: "Problem Statement",
    paragraphs: [
        "As a user / a customer, you have just one reason for patronizing a product or a service, and the result is the solution to their problems which results in user satisfaction.",
        "Over a couple of years, there has been a massive growth of user complaints from a lot of products in which most of the complaints were caught with deaf ears by the service providers and users having to adapt or manage substandard services provided especially in a monopolized system, while some other users felt their illiteracy was the reason for their struggles and accepted their fate and endured the bad services.",
        "The second problem is the ability of users to find the best products to pick to solve their needs in a pool of similar products"
    ],
    img: photo1,
    alt: "problem fixing"
}
const headerFont = "font-playfair text-4xl"
const personasArr = [
    {
        img: photo7,
        alt: "User",
        name: "Jasmine Kent",
        age: 37,
        profession: "Product Manager",
        maritalStatus: "Married",
        about: "Jasmine is a 37yrs old project manager who always has to be online due to the remote nature of her job. She works from 9 to 5 from Mondays to Fridays and has a couple of side projects over the weekend",
        behaviour: "She is calm and collected, patient and like things done quickly as she believes time is precious and should be properly utilized",
        goals: "Need to be able to get answers to problems she faces with digital products as she works from home so 90% of services she patronizes are online",
        concerns: "Privacy of her messages on services she is having issues with and the time of responses of those issues being as fast as possible"
    },
    {
        img: photo8,
        alt: "User",
        name: "Richard Lawson",
        age: 24,
        profession: "Engineer",
        maritalStatus: "Single",
        about: "Richard is a 24yrs old Engineer, he spends a lot of time reading articles and making online purchases for his hardware and engineering materials to be able to work properly",
        behaviour: "He is calm, intelligent and a bit hyper active at his actions",
        goals: "Need to be able to get answers to problems she faces with digital products as she works from home so 90% of services she patronizes are online",
        concerns: "Privacy of her messages on services she is having issues with and the time of responses of those issues being as fast as possible"
    },
]
const complaints = {
    title: "Complaint Screens",
    paragraphs: [
        "The complaint creation is the centerpiece of the product whereby every user can come into trustbreed and make a complaint about a company that has rendered them poor service. If the company doesn’t exist on trustbreed, you can create them and the company is verified finally listed. Every complaint submitted would be followed up by trustbreeds agents till the issue is resolved through constant communication with the company and the users"
    ],
    img: photo9,
    alt: "complaint screens"
}
</script>

<template>
    <div class="bg-white text-brand-black-3">
    <Navbar />
        <header class="max-w-7xl mx-auto md:px-16 pt-16 md:pt-4">
            <!-- <Works :work="this.$store.state.worksArr[2]" hideLink /> -->
        </header>
        <HeaderInfo :headerDetails="details" />
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16 text-sm md:text-base">
            <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">My Role</h2>
            <p class="mb-4">For this project, my role was to explore ways to ensure users' complaints are heard and
                resolutions to the problems were made, also give users a way to identify the best companies and
                services for a particular need. To achieve this I had to understand the pain points of users of
                digital and physical services through a series of research, analysis, and best practices in UX
                design. Then sealing it with good visuals to make the interface attractive for the users.</p>
            <p>Throughout the project timeline, there was a triangular interaction between myself, users, and the
                stakeholders.</p>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
            <h2 class="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">My Approach</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white text-sm md:text-base">
                <div class="p-8 rounded-lg bg-brand-orange-4">
                    <div class="h-64 bg-one bg-contain bg-center bg-no-repeat">
                        <h3 class="text-lg md:text-xl lg:text-2xl mb-6 font-bold font-playfair">Discover</h3>
                        <ul class="list-disc pl-6">
                            <li class="mb-3">Problem Statement</li>
                            <li class="mb-3">UX Competitive Analysis</li>
                            <li>User Stories</li>
                        </ul>
                    </div>
                </div>
                <div class="p-8 rounded-lg bg-brand-blue-5">
                    <div class="h-64 bg-two bg-contain bg-center bg-no-repeat">
                        <h3 class="text-lg md:text-xl lg:text-2xl mb-6 font-bold font-playfair">User research</h3>
                        <ul class="list-disc pl-6">
                            <li class="mb-3">Survey & interviews</li>
                            <li class="mb-3">User Persona</li>
                            <li class="mb-3">User Journey Map</li>
                            <li class="mb-3">Mental Models</li>
                            <li>User Flow & Task Analysis</li>
                        </ul>
                    </div>
                </div>
                <div class="p-8 rounded-lg bg-brand-green-4">
                    <div class="h-64 bg-three bg-contain bg-center bg-no-repeat">
                        <h3 class="text-lg md:text-xl lg:text-2xl mb-6 font-bold font-playfair">Ideate</h3>
                        <ul class="list-disc pl-6">
                            <li class="mb-3">Sitemap</li>
                            <li>Low-fidelity prototype</li>
                        </ul>
                    </div>
                </div>
                <div class="p-8 rounded-lg bg-brand-red-3">
                    <div class="h-64 bg-four bg-contain bg-center bg-no-repeat">
                        <h3 class="text-lg md:text-xl lg:text-2xl mb-6 font-bold font-playfair">Usability Testing
                        </h3>
                        <ul class="list-disc pl-6">
                            <li class="mb-3">Test Plan</li>
                            <li class="mb-3">Test Script</li>
                            <li>Report Findings</li>
                        </ul>
                    </div>
                </div>
                <div class="h-80 p-8 rounded-lg bg-brand-purple-3">
                    <div class="h-64 bg-five bg-contain bg-center bg-no-repeat">
                        <h4 class="text-lg lg:text-2xl mb-6 font-bold font-playfair">Visual Design</h4>
                        <ul class="list-disc pl-6">
                            <li class="mb-3">Style Guide</li>
                            <li class="mb-3">Evaluating the Design for Accessibility</li>
                            <li>Converting Low-fi to Hi-fi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
            <LayoutOne :page="problem" :headerFont="headerFont" />
        </section>
        <section
            class="py-10 md:py-20 bg-brand-black-1 text-white text-sm md:text-base">
            <div class="max-w-7xl mx-auto px-4 md:px-16">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">UX competitive analysis</h2>
                <p class="mb-10">I was given two potential competitors by the founders and stakeholders began my study
                    on them and built their marketing profile, SWOT profile, and conducted a UX analysis of their
                    products. The goal was to identify what type of problems users face with competitors’ products, as
                    well as understand what the users might expect from my product.</p>
                <div class="mb-16">
                    <img class="w-full" src="../assets/other-works/ux-competition-analysis-1.png" alt />
                </div>
                <div>
                    <img class="w-full" src="../assets/other-works/ux-competition-analysis-1.png" alt />
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16 text-sm md:text-base">
            <div class="md:w-2/3 mb-12">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">User Stories</h2>
                <p>The user stories capture feelings, needs, and expectations of potential users toward creating
                    solutions properly tailored to meet users needs</p>
            </div>
            <div>
                <ul class="md:flex md:space-x-12 pl-5 list-disc">
                    <li class="flex-1 mb-8">As a user, i want to be able to make a complaint about a company that I
                        patronized so my issue can be resolved</li>
                    <li class="flex-1 mb-8">As a user, i want to be able to add a company that is not listed on the
                        platform that I want to make a complaint about</li>
                </ul>
                <ul class="md:flex md:space-x-12 pl-5 list-disc">
                    <li class="flex-1 mb-8">As a user i want to be able to leave a good review about a company that
                        served me well so others can know and also patronize them</li>
                    <li class="flex-1 mb-8">As a user, i want to be able to check the companies that have been
                        listed on trustbreed and give ratings to them so people know how good or bad I feel about
                        their services</li>
                </ul>
                <ul class="md:flex md:space-x-12 pl-5 list-disc">
                    <li class="flex-1 mb-8">As a user, i want to be able to monitor my complaint to know the status
                        of the resolution</li>
                    <li class="flex-1 mb-8">As a user, i want to be able to view the profile of companies to be able
                        to see what they offer and what others feel about them</li>
                </ul>
                <ul class="md:flex md:space-x-12 pl-5 list-disc">
                    <li class="flex-1 mb-8">As a user, i want to be able to engage a comment or review made by other
                        users on a complaint I can relate with</li>
                    <li class="flex-1 mb-8">As a user, i want to be able to give responses to other users complaints
                        in case i have the solution</li>
                </ul>
                <ul class="md:flex md:space-x-12 pl-5 list-disc">
                    <li class="flex-1 mb-8">As a user, i want to be able to compare companies of similar services so
                        I know the best company to patronize</li>
                    <li class="flex-1 mb-8">As a user, i want to be able to share my complaint and others complaints
                        with my friends on social media</li>
                </ul>
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16 text-sm md:text-base">
            <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Surveys & user interviews</h2>
            <p class="mb-6">Initially, I was running a survey that turned out to be a tremendous
                information-gathering tool. It helped me to gauge in-depth insights into the target users, including
                their pains, their frequency, and how they deal with them. Based on the results, I could formulate
                specific interview questions to find out more about how they deal with poor services and how what
                they get to do afterward</p>
            <p class="mb-10">Organizing the interviews was the most challenging part of the user research process -
                but conducting them was highly exciting. Listening to users talk about their experiences with poor
                services helped me to further refine the problem statement. Below holds some of the questions and
                the collated results</p>
            <div>
                <Carousel :cards="cards" />
            </div>
        </section>
        <UserFigure :personas="personasArr" />
        <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16 text-sm md:text-base">
            <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Mental models and user journey
                map</h2>
            <p class="mb-6">To understand better the challenges surfers are facing in diﬀerent situations, based on
                the needs and goals of my personas, I created Mental Models and User Journey Maps.</p>
            <p class="mb-16">Creating Mental Models and User Journey Maps was a great way to empathize with future
                users, getting a clearer idea about pain points and what support would they expect from the product.
            </p>
            <div>
                <img src="../assets/other-works/user-map.png" alt="User map" />
            </div>
        </section>
        <section>
            <div class="max-w-7xl mx-auto px-4 md:px-16 pt-10 md:pt-20 text-sm md:text-base">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">User flows</h2>
                <p class="mb-8 md:mb-16">User flows helped me pattern the flow of the users activities in the
                    product from the entry point to the users decisions and the resulting actions to help account
                    for every step of the users journey</p>
            </div>
            <div class="max-w-7xl mx-auto mb-20">
                <img src="../assets/other-works/user-flows.png" alt="User flows" />
            </div>
        </section>
        <section>
            <div class="max-w-7xl mx-auto pt-10 md:pt-20 px-4 md:px-16 text-sm md:text-base">
                <h2 class="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Sitemap</h2>
                <p class="mb-8 md:mb-16">Reviewing my personas and user journeys and having certain features in
                    mind, I started to think about the structure of the app. I had a rough idea of keeping the
                    structure simple with co-existing hierarchies, since there is a great deal of overlapping
                    information and wanted my users to have easy access from one page to the other.</p>
            </div>
            <div class="max-w-7xl mx-auto mb-20">
                <img src="../assets/other-works/sitemap.png" alt="User flows" />
            </div>
        </section>
        <section class>
            <div class="max-w-7xl mx-auto pt-10 md:pt-20 px-4 md:px-16 text-sm md:text-base">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Wireframing</h2>
                <p class="mb-8 md:mb-16">After that, I started creating wireframes with pen and paper. Having the
                    hand-drawn screens, I made a low-ﬁdelity prototype putting them together to represent the user
                    ﬂow.</p>
            </div>
            <div class="max-w-7xl mx-auto mb-20">
                <img src="../assets/other-works/wireframe.png" alt="Wireframe" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16 text-sm md:text-base">
            <div class="mb-20">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Onboarding Screens</h2>
                <p class="mb-10">Tailoring the onboarding to a simple clean visual experience where the users can
                    join the trustbreed using just their name, email and get security authentication through an OTP
                    code. Users are also able to choose or create a customized username.</p>
                <div class="mb-16">
                    <img class="w-full" src="../assets/other-works/onboarding-screen.png" alt="Onboarding screens" />
                </div>
            </div>
            <LayoutOne :page="complaints" :headerFont="headerFont" />
            <div class="pt-10 md:pt-20">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Compare Companies</h2>
                <p class="mb-10">A lot of users are on the lookout for the best product for their needs, due to the
                    long list of competitors for popular services the best is a bit tricky to pick, hence trustbreed
                    gives you the ability to compare companies based on data, and other users ratings and reviews.
                </p>
                <div class="mb-16">
                    <img class="w-full" src="../assets/other-works/compare-company.png" alt="Compare company" />
                </div>
            </div>
        </section>
        <section class="text-sm md:text-base">
            <div class="max-w-7xl mx-auto pt-10 md:pt-20 px-4 md:px-16">
                <h3 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Other Features</h3>
                <p class="mb-10">There are a couple more features like the reviews feature which helps other users
                    know how well you think about a company in case they are surfing for a product to use, the
                    rating feature, and the company activities feature to help be in sync with the upcoming promos
                    or packages companies you follow are bringing out</p>
            </div>
            <div class="max-w-7xl mx-auto mb-20">
                <img src="../assets/other-works/other-features.png" alt="User flows" />
            </div>
            <div class="max-w-7xl mx-auto pt-10 md:pt-20 px-4 md:px-16">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Mobile responsiveness</h2>
                <p class="mb-10">90% of the target users are mobile users and hence to maximize the experience of
                    users, there needs to be a lot of attention paid to the mobile views of the dashboard as that
                    might be the main entry point of most users</p>
            </div>
            <div class="max-w-7xl mx-auto mb-20">
                <img src="../assets/other-works/mobile-responsive-photo.png" alt="User flows" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16 text-sm md:text-base">
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair">Usability Testing</h2>
                <p class="mb-6">I wanted to observe and measure if users understand the product, its value, and how
                    to complete basic functions through testing the high-ﬁdelity prototype. Below were the test
                    objectives;</p>
                <ul class="list-disc mb-6 pl-6">
                    <li>Observe if users can make a complaints easily</li>
                    <li>Observe if users were able to easily find a particular company they were looking for</li>
                    <li>Observe if users on making a complaint and didn't find the company if they were able to
                        suggest the company to trustbreed</li>
                    <li>Observe how easy it was to find companies to compare.</li>
                </ul>
                <p>Both in-person and remote moderated usability tests were conducted. The test included a short
                    brieﬁng and task performance with the Trustbreed. 5 participants took part in the usability
                    test, all participants agreed that the app is uncomplicated and simple to use, including mainly
                    only necessary information and buttons. After collecting the information, I created a rainbow
                    sheet to identify valuable insights.</p>
            </div>
            <div class="hidden md:block rounded-lg rounded-t-lg bg-brand-gray-7 text-sm text-white">
                <div class="flex space-x-10 px-6 py-4 bg-brand-gray-8 rounded-t-lg">
                    <p class="flex-1">Test Feedbacks</p>
                    <p class="flex-1">Possible Solutions</p>
                </div>
                <div class="flex space-x-10 p-6 border-b border-white border-opacity-5">
                    <p class="flex-1">Was constantly looking for the search field to easily search for companies and
                        could not find it</p>
                    <p class="flex-1">The search box should be brought lower to within the section so its easier to
                        spot by users</p>
                </div>
                <div class="flex space-x-10 p-6 border-b border-white border-opacity-5">
                    <p class="flex-1">It became stressful to select a company category with the horizontal scroll of
                        the categories on the desktop</p>
                    <p class="flex-1">The categories could be redesigned to show just 4 categories and a dropdown
                        showing more that reveals all the rest categories when cpcked</p>
                </div>
                <div class="flex space-x-10 p-6 border-b border-white border-opacity-5">
                    <p class="flex-1">On the dashboard, the 4 categories take too much space</p>
                    <p class="flex-1">The four categories can be merged with one button that has a down showing all
                        the actions that can be taken</p>
                </div>
                <div class="flex space-x-10 p-6">
                    <p class="flex-1">Wanted to make a video of the service I received but could not</p>
                    <p class="flex-1">Addition of a video upload alongside the photo upload option</p>
                </div>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden text-sm text-white">
                <div class="mb-10 divide-y divide-white divide-opacity-5 rounded-lg bg-brand-gray-7">
                    <p class="px-6 py-4 bg-brand-black-7 rounded-t-lg">Test Feedbacks</p>
                    <p class="p-6">Was constantly looking for the search field to easily search for companies and
                        could not find it</p>
                    <p class="p-6">It became stressful to select a company category with the horizontal scroll of
                        the categories on the desktop</p>
                    <p class="p-6">On the dashboard, the 4 categories take too much space</p>
                    <p class="p-6">Wanted to make a video of the service I received but could not</p>
                </div>
                <div class="divide-y divide-white divide-opacity-5 rounded-lg bg-brand-gray-7">
                    <p class="px-6 py-4 bg-brand-black-7 rounded-t-lg">Possible Solutions</p>
                    <p class="p-6">The search box should be brought lower to within the section so its easier to
                        spot by users</p>
                    <p class="p-6">The categories could be redesigned to show just 4 categories and a dropdown
                        showing more that reveals all the rest categories when clicked</p>
                    <p class="p-6">The four categories can be merged with one button that has a down showing all the
                        actions that can be taken</p>
                    <p class="p-6">Addition of a video upload alongside the photo upload option</p>
                </div>
            </div>
            <!-- End of Mobile version -->
        </section>
        <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16 text-sm md:text-base">
            <h3 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">Conclusion</h3>
            <p class="md:mb-16">Throughout the design process, I learned how to prioritize and be very careful in
                user experience in the product, a product that is built upon the basis of bad user experiences of
                other products, the user experience could not be compromised. I got the opportunity to. Thank you
                for following and going through my documented processes. Feel free to connect with me on LinkedIn,
                Behance, Dribbble, and Twitter.</p>
        </section>
        <OtherProjects />
        <Footer />
    </div>
</template>