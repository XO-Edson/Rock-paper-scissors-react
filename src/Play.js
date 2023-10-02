import React from "react";

export const Play = ({ selectedMove }) => {
  return (
    <main>
      {selectedMove === "rock" ? (
        <div className="rock">{selectedMove}</div>
      ) : selectedMove === "paper" ? (
        <div className="paper">{selectedMove}</div>
      ) : selectedMove === "scissors" ? (
        <div className="scissors">{selectedMove}</div>
      ) : (
        console.log("error")
      )}
    </main>
  );
};
