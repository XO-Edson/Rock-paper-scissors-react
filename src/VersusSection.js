import React from "react";

export const VersusSection = ({ selectedMove }) => {
  return (
    <>
      <div className="playerContainer">
        <p>YOU PICKED</p>
        <div className={selectedMove}>{selectedMove}</div>
      </div>
      <p>YOU WIN</p>
      <div className="houseContainer">
        <p>THE HOUSE PICKED</p>
        <div className="housePick">random</div>
      </div>
    </>
  );
};
