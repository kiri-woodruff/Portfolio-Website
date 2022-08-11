import './ContactMePageStyling.scss'
import github from '../../Assets/github-logo.png';
import email from '../../Assets/email.png';
import linkedin from '../../Assets/linkedin-logo.png'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {motion} from "framer-motion";

function ContactMePage() {
    return (
        <motion.div className='contact-me' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}} >
            <HelmetProvider>
                <Helmet>
                    <title>Contact Me</title>
                </Helmet>
            </HelmetProvider>
            <div>
                <h1>Contact Me!</h1>
            </div>
            <div className='positioning'>
                <div className='footer-icons'>
                    <div>
                        <a href={"mailto: kiri@woodruffs.com"} target={"_blank"}>
                            <p>kiri.woodruff@gmail.com</p>
                        </a>
                    </div>
                    <div className='links'>
                        <a href={'https://github.com/kiri-woodruff'} target={"_blank"}>
                            <img src={github} alt='GitHub'/>
                        </a>

                        <a href={'https://www.linkedin.com/in/kiri-woodruff/'} target={"_blank"}>
                            <img src={linkedin}/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactMePage;