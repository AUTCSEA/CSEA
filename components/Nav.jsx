'use client';

import React from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    document.body.classList.toggle('no-scroll');
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav class='w-full flex items-center justify-between sm:px-32 px-10 py-2 bg-orange-500 text-white stroke'>
        <Link href='/'>
          <p class='text-white font-bold text-4xl sm:text-5xl '>csea</p>
        </Link>
        <IoIosMenu onClick={(e) => handleClick(e)} class='sm:hidden text-2xl' />
        <div class='hidden sm:flex flex-row'>
          <ul>
            <li>
              <Link href='/' class='pr-5'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' class='pr-5'>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div class='flex flex-col justify-center  h-screen w-screen top-0 z-10 bg-white fixed text-3xl'>
          <IoIosClose onClick={(e) => handleClick(e)} class='absolute right-5 top-5'/>
          <div class=' text-center h-32 flex self-center '>
            <ul>
              <li>
                <Link href='/' onClick={(e) => handleClick(e)}>
                  Home
                </Link>
              </li>
              <li class='mt-10'>
                <Link href='/about' onClick={(e) => handleClick(e)}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
