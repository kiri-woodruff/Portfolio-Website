import './TattletaleToolPageStyling.scss'
import {useLayoutEffect} from "react";
import AudioStoriesTopics from "../../Assets/AudioStoriesTopics.png";

function TattletaleToolPage(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'The Loading Zone Website';

    return(
        <div className='tattletale'>
            <h1>Classroom Assurance Tool</h1>

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
                <p></p>
            </div>
            <div>
                <h3>What It Is</h3>
              <p></p>
            </div>
            <div className='images'>
                <img src={AudioStoriesTopics}/>

            </div>
            <div className='what-i-did'>
                <h3>What I Did</h3>
               <p></p>
            </div>
        </div>
    )
}

export default TattletaleToolPage;