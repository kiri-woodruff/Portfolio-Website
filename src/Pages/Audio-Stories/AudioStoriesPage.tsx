import './AudioStoriesPageStyling.scss'
import AudioStoriesTopics from '../../Assets/AudioStoriesTopics.png';
import AudioStoriesPrompt from '../../Assets/AudioStoriesPrompt.png';
import AudioStoriesSubmit from '../../Assets/AudioStoriesSubmit.png';
import AudioStoriesRecord from '../../Assets/AudioStoriesRecord.png';
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {motion} from "framer-motion";
import arrow from '../../Assets/arrow.svg'
import {Link} from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";

const AudioStoriesPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='audio-stories' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}} >
            <HelmetProvider>
                <Helmet>
                    <title>Audio Stories Platform</title>
                </Helmet>
            </HelmetProvider>
            <h1>Audio Stories Platform</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>Media Recorder API</li>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React JS/TS</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>
                    <a href='https://stories.apsoprojects.org' target="_blank" className='link-out'>Small Town * Big Art</a> wanted a
                    platform for the people of Maui to be able to share and record their
                    stories regarding their culture and heritage.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>
                    There are QR codes placed around Maui that will lead to one of the seven topics: Diversity, Legacy,
                    Tradition, Protection, Hope, Kuleana (Responsibility), or Belonging.
                    On the topics page there are three different routes the user could take: Talk, Go, or Create. Talk
                    is a
                    way for the user to look through prompts about what story to share.
                    Go features different places that the user can go to, learn about, or share a story about. Create is
                    where the user can see other stories submitted by other uses and be
                    inspired to submit a story of their own. There are three different ways to submit a story: the user
                    can
                    record an audio story, take a photo or video, or write a story.
                </p>
            </div>
            <div className='images'>
                <Carousel images={[AudioStoriesTopics, AudioStoriesPrompt, AudioStoriesSubmit, AudioStoriesRecord]} />
            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    I was responsible for the functionality of swiping through the prompts and being able to record an
                    audio
                    story by utilizing the Media Recorder API.
                    In addition to functionality, I was tasked with styling the about page that displays the topics, the
                    pages that display the prompts and stories with
                    different media types, the continue the story page that displays the stories, the page with the
                    different ways of
                    submitting a story, and the recording button.
                    Once we got to the admin part of the project we realized that we needed to use a rich text editor to
                    edit submitted
                    stories, so I was responsible for editing the frontend to handle dangerously set inner HTML.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/zoom-redirect'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Zoom Redirect Page</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/audio-stories-admin'}>
                        <label>Audio Stories Admin</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default AudioStoriesPage;