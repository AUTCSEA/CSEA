import '@styles/globals.css'
import ProfileCard from '@components/ProfileCard'
import Image from 'next/image'
import execs from '../../components/data/execs.js'

export const metadata = {
    title: 'About Us | CSEA',
    description: 'Meet the executive team behind CSEA!',
    openGraph: {
        title: 'About Us | CSEA',
        description: 'Meet the executive team behind CSEA!',
        url: 'https://csea.co.nz/about',
        siteName: 'CSEA',
        locale: 'en_NZ',
        type: 'website',
    },
}
const About = () => {
    return (
        <>
            {/* Header Image */}
            <section className=" w-full h-80 sm:h-96 relative flex flex-center bg-orange-500">
                <div className="w-full h-full absolute">
                    <Image
                        src={`https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/q_auto/fl_lossy/f_auto/v1686968702/aboutBanner_r7ou9h.jpg`}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        alt="header"
                        loading="eager"
                    />
                </div>
                <div className="flex absolute flex-center bg-orange-400 w-full h-full opacity-60"></div>
            </section>

            {/* About */}
            <section className=" flex flex-col flex-center mb-10">
                <h1 className="text-3xl my-16 ">Meet the executive team!</h1>
                {execs && (
                    <div className="h-fit grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {execs.map((exec, index) => (
                            <ProfileCard
                                name={exec.name}
                                position={exec.position}
                                linkedinURL={exec.linkedinURL}
                                image={exec.imageURL}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    )
}

export default About
