import React from "react";
import Logo from "./images/logo.svg";

export const ScoreHeader = ({ scoreCount }) => {
  return (
    <header>
      <div className="scoreCounter">
        <div className="moves">
          <img src={Logo} alt="logo" />
        </div>
        <div className="scoreCount">
          <p>SCORE</p>
          <p className="score">{scoreCount}</p>
        </div>
      </div>
    </header>
  );
};
