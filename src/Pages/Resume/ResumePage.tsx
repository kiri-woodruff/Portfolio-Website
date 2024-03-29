import './ResumePageStyling.scss';
//@ts-ignore
import resumePDF from '../../Assets/kiri-resume.pdf';
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";

const ResumePage = () => {
    return (
        <motion.div className="resume-page" initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Resume</title>
                </Helmet>
            </HelmetProvider>
            <h1>Resume</h1>
            <div className='resume-iframe'>
                <iframe src={`${resumePDF}`}/>
            </div>
            <div className='resume-mobile'>
                <iframe src={`${resumePDF}`}/>
            </div>
        </motion.div>
    )
}

export default ResumePage;