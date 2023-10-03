import React from "react";
import { Link } from "react-router-dom";

export const VersusSection = ({ selectedMove, clearSelectedMove }) => {
  return (
    <>
      {selectedMove ? (
        <>
          <div className="playerContainer">
            <p>YOU PICKED</p>
            <div className={selectedMove}>{selectedMove}</div>
          </div>
          <div className="gameStatus">
            <p>YOU WIN</p>
            <Link to={"/"}>
              <button onClick={clearSelectedMove}>PLAY AGAIN</button>
            </Link>
          </div>
          <div className="houseContainer">
            <p>THE HOUSE PICKED</p>
            <div className="housePick">random</div>
          </div>
        </>
      ) : (
        console.log("Debugging")
      )}
    </>
  );
};
