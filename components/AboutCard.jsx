import React from 'react';
import Image from 'next/image';
import { FaBrain } from 'react-icons/fa';
const AboutCard = ({ icon, title, subtitle }) => {
  return (
    <div className='max-w-sm h-96 p-10 mt-5 flex flex-col justify-between bg-orange-500 text-white rounded-xl'>
      {/* <FaBrain class='text-9xl self-center' /> */}
      {icon}
      <h1 class='text-2xl font-bold'>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
