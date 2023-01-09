import './TLZWebsitePageStyling.scss'
import {useLayoutEffect} from "react";
import GridView from '../../Assets/LoadingZoneGridView.png';
import ListView from '../../Assets/LoadingZoneListView.png'
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

function TLZWebsitePage(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <motion.div className='TLZWebsite' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x: -100}} transition={{duration: 0.5}}>
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
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
               <p>The Digital Corps wanted to get the Loading Zone episodes broadcast on PBS throughout the nation,
                   so we were tasked with creating a way for other PBS stations to download episodes.</p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>The Loading Zone is a program that is created by the Digital Corps as a means of teaching children about different topics. </p>
            </div>
            <div className='images'>
                <img src={GridView}/>
                <img src={ListView}/>
            </div>
            <div>
                <h3>What I Did</h3>
              <p>I was tasked with creating the entire front end of the site. I styled the entire site with SCSS and used CSS transform and keyframes to animate the Loading Zone
              doors to open and close between pages. I created the layout of displaying videos in the grid and list views and used a dialog box to display a
              video player iframe to play the video after clicking on the video thumbnail. I made the login page that directed to where PBS employees could download videos.</p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/projects/henry-gets-moving'}>
                        <div>
                            <img src={arrow} />
                        </div>
                        <label>Henry Gets Moving</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/projects/wiki-women'}>
                        <label>Wiki Women</label>
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