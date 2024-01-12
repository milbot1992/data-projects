import { Link } from "react-router-dom";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'
import '../../../Styling/ProjectList.css'
import Header from '../MainSections/Header'
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";
import GovtSpendCard from "../Projects/GovtSpendCard";
import StoreDashboardCard from "../Projects/StoreDashboardCard";
import Skills from "../MainSections/SkillsGrid";
import AboutMe from "../MainSections/AboutMe";
import FreeStrokeCard from "../Projects/FreeStrokeCard";
import CarbonEmissionsCard from "../Projects/CarbonEmissionsCard";
import Nav from "../MainSections/Nav";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Nav2 from "../MainSections/Nav2";
import Contact from "../MainSections/Contact";

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
                        <ul className="project-list">
                            <Link to={`/carbonemissions`}>
                                <CarbonEmissionsCard />
                            </Link>
                            <Link to={`/clusteranalysis`}>
                                <ClusterAnalysisCard />
                            </Link>
                            <Link to={`/supermarketmetrics`}>
                                <StoreDashboardCard />
                            </Link>
                            <Link to={`/governmentspend`}>
                                <GovtSpendCard />
                            </Link>
                            <Link to={`/meteormap`}>
                                <MeteorMapCard />
                            </Link>
                            <Link to={`/freestroke`}>
                                <FreeStrokeCard />
                            </Link>
                            <Link to={`/lifeexpectancy`}>
                                <LifeExpectancyCard />
                            </Link>
                        </ul>
                </div>
            </motion.div>
            <div id='contact'>
            <Contact/>
            </div>
        </>
    );
}
