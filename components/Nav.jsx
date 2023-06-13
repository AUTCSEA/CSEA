import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const nav = () => {
  return (
    <nav class='w-full flex items-center justify-between sm:px-32 px-10 py-2 bg-orange-500 text-white '>
      <p class='text-white font-bold text-4xl sm:text-5xl '>csea</p>
      <GiHamburgerMenu class='sm:hidden text-2xl' />
      <div class='hidden sm:flex flex-row'>
        <a class='pr-5'>Home</a>
        <a class='pr-5'>About Us</a>
      </div>
    </nav>
  );
};

export default nav;
