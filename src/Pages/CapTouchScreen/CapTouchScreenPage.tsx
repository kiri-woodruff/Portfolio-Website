import './CapTouchScreenStyling.scss'
import AwardFilter from '../../Assets/CapAwardFilter.png';
import DecadeFilter from '../../Assets/CapDecadeFilter.png';
import NameFilter from '../../Assets/CapNameFilter.png';
import YearFilter from '../../Assets/CapYearFilter.png';
import AwardWithPhotos from '../../Assets/CapPersonWithPhotos.png'
import AwardWithoutPhotos from '../../Assets/CapPersonWithoutPhotos.png';
import Home from '../../Assets/CAPHome.png';
import Browse from '../../Assets/CAPBrowse.png';
import Filter from '../../Assets/CAPFilter.png';
import AwardPage from '../../Assets/CAPAward.png';
import AwardCategories from '../../Assets/CAPAwardCategories.png';
import {useLayoutEffect} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {motion} from "framer-motion";
import arrow from '../../Assets/arrow.svg'
import {Link} from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";

interface CarouselProps {
    images: string[];
}

const CapTouchScreenPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <motion.div className='cap-touch-screen' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}} transition={{duration: 0.5}}>
            <HelmetProvider>
                <Helmet>
                    <title>CAP Alumni Touch Screen</title>
                </Helmet>
            </HelmetProvider>
            <h1>CAP Alumni Touch Screen</h1>

            <div className='tools-used'>
                <h2>
                    Tools Used
                </h2>
                <ul>
                    <li>React TS</li>
                    <li>CSS/SCSS</li>
                    <li>Context Provider</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            <div>
                <h3>Purpose</h3>
                <p>
                    The R. Wayne Estopinal College of Architecture and Planning awards alumni awards for their work in
                    their careers and were running out of physical space to display the awards.
                    They approached the Digital Corps for designing an interface for all of the awards for their alumni
                    that would be displayed on a large touch screen.
                </p>
            </div>
            <div>
                <h3>What It Is</h3>
                <p>
                    The first version of the interface included a home that leads the user to find awards in two
                    different ways, browsing and
                    searching. There were different ways to browse, name, year they received the award, the decade of
                    when
                    they received the award, and by the award they received. When displaying awards, a recipient could
                    have either photos from their career displayed or more written information displayed about their
                    career.

                </p>
            </div>
            <div className='images after'>
                <h3>Final Design</h3>
                <Carousel images={[Home, Browse, Filter, AwardPage, AwardCategories]}/>
            </div>
            <div className='images before'>
                <h3>Initial Design</h3>
                <Carousel
                    images={[AwardWithPhotos, AwardWithoutPhotos, AwardFilter, DecadeFilter, YearFilter, NameFilter]}/>
            </div>
            <div>
                <h3>What I Did</h3>
                <p>
                    I was responsible for all functionality and styling for the browse pages and the award pages. Since
                    the client would want to input people and awards, we decided to use a WordPress backend. By
                    utilizing the api calls, context provider set up, and storing the people and awards in local
                    storage, I was able to call all the respective information for a person's award by their id. The
                    filter pages was using different map functions to get the specific information based on the filter
                    that was chosen. On the award pages, a person could have either photos of their work or additional
                    information, so I made components for both and called the respective one depending on their content
                    type. For the displaying of the photos, I utilized photo clipping.
                </p>
                <p>
                    When the client wanted design revisions, I was responsible for doing all of page revisions. Since
                    the functionality was already there, I had to change the pages per the client's designs. There were a few
                    functionality change that I implemented. One of which was automatically filtering the browse feed by the
                    award category selected from the award categories page. The other functionality change was the arrows on the bottom
                    of the award pages also set up to go to the next person in the respective award.
                </p>
            </div>
            <div className='bottom-links'>
                <div className='left-arrow'>
                    <Link to={'/audio-stories-admin'}>
                        <div>
                            <img src={arrow}/>
                        </div>
                        <label>Audio Stories Admin</label>
                    </Link>
                </div>
                <div className='right-arrow'>
                    <Link to={'/classroom-assurance'}>
                        <label>Classroom Assurance</label>
                        <div>
                            <img src={arrow}/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default CapTouchScreenPage;