import './HenryGetsMovingStyling.scss'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import HGMHome from '../../Assets/HenryGetsMovingHomePage.png'
import HGMMenu from '../../Assets/HGMMenu.png'
import HGMLogin from '../../Assets/HGMLogin.png'
import HGMRegister from '../../Assets/HGMRegister.png'
import HGMExercise from '../../Assets/HenryGetsMovingExercisePage.png'
import HGMLog from '../../Assets/HenryGetsMovingLogExercise.png'
import HGMCalendar from '../../Assets/HenryGetsMovingCalendar.png'
import HGMEdit from '../../Assets/HGMEdit.png'
import HGMAbout from '../../Assets/HGMAbout.png'
import HGMAdmin from '../../Assets/HenryGetsMovingAdmin.png'
import Carousel from "../../Components/Carousel/Carousel";

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
                <Carousel images={[HGMHome, HGMMenu, HGMLogin, HGMRegister, HGMExercise, HGMLog, HGMCalendar, HGMEdit, HGMAbout, HGMAdmin]} />
            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    I was responsible for the design and look of the entire application where the client requested that
                    the look be simple, colorful, and made for kids. I did all of the basic page layouts with TypeScript
                    and did all the styling of the application using SCSS, including desktop, tablet, and mobile views.
                    I was responsible for making the functional Hamburger menu and designing all of the trophy assets. I
                    also designed the admin panel that is used to add, delete, or edit content on the application.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/corps-recruitment'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Corps Recruitment</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/makemymove'}>
                        <label>MakeMyMove</label>
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