import Socials from './Socials';
const Footer = () => {
  return (
    <footer class='bg-orange-500 w-full h-14 flex items-center justify-between px-10 text-white'>
      <p class='text-white font-bold text-4xl sm:text-5xl'>csea</p>
      <Socials/>
      <div class='hidden sm:flex flex-row'>

      </div>
    </footer>
  );
};

export default Footer;
