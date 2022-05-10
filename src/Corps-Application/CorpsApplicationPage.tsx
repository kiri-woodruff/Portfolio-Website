import './CorpsApplicationStyling.scss'
import ApplicationHomePhoto from '../Assets/ApplicationHome.png'
import ApplicationApplyTeamsPhoto from '../Assets/ApplicationApplyTeams.png'
import ApplicationApplyBottomPhoto from '../Assets/ApplicationApplyBottom.png'

const CorpsApplicationPage = () => {
    return (
        <div className='corps-application'>
            <h1>Digital Corps Application Site</h1>
            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>Angular</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <p>
                <h3>Purpose</h3>
                The Digital Corps did not have as many people applying as they liked so I was tasked with updating the application site for the people applying.
            </p>
            <div className='images'>
                <img src={ApplicationHomePhoto}/>
                <img src={ApplicationApplyTeamsPhoto}/>
                <img src={ApplicationApplyBottomPhoto}/>
            </div>
            <p className='whatIDid'>
                <h3>What I Did</h3>
                I updated the
            </p>
        </div>
    )
}

export default CorpsApplicationPage;