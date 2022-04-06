import './AboutPageStyling.css'
import kiriPhoto from '../Images/kiri-power-pose.jpg'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>Kiri Woodruff</h1>
            <div className='about-page-content'>
                <img src={kiriPhoto}/>
                <p>
                    I'm a Sophomore at Ball State University majoring in Computer Science with a minor in Sociology.
                    <br/>
                    <br/>
                    I work at the Digital Corps at Ball State, where students of various creative technical fields
                    can improve and use their skills to solve the real-world problems of clients related to the university.
                    <br/>
                    <br/>
                    At the Digital Corps, I am currently a Development Apprentice.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;