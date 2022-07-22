<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import OtherProjects from '../components/OtherProjects.vue';
import LayoutOne from '../components/LayoutOne.vue'
import LayoutTwo from '../components/LayoutTwo.vue'
import dabaCover from '../assets/daba/daba-home.png'
import background from '../assets/daba/background.png'
import LayoutThree from '../components/LayoutThree.vue';
import CreatePersonas from '../components/CreatePersonas.vue';
import persona1 from "../assets/daba/persona-1.png"
import persona2 from "../assets/daba/persona-2.png"
import screens1 from "../assets/daba/onboarding-screens.png"
import screens2 from "../assets/daba/home-page.png"
import screens3 from "../assets/daba/portfolio-tracking.png"
import screens4 from "../assets/daba/investment-opportunity.png"
import screens5 from "../assets/daba/explore.png"
import screens6 from "../assets/daba/social-investing.png"
import screens7 from "../assets/daba/live-discussions.png"
import screens8 from "../assets/daba/stocks.png"
import screens9 from "../assets/daba/live-investments.png"
import screens10 from "../assets/daba/detailed-report.png"
import screens11 from "../assets/daba/portfolio-plan.png"

const info = {
    title: "daba",
    text: "Bringing a world where daily investors both big and small have access to verified startups in the fastest growing investment continent on the planet",
    img: dabaCover,
    alt: "daba",
    mainContent: "daba is a social alternative investing platform that allows investors of all levels and backgrounds to find and invest in vetted opportunities in Africa",
    subContent: "It gets to solve this by its provision of a social investing platform where verified startups are listed, investment tips and strategies are given to guide new and old investors, key insights, and most importantly social engagements of other investors that helps in giving further assurance.",
    role: "Product Design",
    client: "daba",
    duration: "3 month",
    year: "2021",
    website: "dabafinance.com"
}
const overview = {
    title: "Background",
    paragraphs: [
        "Over the last 10 years, Africa has had a massive growth in the number of emerging startups and this growth had its highest peak between 2020 and 2021 with African startups seen to have raised a total of over $4.3 billion in funding.",
        "As the growth increases Africa’s tech ecosystem becomes more of an untapped goldmine for investors to tap into and yield a lot of returns",
        "Also with the growth of the tech ecosystem in Africa, there has been the desire for thousands of entrepreneurs to join the train of entrepreneurship but have limited funding for their startups and this has stunted the rise of thousands of startups across all of Africa."
    ],
    img: background,
    alt: "background"
}
const role = {
    title: "Role and Approach",
    paragraphs: [
        "Over the last 10 years, Africa has had a massive growth in the number of emerging startups and this growth had its highest peak between 2020 and 2021 with African startups seen to have raised a total of over $4.3 billion in funding.",
        "As the growth increases Africa’s tech ecosystem becomes more of an untapped goldmine for investors to tap into and yield a lot of returns",
        "Also with the growth of the tech ecosystem in Africa, there has been the desire for thousands of entrepreneurs to join the train of entrepreneurship but have limited funding for their startups and this has stunted the rise of thousands of startups across all of Africa."
    ],
}
const personasArr = [
    {
        img: persona1,
        alt: "Ola",
        about: "Ola an African living in the united states, is a self-motivated investor who started investing when she understood the effects of compound interest. Her motivation for investing is to build wealth and ultimately reach financial freedom so she doesn’t have to rely on a 9-5 job. She is an overall long-term holder",
        points: [
            "Startups she has invested in were because she was connected to the founders. It can get frustrating when founders stop giving updates which is a bad sign",
            "Hesitant with investing in startups because of political issues in Africa and inexperienced founders.",
        ],
        goals: [
            "Slow and steady wins the race. But does add risk to her portfolio so she's  looking for safe investments",
            "Stay up to date on investing in Africa since she is from there Healthy return on interest"
        ]
    },
    {
        img: persona2,
        alt: "Emma",
        about: "Emma is an African American born in Chicago. He got introduced to investing when he heard how much his friend makes and this served as a big source of motivation for him. He is willing to sell investments after a good return has been gained but is overall a long-term holder",
        points: [
            "Hesitant to invest in Africa because of news of corruption in certain countries. Lack of understanding of the ecosystem",
            "The word risk comes frequently when she talks about Africa He doesn't know where to start from",
        ],
        goals: [
            "Get investing opportunities in Africa",
            "Get investment information regarding African investments so he can stay up to date",
            "Prioritize social impact when investing",
            "Health ROI would be nice"
        ]
    },
]
const onboarding = {
    title: "Onboarding Screens",
    paragraphs: [
        "The final onboarding screens were aimed to be simple, straightforward, and have a more mature and human feel. Unlike the previous version where you had to complete all the requirements before accessing the app. Here you need only to complete the bare minimum to open an account and have access but limited, there you get to have a feel of the app and get value, but to invest that's when you need to complete those profile info necessary"
    ],
    img: screens1,
    alt: "Onboarding screens",
}
const home = {
    title: "Home Page",
    paragraphs: [
        "After getting the feedback for the initial homepage design the homepage was designed to be a whole lot shorter, and have the major actions accessible from it",
        "From here you can access the daily news which is the core activity of every investor's life, the ability to invest and now he can create a watchlist of stocks and startups that he has an interest in and watch their growth closely so he/.she can act on it"
    ],
    img: screens2,
    alt: "Home page",
}
const portfolio = {
    title: "Portfolio Tracking",
    paragraphs: [
        "Portfolio tracking is a feature for people who have invested in stocks and startups outside daba. ",
        "During the research and interviews one of the issues faced by some investors was the fact that they have some investments in some other places so how do they monitor and track their investments if they focus on daba for investing as they don't want to monitor multiple places"
    ],
    img: screens3,
    alt: "Home page",
}
const investment = {
    title: "Investment Opportunities",
    paragraphs: [
        "Have a wide range of opportunities to invest in, here we also give a test the water campaign to give a feel on how investments can be and the returns, this also helps daba to know the opportunities people would love to have so it's listed as there are s many opportunities.",
        "To invest the startups have to give all the necessary details about their company, their pitch, and any other info especially legal documentation to show credibility",
        "We also give a percentage fit on how this investment aligns with your goals for investing "
    ],
    img: screens4,
    alt: "Investement Opportunities",
}
const explore = {
    title: "Explore",
    paragraphs: [
        "The explore page shows everything the product has to offer and quick access a to aspects of the app with grouped values, for example, the interests chips take you to the interests page that has investments, news, investors, and analysis that are subjected to that interest making it easier for you to make investment decisions. It also leads to News, Groups, New listings, Trending countries and top investors all of these are geared to simplify accessibility."
    ],
    img: screens5,
    alt: "Explore",
}
const social = {
    title: "Social Investing",
    paragraphs: [
        "Its been noticed that people tend to participate more than others are, Now, especially for new investors who don't know what to do social investing helps make decisions especially when there is a community trusting it.",
        "This has been proven to work for the likes of Twitter in which social investing for the crypto scape has helped millions on twitter"
    ],
    img: screens6,
    alt: "Social",
}
const discussions = {
    title: "Live Discussions",
    paragraphs: [
        "Here we have startup founders, and other experts hold tak[lks to both give more awareness and educate investors on various topics, and this evet are created beforehand and scheduled for maximum turnup"
    ],
    img: screens7,
    alt: "Live discussions",
}
const stocks = {
    title: "Invest In Stocks",
    paragraphs: [
        "Investing in stocks has been simplified and at the same time we give a wide range of investment types from The buying and selling to the Recurring buys, stop loss, Stop Limit Order and other key strategies that traders use to maximize their returns, we also guide you on this strategies visually and help automate the flows"
    ],
    img: screens8,
    alt: "Invest In Stocks",
}
const liveInvestments = {
    title: "Live Investing",
    paragraphs: [
        "The live investing feature is like the name says live. At specific times scheduled, startups pitch their businesses to investors on the call as fast and as directly as possible and the investors on the call indicate how much they want to invest"
    ],
    img: screens9,
    alt: "Investing",
}
const detail = {
    title: "Detailed and Summarized Report",
    paragraphs: [
        "The report is like the lifeblood of every investment opportunity, you need to know how this opportunity is doing and its history behind it in detail.",
        "Here daba gives access to a well detailed report that spans pages of information for advanced users but with the mindset of inclusivity I also put in measures to give a summarized version that would be done by experts and help new and lazy reading investors "
    ],
    img: screens10,
    alt: "Details",
}
const plan = {
    title: "Portfolio Plan / Index",
    paragraphs: [
        "The portfolio index is a strategy or incentive given to users, especially new investors who do not know or are unsure of what investment to invest in or stock to buy, so here you can add multiple stocks or startups, and invest in them once after determining the percentage of your investment amount goes to which. Users can also create Plans and for everyone who uses their plan the investor who created it gets some monetary reward"
    ],
    img: screens11,
    alt: "Details",
}
const themeMode = 'light'
</script>

<template>
    <main>
        <Navbar />
        <Header :headerInfo="info" />
        <section class="max-w-7xl mx-auto px-6">
            <LayoutOne :page="overview" />
            <LayoutThree :page="role" />
        </section>
        <section class="max-w-7xl my-20 mx-auto px-6">
            <div class="md:flex md:space-x-12">
                <div class="md:flex-1">
                    <h3 class="mb-6 text-2xl md:text-3xl font-new-paris-kingsize">Research</h3>
                    <div>
                        <p class="mb-4">Prequel to joining the team as a product designer, there was an ongoing interview session of about 32 candidates over google meet. The candidates comprised of expert investors, YC investors, Venture capital investors, and novices and I opted to join this interview process as it was my first step in having a closer connection to the users of the product</p>
                        <p class="mb-4">The research questions were created from the survey data analysis on the research documentation and this served as a guide for the questions asked and gave allowance for open-ended questions triggered by the interviewee's responses</p>
                        <p>The major findings from the interviews were</p>
                        <ul class="pl-6 list-disc">
                            <li>Users were scared of investing in Africa as a result of the scary news about corruption in Africa</li>
                            <li>Users had very limited access to African news and what's going on to be able to make investment decisions as this was a major requirement from expert investors who start their days with a cup of coffee and the daily news</li>
                            <li>Users needed a way to access vetted African startups for investing</li>
                        </ul>
                    </div>
                </div>
                <div class="md:flex-1">
                    <h3 class="mb-6 text-2xl md:text-3xl font-new-paris-kingsize">Some Interview responses</h3>
                    <div class="flex">
                        <div>
                            <div><img src="../assets/daba/note1.png" alt="Note"></div>
                            <div><img src="../assets/daba/note2.png" alt="Note"></div>
                            <div><img src="../assets/daba/note3.png" alt="Note"></div>
                        </div>
                        <div>
                            <div><img src="../assets/daba/note5.png" alt="Note"></div>
                            <div><img src="../assets/daba/note4.png" alt="Note"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-24 md:my-40 mx-auto px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Checking out what competitors are up to</h3>
                <p>The competitor analysis was aimed at providing strategic insights into the features, functions, flows, and feelings evoked by the solutions of the competitors. Red circles are the areas that need improvement</p>
            </div>
            <div><img src="../assets/daba/competitors.png" alt="competitors" /></div>
        </section>
        <section class="my-20 md:my-40 mx-auto px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Insights from the Research & Interviews </h3>
                <p>Based on the data gotten from the research gotten before joining and the research carried by myself after joining, which comprised of User interview, competitive analysis, checking of feedback on competitors.</p>
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Long Term Holding</h4>
                    <p>63% of the investors interviewed are long-term holders of stocks and startup shares </p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Portfolio management</h4>
                    <p>72.4% of the investors manage their portfolio themselves while the remaining 27.6% make use of investment apps </p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Investment Decisions</h4>
                    <p>The top 3 ways mentioned by the interviewees on how they decided to invest were Word of mouth, News, and Investment Apps</p>
                </div>
                <div class="p-6 border border-black border-opacity-25 rounded-md ">
                    <h4 class="mb-4 text-xl font-new-paris-kingsize">Trust Issues</h4>
                    <p>The major words from the investors about African investing were Risk, Political issues and Lots of opportunities</p>
                </div>
            </div>
        </section>
        <section class="my-20 md:my-40 mx-auto px-6">
            <div class="md:w-1/2 mb-12">
                <h3 class="mb-6 text-3xl font-new-paris-kingsize">Creating Personas</h3>
                <p>The personas created were aim at having a mental picture of the type of users wwe would have in order to be able to properly empathize with the users</p>
            </div>
            <CreatePersonas :personas="personasArr" />
        </section>
        <section class="my-20 md:my-40 mx-auto px-6">
            <h1 class="mb-6 text-6xl font-new-paris-kingsize">High Fidelity Designs</h1>
            <div>
                <LayoutThree :page="onboarding" />
                <LayoutOne :page="home" />
                <LayoutTwo :page="portfolio" />
                <LayoutOne :page="investment" />
                <LayoutThree :page="explore" />
                <LayoutOne :page="social" />
                <LayoutTwo :page="discussions" />
                <LayoutThree :page="stocks" />
                <LayoutOne :page="liveInvestments" />
                <LayoutTwo :page="detail" />
                <LayoutThree :page="plan" />
            </div>
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h3 class="mb-4 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Screens from the Webapp</h3>
                <p class="mb-12">Although major activities and focus were on the mobile app as research showed that most users were willing to interact with the application from their mobile devices, a web app version was designed with the same flow but tailored for web experiences to give provisions for users of the web</p>
            </div>
            <div><img class="w-full" src="../assets/daba/webapp-screens.png" alt="Webapp screens" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-12 text-2xl md:text-5xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Learnings</h2>
                <p class="mb-6">While working on this project, I learned to ensure that every decision provides value even if it's just a screen there has to be intentionality in every pixel as users want value and with the shortest number of clicks possible</p>
                <p>It spurred me into researching well on how to instill trust and transparency in a design as the product needs a lot of trust in place to adopt users due to the news that is spread about the African market</p>
            </div>
            <div>
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Conclusion</h2>
                <p class="mb-6">This is a fintech project that I loved so much as it holds an emotional attachment for me as an African, as this is a product that I feel would impact the lives of a lot of Africans and Nigeria where I come from. The ability to get access to funding for your startup would help lives and alleviate poverty in the nation. Also, the ability to have a user that I would become in the nearest future would give me room to invest wisely.</p>
                <p>Explore the live project: <a href="https://www.dabafinance.com">https://www.dabafinance.com</a></p>
            </div>
        </section>
        <OtherProjects />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>