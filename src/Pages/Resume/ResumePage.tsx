import './ResumePageStyling.scss';
import resume from '../../Assets/kiri-resume.pdf';
import {Helmet, HelmetProvider} from "react-helmet-async";

const ResumePage = () => {
    return (
        <div className="resume-page">
            <HelmetProvider>
                <Helmet>
                    <title>Resumé</title>
                </Helmet>
            </HelmetProvider>
            <h1>Resumé</h1>
            <div>
                <iframe src={`${resume}#view=fitH`} height='1000px' width='60%'/>
            </div>
        </div>
    )
}

export default ResumePage;