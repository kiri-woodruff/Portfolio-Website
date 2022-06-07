import './WikiWomenPageStyling.scss'
import WikiWomenHomePhoto from '../Assets/WikiWomenHome.png'
import WikiWomenInfoPagePhoto from '../Assets/WikiWomenInfoPage.png'
import {Link} from "react-router-dom";
import {useLayoutEffect} from "react";

const WikiWomenPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    document.title = 'Wiki Women';

    return (
        <div className='wiki-women'>
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
                    <Link to={"/projects/audio-stories"}>Audio Stories</Link>
                    <Link to={"/projects/audio-stories-admin"}>Audio Stories Admin</Link>
                    <Link to={"/projects/corps-recruitment"}>Corps Recruitment</Link>
                </div>
            </div>
        </div>
    )
}

export default WikiWomenPage;