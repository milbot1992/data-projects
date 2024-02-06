import '../../../Styling/ProjectList.css'
import { Link } from "react-router-dom";
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";
import GovtSpendCard from "../Projects/GovtSpendCard";
import StoreDashboardCard from "../Projects/StoreDashboardCard";
import FreeStrokeCard from "../Projects/FreeStrokeCard";
import CarbonEmissionsCard from "../Projects/CarbonEmissionsCard";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'

export default function ProjectList() {

    return (
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
    )
}