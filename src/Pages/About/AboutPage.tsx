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
                        I'm a recent graduate of Ball State University having earned a Bachelor's of Science with a
                        major in Computer Science and a minor in Sociology.
                    </p>
                    <p>
                        I am a very social person looking for a social environment that offers collaboration and growth,
                        and I am looking for new opportunities wherever that may take me!
                    </p>
                    <p className='what-i-am'>
                        I am extremely passionate about frontend development having worked with primarily React.js,
                        TypeScript, and WordPress and I have a specialty in SCSS/CSS styling. I also have work experience in
                        backend development working with Adonis.js,
                        Docker, and AWS and I am open to learning even more!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;