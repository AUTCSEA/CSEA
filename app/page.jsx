// Author: Ivan Czar
// Github: https://github.com/ivanczar

import '@styles/globals.css'
import Image from 'next/image'
import AboutCard from '@components/AboutCard'
import Socials from '@components/Socials'
import eyLogo from '@public/images/sponsors/ey.png'
import ezyvetLogo from '@public/images/sponsors/ezyvet.png'
import atlassianLogo from '@public/images/sponsors/atlassian.png'

export const metadata = {
    title: 'Home | CSEA',
    description:
        'Attend our events, network with industry experts, and gain access to internship opportunities within the New Zealand tech industry.',
    openGraph: {
        title: 'Home | CSEA',
        description:
            'Attend our events, network with industry experts, and gain access to internship opportunities within the New Zealand tech industry.',
        url: 'https://csea.co.nz',
        siteName: 'CSEA',
        locale: 'en_NZ',
        type: 'website',
    },
}
const Home = () => {
    return (
        <>
            {/* Hero */}
            <section class="w-full pt-10 pb-20 bg-gradient-to-r from-orange-500 to-yellow-500 h-fit flex-center flex-col mouse-cursor-gradient-tracking">
                <h2 class="text-3xl font-bold text-white opacity-70 cursor-default">{'</>'}</h2>
                <h1 class="text-9xl text-white font-bold cursor-default">csea</h1>
                <p class=" text-white flex text-center cursor-default">Computer Science & Engineering Association</p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhGBQs5BR2TInjItgSwcfjcl_UQX1kQbVObsxaPWDdZ81c3w/viewform"
                    target="_blank"
                    class="py-2 px-10 my-10 bg-orange-500 text-white rounded-md hover:bg-white hover:text-orange-500 ease-in-out transition-all duration-300"
                >
                    Join CSEA
                </a>
                <Socials size="6xl" width="44" />
            </section>

            {/* What we do */}
            <section class="w-full py-20 flex flex-col flex-center bg-slate-200">
                <h1 class="text-3xl">What we do</h1>
                <p class="mt-10 text-center px-10">
                    We are a student run club for AUT but students from other institutions are welcome!
                </p>

                {/* Card container */}
                <div class=" w-screen flex flex-col items-center mt-10 sm:flex-row sm:flex-wrap sm:justify-between px-5 sm:px-10 md:px-54 lg:px-20 ">
                    <AboutCard
                        title="Host Events"
                        subtitle="We regularly host events like hackathons, workshops, and expert
             panels with the help from our sponsors. We also host social events like pub quizzes."
                        icon="IoMdCalendar"
                    />
                    <AboutCard
                        title="Network with industry experts"
                        subtitle="We facilitate networking between members and industry experts so that our members can get a better understanding of the industry."
                        icon="IoIosPeople"
                    />
                    <AboutCard
                        title="Gain industry insights"
                        subtitle="From attending the events and meeting experts, our members gain 
            access to a wealth of knowledge and insights."
                        icon="IoMdInformationCircleOutline"
                    />
                    <AboutCard
                        title="Internship Opportunities"
                        subtitle="We help our members find internships and graduate roles through our connections with industry experts and sponsors, and through our Internship Portal."
                        icon="IoIosBriefcase"
                    />
                </div>
            </section>

            {/* Become a member */}
            <section class="py-20 sm:px-44 flex flex-col items-center sm:items-start bg-[url('/images/backgrounds/2bg-main.png')] bg-cover w-full h-96">
                <h1 class="text-3xl ">Become a member</h1>
                <p class="mt-5 text-center sm:text-left px-10 sm:px-0">
                    Become a member to get notified about our latest events
                    <br /> and workshops, and to gain access to our Internship Portal and Discord server!
                </p>
                <a
                    class="py-2 px-10 mt-10 border-4 border-orange-500  text-orange-500 font-bold rounded-md hover:bg-orange-500 hover:text-white ease-in-out transition-all duration-300"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhGBQs5BR2TInjItgSwcfjcl_UQX1kQbVObsxaPWDdZ81c3w/viewform"
                    target="_blank"
                >
                    Join Us
                </a>
            </section>

            {/* Sponsors */}
            <section class="pt-20 pb-44 sm:px-20 bg-slate-200 flex flex-col ">
                <h1 class="text-3xl self-center">Our Sponsors</h1>
                <p class="mt-10 self-center text-center px-10">We are proud to share our sponsors for 2023</p>

                {/* Gold sponsors */}
                <span class="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent text-6xl font-bold mt-20 self-center">
                    GOLD
                </span>
                <div class="flex flex-row items-center justify-center mt-24 h-24">
                    <Image src={eyLogo} alt="EY" class="sm:h-40 h-10 w-auto  " />
                    <Image src={ezyvetLogo} alt="ezyVet" class="sm:w-2/12 w-1/2" />
                </div>

                <hr class="h-px w-4/5 my-20 bg-black border-0 dark:bg-gray-700 flex self-center" />

                {/* Silver Sponsors */}
                <span class="bg-gradient-to-r from-slate-400 via-zinc-200 to-slate-400 bg-clip-text text-transparent text-6xl font-bold self-center">
                    Silver
                </span>
                <div class="flex flex-row items-center justify-evenly mt-10">
                    <Image src={atlassianLogo} alt="Atlassian" class="sm:w-2/12 w-1/2 " />
                </div>
            </section>
        </>
    )
}

export default Home
