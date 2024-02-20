import './ColorByNumberStyling.scss'
import {useLayoutEffect} from "react";
import home from '../../Assets/MUTTColorByNumberHome.png'
import uncolored from '../../Assets/MUTTColorByNumberUncolored.png'
import colored from '../../Assets/MUTTColorByNumberColored.png'
import finished from '../../Assets/MUTTColorByNumberFinished.png'
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Carousel from "../../Components/Carousel/Carousel";

function ColorByNumberPage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='tattletale' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Color By Number</title>
                </Helmet>
            </HelmetProvider>
            <h1>Color By Number</h1>
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
                <p>The Digital Corps has a touch screen outside of our office that is used for student and faculty
                    interaction with fun games and information.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>One of the games that was developed was color by number where the program would take a group of svgs
                    and based on the color chosen, the svg would fill to the respective color. This is used for multiple
                    events such as when John Mulaney and Pete Davidson performed at Ball State University, and holidays
                    such as Lunar New Year and Black History Month.</p>
            </div>
            <div className='images'>
                <Carousel images={[home, uncolored, colored, finished]}/>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>I was responsible for doing the SCSS for the majority of the application. I styled the landing page,
                    the set up of the painting page, and the ending page where the end result is displayed. I made the
                    coloring functional on the painting page where I mapped through all of the colors of the palette and
                    changed the background of the palette to match the color selected.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/classroom-assurance'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Classroom Assurance</label>
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

export default ColorByNumberPage;