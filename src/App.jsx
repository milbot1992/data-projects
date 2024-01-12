import "../Styling/App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./Components/PortfolioSummary/PortfolioPage";
import MainPage from "./Components/MainPage/MainPage.jsx";
import LifeExpectancyPage from './Components/Projects/LifeExpectancyPage.jsx'
import ClusterAnalysisPage from "./Components/Projects/ClusterAnalysisPage.jsx";
import MeteorMapPage from "./Components/Projects/MeteorMapPage.jsx";
import GovtSpendPage from "./Components/Projects/GovtSpentPage.jsx";
import StoreDashboardPage from "./Components/Projects/StoreDashboardPage.jsx";
import FreeStrokePage from "./Components/Projects/FreeStrokePage.jsx";
import CarbonEmissionsPage from "./Components/Projects/CarbonEmissionsPage.jsx";

function App() {

  return (
    <>
      <div className = 'content-container'>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/governmentspend" element={<GovtSpendPage/>} />
          <Route path="/supermarketmetrics" element={<StoreDashboardPage/>} />
          <Route path="/clusteranalysis" element={<ClusterAnalysisPage/>} />
          <Route path="/lifeexpectancy" element={<LifeExpectancyPage/>} />
          <Route path="/freestroke" element={<FreeStrokePage/>} />
          <Route path="/carbonemissions" element={<CarbonEmissionsPage/>} />
          <Route path="/meteormap" element={<MeteorMapPage/>} />
        </Routes>
      </div>
    </>
  );
}


export default App;

