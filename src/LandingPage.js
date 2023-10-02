import React from "react";
import { Link, useParams } from "react-router-dom";

export const LandingPage = ({ move, startGame, selectedMove }) => {
  return (
    <>
      <main>
        <article>
          <Link to={`/${selectedMove}`}>
            <div className="rock" onClick={startGame}>
              {move[0]}
            </div>
          </Link>
          <Link to={`/${selectedMove}`}>
            <div className="paper" onClick={startGame}>
              {move[1]}
            </div>
          </Link>
        </article>
        <Link to={`/${selectedMove}`}>
          <div className="scissors" onClick={startGame}>
            {move[2]}
          </div>
        </Link>
      </main>
    </>
  );
};
