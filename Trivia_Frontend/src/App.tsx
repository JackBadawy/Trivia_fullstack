import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trivia from "./Pages/Trivia";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trivia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
