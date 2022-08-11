import './TLZWebsitePageStyling.scss'
import {useLayoutEffect} from "react";
import GridView from '../../Assets/LoadingZoneGridView.png';
import ListView from '../../Assets/LoadingZoneListView.png'
import {Helmet, HelmetProvider} from "react-helmet-async";

function TLZWebsitePage(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div className='TLZWebsite'>
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
            <div className='what-i-did'>
                <h3>What I Did</h3>
              <p></p>
            </div>
        </div>
    )
}

export default TLZWebsitePage;