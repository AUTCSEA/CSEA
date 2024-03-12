import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'

const Socials = ({ size: textSize, width }) => {
    return (
        <div className={`w-${width} flex text-white text-${textSize} sm:justify-between  `}>
            <a href="https://www.instagram.com/autcsea/?hl=en" target="_blank">
                <IoLogoInstagram />
            </a>
            <a href="https://www.linkedin.com/company/autcsea/mycompany/" target="_blank">
                <IoLogoLinkedin />
            </a>
            <a href="https://www.facebook.com/AUTCSEA" target="_blank">
                <IoLogoFacebook />
            </a>
        </div>
    )
}

export default Socials
