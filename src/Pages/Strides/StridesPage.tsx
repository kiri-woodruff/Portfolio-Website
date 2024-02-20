import './StridesStyling.scss'
import landing from '../../Assets/StridesLanding.png'
import categories from '../../Assets/StridesCategories.png'
import page from '../../Assets/StridesPage.png'
import modal from '../../Assets/StridesModal.png'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Carousel from "../../Components/Carousel/Carousel";

const StridesPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='strides' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>STRIDeS Website</title>
                </Helmet>
            </HelmetProvider>
            <h1>STRIDeS Website</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React JS/TS</li>
                    <li>WordPress</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>The people from the STRIDeS organization wanted a website that children from different school levels
                    could go to for different resources about different topics relating to science.</p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p><a href={'http://strides.bsu.edu/'} target="_blank" className='link-out'>STRIDeS</a> is a science
                    program that is aimed at school years elementary through high school. This site is to provide them
                    different links to different resources depending on their grade level.</p>
            </div>
            <div className='images'>
                <Carousel images={[landing, categories, page, modal]}/>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>I was tasked with styling the landing page and the pop up modal. Using WordPress I had to pull in the
                    data that the client was putting into the site and display the education levels, the featured picks,
                    and the different topics. </p>
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
                    <Link to={'/zoom-redirect'}>
                        <label>Zoom Redirect Page</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default StridesPage;