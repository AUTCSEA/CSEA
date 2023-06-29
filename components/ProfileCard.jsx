import { IoLogoLinkedin } from 'react-icons/io';
import Image from 'next/image';

const ProfileCard = ({ name, position, linkedinURL, image }) => {
  return (
    <div class='h-52 w-40 relative'>
      <Image
        style={{ 'object-fit': 'cover' }}
        fill={true}
        src={`https://res.cloudinary.com/${process.env.CLOUDINARY_ID}/image/upload/q_auto/fl_lossy/f_auto/${image}`}
        sizes='50vw'
        alt={name}
      ></Image>

      <div class='absolute bg-white w-full h-full opacity-0 hover:opacity-80 ease-in-out transition-all duration-300 flex flex-col flex-center'>
        <h3 class='font-bold'>{name}</h3>
        <p>{position}</p>
        <a href={linkedinURL} target='_blank'>
          <IoLogoLinkedin href={linkedinURL} class='text-3xl mt-2' />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
