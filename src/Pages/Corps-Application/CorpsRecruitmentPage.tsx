import './CorpsRecruitmentStyling.scss'
import ApplicationHomePhoto from '../../Assets/ApplicationHome.png'
import ApplicationApplyTeamsPhoto from '../../Assets/ApplicationApplyTeams.png'
import ApplicationApplyBottomPhoto from '../../Assets/ApplicationApplyBottom.png'
import {Link} from "react-router-dom";
import {useLayoutEffect} from "react";

const CorpsRecruitmentPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'Corps Recruitment';

    return (
        <div className='corps-recruitment'>
            <h1>Digital Corps Recruitment</h1>
            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>Angular</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Moment.js</li>
                </ul>
            </div>
            <p>
                <h3>Purpose</h3>
                The Digital Corps did not have as many people applying as they liked so I was tasked with figuring out how to get more people
                to apply and updating the application site for the people applying.
            </p>
            <p>
                <h3>What It Is</h3>
                Corps Recruitment was an internal Digital Corps project consisting of brainstorming sessions
                of how to get more people to apply. We also went to activities within the Ball State campus to recruit people.
                Through our efforts the number of applicants more than doubled from the previous semester.
            </p>
            <div className='images'>
                <img src={ApplicationHomePhoto}/>
                <img src={ApplicationApplyTeamsPhoto}/>
                <img src={ApplicationApplyBottomPhoto}/>
            </div>
            <p className='what-i-did'>
                <h3>What I Did</h3>
                I was a part of the groups that went to the events to recruit people. Since I was the only Development Team member on the project,
                I updated the application site according to the Figma file designed by one of my coworkers. The application site used a very primitive
                version of Angular, so I had to learn how to read the files and how to edit them. I changed all of the team icons, added the application
                disclaimer, and edited the admin panel. In the admin panel I added fields to include dates that were not there before. I also used Moment.js
                to display specific fields based on whether it was before or after the current date.
            </p>
        </div>
    )
}

export default CorpsRecruitmentPage;