import './AboutPageStyling.scss'
import kiriPhoto from '../Assets/kiri-power-pose.jpg'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>Hello there!</h1>
            <div className='about-page-content'>
                <img src={kiriPhoto}/>
                <p>
                    I'm a Sophomore at Ball State University majoring in Computer Science with a minor in Sociology.
                    <br/>
                    <br/>
                    I work at the Digital Corps at Ball State, where we work in interdisciplinary teams to create web
                    applications and other digital products for clients.
                    <br/>
                    <br/>
                    At the Digital Corps, I am currently a Development Apprentice.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;