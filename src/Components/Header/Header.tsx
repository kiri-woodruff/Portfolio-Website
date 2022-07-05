import {Link} from "react-router-dom";
import './HeaderStyling.scss';

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
            </nav>
        </div>
    )
}

export default Header;