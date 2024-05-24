import React from "react";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__box">
        <p className="landing__msg">Please enter you name</p>
        <div className="landing__input-container">
          <input type="text" className="landing__input" />
          <button type="submit" className="landing__submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
