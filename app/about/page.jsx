import ProfileCard from '@components/ProfileCard';
import globals from '@styles/globals.css';
const About = () => {
  return (
    <>
      {/* Carrousel */}
      <section class="bg-[url('/1bg-main.jpg')] bg-cover bg-no-repeat w-full h-96"></section>

      {/* About */}
      <section class=' flex flex-col flex-center mb-10'>
        <h1 class='text-3xl my-16'>Meet the executive team!</h1>
        <div class='h-fit grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
          <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
           <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
           <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
           <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
           <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
           <ProfileCard
            name='Ivan Czar'
            position='Treasurer'
            linkedinURL='https://www.linkedin.com/in/ivanczar/'
          />
        </div>
      </section>
    </>
  );
};

export default About;
