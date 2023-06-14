import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from 'react-icons/io';

const Socials = () => {
  return (
    <div class='w-40 flex text-white text-5xl justify-between '>
      <a href='https://www.instagram.com/autcsea/?hl=en' target='_blank'>
        <IoLogoInstagram />
      </a>
      <a
        href='https://www.linkedin.com/company/autcsea/mycompany/'
        target='_blank'
      >
        <IoLogoLinkedin />
      </a>
      <a href='https://www.facebook.com/AUTCSEA' target='_blank'>
        <IoLogoFacebook />
      </a>
    </div>
  );
};

export default Socials;
