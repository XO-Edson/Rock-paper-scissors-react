import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GameData from "./Context/DataContext";

export const VersusSection = () => {
  const { selectedMove, clearSelectedMove, house, gameStatus } =
    useContext(GameData);

  return (
    <>
      {selectedMove && (
        <>
          <div className="playerContainer">
            <p>YOU PICKED</p>
            <div className={selectedMove.name}>
              <img src={selectedMove.icon} alt="icon" />
            </div>
          </div>
          <div className="gameStatus">
            {house.name && (
              <>
                <p>
                  {selectedMove.name === house.name
                    ? "TIE"
                    : gameStatus
                    ? "YOU WIN"
                    : "YOU LOSE"}
                </p>
                <Link to={"/"}>
                  <button onClick={clearSelectedMove}>PLAY AGAIN</button>
                </Link>
              </>
            )}
          </div>
          <div className="houseContainer">
            <p>THE HOUSE PICKED</p>
            {house.icon && (
              <div className={house.name}>
                <img src={house.icon} alt="icon" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
