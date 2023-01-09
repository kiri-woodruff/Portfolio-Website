import './HenryGetsMovingStyling.scss'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import HGMCalendar from '../../Assets/HenryGetsMovingCalendar.png'
import HGMExercise from '../../Assets/HenryGetsMovingExercisePage.png'
import HGMHome from '../../Assets/HenryGetsMovingHomePage.png'
import HGMLog from '../../Assets/HenryGetsMovingLogExercise.png'

const HenryGetsMovingPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='henry-gets-moving' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Henry Gets Moving</title>
                </Helmet>
            </HelmetProvider>
            <h1>Henry Gets Moving</h1>
            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>React TS</li>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>Figma</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>
                    As a part of the Ball State Computer Science curriculum, students are required to work with real
                    world clients and develop a product for them.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>
                    Henry Gets Moving is a website that is based loosely off of a children's book with the same name.
                    This website is used to encourage exercise and healthy eating among children by having the parents
                    of the children log their exercise with the goal of reaching 60 minutes every day. The website
                    encourages healthy eating by also offering a page of healthy recipes.
                </p>
            </div>
            <div className='images'>
                <div className='image-container'>
                    <img src={HGMHome}/>
                    <img src={HGMExercise}/>
                </div>
                <div className='image-container'>
                    <img src={HGMLog}/>
                    <img src={HGMCalendar}/>
                </div>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    I was responsible for the design and look of the entire application where the client requested that
                    the look be simple, colorful, and made for kids.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/projects/corps-recruitment'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Corps Recruitment</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/projects/tlz-website'}>
                        <label>The Loading Zone</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default HenryGetsMovingPage;