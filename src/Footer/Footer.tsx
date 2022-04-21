import './FooterStyling.scss';
import github from '../Assets/github-logo.png';
import email from '../Assets/email.png';
import linkedin from '../Assets/linkedin-logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                Contact Me!
            </div>
            <div className='footer-icons'>
                <a href={'https://github.com/kiri-woodruff'}>
                    <img src={github} alt='GitHub'/>
                </a>
                <a href={"mailto: kiri@woodruffs.com"}>
                    <img src={email}/>
                </a>
                <a href={'https://www.linkedin.com/in/kiri-woodruff/'}>
                    <img src={linkedin}/>
                </a>
            </div>
        </div>
    )
}

export default Footer;