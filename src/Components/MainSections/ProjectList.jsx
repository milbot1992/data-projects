import '../../../Styling/ProjectList.css'
import { Link } from "react-router-dom";
import ClusterAnalysisCard from "../Projects/ClusterAnalysisCard";
import MeteorMapCard from "../Projects/MeteorMapCard";
import GovtSpendCard from "../Projects/GovtSpendCard";
import StoreDashboardCard from "../Projects/StoreDashboardCard";
import FreeStrokeCard from "../Projects/FreeStrokeCard";
import CarbonEmissionsCard from "../Projects/CarbonEmissionsCard";
import LifeExpectancyCard from '../Projects/LifeExpectancyCard'
import GraceYogaCard from '../Projects/GraceYogaCard';
import NewsSiteCard from '../Projects/NewsSiteCard';
import FilmRecoSysCard from '../Projects/FilmRecoSysCard';

export default function ProjectList() {

    return (
        <ul className="project-list">
                            <Link to={`/recosys`}>
                                <FilmRecoSysCard />
                            </Link>
                            <Link to={`https://graceyogamcr.com/`} target={0 === 0 ? "_blank" : ""}>
                                <GraceYogaCard />
                            </Link>
                            <Link to={`/carbonemissions`}>
                                <CarbonEmissionsCard />
                            </Link>
                            <Link to={`/clusteranalysis`}>
                                <ClusterAnalysisCard />
                            </Link>
                            <Link to={`/freestroke`}>
                                <FreeStrokeCard />
                            </Link>
                            <Link to={`/governmentspend`}>
                                <GovtSpendCard />
                            </Link>
                            <Link to={`https://me-news.netlify.app/news`} target={8 === 8 ? "_blank" : ""}>
                                <NewsSiteCard />
                            </Link>
                            <Link to={`/meteormap`}>
                                <MeteorMapCard />
                            </Link>
                            <Link to={`/lifeexpectancy`}>
                                <LifeExpectancyCard />
                            </Link>
                            <Link to={`/supermarketmetrics`}>
                                <StoreDashboardCard />
                            </Link>
                        </ul>
    )
}