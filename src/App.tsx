import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProjectsPage from './Projects-Page/ProjectsPage';
import AboutPage from './About/AboutPage';
import Header from './Header/Header';
import WikiWomenPage from './Wiki-Women/WikiWomenPage';
import AudioStoriesPage from './Audio-Stories/AudioStoriesPage';
import ResumePage from "./Resume/ResumePage";
import Footer from "./Footer/Footer";
import CorpsRecruitment from './Corps-Application/CorpsRecruitmentPage';
import AudioStoriesAdminPage from "./AudioStoriesAdmin/AudioStoriesAdminPage";

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
                        <Route path='audio-stories-admin-panel' element={<AudioStoriesAdminPage/>}/>
                        <Route path='/projects/corps-recruitment' element={<CorpsRecruitment/>}/>
                        <Route path='/projects/wiki-women' element={<WikiWomenPage/>}/>
                    </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
