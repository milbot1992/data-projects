import "../Styling/App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./Components/PortfolioSummary/PortfolioPage";
import ProjectList from "./Components/ProjectList/ProjectList.jsx";
import LifeExpectancyPage from './Components/Projects/LifeExpectancyPage.jsx'
import HospBedsPage from './Components/Projects/HospBedsPage.jsx'
import ClusterAnalysisPage from "./Components/Projects/ClusterAnalysisPage.jsx";
import MeteorMapPage from "./Components/Projects/MeteorMapPage.jsx";
import GovtSpendPage from "./Components/Projects/GovtSpentPage.jsx";
import StoreDashboardPage from "./Components/Projects/StoreDashboardPage.jsx";

function App() {

  return (
    <>
      <div className = 'content-container'>
        <Routes>
          <Route path="/" element={<ProjectList/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/governmentspend" element={<GovtSpendPage/>} />
          <Route path="/supermarketmetrics" element={<StoreDashboardPage/>} />
          <Route path="/clusteranalysis" element={<ClusterAnalysisPage/>} />
          <Route path="/lifeexpectancy" element={<LifeExpectancyPage/>} />
          <Route path="/hospitalbeds" element={<HospBedsPage/>} />
          <Route path="/meteormap" element={<MeteorMapPage/>} />
        </Routes>
      </div>
    </>
  );
}


export default App;

