import './ProjectsPageStyling.css';
import {Link} from "react-router-dom";

const ProjectsPage = () => {
    return (
        <>
            <div className="home-page">
                <Link to={'/projects/audio-stories'}>Audio Stories</Link>
                <Link to={'/projects/wiki-women'}>Wiki Women</Link>
            </div>
        </>
    )
}

export default ProjectsPage;