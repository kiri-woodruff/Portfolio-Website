import './AboutPageStyling.css'
import kiriPhoto from '../Images/kiri-power-pose.jpg'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>Kiri Woodruff</h1>
            <div className='about-page-content'>
                <img src={kiriPhoto}/>
                <p>I'm a Sophomore at Ball State University majoring in Computer Science with a minor in Sociology.</p>
            </div>
        </div>
    )
}

export default AboutPage;