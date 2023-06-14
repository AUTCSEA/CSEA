import { IoLogoLinkedin } from 'react-icons/io';

const ProfileCard = ({ name, position, linkedinURL, image }) => {
  return (
    <div class="bg-red-200 h-52 w-40 relative bg-[url('/ivan.jpg')] bg-cover">
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
