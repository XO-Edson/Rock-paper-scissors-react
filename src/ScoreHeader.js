import React, { useContext } from "react";
import GameData from "./Context/DataContext";
import Logo from "./images/logo.svg";

export const ScoreHeader = () => {
  const { scoreCount } = useContext(GameData);

  return (
    <header>
      <div className="scoreCounter">
        <div>
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
