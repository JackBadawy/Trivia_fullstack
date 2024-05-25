import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerStats } from "../Context/usePlayerStats";

const LandingPage: React.FC = () => {
  const [name, setName] = useState("");
  const { setPlayerStats } = usePlayerStats();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Name cannot be empty!");
      return;
    }

    setPlayerStats((prevStats) => ({
      ...prevStats,
      playerName: name,
    }));
    navigate("/quiz");
  };

  return (
    <div className="landing">
      <div className="landing__box">
        <p className="landing__msg">Please enter your name</p>
        <div className="landing__input-container">
          <input
            type="text"
            className="landing__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="landing__submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
