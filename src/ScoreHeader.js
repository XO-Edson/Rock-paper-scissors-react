import React from "react";

export const ScoreHeader = ({ scoreCount }) => {
  return (
    <header>
      <div className="scoreCounter">
        <div className="moves">
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="scoreCount">
          <p>SCORE</p>
          <p>{scoreCount}</p>
        </div>
      </div>
    </header>
  );
};
