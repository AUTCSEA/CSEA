import '@styles/globals.css';
import ProfileCard from '@components/ProfileCard';
import { use } from 'react';
import { getExecs } from '@utils/getExecs';
import Image from 'next/image';
const About = () => {
  const execs = use(getExecs());
  return (
    <>
      {/* Header Image */}
      <section class=' w-full h-80 sm:h-96 relative flex flex-center bg-orange-500'>
        <div class='w-full h-full absolute'>
          <Image
            src='https://res.cloudinary.com/dlguyvrg5/image/upload/v1686968702/aboutUsBanner_f6kumw.jpg'
            fill={true}
            alt='header'
            loading='eager'
          />
        </div>
        <div class='flex absolute flex-center bg-orange-400 opacity-100 w-full h-full sm:opacity-60'>
          {' '}
          <h1 class='text-3xl my-16 sm:hidden'>Meet the executive team!</h1>
        </div>
      </section>

      {/* About */}
      <section class=' flex flex-col flex-center mb-10'>
        <h1 class='text-3xl my-16 invisible sm:visible'>Meet the executive team!</h1>
        <div class='h-fit grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
          {execs.map((exec) => (
            <ProfileCard
              name={exec.name}
              position={exec.position}
              linkedinURL={exec.linkedinURL}
              image={exec.imageURL}
              placeholder='blur'
              key={exec._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
