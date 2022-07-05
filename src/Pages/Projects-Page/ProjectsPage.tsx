import './ProjectsPageStyling.scss';
import {Link} from "react-router-dom";
import AudioStoriesAboutPhoto from '../../Assets/AudioStoriesAbout.png'
import WikiWomenHomePhoto from '../../Assets/WikiWomenHome.png'
import ApplicationHomePhoto from '../../Assets/ApplicationHome.png'
import AudioStoriesAdminPhoto from '../../Assets/AudioStoriesAdminDisplayPrompts.png'
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
                    <Link to={'/projects/audio-stories'}><img className='audio-stories-home-photo'
                                                              src={AudioStoriesAboutPhoto}/></Link>
                    <Link to={'/projects/audio-stories'} className='projects-page-buttons'>Audio Stories</Link>
                </div>
                <div className='project'>
                    <Link to={'/projects/audio-stories-admin'}><img className='audio-stories-admin-home-photo'
                                                                    src={AudioStoriesAdminPhoto}/></Link>
                    <Link to={'/projects/audio-stories-admin'} className='projects-page-buttons admin-button'>Audio
                        Stories Admin</Link>
                </div>
                <div className='project'>
                    <Link to={'/projects/corps-recruitment'}><img className='application-site-photo'
                                                                  src={ApplicationHomePhoto}/></Link>
                    <Link to={'/projects/corps-recruitment'} className='projects-page-buttons'>Corps Recruitment</Link>
                </div>
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/honors-timeline'}><img className='wiki-women-home-photo'/></Link>*/}
                {/*    <Link to={'/projects/honors-timeline'} className='projects-page-buttons'>Honors Timeline</Link>*/}
                {/*</div>*/}
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/mutt-board-launcher'}><img className='wiki-women-home-photo'/></Link>*/}
                {/*    <Link to={'/projects/mutt-board-launcher'} className='projects-page-buttons'>MUTT Board Launcher</Link>*/}
                {/*</div>*/}
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/wiki-women'}><img className='wiki-women-home-photo'/></Link>*/}
                {/*    <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Tattletale Tool</Link>*/}
                {/*</div>*/}
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/tlz-website'}><img className='wiki-women-home-photo'/></Link>*/}
                {/*    <Link to={'/projects/tlz-website'} className='projects-page-buttons'>The Loading Zone</Link>*/}
                {/*</div>*/}
                {/*<div className='project'>*/}
                {/*    <Link to={'/projects/wiki-women'}><img className='wiki-women-home-photo'/></Link>*/}
                {/*    <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Union Literary</Link>*/}
                {/*</div>*/}
                <div className='project'>
                    <Link to={'/projects/wiki-women'}><img className='wiki-women-home-photo' src={WikiWomenHomePhoto}/></Link>
                    <Link to={'/projects/wiki-women'} className='projects-page-buttons'>Wiki Women</Link>
                </div>
            </div>
            <div className='fix-footer'/>
        </div>
    )
}

export default ProjectsPage;