import React from "react";

export const ScoreHeader = () => {
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
          <p>12</p>
        </div>
      </div>
    </header>
  );
};
