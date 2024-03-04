import './navbar.css';
// import { PiChatTeardropTextLight } from "react-icons/pi";
import { Link } from "react-scroll";
import { CgMenu } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src="/logo.png" alt="logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Menu</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>
            {/* <button className="desktopMenuBtn" onClick={() => {
                const contactPage = document.getElementById('contactPage');
                if (contactPage) {
                    const yOffset = -70; // Adjust the offset as needed
                    const y = contactPage.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }}>
                {/* <PiChatTeardropTextLight size={20} /> */}
                {/* Contact Me */}
            {/* </button> */} 

            <CgMenu className='mobMenu' size={70} onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-85} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Menu</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-70} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-70} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-130} duration={500} className="mobMenuListItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
