import './ResumePageStyling.scss';
// @ts-ignore
import resume from '../Assets/kiri-resume.pdf';


const ResumePage = () => {
    return (
        <div className="resume-page">
            <h1>Resumé</h1>
            <div>
                <iframe src={`${resume}#view=fitH`} height='1000px' width='75%'/>
            </div>
        </div>
    )
}

export default ResumePage;