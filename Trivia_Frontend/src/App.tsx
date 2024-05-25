import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trivia from "./Pages/Trivia";
import LandingPage from "./Pages/LandingPage";
import { PlayerStatsProvider } from "./Context/PlayerStatsContext";

function App() {
  return (
    <div className="app">
      <PlayerStatsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<Trivia />} />
          </Routes>
        </BrowserRouter>
      </PlayerStatsProvider>
    </div>
  );
}

export default App;
