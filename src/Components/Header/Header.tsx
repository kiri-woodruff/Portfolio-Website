import {Link} from "react-router-dom";
import './HeaderStyling.scss';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className="header">
            <div className='header-name'>
               <strong>
                   <Link to={'/'}>Kiri Woodruff</Link>
               </strong>
            </div>
            <nav className='header-links'>
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/resume'}>Resumé</Link>
                <Link to={'/contact-me'}>Contact</Link>
            </nav>
            <div className='hamburger-menu'>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;