'use client';

import '@styles/globals.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaBrain } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import * as Icons from 'react-icons/io';
import eyLogo from '@public/ey.png';
import ezyvetLogo from '@public/ezyvet.png';
import atlassianLogo from '@public/atlassian.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import AboutCard from '@components/AboutCard';
import React from 'react';
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
      <section class='w-full pt-10 pb-20 bg-gradient-to-r from-orange-500 to-yellow-500 h-fit flex-center flex-col'>
        <h2 class='text-3xl font-bold text-white opacity-70 leading-none'>
          {'</>'}
        </h2>
        <h1 class='text-9xl text-white font-bold leading-none'>csea</h1>
        <p class=' text-white'>Computer Science & Engineering Association</p>
        <button class='py-2 px-10 mt-7 bg-orange-500 text-white rounded-md '>
          Join CSEA
        </button>

        <div class='w-40 mt-10 flex text-white text-5xl justify-between'>
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
      </section>

      {/* What we do */}
      <section class='w-full py-20 flex flex-col flex-center bg-slate-200'>
        <h1 class='text-3xl'>What we do</h1>
        <p class='mt-10'>
          We are a student run club for AUT but any students from other
          education nare welcome!
        </p>
        {/* https://codesandbox.io/s/dynamiciconload-react-icons-6imgv?file=/src/DynamicIcon.tsx */}
        {/* Card container */}
        <div class=' w-screen flex flex-col items-center mt-10 sm:flex-row sm:flex-wrap sm:justify-between px-5 sm:px-44 '>
          {about.map((item) => (
            <AboutCard
              title={item.title}
              subtitle={item.description}
              icon={Icons[item.icon]}
              key={item._id}
            />
          ))}
          {/* <AboutCard
            title={'Host Events'}
            subtitle={
              'We regularly host events with the help from our sponsors. These events include hackathons, workshops and talk shows'
            }
            icon={<FaBrain class='text-9xl self-center' />}
          />
          <AboutCard
            title={'Meet experts from industry'}
            subtitle={
              'We invite many experts to our events. Students get a chance to interact with our hosts and gain knowledge about the software industry'
            }
            icon={<BsPeople class='text-9xl self-center' />}
          />
          <AboutCard
            title={'Gain future insights'}
            subtitle={
              'From attending the events and meeting experts, our students get a better knowledge and insights about the software engineering industry.'
            }
            icon={<AiOutlineCalendar class='text-9xl self-center' />}
          /> */}
        </div>
      </section>
      {/* Become a member */}
      {/* bg-cover bg-no-repeat bg-[url('/bg-main.jpg')] bg-opacity-50 w-full h-96 */}

      <section class="py-20 sm:px-44 flex flex-col items-center sm:inline-block bg-[url('/1bg-main.jpg')] bg-cover w-full)">
        <h1 class='text-3xl'>Become a member</h1>
        <p class='mt-5'>
          Youll get notified about our latest events and workshops
        </p>
        <button class='py-2 px-10 mt-10 border-4 border-orange-500 bg-white text-orange-500 font-bold rounded-md'>
          Join Us
        </button>
      </section>
      {/* Sponsors */}
      <section class='py-20 sm:px-20 bg-slate-200 flex flex-col items-center'>
        <h1 class='text-3xl'>Our Sponsors</h1>
        <p class='mt-10'>We are proud to share out sponsors for 2023</p>

        {/* Gold sponsors */}
        <span class='bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent text-6xl font-bold mt-20'>
          GOLD
        </span>
        <div class='flex flex-row items-center justify-evenly mt-5'>
          <Image src={ezyvetLogo} alt='ezyVet' class='sm:w-3/12 w-1/2 ' />
          <Image
            src={eyLogo}
            alt='EY'
            class='sm:w-1/12 w-3/12 pb-5 sm:pb-20 '
          />
        </div>

        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

        {/* Silver Sponsors */}
        <span class='bg-gradient-to-r from-slate-400 via-zinc-200 to-slate-400 bg-clip-text text-transparent text-6xl font-bold'>
          Silver
        </span>
        <div class='flex flex-row items-center justify-evenly mt-10'>
          <Image src={atlassianLogo} alt='Atlassian' class='sm:w-3/12 w-1/2 ' />
        </div>
      </section>
    </>
  );
};

export default Home;
