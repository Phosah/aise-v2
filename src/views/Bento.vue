<script setup>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Footer from "../components/Footer.vue"
import OtherProjects from "../components/OtherProjects.vue"
import LayoutOne from '../components/LayoutOne.vue';
import LayoutThree from '../components/LayoutThree.vue';
import bentoCover from '../assets/bento/bento-home.png'
import photo1 from "../assets/bento/background.png"
import photo2 from '../assets/bento/interview.png'
import photo3 from '../assets/bento/dashboard-1.png'
import photo4 from '../assets/bento/job-creation.png'
import photo5 from '../assets/bento/hiring-process.png'
import photo6 from '../assets/bento/appraisal.png'
import photo7 from '../assets/bento/leave-management.png'
import photo8 from '../assets/bento/time-management.png'
import photo9 from '../assets/bento/employee-management.png'

const info = {
    title: "People by Bento",
    text: "Taking away the complexities and the work overload that comes with managing an organizations workforce with spreasheets and multiple files",
    img: bentoCover,
    alt: "bento",
    mainContent: "People by Bento is an HR tool to help manage employees from hiring to onboarding, to talent management, to appraisals, to leave management, to separation, and much more...",
    subContent: "People by bento get to provide this solution by giving an easy-to-use interface that comprises various nodules needed for proper employee management, this includes modules like time management, Employee management, Appraisal, Onboarding, and offboarding management.",
    role: "Product Design",
    client: "bento africa",
    duration: "3 months",
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
const dashboard = {
    title: "Dashboard",
    paragraphs: [
        "The dashboard of the HR tool was set to give an immediate overview of the activities of the organization, its standing in terms of employee strength, and the ability to communicate with all employees at once by giving the ability to send a broadcast message to any department or employee of your choice",
    ],
    
    img: photo3,
    alt: "Interview"
}
const management = {
    title: "Employee Management",
    paragraphs: [
        "The employee management section helps manage your employee number in terms of contract workers, full tie, part-time, interns, etc and have a storage of all their details and records like leave and appraisal history, personal details like birthdays and hobbies to be able to relate with them better in a more human level ",
    ],
    
    img: photo9,
    alt: "management"
}
const job = {
    title: "Job Creation",
    paragraphs: [
        "Job creation is one major part of every organization. This feature is set to help organizations create a process that works for them as they get to be able to set the levels of the interview process, the hiring team, the method of sharing, have an archive of interview questions, and share the post on social media for talents to see",
    ],
    
    img: photo4,
    alt: "job"
}
const hiring = {
    title: "Hiring Process",
    paragraphs: [
        "The hiring process in every organization is tasking and cha\llenging when not done properly, People by bento solves that problem by giving you an organized flow for your hiring process from accepting talent applications, reviewing CVs both with ATS trackers and manually, and Scheduling interview stages based on what was set in the job creation e.g, phone interview, onsite or google meet etc and have all these documented as steps. You also can discuss and drop comments on an applicant so others in the hiring team can see it as well",
    ],
    
    img: photo5,
    alt: "hiring"
}
const appraisal = {
    title: "Appraisal",
    paragraphs: [
        "To track and monitor employees' productivity over time, you need a way to review their performance and this is where appraisals come in as your solution. Here you get to assign a 1:1 appraisal or a 360 appraisal which means multiple people from all over the company or within your department (This is et by you tho, it's that flexible 😉) appraise an employee and judge his performance-based of his set KPI and company KPI and goals",
    ],
    
    img: photo6,
    alt: "appraisal"
}
const leave = {
    title: "Leave Management",
    paragraphs: [
        "With the leave management, you get to be able to be the good HR and grant employees leave based on the various leave types, track the number of theaves they have taken this year so you know how to approve days so he/she doesn't take more than the allowed days in the employee contract, except on emergency cases. Also, track those currently on leave and when they would be done",
    ],
    
    img: photo7,
    alt: "management"
}
const time = {
    title: "Time Tracking & Shift Management",
    paragraphs: [
        "Especially for onsite workers in large organizations with many branches and lots of employees its difficult to track who comes to work and on time as people can easily sign an attendance for anyone, So with People, we have incorporated a facial recognition software that would reference an employees face when scanned and check through the list of employees to get a match and mark him present while recording the time",
    ],
    
    img: photo8,
    alt: "management"
}
const themeMode = "light"
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
            <div class="mb-12">
                <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">The briefings began</h3>
                <p class="mb-4">During the first week of joining the team and the People by Bento project I was briefed about the overall scope of what Bento as a brand was trying to solve and what led to the vision of People</p>
                <p class="mb-4">The next step was to have scheduled calls with people from the sales team as they are the ones that have been on the field and gotten direct hints on the feedback of some of the customers who use the Bento Payroll product for their organization and had issues managing their organization as well.</p>
                <p class="mb-4">The next few days were a series of calls with the support team and support team lead and this was to get insights on issues that have been reported as bento runs open support and feedback channel that takes user's requests and issues to process so the support team has had direct info on the user's pain points</p>
                <p>The final days were calls with the engineering team to also get insights from them and the size of the team so I could properly align business goals, user needs, and Engineering strengths in the design process.</p>
            </div>
            <div>
                <h5 class="text-lg font-new-paris-kingsize font-bold">Findings</h5>
                <div class="flex">
                    <img src="../assets/bento/note1.png" alt="Notes">
                    <img src="../assets/bento/note2.png" alt="Notes">
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <LayoutOne :page="interview" />
        </section>
        <section class="max-w-7xl mx-auto md:my-40 my-20 px-6">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="md:flex-1 mb-12 md:mb-0">
                    <h3 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Sneak peak on Competitors</h3>
                    <p class="mb-4"> After successful interviews I decided to take a peek at what competitors were doing, sadly there was no competitor in the Nigerian space to see how the solutions were structured for the current market and identify the lapses so the competitive analysis was focused on foreign companies.</p>
                    <p>Even tho the psychology and the mode of operations of the business in various countries differ as this would affect the way HR works, it was still goo room to understand the core functionalities needed for an HR/ employee management software the flows and value proposition</p>
                </div>
                <div class="md:flex-1">
                    <div class="">
                        <div class="flex space-x-8 space-y-8 justify-center">
                            <div>
                                <img src="../assets/bento/logo1.svg" alt="logo"/>
                            </div>
                            <div>
                                <img src="../assets/bento/logo2.svg" alt="logo" />
                            </div>
                        </div>
                        <div class="flex space-x-8 space-y-8 justify-center">
                            <div>
                                <img src="../assets/bento/logo3.svg" alt="logo" />
                            </div>
                            <div>
                                <img src="../assets/bento/logo4.svg" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Interviews With HR’s</h3>
            <p class="mb-4">After the competitive study was done the next step was to interview HRs in the Nigerian space  as this aimed to understand the mode of operations of a standard HR and its operations in an organization before building a tool to ease the processes and make life easier</p>
            <p class="mb-4">About 3 HRs were interviewed and valuable insights were gotten. One of the major insights gotten was HR practices were dynamic and a couple of times specific to the organization</p>
        </section>
        <section class="my-20 md:my-40">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="mb-8 text-2xl md:text-3xl font-bold font-new-paris-kingsize">HMW (How might we).</h1>
            </div>
            <div><img class="w-full" src="../assets/bento/notes.png" alt="Notes" /></div>
        </section>
        <section class="max-w-7xl mx-auto my-20 px-6">
            <h1 class="mb-6 text-6xl font-new-paris-kingsize">High Fidelity Designs</h1>
            <div>
                <LayoutThree :page="dashboard" />
                <LayoutThree :page="management" />
                <LayoutThree :page="job" />
                <LayoutThree :page="hiring" />
                <div>
                    <h3 class="font-new-paris-kingsize mb-4 text-2xl md:text-3xl font-bold">Employee Onboarding</h3>
                    <p class="mb-4">Employee onboarding is a vital aspect of an employee's experience in joining a team as it is the first impression the company gives an employee for joining so having it done well is key. I designed the product in a way that its easy to set up a mail and assign an onboarding/work buddy to guide the employee during his/her initial stages. Also the ability to assign necessary software, and hardware for productivity. Finally, all necessary o0nboarding documents including work manual and welcome videos can also be shared</p>
                    <div class="grid grid-cols-2 gap-6">
                        <div><img class="w-full" src="../assets/bento/discover-1.png" alt="discover" /></div>
                        <div><img class="w-full" src="../assets/bento/discover-2.png" alt="discover" /></div>
                        <div><img class="w-full" src="../assets/bento/discover-3.png" alt="discover" /></div>
                        <div><img class="w-full" src="../assets/bento/discover-4.png" alt="discover" /></div>
                    </div>
                </div>
                <LayoutThree :page="appraisal" />
                <LayoutThree :page="leave" />
                <LayoutThree :page="time" />
            </div>
        </section>
        <section class="max-w-7xl mx-auto my-20 md:my-40 px-6">
            <h1 class="mb-12 text-2xl md:text-5xl font-bold font-new-paris-kingsize">Key Takeaways</h1>
            <div class="mb-16">
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Learnings</h2>
                <p class="mb-6">While working on this project, I learned to understand how HRs perform activities and how versatile they can be and this in turn made me better at inclusive designs as I had to give users the best means to solve their problems and carry out their tasks but at the same time give enough room for customization and flexibility as the methods of carrying out operations differs from organization to organization</p>
            </div>
            <div>
                <h2 class="mb-6 text-2xl md:text-3xl font-bold font-new-paris-kingsize">Conclusion</h2>
                <p class="mb-6">People by Bento is a project that has simplified the processes of employee management making it easy to handle either large or small-scale organizations with just one interface and all your headaches of paperwork to maintain organization is curbed, you can easily now monitor EMployees performance and know-how to improve their workflow to take your company to the ne\xt level it deserves.</p>
                <p>Explore the live project: <a class="border-b border-black" href="https://www.bento.africa">https://www.bento.africa</a></p>
            </div>
        </section>
        <OtherProjects />
        <Footer :bgColor="themeMode"/>
    </main>   
</template>