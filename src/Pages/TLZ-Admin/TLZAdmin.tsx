import './TLZAdminStyling.scss'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import TLZAdminPic from '../../Assets/TLZAdmin.png'

function TLZAdmin() {
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
            <h1>The Loading Zone National Distribution Admin Panel</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React JS/TS</li>
                    <li>Recharts Chart Library</li>
                    <li>Pigeon Maps Library</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>The Digital Corps wanted a way to add content to The Loading Zone National Distribution site.</p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>This admin panel is a place where the user can add, edit, or delete a Loading Zone episode. The user
                    can also view the statistics of users of the site that include seeing which PBS stations have
                    downloaded episodes and what city and state they are in, viewing the 10 most downloaded episodes,
                    and all the downloaded episodes by category.</p>
            </div>
            <div className='images'>
                <img src={TLZAdminPic}/>
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
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/tlz-website'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>The Loading Zone</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/wiki-women'}>
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

export default TLZAdmin;