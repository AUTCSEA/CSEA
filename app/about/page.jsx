import ProfileCard from '@components/ProfileCard';
import globals from '@styles/globals.css';
const About = () => {
  return (
    <>
      {/* Carrousel */}
      <section class="bg-[url('/1bg-main.jpg')] bg-contain w-full h-96"></section>

      {/* About */}
      <section class='h-full'>
        <h1>Meet the executive team!</h1>
      </section>
      <div class='bg-blue-200 h-96'>
          <ProfileCard />
        </div>
    </>
  );
};

export default About;
