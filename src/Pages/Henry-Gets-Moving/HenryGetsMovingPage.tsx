import './HenryGetsMovingStyling.scss'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

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

            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    I was a part of the groups that went to the events to recruit people. Since I was the only
                    Development Team member on the project,
                    I updated the application site according to the Figma file designed by one of my coworkers. The
                    application site used a very primitive
                    version of Angular, so I had to learn how to read the files and how to edit them. I changed all of
                    the team icons, added the application
                    disclaimer, and edited the admin panel. In the admin panel I added fields to include dates that were
                    not there before. I also used Moment.js
                    to display specific fields based on whether it was before or after the current date.
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