'use client';

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav class='w-full flex items-center justify-between sm:px-32 px-10 py-2 bg-orange-500 text-white stroke'>
      <p class='text-white font-bold text-4xl sm:text-5xl '>csea</p>
      <GiHamburgerMenu class='sm:hidden text-2xl' />
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
  );
};

export default Nav;
