import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trivia from "./Pages/Trivia";
import LandingPage from "./Pages/LandingPage";
import { PlayerStatsProvider } from "./Context/PlayerStatsContext";
import FinalScorePage from "./Pages/FinalScorePage";

function App() {
  return (
    <div className="app">
      <PlayerStatsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<Trivia />} />
            <Route path="/score" element={<FinalScorePage />} />
          </Routes>
        </BrowserRouter>
      </PlayerStatsProvider>
    </div>
  );
}

export default App;
