import './FooterStyling.css';
import github from '../Images/github-logo.png';
import email from '../Images/email.png';
import linkedin from '../Images/linkedin-logo.png'

const Footer = () => {
    return (
        <div className="footer">
                <a href={'https://github.com/kiri-woodruff'}>
                    <img src={github} alt='GitHub'/>
                </a>
                <a href={"mailto: kiri.woodruff@gmail.com"}>
                    <img src={email}/>
                </a>
                <a href={'https://www.linkedin.com/in/kiri-woodruff/'}>
                    <img src={linkedin}/>
                </a>
        </div>
    )
}

export default Footer;