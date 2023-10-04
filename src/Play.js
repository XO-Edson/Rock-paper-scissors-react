import React from "react";
import { VersusSection } from "./VersusSection";

export const Play = ({
  selectedMove,
  clearSelectedMove,
  house,
  gameStatus,
}) => {
  return (
    <main>
      {selectedMove ? (
        <section className="versus">
          <VersusSection
            selectedMove={selectedMove}
            clearSelectedMove={clearSelectedMove}
            house={house}
            gameStatus={gameStatus}
          />
        </section>
      ) : (
        console.log("error")
      )}
    </main>
  );
};
