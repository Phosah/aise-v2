<script setup>
import Footer from '../components/Footer.vue'
// import Works from '../components/Works.vue';
import OtherProjects from '../components/OtherProjects.vue';
import HeaderInfo from '../components/HeaderInfo.vue';
import photo1 from "../assets/other-works/trigle-problem.png"
import photo2 from "../assets/other-works/home-screen-photo.png"
import photo3 from "../assets/other-works/restaurant-page-photo.png"
import photo4 from "../assets/other-works/samuel.png"
import photo5 from "../assets/other-works/ari.png"
import LayoutOne from "../components/LayoutOne.vue"
import LayoutTwo from '../components/LayoutTwo.vue';
import UserExperience from '../components/UserExperience.vue';

const details = {
    title: "Trigle App Design",
    shortDesc: "Bringing simplicity and flexibility to having your meals",
    LongDesc: "Trigle is a restaurant finding app with a framework developed for both tourists, and residents to find restaurants closest to them depending on the location",
    paragraph: "It gets to solve this by its provision of an Augmented reality (AR) system which when given access to your camera, displays a live view of your current location with accurate steps and paths that leads you to that meal you have been salivating over."
}
const problem = {
    title: "The problem",
    paragraphs: [
        "We live in times where so much is happening online, which keeps us locked in the world of our mobile phones becoming where everyone wants (needs) to be able to access their daily needs. This has greatly reduced the exploration that occurs from the regular strolling to see new places hence directions even in our environment are a bit unknown, so we are caught up with little knowledge of restaurants for good meals and hangouts.",
        "Also due to the busy routine of work, there is little time to prepare your meals most times and we all need to have our healthy meal either for sustenance or for leisure with friends or having that special dinner with a loved one. But due to the lack of exploration the knowledge of good restaurants to go to or order a meal from becomes difficult."
    ],
    img: photo1,
    alt: "Ladies operating a mobile phone"
}
const headerFont = "font-playfair text-4xl"
const home = {
    title: "Home screen",
    paragraphs: [
        "The home screen is comprises of all the restaurants listed on the platform and broken down into categories of specilaization for users to utilize the quick filter selection to navigate through",
        "Also the home welcomes first time users to complete profile and by doing so gives you points which could be used when accumulated to make an order, this process was created to gamify the app, this tends to make the users comfortable making orders knowing there is a bouns reward on te way"
    ],
    img: photo2,
    alt: "Phone"
}
const restaurant = {
    title: "Restaurant page",
    paragraphs: [
        "This view is for the selected restaurant, you get to have banner of a meal the reason is to give an expectation of what the restaurant offers, which in turn increases possibilities of making a purchase from that restaurant. A good banner increases order by 50%",
        "The second screen indicates when the user scrolls upwards, to prevent indicators of the restaurant you are on to leave leaving you guessing where you are again, the micro interaction works in such a way that the logo and name changes poition to the top onscroll"
    ],
    img: photo3,
    alt: "Phone"
}
const pos = "text-center"
const personasArr = [
    {
        img: photo4,
        alt: "Man",
        name: "Samuel LeJourn",
        info: "Samuel is an Accountant with over 3 years of working experience, he is a graduate of the Covenant University Ota. He is calm, inquisitive, career-driven and a lover of family",
        age: 23,
        profession: "Engineer",
        maritalStatus: "Single",
        goals: "Samuel moves from site to site depending on the job and most times it carries me interstates, hence Samuel needs to be able to get a good meal of my choice regardless of being new in town",
        points: "Difficulty in communicating with foreigners in the new environment so getting recommendations is difficult, then after getting recommendations, getting directions to the restaurants gets difficult"
    },
    {
        img: photo5,
        alt: "Man",
        name: "Farida Alasha",
        info: "Ari is a graphic illustrator that lives in New York With over 3 years of working experience and over 200 successful designs. She is a lover of memes and appreciates the company of friends",
        age: 20,
        profession: "Illustrator",
        maritalStatus: "Single",
        goals: "Ari needs to be able to explore around the city to see various forms of like and their meals are a key part of that life and having a place(s) where she can sit with friends and share the moments",
        points: "Knowledge of varieties of restaurants to hang out with friends or meet new people so she ends up exploring the same old places over again, it gets tiring. Also difficulty in navigating to a new restaurant even when an address is given, the use of google maps are not as easy as the app makes it sound"
    }
]
</script>

<template>
    <div>
        <div class="bg-white dark:bg-brand-black-1 text-brand-black-3 dark:text-white">
            <section class="max-w-7xl mx-auto md:px-16 pt-16 md:pt-4">
                <!-- <Works :work="this.$store.state.worksArr[3]" hideLink /> -->
            </section>
            <HeaderInfo :headerDetails="details" />
            <section class="max-w-7xl mx-auto px-4 md:px-16">
                <LayoutOne :page="problem" :headerFont="headerFont" />
                <!-- Mobile version -->
                <div class="block md:hidden">
                    <div class="mb-10">
                        <img
                            class="w-full"
                            src="../assets/other-works/trigle-problem.png"
                            alt="Guys and lady smiling and operating their mobiles."
                        />
                    </div>
                    <div class="text-sm">
                        <h2 class="mb-6 text-2xl font-bold font-playfair">The problem</h2>
                        <p
                            class="mb-8"
                        >We live in times where so much is happening online, which keeps us locked in the world of our mobile phones becoming where everyone wants (needs) to be able to access their daily needs. This has greatly reduced the exploration that occurs from the regular strolling to see new places hence directions even in our environment are a bit unknown, so we are caught up with little knowledge of restaurants for good meals and hangouts.</p>
                        <p>Also due to the busy routine of work, there is little time to prepare your meals most times and we all need to have our healthy meal either for sustenance or for leisure with friends or having that special dinner with a loved one. But due to the lack of exploration the knowledge of good restaurants to go to or order a meal from becomes difficult.</p>
                    </div>
                </div>
                <!-- End of mobile version -->
            </section>
            <section class="max-w-7xl mx-auto px-4 md:px-16 py-10 md:py-20">
                <div class="md:flex md:items-center md:justify-between md:space-x-12">
                    <div class="flex-1 mb-10 md:mb-0">
                        <img
                            class="w-full mb-8"
                            src="../assets/other-works/trigle-why-1.png"
                            alt="Ladies on tourism"
                        />
                        <img
                            class="w-full"
                            src="../assets/other-works/trigle-why-2.png"
                            alt="Ladies eating pizza at a restaurant"
                        />
                    </div>
                    <div class="flex-1 text-sm md:text-base">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Why Trigle?</h2>
                        <p
                            class="mb-6"
                        >With so much need and desire for good meals and the lock of time for its preparation, there has been an increase in food ordering and delivery demand</p>
                        <p
                            class
                        >As good as the innovation was it still held some pain points and some of which include</p>
                        <ul class="mb-16 list-disc list-inside">
                            <li
                                class="px-2"
                            >Knowledge of a handful of restaurants websites or apps to order meals from</li>
                            <li
                                class="px-2"
                            >Humans always want to try out new things and being restricted to restaurants you know restricts that</li>
                            <li
                                class="px-2"
                            >There is also a high need for a change of environment to clear the head or have a nice time with friends or loved ones which requires you to go physically to the restaurants</li>
                        </ul>
                        <p
                            class="mb-6"
                        >With Trigle having its logistics services small restaurants have nothing to worry about not being able to deliver meals fast as that was their major concern</p>
                        <p>It also gives you real-life AR directions to the restaurants for those who want to eat in this eradicates the stress of asking your way around or trying to figure out the complex maps</p>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:pl-16 md:px-16">
                <div class="hidden md:flex items-center justify-between space-x-12">
                    <div class="flex-1">
                        <h2
                            class="mb-6 text-3xl lg:text-4xl font-bold font-playfair"
                        >Our target users</h2>
                        <p
                            class="mb-6"
                        >The age range for our main target audience from the research was estimated to be between the ages of 20-35 years old as the major users having statistics of 68% of food ordering requests coming from that age range, this doesn't stop the design from being tailored for all but helps focus on our major users needs more in-depth</p>
                        <p>With a vast majority falling into the category of</p>
                        <ol class="list-decimal px-5">
                            <li>Remote workers.</li>
                            <li>College students.</li>
                            <li>Unmarried</li>
                            <li>Utility workers (e.g medical workers): They leave home early and get back late.</li>
                        </ol>
                    </div>
                    <div class="flex-1">
                        <img
                            class="w-full h-full"
                            src="../assets/other-works/target-users.png"
                            alt="Target users"
                        />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden">
                    <div class="mb-10">
                        <img
                            class="w-full h-full"
                            src="../assets/other-works/target-users.png"
                            alt="Target users"
                        />
                    </div>
                    <div class="text-sm">
                        <h2 class="mb-6 text-2xl font-bold font-playfair">Our target users</h2>
                        <p
                            class="mb-6"
                        >The age range for our main target audience from the research was estimated to be between the ages of 20-35 years old as the major users having statistics of 68% of food ordering requests coming from that age range, this doesn't stop the design from being tailored for all but helps focus on our major users needs more in-depth</p>
                        <p>With a vast majority falling into the category of</p>
                        <ol class="list-decimal px-5">
                            <li>Remote workers.</li>
                            <li>College students.</li>
                            <li>Unmarried</li>
                            <li>Utility workers (e.g medical workers): They leave home early and get back late.</li>
                        </ol>
                    </div>
                </div>
                <!-- End of Mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
                <div class="md:flex md:justify-between md:space-x-12">
                    <div class="md:flex-1 mb-28 md:mb-0 text-sm md:text-base">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Business growth</h2>
                        <p
                            class="mb-6"
                        >With so much growth and increase in the online food delivery service, it is an enticing and robust market because it deals with a daily satisfaction of human consumption need and an everyday necessity. The research was taken on the potential growth of the product in the next coming years and from survey, an analysis was determined, one of which is</p>
                        <p>In 2020, China’s market size of online food delivery services reached 102 billion dollars.</p>
                    </div>
                    <div class="md:flex-1">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Estimated growth</h2>
                        <div class>
                            <div class="flex items-center space-x-2 w-7/12 mb-4">
                                <p>2017</p>
                                <div
                                    class="flex justify-end py-2 px-3 bg-brand-gray-5 dark:bg-brand-gray-dark-1 w-full font-semibold rounded-md"
                                >$337</div>
                            </div>
                            <div class="flex items-center space-x-2 w-8/12 mb-4">
                                <p>2021</p>
                                <div
                                    class="flex justify-end py-2 px-3 bg-brand-orange-1 w-full font-semibold text-white rounded-md"
                                >$375</div>
                            </div>
                            <div class="flex items-center space-x-2 w-10/12 mb-4">
                                <p>2025</p>
                                <div
                                    class="flex justify-end py-2 px-3 bg-brand-gray-5 dark:bg-brand-gray-dark-1 w-full font-semibold rounded-md"
                                >$470</div>
                            </div>
                            <div class="flex items-center space-x-2 mb-4">
                                <p>2030</p>
                                <div
                                    class="flex justify-end py-2 px-3 bg-brand-gray-5 dark:bg-brand-gray-dark-1 w-full font-semibold rounded-md"
                                >$650</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16">
                <div class>
                    <div class="mb-16 md:w-5/6 mx-auto text-center text-sm md:text-base">
                        <h1
                            class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                        >The process</h1>
                        <p
                            class="mb-4"
                        >Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
                        <p>
                            Project timeline:
                            <span class="font-bold">4 weeks</span>
                        </p>
                    </div>
                    <div
                        class="md:flex md:flex-wrap md:justify-center md:space-x-4 text-white font-semibold"
                    >
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-blue-2 via-brand-blue-3 to-brand-blue-4"
                        >Stackholder meetings</div>
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-green-1 to-brand-green-2"
                        >Reviews</div>
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-pink-1 to-brand-pink-2"
                        >UX design</div>
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-orange-2 to-brand-orange-3"
                        >UI design</div>
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-purple-1 to-brand-purple-2"
                        >Testing</div>
                        <div
                            class="mb-4 py-4 px-5 rounded-xl bg-gradient-to-r from-brand-red-1 to-brand-red-2"
                        >Documentation</div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
                <div class="md:flex md:items-center md:justify-between md:space-x-12">
                    <div class="md:flex-1 mb-12">
                        <img class="w-full" src="../assets/other-works/trigle-research.png" alt="Research" />
                    </div>
                    <div class="md:flex-1 text-sm md:text-base">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Research</h2>
                        <p
                            class="mb-6"
                        >After listening carefully to stakeholders and the product owners, since they are the first source of information source as they were the ones with the project idea and brief and have to an extent gotten down a bit of research of their own, I began with the UX phase which started with series of intense research.</p>
                        <p>
                            The research comprised of both offline and scheduled offline interviews, then competitive research of other food delivering and restaurant apps.
                            In this process users needs were identified and understood in an in-depth manner and from this personas were generated to be able to personalize the pain points, challenges and identify the core requirements of users
                        </p>
                    </div>
                </div>
            </section>
            <UserExperience :personas="personasArr"/>
            <!-- Mobile version -->
            <section class="block md:hidden max-w-7xl mx-auto py-10 md:py-20 px-4">
                <div class="flex items-center space-x-4 mb-16">
                    <div class="w-1/3">
                        <img class="w-full" src="../assets/other-works/samuel.png" alt="Man photo" />
                    </div>
                    <div class="w-2/3 md:pl-12">
                        <p class="mb-2">
                            <span class="text-lg font-bold">Age:</span> 20 years old
                        </p>
                        <p class="mb-2">
                            <span class="text-lg font-bold">Occupation:</span> Engineer
                        </p>
                        <p class="mb-2">
                            <span class="text-lg font-bold">Status:</span> Single
                        </p>
                    </div>
                </div>
                <div class>
                    <div class>
                        <div class="mb-16">
                            <h2 class="mb-4 text-2xl font-bold font-playfair">Samuel LeJourn</h2>
                            <p
                                class
                            >Samuel is an Accountant with over 3 years of working experience, he is a graduate of the Covenant University Ota. He is calm, inquisitive, career-driven and a lover of family</p>
                        </div>
                        <div class="mb-16">
                            <h4 class="text-lg font-bold mb-4">Goals and needs</h4>
                            <p
                                class="text-sm"
                            >Samuel moves from site to site depending on the job and most times it carries me interstates, hence Samuel needs to be able to get a good meal of my choice regardless of being new in town</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold mb-4">Pain points</h4>
                            <p
                                class="text-sm"
                            >Knowledge of varieties of restaurants to hang out with friends or meet new people so she ends up exploring the same old places over again, it gets tiring. Also difficulty in navigating to a new restaurant even when an address is given, the use of google maps are not as easy as the app makes it sound</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="block md:hidden max-w-7xl mx-auto py-10 md:py-20 px-4">
                <div class="flex items-center space-x-4 mb-16">
                    <div class="w-1/3">
                        <img class="w-full" src="../assets/other-works/ari.png" alt />
                    </div>
                    <div class="w-2/3 md:pl-12">
                        <p class="mb-2">
                            <span class="text-lg font-bold">Age:</span> 24 years old
                        </p>
                        <p class="mb-2">
                            <span class="text-lg font-bold">Occupation:</span> Illustrator
                        </p>
                        <p class="mb-2">
                            <span class="text-lg font-bold">Status:</span> Single
                        </p>
                    </div>
                </div>
                <div class>
                    <div class>
                        <div class="mb-16">
                            <h2 class="mb-4 text-2xl font-bold font-playfair">Farida Alasha</h2>
                            <p
                                class
                            >Ari is a graphic illustrator that lives in New York With over 3 years of working experience and over 200 successful designs. She is a lover of memes and appreciates the company of friends</p>
                        </div>
                        <div class="mb-16">
                            <h3 class="text-lg font-bold mb-4">Goals and needs</h3>
                            <p
                                class="text-sm"
                            >Ari needs to be able to explore around the city to see various forms of like and their meals are a key part of that life and having a place(s) where she can sit with friends and share the moments</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Pain points</h3>
                            <p
                                class="text-sm"
                            >Knowledge of varieties of restaurants to hang out with friends or meet new people so she ends up exploring the same old places over again, it gets tiring. Also difficulty in navigating to a new restaurant even when an address is given, the use of google maps are not as easy as the app makes it sound</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End of Mobile version -->
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16">
                <div class>
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >How might we</h2>
                    <p
                        class="md:w-2/3 mb-6 text-sm md:text-base"
                    >Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div
                            class="md:mb-10 p-6 bg-brand-gray-5 dark:bg-brand-gray-dark-1 rounded-md"
                        >
                            Create a way to access to
                            <span class="font-bold">multiple restaurants</span> at the same time
                        </div>
                        <div
                            class="md:mb-10 p-6 bg-brand-gray-5 dark:bg-brand-gray-dark-1 rounded-md"
                        >
                            How might we be able to
                            <span class="font-bold">book a space</span> for hangouts with friends
                        </div>
                        <div
                            class="md:mb-10 p-6 bg-brand-gray-5 dark:bg-brand-gray-dark-1 rounded-md"
                        >
                            Get clear
                            <span class="font-bold">directions to such restaurants</span> without a third party help
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
                <div class>
                    <h2
                        class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                    >Product Goal</h2>
                    <p
                        class="mb-12"
                    >From results gotten from research and identifying of users pain points, we discovered that users want to be able to have their meals regardless of location or language, also they want to be able to have space where they can create memories with friends and loved ones. hence these solutions were brought to life and are listed below.</p>
                    <div class="md:flex md:space-x-8 lg:space-x-12">
                        <div class="mb-10 md:mb-0">
                            <div class="mb-4 md:mb-8">
                                <img src="../assets/other-works/reservation.png" alt="Reservation" />
                            </div>
                            <h5 class="mb-3 text-lg font-bold">Space reservation</h5>
                            <p>The ability to reserve a spot in the restaurant for yourself and loved one so you don't have to hope you meet space and probably be disappointed</p>
                        </div>
                        <div class="mb-10 md:mb-0">
                            <div class="mb-4 md:mb-8">
                                <img src="../assets/other-works/order.png" alt="Order" />
                            </div>
                            <h5 class="mb-3 text-lg font-bold">Make an order</h5>
                            <p>This is the standard and most basic for any restaurant app and that's being able to order food of your choice now from a range of available stores/restaurants</p>
                        </div>
                        <div>
                            <div class="mb-4 md:mb-8">
                                <img src="../assets/other-works/ar.png" alt="AR Directions" />
                            </div>
                            <h5 class="mb-3 text-lg font-bold">AR Directions</h5>
                            <p>Due to the constant pain points of users having issues with locating the restaurants due to their unfamiliarity of the terrain and the complexity of understanding google maps, a more simplified means of direction pointers should be used</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16">
                <div class="mb-28">
                    <img
                        v-if="themeColor === 'light'"
                        class="w-full"
                        src="../assets/other-works/map-ordering-dark.png"
                        alt="User Journey map (Ordering)"
                    />
                    <img
                        v-else
                        class="w-full"
                        src="../assets/other-works/map-ordering.png"
                        alt="User Journey map (Ordering)"
                    />
                </div>
                <div>
                    <img
                        v-if="themeColor === 'light'"
                        class="w-full"
                        src="../assets/other-works/map-booking-dark.png"
                        alt="User Journey map (Booking)"
                    />
                    <img
                        v-else
                        class="w-full"
                        src="../assets/other-works/map-booking.png"
                        alt="User Journey map (Booking)"
                    />
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
                <div class="lg:w-5/6 mx-auto mb-20 text-center text-sm md:text-base">
                    <h1
                        class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                    >Onboarding to the rescue</h1>
                    <p
                        class="md:mb-0 sm:w-2/3 md:w-3/4 lg:w-4/6 mx-auto"
                    >The onboarding flow guides visitors through a quick transition that explains the summary of the experience.</p>
                </div>
                <div class="hidden md:flex items-center justify-center space-x-16">
                    <div>
                        <img class src="../assets/other-works/phone-1.png" alt="Phone" />
                    </div>
                    <div>
                        <img class src="../assets/other-works/phone-2.png" alt="Phone" />
                    </div>
                    <div>
                        <img class src="../assets/other-works/phone-3.png" alt="Phone" />
                    </div>
                </div>
                <div
                    class="hidden md:flex items-center justify-center space-x-16 w-2/3 mx-auto mt-20"
                >
                    <div>
                        <img class src="../assets/other-works/phone-4.png" alt="Phone" />
                    </div>
                    <div>
                        <img class src="../assets/other-works/phone-5.png" alt="Phone" />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="md:hidden">
                    <img class="mx-auto" src="../assets/other-works/phone-1.png" alt="Phone" />
                </div>
                <!-- End of mobile version -->
            </section>
            <section class="max-w-7xl mx-auto px-4 md:px-16">
                <LayoutOne :page="home" :headerFont="headerFont" />
            </section>
            <section class="max-w-7xl mx-auto px-4 md:px-16">
                <LayoutTwo :page="restaurant" :headerFont="headerFont" />
                <!-- Mobile version -->
                <div class="block sm:hidden">
                    <div class="mb-12">
                        <h2 class="mb-6 text-2xl font-bold font-playfair">Restaurant page</h2>
                        <p
                            class="mb-6"
                        >This view is for the selected restaurant, you get to have banner of a meal the reason is to give an expectation of what the restaurant offers, which in turn increases possibilities of making a purchase from that restaurant. A good banner increases order by 50%</p>
                        <p>The second screen indicates when the user scrolls upwards, to prevent indicators of the restaurant you are on to leave leaving you guessing where you are again, the micro interaction works in such a way that the logo and name changes poition to the top onscroll</p>
                    </div>
                    <div class>
                        <img class="w-full" src="../assets/other-works/restaurant-page-photo.png" alt="Phones" />
                    </div>
                </div>
                <!-- End of mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-16">
                <div
                    class="sm:flex sm:items-center sm:justify-between sm:space-x-12 text-sm md:text-base"
                >
                    <div class="sm:flex-1 mb-12 sm:mb-0">
                        <h2
                            class="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Other features</h2>
                        <p class="mb-6">These compirses of</p>
                        <ol class="list-decimal pl-5">
                            <li
                                class="mb-4"
                            >The AR direction feature: when in a restaurant, once you navigate to the locations, there is a display of an overview of the location and potential time estimate depending on your mode of transport. Clicking on te GET DIRECTIONS button brings up the AR feature that gives precise view and directions to your destination</li>
                            <li>The next feature is the book a reservation: here the user has the ability to select a date, the number of guests that would be with him or a reservation for himself alone and the time he would want to come</li>
                        </ol>
                    </div>
                    <div class="sm:flex-1">
                        <img class="w-full" src="../assets/other-works/other-features-photo.png" alt="Phones" />
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16">
                <div class="mb-20 text-center text-sm md:text-base">
                    <h1
                        class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
                    >Payment options</h1>
                    <p
                        class="sm:w-2/3 md:w-10/12 mx-auto"
                    >In order to keep Trigle flexible and modern, payment options like card, bank transfer and cryptocurrency are enabled. For the card aswell Trigle provides a simplified solution aswell instead of typing a scan of the card fills its respective text field</p>
                </div>
                <div class="hidden md:flex md:items-center md:justify-between md:space-x-8">
                    <div>
                        <img class="w-full" src="../assets/other-works/payment-phone-1.png" alt="Payment phone" />
                    </div>
                    <div>
                        <img class="w-full" src="../assets/other-works/payment-phone-2.png" alt="Payment phone" />
                    </div>
                    <div>
                        <img class="w-full" src="../assets/other-works/payment-phone-3.png" alt="Payment phone" />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden">
                    <img class="mx-auto" src="../assets/other-works/payment-phone-2.png" alt="Payment phone" />
                </div>
                <!-- End of mobile version -->
            </section>
            <section class="max-w-7xl mx-auto pt-20">
                <h1
                    class="mb-24 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
                >+70 design screens</h1>
                <div>
                    <img v-if="themeColor === 'light'" src="../assets/other-works/screens-dark.png" alt="Screens" />
                    <img v-else src="../assets/other-works/screens.png" alt="Screens" />
                </div>
            </section>
            <section class="py-40 bg-brand-black-4 dark:bg-brand-gray-dark-1">
                <div class="hidden md:block">
                    <div class="flex flex-wrap items-center justify-center space-x-4 mb-14">
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-1.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-2.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-3.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-4.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-5.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-6.png" alt="Phone" />
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-4">
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-7.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-8.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-9.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-10.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-11.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class="w-full" src="../assets/other-works/other-phone-12.png" alt="Phone" />
                        </div>
                    </div>
                </div>
                <div class="block md:hidden">
                    <div class="flex flex-wrap items-center justify-center space-x-4 mb-14">
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-1.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-2.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-2.png" alt="Phone" />
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-4">
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-7.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-8.png" alt="Phone" />
                        </div>
                        <div class="flex-1">
                            <img class src="../assets/other-works/other-phone-8.png" alt="Phone" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-10 md:py-40 px-4 md:px-16">
                <div
                    class="md:flex md:items-center md:justify-between md:space-x-12 text-sm md:text-base"
                >
                    <div class="md:flex-1">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Success measurement</h2>
                        <p
                            class="mb-6"
                        >To measure the success of this interface which would guiide iterations i would focus on</p>
                        <ol class="list-decimal pl-5 mb-12 md:mb-0">
                            <li>How many dropoffs happend when creating an order</li>
                            <li>Do users get lost or confuded in using the AR direction mapping</li>
                            <li>How many users dropped of during creating a reservation due to complexity</li>
                        </ol>
                    </div>
                    <div class="md:flex-1">
                        <img
                            v-if="themeColor === 'light'"
                            class="mx-auto md:w-full"
                            src="../assets/other-works/success-photo-dark.png"
                            alt="Success"
                        />
                        <img
                            v-else
                            class="mx-auto md:w-full"
                            src="../assets/other-works/success-photo.png"
                            alt="Success"
                        />
                    </div>
                </div>
            </section>
            <OtherProjects :headerCenter="pos"/>
            <Footer />
        </div>
    </div>
</template>