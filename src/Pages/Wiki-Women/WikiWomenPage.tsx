import './WikiWomenPageStyling.scss'
import WikiWomenHomePhoto from '../../Assets/WikiWomenHome.png'
import WikiWomenInfoPagePhoto from '../../Assets/WikiWomenInfoPage.png'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

const WikiWomenPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='wiki-women' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Wiki Women</title>
                </Helmet>
            </HelmetProvider>
            <h1>Wiki Women</h1>
            <div className='wiki-women-tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>Wiki Data API</li>
                    <li>Java</li>
                    <li>Java FX</li>
                </ul>
            </div>
            <p>
                <h3>Purpose</h3>
                For a class project, the other women in the class and I realized that women in STEM do not get as
                much recognition as their male peers.
                We also realized that in our curriculum we are not taught about women as much as we are taught about
                men. To address these problems
                we decided to make Wiki Women.
            </p>
            <p>
                <h3>What It Is</h3>
                Wiki Women is an application that displays 16 random women in any field of STEM. The application
                initially displays their name and
                photo (if one is available). The information is pulled from Wiki Data using the Wiki Data API and
                when you click on a woman it brings
                you to her information page. The information page displays her name, year of birth, occupation(s)
                and if applicable, photo,
                year of death, awards, and thesis.
            </p>
            <div className='images'>
                <img src={WikiWomenHomePhoto}/>
                <img src={WikiWomenInfoPagePhoto}/>
            </div>
            <p>
                <h3>What I Did</h3>
                I was responsible for making the UI. In order to properly display the information, I had to research
                how move between scenes in JavaFX
                and how to use a GridPane. I made the initial search engine where it worked when searching for the
                woman's
                Wiki Data ID and the information page that displays the woman's information.
            </p>

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
                    <Link to={'/audio-stories'}>
                        <label>Audio Stories Platform</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default WikiWomenPage;