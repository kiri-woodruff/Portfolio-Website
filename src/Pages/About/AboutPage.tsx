import './AboutPageStyling.scss'
import kiriPhoto from '../../Assets/kiri-power-pose.jpg'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {motion} from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div className='about-page' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>About Me</title>
                </Helmet>
            </HelmetProvider>
            <h1>Hello there!</h1>
            <div className='about-page-content'>
                <div className='photo'>
                    <img src={kiriPhoto} alt={'Kiri Woodruff'}/>
                </div>
                <div className='about-me'>
                    <p>
                        I'm a Senior at Ball State University majoring in Computer Science with a minor in Sociology.
                    </p>
                    <p>
                        I work at the Digital Corps at Ball State, where we work in interdisciplinary teams to create
                        web applications and other digital products for clients.
                    </p>
                    <p className='what-i-am'>
                        I am about to graduate from college and am extremely passionate about frontend web development
                        with a specialty in frontend styling using CSS and SCSS. I am also a very social person and have
                        used the skills in a personal and professional manner with relationship building and public
                        speaking respectively.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;