import './ContactMePageStyling.scss'
import github from '../../Assets/github-logo.png';
import email from '../../Assets/email.png';
import linkedin from '../../Assets/linkedin-logo.png'

function ContactMePage(){
    return(
        <div className='contact-me'>
            <div>
                Contact Me!
            </div>
            <div className='footer-icons'>
                <a href={'https://github.com/kiri-woodruff'} target={"_blank"}>
                    <img src={github} alt='GitHub'/>
                </a>
                <a href={"mailto: kiri@woodruffs.com"} target={"_blank"}>
                    <img src={email}/>
                </a>
                <a href={'https://www.linkedin.com/in/kiri-woodruff/'} target={"_blank"}>
                    <img src={linkedin}/>
                </a>
            </div>
        </div>
    )
}

export default ContactMePage;