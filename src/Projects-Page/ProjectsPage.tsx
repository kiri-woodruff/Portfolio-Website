import './ProjectsPageStyling.scss';
import {Link} from "react-router-dom";
import AudioStoriesAboutPhoto from '../Assets/AudioStoriesAbout.png'
import WikiWomenHomePhoto from '../Assets/WikiWomenHome.png'
import ApplicationHomePhoto from '../Assets/ApplicationHome.png'
import AudioStoriesAdminPhoto from '../Assets/AudioStoriesAdminDisplayPrompts.png'
import {useLayoutEffect} from "react";

const ProjectsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className='projects-page-projects'>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/audio-stories'}><img className='audio-stories-home-photo' src={AudioStoriesAboutPhoto}/></Link>
                        <Link to={'/projects/audio-stories'} className='projects-page-buttons'>Audio Stories</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/audio-stories-admin'}><img className='audio-stories-admin-home-photo' src={AudioStoriesAdminPhoto}/></Link>
                        <Link to={'/projects/audio-stories-admin'} className='projects-page-buttons admin-button'>Audio Stories Admin</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/corps-recruitment'}><img className='application-site-photo' src={ApplicationHomePhoto}/></Link>
                        <Link to={'/projects/corps-recruitment'} className='projects-page-buttons'>Corps Recruitment</Link>
                    </div>
                </div>
                <div className='project'>
                    <div className='background-color-box'>
                        <Link to={'/projects/wiki-women'}><img className='wiki-women-home-photo' src={WikiWomenHomePhoto}/></Link>
                        <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Wiki Women</Link>
                    </div>
                </div>
            </div>
            <div className='fix-footer'/>
        </div>
    )
}

export default ProjectsPage;