import './AudioStoriesAdminPageStyling.scss'
import {Link} from "react-router-dom";
import {useLayoutEffect} from "react";

const AudioStoriesAdminPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
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
                    Small Town * Big Art wanted a platform for the people of Maui to be able to share and record their
                    stories regarding their culture and heritage.
                </p>
                <p>
                    <h3>What It Is</h3>
                    There are QR codes placed around Maui that will lead to one of the seven topics: Diversity, Legacy,
                    Tradition, Protection, Hope, Kuleana (Responsibility), or Belonging.
                    On the topics page there are three different routes the user could take: Talk, Go, or Create. Talk is a
                    way for the user to look through prompts about what story to share.
                    Go features different places that the user can go to, learn about, or share a story about. Create is
                    where the user can see other stories submitted by other uses and be
                    inspired to submit a story of their own. There are three different ways to submit a story: the user can
                    record an audio story, take a photo or video, or write a story.
                </p>
                <div className='images'>

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
                    <Link to={"/projects/corps-recruitment"}>Corps Recruitment</Link>
                    <Link to={"/projects/wiki-women"}>Wiki Women</Link>
                </div>
        </div>
    )
}
export default AudioStoriesAdminPage;
