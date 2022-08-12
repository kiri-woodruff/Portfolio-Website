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
               <p></p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p></p>
            </div>
            <div className='images'>
                <img src={GridView}/>
                <img src={ListView}/>
            </div>
            <div>
                <h3>What I Did</h3>
              <p></p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/projects/corps-recruitment'}>
                        <div>
                            <img src={arrow} />
                        </div>
                        <label>Corps Recruitment</label>
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