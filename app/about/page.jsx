import ProfileCard from '@components/ProfileCard';
import globals from '@styles/globals.css';
const About = () => {
  return (
    <>
      {/* Carrousel */}
      <section class="bg-[url('/1bg-main.jpg')] bg-contain w-full h-96">

      </section>

      {/* About */}
      <section class='h-full flex flex-col flex-center mb-10'>
        <h1 class='text-3xl my-16'>Meet the executive team!</h1>
      <div class='h-fit grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      </section>
    </>
  );
};

export default About;
