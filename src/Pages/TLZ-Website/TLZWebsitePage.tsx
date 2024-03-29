import './TLZWebsitePageStyling.scss'
import {useLayoutEffect} from "react";
import GridView from '../../Assets/LoadingZoneGridView.png';
import ListView from '../../Assets/LoadingZoneListView.png'
import Login from '../../Assets/TLZLogin.png'
import VideoPlayer from '../../Assets/TLZVideo.png'
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Carousel from "../../Components/Carousel/Carousel";

function TLZWebsitePage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='TLZWebsite' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>The Loading Zone</title>
                </Helmet>
            </HelmetProvider>
            <h1>The Loading Zone National Distribution</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React JS/TS</li>
                    <li>Keyframes</li>
                    <li>AdonisTS</li>
                    <li>Docker</li>
                    <li>AWS</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>The Digital Corps wanted to get the Loading Zone episodes broadcast on PBS throughout the nation,
                    so we were tasked with creating a way for other PBS stations to download episodes.</p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p><a href='https://tlz.apsoprojects.org/' target="_blank" className='link-out'>The Loading Zone</a> is
                    a program that is created by the Digital Corps as a means of teaching children
                    about different topics. </p>
            </div>
            <div className='images'>
                <Carousel images={[Login, GridView, ListView, VideoPlayer]}/>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>I was tasked with working on the front end of the site. I styled the entire site with SCSS and used
                    CSS transform and keyframes to animate the Loading Zone doors to open when entering the episodes
                    page. I added the credits section of the home page that used the API from our employee database to
                    map through all the workers that have worked her, and slice them to a limit of 40 people per page on
                    desktop and 20 on mobile. I created the layout of displaying videos in the grid and list views and
                    used a dialog box to display a video player iframe to play the video after clicking on the video
                    thumbnail. I made the login page that directed to where PBS employees could download videos. </p>
                <p>I edited the backend to accommodate the change in the api that we were getting the employees from.
                    The api had changed so I had to make a new method in the controller to get the employees that worked
                    at the Digital Corps after TLZ started in the Fall of 2017. I had to write new migrations to update
                    the categories enum to be in alphabetical order and then include an orderBy in the categories query to order them
                    alphabetically and put Other at the end.</p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/strides'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>STRIDeS</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/tlz-admin'}>
                        <label>TLZ Admin Panel</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default TLZWebsitePage;