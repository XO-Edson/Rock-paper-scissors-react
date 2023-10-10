import React, { useContext } from "react";
import { VersusSection } from "./VersusSection";
import GameData from "./Context/DataContext";

export const Play = () => {
  const { selectedMove } = useContext(GameData);

  return (
    <main>
      {selectedMove.name && (
        <section className="versus">
          <VersusSection />
        </section>
      )}
    </main>
  );
};
