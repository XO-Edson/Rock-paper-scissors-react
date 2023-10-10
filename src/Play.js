import React, { useContext } from "react";
import { VersusSection } from "./VersusSection";
import GameData from "./Context/DataContext";

export const Play = () => {
  const { selectedMove, clearSelectedMove, house, gameStatus } =
    useContext(GameData);

  return (
    <main>
      {selectedMove.name && (
        <section className="versus">
          <VersusSection
            selectedMove={selectedMove}
            clearSelectedMove={clearSelectedMove}
            house={house}
            gameStatus={gameStatus}
          />
        </section>
      )}
    </main>
  );
};
