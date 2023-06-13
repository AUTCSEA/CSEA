import React from 'react';

const Footer = () => {
  return (
    <footer class='bg-orange-500 w-full h-14 flex items-center justify-between px-10 text-white '>
      <p class='text-white font-bold text-4xl sm:text-5xl'>csea</p>
      <div class='hidden sm:flex flex-row'>
        <a class='pr-5'>Home</a>
        <a class='pr-5'>About Us</a>
        <a class='pr-5'>Become a member</a>
      </div>
    </footer>
  );
};

export default Footer;
