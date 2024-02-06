import '../../../Styling/ProjectList.css'
import Header from '../MainSections/Header'
import Skills from "../MainSections/SkillsGrid";
import AboutMe from "../MainSections/AboutMe";
import Nav from "../MainSections/Nav";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Nav2 from "../MainSections/Nav2";
import Contact from "../MainSections/Contact";
import ProjectGrid from "../MainSections/ProjectGrid";
import ProjectList from "../MainSections/ProjectList";

export default function MainPage() {

    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, [1400, 1800], [0, 1]);
    
    return (
        <>
            <Nav2/>
            <Nav/>
            <div id="header">
            <Header />
            </div>
            <div id="skills">
            <Skills />
            </div>
            <div id='about'>
            <AboutMe/>
            </div>
            <motion.div style={{ opacity }}>
                <div id='portfolio' className="project-list-container">
                <h4 className='portfolio-header'>PORTFOLIO</h4>
                <ProjectList/>
                </div>
            <ProjectGrid/>
            </motion.div>
            <div id='contact'>
            <Contact/>
            </div>
        </>
    );
}
