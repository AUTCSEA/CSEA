"use client"

import Socials from './Socials';
const Footer = () => {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop(e) {
    e.preventDefault();
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer class='bg-orange-500 w-full h-20 flex flex-row text-white px-10 sm:px-32 justify-between'>
      
      <div class='flex flex-row items-center'>

      <p class='text-white font-bold text-2xl sm:text-5xl mr-5 sm:mr-10 cursor-default'>
        csea
      </p>
      <Socials size='3xl' width='20' />
      </div>
      <button onClick={(e) => scrollToTop(e)}>Go to top</button>
    </footer>
  );
};

export default Footer;
