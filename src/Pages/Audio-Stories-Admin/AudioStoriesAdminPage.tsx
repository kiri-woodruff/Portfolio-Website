import './AudioStoriesAdminPageStyling.scss'
import {useLayoutEffect} from "react";
import AudioStoriesAdminManageTopics from '../../Assets/AudioStoriesAdminManageTopics.png';
import AudioStoriesAdminLogin from '../../Assets/AudioStoriesAdminLogin.png';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

const AudioStoriesAdminPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <motion.div className='audio-stories-admin' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}} >
            <HelmetProvider>
                <Helmet>
                    <title>Audio Stories Admin Panel</title>
                </Helmet>
            </HelmetProvider>
            <h1>Audio Stories Admin Panel</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React JS/TS</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>
                    Small Town * Big Art wanted a way to manage the stories submitted and edit the topics content. This
                    included being able to add new
                    prompts in the Talk section, adding new Go locations, and edit the stories submitted if necessary.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>
                    This is the admin panel for the Audio Stories Platform project where the clients wanted a way to
                    edit the content
                    on the website and see the analytics.
                </p>
            </div>
            <div className='images'>
                <img className='topics-photo' src={AudioStoriesAdminManageTopics}/>
                <img className='login-photo' src={AudioStoriesAdminLogin}/>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>

                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/projects/audio-stories'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Audio Stories Platform</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/projects/classroom-assurance'}>
                        <label>Classroom Assurance</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
export default AudioStoriesAdminPage;
