import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectsPage from './Pages/Projects-Page/ProjectsPage';
import AboutPage from './Pages/About/AboutPage';
import Header from './Components/Header/Header';
import WikiWomenPage from './Pages/Wiki-Women/WikiWomenPage';
import AudioStoriesPage from './Pages/Audio-Stories/AudioStoriesPage';
import ResumePage from "./Pages/Resume/ResumePage";
import Footer from "./Components/Footer/Footer";
import CorpsRecruitment from './Pages/Corps-Application/CorpsRecruitmentPage';
import AudioStoriesAdminPage from "./Pages/Audio-Stories-Admin/AudioStoriesAdminPage";
import TLZWebsite from './Pages/TLZ-Website/TLZWebsitePage';
import HonorsTimeline from "./Pages/Honors-Timeline/HonorsTimelinePage";
import MUTTBoardLauncher from "./Pages/MUTT-Board/MUTTBoardLauncherPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                    <Routes>
                        <Route path='/' element={<ProjectsPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/resume' element={<ResumePage/>}/>
                        <Route path='/projects/audio-stories' element={<AudioStoriesPage/>}/>
                        <Route path='/projects/audio-stories-admin' element={<AudioStoriesAdminPage/>}/>
                        <Route path='/projects/corps-recruitment' element={<CorpsRecruitment/>}/>
                        <Route path='/projects/honors-timeline' element={<HonorsTimeline/>}/>
                        <Route path='/projects/mutt-board-launcher' element={<MUTTBoardLauncher/>}/>
                        <Route path='/projects/tlz-website' element={<TLZWebsite/>}/>
                        <Route path='/projects/wiki-women' element={<WikiWomenPage/>}/>
                    </Routes>
                {/*<Footer/>*/}
            </Router>
        </div>
    );
}

export default App;
