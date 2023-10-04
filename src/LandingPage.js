import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = ({ move, startGame, selectedMove }) => {
  return (
    <>
      <main>
        <article>
          <Link to={`/${selectedMove}`}>
            <div className="rock" onClick={startGame}>
              <img src={move[0].icon} alt="rock-icon" />
            </div>
          </Link>

          <Link to={`/${selectedMove}`}>
            <div className="paper" onClick={startGame}>
              <img src={move[1].icon} alt="paper-icon" />
            </div>
          </Link>
        </article>

        <Link to={`/${selectedMove}`}>
          <div className="scissors" onClick={startGame}>
            <img src={move[2].icon} alt="scissors-icon" />
          </div>
        </Link>
      </main>
    </>
  );
};
