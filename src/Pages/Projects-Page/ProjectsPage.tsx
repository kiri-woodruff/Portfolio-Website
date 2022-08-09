import './ProjectsPageStyling.scss';
import {Link} from "react-router-dom";
import AudioStoriesAboutPhoto from '../../Assets/AudioStoriesAbout.png'
import WikiWomenHomePhoto from '../../Assets/WikiWomenHome.png'
import ApplicationHomePhoto from '../../Assets/ApplicationHome.png'
import AudioStoriesAdminPhoto from '../../Assets/AudioStoriesAdminDisplayPrompts.png'
import TLZWebsitePhoto from '../../Assets/TLZ Logo.svg'
import {useLayoutEffect} from "react";

const ProjectsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'Projects';

    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className='projects-page-projects'>
                <div className='project'>
                    <Link to={'/projects/audio-stories'}><img className='audio-stories-home home-img'
                                                              src={AudioStoriesAboutPhoto}/></Link>
                    <Link to={'/projects/audio-stories'} className='projects-page-buttons'>Audio Stories</Link>
                </div>
                <div className='project'>
                    <Link to={'/projects/audio-stories-admin'}><img className='audio-stories-admin-home home-img'
                                                                    src={AudioStoriesAdminPhoto}/></Link>
                    <Link to={'/projects/audio-stories-admin'} className='projects-page-buttons admin-button'>Audio
                        Stories Admin</Link>
                </div>
                <div className='project'>
                    <Link to={'/projects/corps-recruitment'}><img className='application-site-home home-img'
                                                                  src={ApplicationHomePhoto}/></Link>
                    <Link to={'/projects/corps-recruitment'} className='projects-page-buttons'>Corps Recruitment</Link>
                </div>
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/honors-timeline'}><img className='wiki-women-home-img'/></Link>*/}
                {/*    <Link to={'/projects/honors-timeline'} className='projects-page-buttons'>Honors Timeline</Link>*/}
                {/*</div>*/}
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/mutt-board-launcher'}><img className='wiki-women-home-img'/></Link>*/}
                {/*    <Link to={'/projects/mutt-board-launcher'} className='projects-page-buttons'>MUTT Board Launcher</Link>*/}
                {/*</div>*/}
                <div className='project'>
                    <Link to={'/projects/classroom-assurance'}><img className='classroom-assurance-home home-img'/></Link>
                    <Link to={'/projects/classroom-assurance'} className='projects-page-buttons'>Classroom Assurance</Link>
                </div>
                <div className='project'>
                    <Link to={'/projects/tlz-website'}><img className='tlz-website-home home-img' src={TLZWebsitePhoto}/></Link>
                    <Link to={'/projects/tlz-website'} className='projects-page-buttons'>The Loading Zone</Link>
                </div>
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/wiki-women'}><img className='wiki-women-home-img'/></Link>*/}
                {/*    <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Union Literary</Link>*/}
                {/*</div>*/}
                <div className='project'>
                    <Link to={'/projects/wiki-women'}><img className='wiki-women-home home-img' src={WikiWomenHomePhoto}/></Link>
                    <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Wiki Women</Link>
                </div>
            </div>
            <div className='fix-footer'/>
        </div>
    )
}

export default ProjectsPage;