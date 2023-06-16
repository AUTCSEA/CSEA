import ProfileCard from '@components/ProfileCard';
import { use } from 'react';
import { getExecs } from '@utils/getExecs';
const About = () => {
  const execs = use(getExecs());

  return (
    <>
      {/* Header Image */}
      <section class="bg-[url('/images/backgrounds/1bg-main.jpg')] bg-cover bg-no-repeat w-full h-96 relative">
        <div class='absolute bg-orange-500 opacity-60 w-full h-full'></div>
      </section>

      {/* About */}
      <section class=' flex flex-col flex-center mb-10'>
        <h1 class='text-3xl my-16'>Meet the executive team!</h1>
        <div class='h-fit grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
          {execs.map((exec) => (
            <ProfileCard
              name={exec.name}
              position={exec.position}
              linkedinURL={exec.linkedinURL}
              image={exec.imageURL}
              key={exec._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
