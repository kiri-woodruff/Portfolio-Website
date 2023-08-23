import './makemymove.scss'
import MMMCustomerType from '../../Assets/mmm-customer-type.jpg'
import MMMActivityFeed from '../../Assets/mmm-activity-feed.png'
// @ts-ignore
import MMMLeadsList from '../../Assets/mmm-leads-list.PNG'
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import arrow from "../../Assets/arrow.svg";

const MakeMyMove = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <motion.div className='mmm' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>MakeMyMove</title>
                </Helmet>
            </HelmetProvider>
            <h1>MakeMyMove</h1>
            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Next.js</li>
                </ul>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>
                    <a href='https://www.makemymove.com/' target="_blank" className='link-out'>MakeMyMove</a> is where I
                    worked from May 2023 to August 2023 as an internship that was obtained through the XTERN Internship
                    matching program. There are a company based in Indianapolis that works to give people incentives to
                    move to different parts of Indiana (and other participating states) to work remotely.
                </p>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    The main things that I worked on were the customer type dropdown, activity feed, and leads list.
                    <br/>
                    <br/>
                    The customer type dropdown was an editable dropdown that was in the participating cities' section in
                    the admin site. I was tasked with adding the customer type to the backend schema and bringing the
                    editable dropdown to this page. It was used in different pages and parts of the site, but I was
                    tasked with bringing it to this page, as a start of making the other fields also editable.
                    <br/>
                    <br/>
                    For the activity feed, I was tasked with redoing the feed so that it was sorted by descending
                    chronological date with the uncompleted tasks being put at the very top of the feed. I was also
                    tasked with then adding a visual change of adding the completed date label and changing the color of
                    completed tasks. I also had to add a filtering system to the activity feed to be able to filter by
                    type within the feed, either task, email, or status.
                    <br/>
                    <br/>
                    The leads list is the terminology for people with MMM accounts, called movers, that have sent in an
                    application to move. I was tasked with adding a list of the leads into the admin site and also
                    display the
                    information of the leads from the application. The lead needed to link to the respective mover in
                    the admin site, but also have a button to link to the organization site that held all the
                    applications.
                </p>
            </div>
            <div className='images'>
                <img src={MMMCustomerType}/>
                <img src={MMMActivityFeed}/>
                <img src={MMMLeadsList}/>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/henry-gets-moving'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Henry Gets Moving</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/tlz-website'}>
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

export default MakeMyMove;