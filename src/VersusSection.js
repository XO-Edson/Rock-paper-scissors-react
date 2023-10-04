import React from "react";
import { Link } from "react-router-dom";

export const VersusSection = ({
  selectedMove,
  clearSelectedMove,
  house,
  gameStatus,
  move,
}) => {
  return (
    <>
      {selectedMove ? (
        <>
          <div className="playerContainer">
            <p>YOU PICKED</p>
            <div className={selectedMove}>{selectedMove}</div>
          </div>
          <div className="gameStatus">
            <p>
              {selectedMove === house.name
                ? "TIE"
                : gameStatus
                ? "YOU WIN"
                : "YOU LOSE"}
            </p>
            <Link to={"/"}>
              <button onClick={clearSelectedMove}>PLAY AGAIN</button>
            </Link>
          </div>
          <div className="houseContainer">
            <p>THE HOUSE PICKED</p>
            <div className={house.name}>
              <img src={house.icon} alt="icon" />
            </div>
          </div>
        </>
      ) : (
        console.log("Debugging")
      )}
    </>
  );
};
