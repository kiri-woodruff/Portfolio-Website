import './AudioStoriesAdminPageStyling.scss'
import {Link} from "react-router-dom";
import {useLayoutEffect} from "react";
import AudioStoriesAdminManageTopics from '../../Assets/AudioStoriesAdminManageTopics.png';
import AudioStoriesAdminLogin from '../../Assets/AudioStoriesAdminLogin.png'
;
const AudioStoriesAdminPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'Audio Stories Admin Panel';

    return(
            <div className='audio-stories-admin'>
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
                <p>
                    <h3>Purpose</h3>
                    Small Town * Big Art wanted a way to manage the stories submitted and edit the topics content. This included being able to add new
                    prompts in the Talk section, adding new Go locations, and edit the stories submitted if necessary.
                </p>
                <p>
                    <h3>What It Is</h3>
                    This is the admin panel for the Audio Stories Platform project where the clients wanted a way to edit the content
                    on the website and see the analytics.
                </p>
                <div className='images'>
                    <img className='topics-photo' src={AudioStoriesAdminManageTopics}/>
                    <img className='login-photo' src={AudioStoriesAdminLogin}/>
                </div>
                <p>
                    <h3>What I Did</h3>
                    I was responsible for the functionality of swiping through the prompts and being able to record an audio
                    story by utilizing the Media Recorder API.
                    In addition to functionality, I was tasked with styling the about page that displays the topics, the
                    pages that display the prompts and stories with
                    different media types, the continue the story page that displays the stories, the page with the different ways of
                    submitting a story, and the recording button.
                </p>
                <div className='bottom-links'>
                    <Link to={"/projects/audio-stories"}>Audio Stories</Link>
                    <Link to={"/projects/corps-recruitment"} id="CR">Corps Recruitment</Link>
                    <Link to={"/projects/wiki-women"} id="WW">Wiki Women</Link>
                </div>
        </div>
    )
}
export default AudioStoriesAdminPage;
