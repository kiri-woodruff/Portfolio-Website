import './ResumePageStyling.scss';
//@ts-ignore
import resume from '../../Assets/kiri-resume.pdf';
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";

const ResumePage = () => {
    return (
        <motion.div className="resume-page" initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Resumé</title>
                </Helmet>
            </HelmetProvider>
            <h1>Resumé</h1>
            <div>
                <iframe src={`${resume}#view=fitH`} height='1000px' width='60%'/>
            </div>
        </motion.div>
    )
}

export default ResumePage;