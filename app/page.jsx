'use client';

import '@styles/globals.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import AboutCard from '@components/AboutCard';
import Socials from '@components/Socials';
import eyLogo from '@public/ey.png';
import ezyvetLogo from '@public/ezyvet.png';
import atlassianLogo from '@public/atlassian.png';

const Home = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      const response = await fetch('/api/about');
      const data = await response.json();
      setAbout(data);
      console.log(data);
    };
    getAbout();
  }, []);

  return (
    <>
      {/* Hero */}
      <section class='w-full pt-10 pb-20 bg-gradient-to-r from-orange-500 to-yellow-500 h-fit flex-center flex-col mouse-cursor-gradient-tracking'>
        <h2 class='text-3xl font-bold text-white opacity-70 leading-none'>
          {'</>'}
        </h2>
        <h1 class='text-9xl text-white font-bold leading-none'>csea</h1>
        <p class=' text-white flex text-center'>
          Computer Science & Engineering Association
        </p>
        <button
          onClick='https://docs.google.com/forms/d/e/1FAIpQLSfhGBQs5BR2TInjItgSwcfjcl_UQX1kQbVObsxaPWDdZ81c3w/viewform'
          target='_blank'
          class='py-2 px-10 my-10 bg-orange-500 text-white rounded-md hover:bg-white hover:text-orange-500 ease-in-out transition-all duration-300'
        >
          Join CSEA
        </button>
        <Socials size='6xl' width='44' />
      </section>

      {/* What we do */}
      <section class='w-full py-20 flex flex-col flex-center bg-slate-200'>
        <h1 class='text-3xl'>What we do</h1>
        <p class='mt-10 text-center'>
          We are a student run club for AUT but any students from other
          education nare welcome!
        </p>

        {/* Card container */}
        <div class=' w-screen flex flex-col items-center mt-10 sm:flex-row sm:flex-wrap sm:justify-between px-5 sm:px-10 md:px-54 lg:px-40 '>
          {about != null &&
            about.map((item) => (
              <AboutCard
                title={item.title}
                subtitle={item.description}
                icon={item.image}
                key={item._id}
              />
            ))}
        </div>
      </section>

      {/* Become a member */}
      <section class="py-20 sm:px-44 flex flex-col items-center sm:inline-block bg-[url('/2bg-main.png')] bg-cover w-full h-96">
        <h1 class='text-3xl '>Become a member</h1>
        <p class='mt-5 text-center sm:text-left'>
          Youll get notified about our latest events and workshops
        </p>
        <button class='py-2 px-10 mt-10 border-4 border-orange-500  text-orange-500 font-bold rounded-md hover:bg-orange-500 hover:text-white ease-in-out transition-all duration-300'>
          Join Us
        </button>
      </section>

      {/* Sponsors */}
      <section class='pt-20 pb-44 sm:px-20 bg-slate-200 flex flex-col '>
        <h1 class='text-3xl self-center'>Our Sponsors</h1>
        <p class='mt-10 self-center text-center'>
          We are proud to share out sponsors for 2023
        </p>

        {/* Gold sponsors */}
        <span class='bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent text-6xl font-bold mt-20 self-center'>
          GOLD
        </span>
        <div class='flex flex-row items-center justify-center mt-10'>
          <Image src={eyLogo} alt='EY' class='sm:h-40 h-10 w-auto  ' />
          <Image src={ezyvetLogo} alt='ezyVet' class='sm:w-2/12 w-1/2' />
        </div>

        <hr class='h-px w-4/5 my-20 bg-black border-0 dark:bg-gray-700 flex self-center' />

        {/* Silver Sponsors */}
        <span class='bg-gradient-to-r from-slate-400 via-zinc-200 to-slate-400 bg-clip-text text-transparent text-6xl font-bold self-center'>
          Silver
        </span>
        <div class='flex flex-row items-center justify-evenly mt-10'>
          <Image src={atlassianLogo} alt='Atlassian' class='sm:w-2/12 w-1/2 ' />
        </div>
      </section>
    </>
  );
};

export default Home;
