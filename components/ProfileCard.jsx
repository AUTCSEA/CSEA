import { IoLogoLinkedin } from 'react-icons/io'
import Image from 'next/image'

const ProfileCard = ({ name, position, linkedinURL, image }) => {
    return (
        <div className="h-52 w-40 relative">
            <Image
                style={{ 'object-fit': 'cover' }}
                fill={true}
                src={`https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/q_auto/fl_lossy/f_auto/${image}`}
                sizes="50vw"
                alt={name}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8WSxWDwAF8gIDPBcqaAAAAABJRU5ErkJggg=="
            ></Image>

            <div className="absolute bg-white w-full h-full opacity-0 hover:opacity-80 ease-in-out transition-all duration-300 flex flex-col flex-center">
                <h3 className="font-bold">{name}</h3>
                <p>{position}</p>
                <a href={linkedinURL} target="_blank">
                    <IoLogoLinkedin href={linkedinURL} className="text-3xl mt-2" />
                </a>
            </div>
        </div>
    )
}

export default ProfileCard
