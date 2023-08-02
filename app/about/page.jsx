import '@styles/globals.css'
import ProfileCard from '@components/ProfileCard'
import { use } from 'react'
import { getExecs } from '@utils/getExecs'
import Image from 'next/image'

export const metadata = {
    title: 'About Us | CSEA',
    description: 'Meet the executive team behind CSEA!',
}
const About = () => {
    const execs = use(getExecs())
    return (
        <>
            {/* Header Image */}
            <section class=" w-full h-80 sm:h-96 relative flex flex-center bg-orange-500">
                <div class="w-full h-full absolute">
                    <Image
                        src="https://res.cloudinary.com/dlguyvrg5/image/upload/q_auto/fl_lossy/f_auto/v1686968702/aboutBanner_r7ou9h.jpg"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        alt="header"
                        loading="eager"
                    />
                </div>
                <div class="flex absolute flex-center bg-orange-400 w-full h-full opacity-60"></div>
            </section>

            {/* About */}
            <section class=" flex flex-col flex-center mb-10">
                <h1 class="text-3xl my-16 ">Meet the executive team!</h1>
                <div class="h-fit grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {execs.map((exec) => (
                        <ProfileCard
                            name={exec.name}
                            position={exec.position}
                            linkedinURL={exec.linkedinURL}
                            image={exec.imageURL}
                            key={exec._id}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default About
