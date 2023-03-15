import './TattletaleToolPageStyling.scss'
import {useLayoutEffect} from "react";
import Buildings from '../../Assets/ClassroomTabletBuildings.png';
import Floors from '../../Assets/ClassroomTabletFloors.png';
import Evaluation from '../../Assets/ClassroomTabletEvaluation.png';
import Dashboard from '../../Assets/ClassroomTabletDashboard.png'
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

function TattletaleToolPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='tattletale' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
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
                <p>The Ball State University administration wanted a way to keep their professors accountable going into
                    the new school year and ensure they were consistently holding in-person classes.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>The Classroom Assurance tool is a web application that displays the all the in-session classes in
                    each building by floor.
                    By selecting a class, an evaluator can submit an evaluation about if the class is being held, if the
                    correct instructor is teaching,
                    and if the correct number of students are present. The application also has a dashboard to display
                    the evaluation data for each professor
                    and each of their classes by section.</p>
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
            <div>
                <h3>What I Did</h3>
                <p>I was responsible for doing the SCSS for the majority of the application. I styled the buildings,
                    classes, confirmation, dashboard, and faculty report pages for both tablet and mobile.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/audio-stories-admin'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Audio Stories Admin</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/corps-recruitment'}>
                        <label>Corps Recruitment</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default TattletaleToolPage;