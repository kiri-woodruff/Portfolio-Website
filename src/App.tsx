import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectsPage from './Pages/Projects-Page/ProjectsPage';
import AboutPage from './Pages/About/AboutPage';
import ContactMe from "./Pages/Contact-Me/ContactMePage";
import Header from './Components/Header/Header';
import WikiWomenPage from './Pages/Wiki-Women/WikiWomenPage';
import AudioStoriesPage from './Pages/Audio-Stories/AudioStoriesPage';
import ResumePage from "./Pages/Resume/ResumePage";
import Footer from "./Components/Footer/Footer";
import CorpsRecruitment from './Pages/Corps-Application/CorpsRecruitmentPage';
import AudioStoriesAdminPage from "./Pages/Audio-Stories-Admin/AudioStoriesAdminPage";
import TLZWebsite from './Pages/TLZ-Website/TLZWebsitePage';
import TattletaleToolPage from "./Pages/Classroom-Assurance/TattletaleToolPage";
import HenryGetsMovingPage from "./Pages/Henry-Gets-Moving/HenryGetsMovingPage";
import {AnimatePresence} from "framer-motion";
import TLZAdmin from "./Pages/TLZ-Admin/TLZAdmin";
import MakeMyMove from "./Pages/MakeMyMove/makemymove";
import CapTouchScreenPage from "./Pages/CapTouchScreen/CapTouchScreenPage";
import ZoomRedirectPage from "./Pages/ZoomRediect/ZoomRedirectPage";
import ColorByNumberPage from "./Pages/ColorByNumber/ColorByNumberPage";
import StridesPage from "./Pages/Strides/StridesPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <AnimatePresence exitBeforeEnter={true}>
                    <Routes>
                        <Route path='/' element={<ProjectsPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/resume' element={<ResumePage/>}/>
                        <Route path='/contact-me' element={<ContactMe/>}/>
                        <Route path='/audio-stories' element={<AudioStoriesPage/>}/>
                        <Route path='/audio-stories-admin' element={<AudioStoriesAdminPage/>}/>
                        <Route path='/corps-recruitment' element={<CorpsRecruitment/>}/>
                        <Route path='/henry-gets-moving' element={<HenryGetsMovingPage/>}/>
                        <Route path='/makemymove' element={<MakeMyMove/>}/>
                        <Route path='/tlz-website' element={<TLZWebsite/>}/>
                        <Route path='/tlz-admin' element={<TLZAdmin/>}/>
                        <Route path='/classroom-assurance' element={<TattletaleToolPage/>}/>
                        <Route path='/wiki-women' element={<WikiWomenPage/>}/>
                        <Route path='/cap-touch-screen' element={<CapTouchScreenPage/>}/>
                        <Route path='/zoom-redirect' element={<ZoomRedirectPage/>}/>
                        <Route path='/color-by-number' element={<ColorByNumberPage/>}/>
                        <Route path='/strides' element={<StridesPage/>}/>
                    </Routes>
                </AnimatePresence>
                {/*<Footer/>*/}
            </Router>
        </div>
    );
}

export default App;
