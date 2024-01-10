import { Link } from "react-router-dom";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'
import '../../../Styling/ProjectList.css'
import Header from '../Header/Header'
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";
import GovtSpendCard from "../Projects/GovtSpendCard";
import StoreDashboardCard from "../Projects/StoreDashboardCard";
import Skills from "../Header/SkillsGrid";
import AboutMe from "../Header/AboutMe";
import FreeStrokeCard from "../Projects/FreeStrokeCard";
import CarbonEmissionsCard from "../Projects/CarbonEmissionsCard";
import Nav from "../Header/Nav";

export default function ProjectList() {
    
    return (
        <>
            <Nav/>
            <Header />
            <Skills id='skills'/>
            <AboutMe id='about'/>
            <div className="project-list-container">
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
        </>
    );
}
