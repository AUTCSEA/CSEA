import { IoLogoLinkedin } from 'react-icons/io';

const ProfileCard = () => {
  return (
    <div class="bg-red-200 h-52 w-40 relative bg-[url('/ivan.jpg')] bg-cover">
      <div class='absolute bg-white w-full h-full opacity-0 hover:opacity-80 ease-in-out transition-all duration-300 flex flex-col flex-center'>
        <h3 class='font-bold'>Ivan Czar</h3>
        <p>Treasurer</p>
        <IoLogoLinkedin class='text-3xl mt-2' />
      </div>
    </div>
  );
};

export default ProfileCard;
