import './ProjectsPageStyling.css';
import {Link} from "react-router-dom";
import AudioStoriesAboutPhoto from '../Assets/AudioStories-About.png'
import WikiWomenHomePhoto from '../Assets/WikiWomenHome.png'

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className='projects-page-projects'>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/audio-stories'}><img className='audio-stories-home-photo' src={AudioStoriesAboutPhoto} height='200px' width='20%'/></Link>
                        <Link to={'/projects/audio-stories'} className='projects-page-buttons'>Audio Stories</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/wiki-women'}><img className='wiki-women-home-photo' src={WikiWomenHomePhoto} height='200px' width='20%'/></Link>
                        <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Wiki Women</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/'}><img src={AudioStoriesAboutPhoto} height='200px' width='20%'/></Link>
                        <Link to={'/projects/'} className='projects-page-buttons'>Third Project</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsPage;