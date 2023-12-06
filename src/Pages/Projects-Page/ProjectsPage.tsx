import './ProjectsPageStyling.scss';
import {Link} from "react-router-dom";
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";

const ProjectsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className="projects-page">
            <HelmetProvider>
                <Helmet>
                    <title>Projects</title>
                </Helmet>
            </HelmetProvider>
            <div className='intro'>
                <p>Hello. I'm Kiri Woodruff and I'm a Frontend Web Developer</p>
            </div>
            <h1>Projects</h1>
            <div className='projects-page-projects'>
                <div className='project'>
                    <Link to={'/audio-stories'} className='audio-stories-home'/>
                    <Link to={'/audio-stories'} className='projects-page-buttons'>Audio Stories</Link>
                </div>
                <div className='project'>
                    <Link to={'/audio-stories-admin'} className='audio-stories-admin-home'/>
                    <Link to={'/audio-stories-admin'} className='projects-page-buttons admin-button'>Audio Stories Admin</Link>
                </div>
                <div className='project'>
                    <Link to={'/cap-touch-screen'} className='cap-touch-screen'/>
                    <Link to={'/cap-touch-screen'} className='projects-page-buttons'>CAP Alumni Touch Screen</Link>
                </div>
                <div className='project'>
                    <Link to={'/classroom-assurance'} className='classroom-assurance-home'/>
                    <Link to={'/classroom-assurance'} className='projects-page-buttons'>Classroom Assurance</Link>
                </div>
                <div className='project'>
                    <Link to={'/corps-recruitment'} className='application-site-home'/>
                    <Link to={'/corps-recruitment'} className='projects-page-buttons'>Corps Recruitment</Link>
                </div>
                <div className='project'>
                    <Link to={'/henry-gets-moving'} className='henry-site-home'/>
                    <Link to={'/henry-gets-moving'} className='projects-page-buttons'>Henry Gets Moving</Link>
                </div>
                <div className='project'>
                    <Link to={'/makemymove'} className='mmm-site-home'/>
                    <Link to={'/makemymove'} className='projects-page-buttons'>MakeMyMove</Link>
                </div>
                <div className='project'>
                    <Link to={'/tlz-website'} className='tlz-website-home'/>
                    <Link to={'/tlz-website'} className='projects-page-buttons'>The Loading Zone</Link>
                </div>
                <div className='project'>
                    <Link to={'/tlz-admin'} className='tlz-admin-home'/>
                    <Link to={'/tlz-admin'} className='projects-page-buttons'>The Loading Zone Admin</Link>
                </div>
                {/*<div className='project'>*/}
                {/*    <Link to={'/wiki-women'} className='wiki-women-home'/>*/}
                {/*    <Link to={'/wiki-women'} className='projects-page-buttons'>Wiki Women</Link>*/}
                {/*</div>*/}
            </div>
            <div className='fix-footer'/>
        </div>
    )
}

export default ProjectsPage;