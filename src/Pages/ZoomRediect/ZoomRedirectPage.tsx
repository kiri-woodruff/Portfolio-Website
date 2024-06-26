import "./ZoomRediectStyling.scss";
import {useLayoutEffect} from "react";
import {motion} from "framer-motion";
import {Helmet, HelmetProvider} from "react-helmet-async";
import ZoomRedirectLanding from "../../Assets/ZoomRedirectLanding.png";
import ZoomRedirectLanding2 from '../../Assets/ZoomRedirectLanding2.png';
import ZoomRedirectLanding3 from '../../Assets/ZoomRedirectLanding3.png';
import ZoomRedirectLanding4 from '../../Assets/ZoomRedirectLanding4.png';
import ZoomRedirectGrid from '../../Assets/ZoomRedirectGrid.png';
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Carousel from "../../Components/Carousel/Carousel";

const ZoomRedirectPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <motion.div className='zoom-redirect' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>Zoom Redirect</title>
                </Helmet>
            </HelmetProvider>
            <h1>Zoom Redirect Page</h1>
            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>OpenWeather API</li>
                    <li>RSS Feed</li>
                </ul>
            </div>
            <p>
                <h3>Purpose</h3>
                Ball State University employed the Digital Corps to make a page would redirect all the users of the Ball
                State Zoom to. The target audience would include everyone who uses Ball State's Zoom, including
                students, clients, faculty, and staff.
            </p>
            <p>
                <h3>What It Is</h3>
                This is a landing page for all Ball State Zoom calls that provides tips and information about how to
                conduct a proper Zoom call. Tips like making sure to mute your microphone, make sure your headphones are
                plugged in, and to turn off your camera.
            </p>
            <div className='images'>
                <Carousel
                    images={[ZoomRedirectLanding4, ZoomRedirectLanding, ZoomRedirectLanding2, ZoomRedirectLanding3, ZoomRedirectGrid]}/>
            </div>
            <p>
                <h3>What I Did</h3>
                I was responsible for all the styling of the landing page. I imported all the needed assets from Figma
                like the background gradient, the background location images, and the footer logo image. I was also
                responsible for making the page dynamic and so I used media queries to style the landing page for
                phones, tablets, desktops, and large monitors. I implemented all of the design revisions that were
                requested from out client. I used the OpenWeather API to get the weather for Muncie, Indiana where Ball
                State University is located. I also implemented a news feed which pulls from the Ball State University
                Communication Center's RSS feed.
            </p>

            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/tlz-admin'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>TLZ Admin Panel</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/audio-stories'}>
                        <label>Audio Stories Platform</label>
                        <div>
                            <img src={arrow} alt={">"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ZoomRedirectPage;