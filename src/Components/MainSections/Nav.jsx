import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import dataImage from '../../assets/data-storage.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../../Styling/Nav.css'
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useState } from 'react';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [650, 950], [0, 1]);

    const handleLinkClick = (id) => {
        toggleMenu();
        const element = document.getElementById(id);

        if (element) {
            const offset = 150; 
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });

            closeMenu();
        }
    };

    return (
        <motion.div style={{ opacity }}>
            {menuOpen ? (
                    <CloseIcon className='menu-icon1' fontSize='medium' onClick={toggleMenu} />
                    ) : (
                    <MenuIcon className='menu-icon1' fontSize='medium' onClick={toggleMenu} />
                    )}
                <nav>
                    {menuOpen && (
                    <div className='popup-menu'>
                        <a href="#skills" className='menu-item' onClick={toggleMenu}>
                        SKILLSET
                        </a>
                        <a href="#about" className='menu-item' onClick={toggleMenu}>
                        ABOUT ME
                        </a>
                        <a href="#portfolio" className='menu-item' onClick={toggleMenu}>
                        PORTFOLIO
                        </a>
                        <a href="#contact" className='menu-item' onClick={toggleMenu}>
                        CONTACT
                        </a>
                    </div>
                    )}
                <li>
                    <img src={dataImage} className='nav-logo' onClick={() => handleLinkClick('header')}></img>
                </li>
                    <li className='nav-title' onClick={() => handleLinkClick('skills')}>
                        Skillset
                    </li>
                    <li className='nav-title' onClick={() => handleLinkClick('about')}>
                        About Me
                    </li>
                    <li className='nav-title' onClick={() => handleLinkClick('portfolio')}>
                        Portfolio
                    </li>
                    <li className='nav-title' onClick={() => handleLinkClick('contact')}>
                        Contact
                    </li>
                <li>
                    <a className='linked-icon' href="https://www.linkedin.com/in/millie-ellis-396220bb/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a className='git-icon' href="https://github.com/milbot1992" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                </li>
            </nav>
        </motion.div>
    );
}