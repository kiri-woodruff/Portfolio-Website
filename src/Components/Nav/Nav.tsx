import './Nav.scss'
import Hamburger from "../Hamburger/Hamburger";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='menu-nav'>
            <div className='navigation'>
                <ul className={open ? 'open' : 'closed'}>
                    <li><Link to={'/about'} onClick={event => setOpen(false)}>About</Link></li>
                    <li><Link to={'/'} onClick={event => setOpen(false)}>Projects</Link></li>
                    <li> <Link to={'/resume'} onClick={event => setOpen(false)}>Resumé</Link></li>
                    <li> <Link to={'/contact-me'} onClick={event => setOpen(false)}>Contact</Link></li>
                </ul>
                <div className='hamburger' onClick={toggleMenu}>
                    <Hamburger isOpen={open}/>
                </div>
            </div>
        </div>
    )
}