// Author: Ivan Czar
// Github: https://github.com/ivanczar

import '@styles/globals.css'
import Image from 'next/image'
import AboutCard from '@components/AboutCard'
import Socials from '@components/Socials'
import { getCurrentYear } from '@utils/getCurrentYear'

// Sponsors logos
import eyLogo from '@public/images/sponsors/ey.svg'
import sandfieldLogo from '@public/images/sponsors/sandfield.svg'
import suncorpLogo from '@public/images/sponsors/suncorp.svg'
import fisherandpaykelLogo from '@public/images/sponsors/fisherandpaykel.svg'

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
    const currentYear = getCurrentYear()
    return (
        <>
            {/* Hero */}
            <section className="w-full pt-10 pb-20 bg-gradient-to-r from-orange-500 to-yellow-500 h-fit flex-center flex-col mouse-cursor-gradient-tracking">
                <h2 className="text-3xl font-bold text-white opacity-70 cursor-default">{'</>'}</h2>
                <h1 className="text-9xl text-white font-bold cursor-default">csea</h1>
                <p className=" text-white flex text-center cursor-default">
                    Computer Science & Engineering Association
                </p>
                <a
                    // The form has to be updated each year to the new matching one.
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeLug0wQEULQqXvjeA2Im1Gx9w9RXE6RU1-nqCKIfLMCLOKMQ/viewform"
                    target="_blank"
                    className="py-2 px-10 my-10 bg-orange-500 text-white rounded-md hover:bg-white hover:text-orange-500 ease-in-out transition-all duration-300"
                >
                    Join CSEA
                </a>
                <Socials size="6xl" width="44" />
            </section>

            {/* What we do */}
            <section className="w-full py-20 flex flex-col flex-center bg-slate-200">
                <h1 className="text-3xl">What we do</h1>
                <p className="mt-10 text-center px-10">
                    We are a student run club for AUT but students from other institutions are welcome!
                </p>

                {/* Card container */}
                <div className=" w-screen flex flex-col items-center mt-10 sm:flex-row sm:flex-wrap sm:justify-between px-5 sm:px-10 md:px-54 lg:px-20 ">
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
            <section className="py-20 sm:px-44 flex flex-col items-center sm:items-start bg-[url('/images/backgrounds/2bg-main.png')] bg-cover w-full h-96">
                <h1 className="text-3xl ">Become a member</h1>
                <p className="mt-5 text-center sm:text-left px-10 sm:px-0">
                    Become a member to get notified about our latest events
                    <br /> and workshops, and to gain access to our Internship Portal and Discord server!
                </p>
                <a
                    className="py-2 px-10 mt-10 border-4 border-orange-500  text-orange-500 font-bold rounded-md hover:bg-orange-500 hover:text-white ease-in-out transition-all duration-300"
                    href={process.env.GOOGLE_FORM}
                    target="_blank"
                >
                    Join Us
                </a>
            </section>

            {/* Sponsors */}
            <section className="pt-20 pb-44 sm:px-20 bg-slate-200 flex flex-col ">
                <h1 className="text-3xl self-center">Our sponsors for {currentYear}</h1>
                {/* Gold sponsors */}
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent text-6xl font-bold mt-20 self-center">
                    GOLD
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-center mt-24 h-24">
                    <Image src={eyLogo} alt="EY" className="sm:h-40 h-36 w-auto  " />
                </div>

                <hr className="h-px w-4/5 my-20 bg-black border-0 dark:bg-gray-700 flex self-center" />

                {/* Silver Sponsors */}
                <span className="bg-gradient-to-r from-slate-400 via-zinc-200 to-slate-400 bg-clip-text text-transparent text-6xl font-bold self-center">
                    Silver
                </span>
                <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-20 mt-10">
                    <Image src={sandfieldLogo} alt="Sandfield" className="sm:w-2/12 w-1/2 mt-2" />
                </div>

                <hr className="h-px w-4/5 my-20 bg-black border-0 dark:bg-gray-700 flex self-center" />

                {/* Bronze Sponsors */}
                <span className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-6xl font-bold self-center">
                    Bronze
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-evenly mt-10 space-y-12 sm:space-y-0">
                    <Image src={suncorpLogo} alt="Suncorp" className="sm:w-2/12 w-1/2 mt-2" />
                    <Image src={fisherandpaykelLogo} alt="Fisher & Paykel" className="sm:w-2/12 w-1/2 mt-2" />
                </div>
            </section>
        </>
    )
}

export default Home
