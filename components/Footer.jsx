import Socials from './Socials';
const Footer = () => {
  return (
    <footer class='bg-orange-500 w-full h-20 flex flex-row text-white px-10 items-center'>
      
        <p class='text-white font-bold text-2xl sm:text-5xl mr-10 cursor-default'>csea</p>
        <Socials size='3xl' width='20' />
    </footer>
  );
};

export default Footer;
