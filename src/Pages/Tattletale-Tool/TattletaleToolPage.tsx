import './TattletaleToolPageStyling.scss'
import {useLayoutEffect} from "react";
import AudioStoriesTopics from "../../Assets/AudioStoriesTopics.png";
import AudioStoriesPrompt from "../../Assets/AudioStoriesPrompt.png";
import AudioStoriesSubmit from "../../Assets/AudioStoriesSubmit.png";
import AudioStoriesRecord from "../../Assets/AudioStoriesRecord.png";
import {Link} from "react-router-dom";

function TattletaleToolPage(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'The Loading Zone Website';

    return(
        <div className='TLZWebsite'>
            <h1>The Loading Zone National Distribution</h1>

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
                <a href='https://stories.apsoprojects.org' target="_blank">Small Town * Big Art</a> wanted a platform for the people of Maui to be able to share and record their
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
                <img src={AudioStoriesTopics}/>
                <img src={AudioStoriesPrompt}/>
                <img src={AudioStoriesSubmit}/>
                <img src={AudioStoriesRecord}/>
            </div>
            <p>
                <h3>What I Did</h3>
                I was responsible for the functionality of swiping through the prompts and being able to record an audio
                story by utilizing the Media Recorder API.
                In addition to functionality, I was tasked with styling the about page that displays the topics, the
                pages that display the prompts and stories with
                different media types, the continue the story page that displays the stories, the page with the different ways of
                submitting a story, and the recording button.
                Once we got to the admin part of the project we realized that we needed to use a rich text editor to edit submitted
                stories, so I was responsible for editing the frontend to handle dangerously set inner HTML.
            </p>
        </div>
    )
}

export default TattletaleToolPage;