import './AboutPageStyling.scss'
import kiriPhoto from '../Assets/kiri-power-pose.jpg'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>Hello there!</h1>
            <div className='about-page-content'>
                <img src={kiriPhoto}/>
                <p className='about-me'>
                    <p>
                    I'm a Junior at Ball State University majoring in Computer Science with a minor in Sociology.
                    </p>
                    <p>
                    I work at the Digital Corps at Ball State, where we work in interdisciplinary teams to create web
                    applications and other digital products for clients.
                    </p>
                    <p className='what-i-am'>
                    At the Digital Corps, I am currently a Development Apprentice.
                    </p>
                </p>
            </div>
        </div>
    )
}

export default AboutPage;