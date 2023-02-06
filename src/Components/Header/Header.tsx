import {Link} from "react-router-dom";
import './HeaderStyling.scss';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className="header">
            <nav className='header-links'>
                <Link to={'/'}>Projects</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/resume'}>Resume</Link>
                <Link to={'/contact-me'}>Contact</Link>
            </nav>
            <div className='hamburger-menu'>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;