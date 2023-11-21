import { Link } from "react-router-dom";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'
import HospBedsCard from "../Projects/HospBedsCard";
import '../../../Styling/ProjectList.css'
import Header from '../Header/Header'
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";

export default function ProjectList() {
    
    return (
        <>
            <Header />
            <div className="project-list-container">
                    <ul className="project-list">
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
