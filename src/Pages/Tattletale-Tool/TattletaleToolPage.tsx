import './TattletaleToolPageStyling.scss'
import {useLayoutEffect} from "react";
import Buildings from '../../Assets/ClassroomTabletBuildings.png';
import Floors from '../../Assets/ClassroomTabletFloors.png';
import Evaluation from '../../Assets/ClassroomTabletEvaluation.png';
import Dashboard from '../../Assets/ClassroomTabletDashboard.png'
import {Helmet, HelmetProvider} from "react-helmet-async";

function TattletaleToolPage(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div className='tattletale'>
            <HelmetProvider>
                <Helmet>
                    <title>Classroom Assurance Tool</title>
                </Helmet>
            </HelmetProvider>
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
                <div className='image-container'>
                    <img src={Buildings}/>
                    <img src={Floors}/>
                </div>
                <div className='image-container'>
                    <img src={Evaluation}/>
                    <img src={Dashboard}/>
                </div>
            </div>
            <div className='what-i-did'>
                <h3>What I Did</h3>
               <p></p>
            </div>
        </div>
    )
}

export default TattletaleToolPage;