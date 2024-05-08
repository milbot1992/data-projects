import "../Styling/App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./Components/PortfolioSummary/PortfolioPage";
import MainPage from "./Components/MainPage/MainPage.jsx";
import LifeExpectancyPage from './Components/Projects/LifeExpectancyPage.jsx'
import ClusterAnalysisPage from "./Components/Projects/ClusterAnalysisPage.jsx";
import MeteorMapPage from "./Components/Projects/MeteorMapPage.jsx";
import GovtSpendPage from "./Components/Projects/GovtSpentPage.jsx";
import FreeStrokePage from "./Components/Projects/FreeStrokePage.jsx";
import CarbonEmissionsPage from "./Components/Projects/CarbonEmissionsPage.jsx";
import FilmRecoSysApp from "./Components/FilmApp/FilmRecoSysApp.jsx";
import FilmRecoSysPage from "./Components/Projects/FilmRecoSysPage.jsx";
import ImageEditorPage from "./Components/Projects/ImageEditorPage.jsx";
import ChatBotPage from "./Components/Projects/ChatBotPage.jsx";

function App() {

  return (
    <>
      <div className = 'content-container'>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/governmentspend" element={<GovtSpendPage/>} />
          <Route path="/clusteranalysis" element={<ClusterAnalysisPage/>} />
          <Route path="/lifeexpectancy" element={<LifeExpectancyPage/>} />
          <Route path="/freestroke" element={<FreeStrokePage/>} />
          <Route path="/carbonemissions" element={<CarbonEmissionsPage/>} />
          <Route path="/meteormap" element={<MeteorMapPage/>} />
          <Route path="/filmapp" element={<FilmRecoSysApp/>} />
          <Route path="/recosys" element={<FilmRecoSysPage/>} />
          <Route path="/image-editor" element={<ImageEditorPage/>} />
          <Route path="/chatbot" element={<ChatBotPage/>} />
        </Routes>
      </div>
    </>
  );
}


export default App;

