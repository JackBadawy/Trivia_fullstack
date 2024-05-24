import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trivia from "./Pages/Trivia";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<Trivia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
