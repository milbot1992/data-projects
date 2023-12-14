import { Link } from "react-router-dom";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'
import HospBedsCard from "../Projects/HospBedsCard";
import '../../../Styling/ProjectList.css'
import Header from '../Header/Header'
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";
import GovtSpendCard from "../Projects/GovtSpendCard";
import StoreDashboardCard from "../Projects/StoreDashboardCard";
import Skills from "../Header/Skills";
import AboutMe from "../Header/AboutMe";

export default function ProjectList() {
    
    return (
        <>
            <Header />
            <Skills/>
            <AboutMe/>
            <div className="project-list-container">
            <h4>PORTFOLIO</h4>
                    <ul className="project-list">
                        <Link to={`/supermarketmetrics`}>
                            <StoreDashboardCard />
                        </Link>
                        <Link to={`/governmentspend`}>
                            <GovtSpendCard />
                        </Link>
                        <Link to={`/clusteranalysis`}>
                            <ClusterAnalysisCard />
                        </Link>
                        <Link to={`/meteormap`}>
                            <MeteorMapCard />
                        </Link>
                        <Link to={`/lifeexpectancy`}>
                            <LifeExpectancyCard />
                        </Link>
                        <Link to={`/hospitalbeds`}>
                            <HospBedsCard />
                        </Link>
                    </ul>
            </div>
        </>
    );
}
