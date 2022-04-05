import {Link} from "react-router-dom";
import './HeaderStyling.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/resume'}>Résumé</Link>
            </div>
        </>
    )
}

export default Header;